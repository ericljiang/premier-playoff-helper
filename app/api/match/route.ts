import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";
import { z } from "zod";

export const runtime = "edge";

const HENRIK_API_KEY = process.env.HENRIK_API_KEY;
console.log(HENRIK_API_KEY ? "HENRIK_API_KEY found" : "HENRIK_API_KEY not found");

const endpoint = new URL("https://api.henrikdev.xyz");
const matchUrl = new URL("valorant/v2/match/", endpoint);

const henrikTeamSchema = z.object({
  has_won: z.boolean(),
  rounds_won: z.number(),
  rounds_lost: z.number(),
  roster: z.object({
    id: z.string()
  })
});

const henrikPlayerSchema = z.object({
  character: z.string()
});

const locationSchema = z.object({
  x: z.number(),
  y: z.number()
})

/**
 * https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
 */
const henrikMatchResponseSchema = z.object({
  data: z.object({
    metadata: z.object({
      map: z.string()
    }),
    teams: z.object({
      red: henrikTeamSchema,
      blue: henrikTeamSchema
    }),
    rounds: z.array(z.object({
      winning_team: z.literal("Red").or(z.literal("Blue")),
      player_stats: z.array(z.object({
        player_puuid: z.string(),
        kill_events: z.array(z.object({
          kill_time_in_round: z.number(),
          killer_puuid: z.string(),
          victim_puuid: z.string(),
          victim_display_name: z.string(),
          victim_team: z.literal("Red").or(z.literal("Blue")),
          victim_death_location: locationSchema,
          player_locations_on_kill: z.array(z.object({
            player_puuid: z.string(),
            player_display_name: z.string(),
            player_team: z.literal("Red").or(z.literal("Blue")),
            location: locationSchema
          }))
        }))
      }))
    })),
    players: z.object({
      red: z.array(henrikPlayerSchema),
      blue: z.array(henrikPlayerSchema)
    })
  })
})

export async function GET(request: NextRequest): Promise<NextResponse<Match | ErrorResponseBody>> {
  const matchId = request.nextUrl.searchParams.get("matchId");
  if (!matchId) {
    return NextResponse.json({
      error: "Missing matchId query parameter"
    }, {
      status: 400,
    });
  }

  const response = await fetch(new URL(matchId, matchUrl), {
    headers: HENRIK_API_KEY ? {
      Authorization: HENRIK_API_KEY
    } : undefined
  });

  if (response.status !== 200) {
    console.error(response.status);
    console.error(await response.text());
    return NextResponse.json({
      error: `Unexpected response status ${response.status}`
    }, {
      status: response.status,
    });
  }

  const safeParseResult = henrikMatchResponseSchema.safeParse(await response.json());
  if (!safeParseResult.success) {
    console.error(safeParseResult.error);
    return NextResponse.json({
      error: safeParseResult.error.message
    }, {
      status: 500,
    });
  }

  const match = convertMatch(safeParseResult.data)

  return NextResponse.json(match, {
    status: response.status,
  });
}

function convertMatch(henrikMatch: z.infer<typeof henrikMatchResponseSchema>): Match {
  return {
    map: henrikMatch.data.metadata.map,
    teams: {
      red: {
        won: henrikMatch.data.teams.red.has_won,
        roundsWon: henrikMatch.data.teams.red.rounds_won,
        roundsLost: henrikMatch.data.teams.red.rounds_lost,
        premierTeamId: henrikMatch.data.teams.red.roster.id
      },
      blue: {
        won: henrikMatch.data.teams.blue.has_won,
        roundsWon: henrikMatch.data.teams.blue.rounds_won,
        roundsLost: henrikMatch.data.teams.blue.rounds_lost,
        premierTeamId: henrikMatch.data.teams.blue.roster.id
      }
    },
    rounds: henrikMatch.data.rounds.map(round => ({
      winningTeam: round.winning_team === "Red" ? "red" : "blue",
      playerStats: round.player_stats.map(playerStatsItem => ({
        puuid: playerStatsItem.player_puuid,
        kills: playerStatsItem.kill_events.map(killEvent => ({
          timeSinceRoundStartMillis: killEvent.kill_time_in_round,
          victimPuuid: killEvent.victim_puuid,
          victimTeam: killEvent.victim_team === "Red" ? "red" : "blue",
          victimLocation: {
            x: killEvent.victim_death_location.x,
            y: killEvent.victim_death_location.y,
          },
          playerLocations: killEvent.player_locations_on_kill.map(location => ({
            puuid: location.player_puuid,
            team: location.player_team === "Red" ? "red" : "blue",
            location: location.location
          }))
        }))
      }))
    })),
    players: {
      red: henrikMatch.data.players.red.map(player => ({
        character: player.character
      })),
      blue: henrikMatch.data.players.blue.map(player => ({
        character: player.character
      }))
    }
  };
}
