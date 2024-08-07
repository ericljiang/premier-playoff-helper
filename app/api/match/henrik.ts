import { z } from "zod";
import { Match } from "../types";
import { henrikRootUrl } from "../environment";

const matchUrl = new URL("valorant/v2/match/", henrikRootUrl);

const henrikTeamSchema = z.object({
  has_won: z.boolean(),
  rounds_won: z.number(),
  rounds_lost: z.number(),
  roster: z.object({
    id: z.string(),
  }),
});
const henrikPlayerSchema = z.object({
  puuid: z.string(),
  name: z.string(),
  tag: z.string(),
  character: z.string(),
});
const locationSchema = z.object({
  x: z.number(),
  y: z.number(),
});

/**
 * https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
 */
const henrikMatchResponseSchema = z.object({
  data: z.object({
    metadata: z.object({
      map: z.string(),
    }),
    teams: z.object({
      red: henrikTeamSchema,
      blue: henrikTeamSchema,
    }),
    rounds: z.array(
      z.object({
        winning_team: z.literal("Red").or(z.literal("Blue")),
        player_stats: z.array(
          z.object({
            player_puuid: z.string(),
            kill_events: z.array(
              z.object({
                kill_time_in_round: z.number(),
                killer_puuid: z.string(),
                victim_puuid: z.string(),
                victim_display_name: z.string(),
                victim_team: z.literal("Red").or(z.literal("Blue")),
                victim_death_location: locationSchema,
                player_locations_on_kill: z.array(
                  z.object({
                    player_puuid: z.string(),
                    player_display_name: z.string(),
                    player_team: z.literal("Red").or(z.literal("Blue")),
                    location: locationSchema,
                  })
                ),
              })
            ),
          })
        ),
      })
    ),
    players: z.object({
      red: z.array(henrikPlayerSchema),
      blue: z.array(henrikPlayerSchema),
    }),
  }),
});

function convertMatch(
  henrikMatch: z.infer<typeof henrikMatchResponseSchema>
): Match {
  return {
    map: henrikMatch.data.metadata.map,
    teams: {
      red: {
        won: henrikMatch.data.teams.red.has_won,
        roundsWon: henrikMatch.data.teams.red.rounds_won,
        roundsLost: henrikMatch.data.teams.red.rounds_lost,
        premierTeamId: henrikMatch.data.teams.red.roster.id,
      },
      blue: {
        won: henrikMatch.data.teams.blue.has_won,
        roundsWon: henrikMatch.data.teams.blue.rounds_won,
        roundsLost: henrikMatch.data.teams.blue.rounds_lost,
        premierTeamId: henrikMatch.data.teams.blue.roster.id,
      },
    },
    rounds: henrikMatch.data.rounds.map((round) => ({
      winningTeam: round.winning_team === "Red" ? "red" : "blue",
      playerStats: round.player_stats.map((playerStatsItem) => ({
        puuid: playerStatsItem.player_puuid,
        kills: playerStatsItem.kill_events.map((killEvent) => ({
          timeSinceRoundStartMillis: killEvent.kill_time_in_round,
          victimPuuid: killEvent.victim_puuid,
          victimTeam: killEvent.victim_team === "Red" ? "red" : "blue",
          victimLocation: {
            x: killEvent.victim_death_location.x,
            y: killEvent.victim_death_location.y,
          },
          playerLocations: killEvent.player_locations_on_kill.map(
            (location) => ({
              puuid: location.player_puuid,
              team: location.player_team === "Red" ? "red" : "blue",
              location: location.location,
            })
          ),
        })),
      })),
    })),
    players: {
      red: henrikMatch.data.players.red.map((player) => ({
        puuid: player.puuid,
        gameName: player.name,
        tagLine: player.tag,
        character: player.character,
      })),
      blue: henrikMatch.data.players.blue.map((player) => ({
        puuid: player.puuid,
        gameName: player.name,
        tagLine: player.tag,
        character: player.character,
      })),
    },
  };
}

export async function retrieveMatchFromHenrik(
  matchId: string,
  apiKey: string | undefined
): Promise<Match> {
  const requestUrl = new URL(matchId, matchUrl);
  const response = await fetch(requestUrl, {
    headers: apiKey
      ? {
          Authorization: apiKey,
        }
      : undefined,
  });
  if (response.status !== 200) {
    throw Error(`Request to ${requestUrl} failed: ${await response.text()}`);
  }
  const henrikMatch = henrikMatchResponseSchema.parse(await response.json());
  return convertMatch(henrikMatch);
}
