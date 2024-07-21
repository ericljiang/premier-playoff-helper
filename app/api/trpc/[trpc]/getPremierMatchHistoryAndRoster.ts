import { z } from "zod";
import { henrikBetaClient } from "./henrik";
import { isDefined } from "@/util";
import { publicProcedure } from "./trpc";

export const getPremierMatchHistoryAndRoster = publicProcedure
  .input(z.object({ teamId: z.string() }))
  .query(async ({ input }) => {
    return {
      matches: await getHistory(input.teamId),
      roster: await getRoster(input.teamId),
    };
  });

async function getHistory(teamId: string) {
  const { data, error } = await henrikBetaClient.GET(
    "/valorant/v1/premier/{team_id}/history",
    {
      params: {
        path: {
          team_id: teamId,
        },
      },
    }
  );
  if (error) {
    throw Error(JSON.stringify(error));
  }
  if (!data.data?.league_matches) {
    throw Error("No data");
  }
  return (
    data.data.league_matches
      // matches before Premier's Launch stage 404 in both Riot and Henrik APIs
      .filter(
        (match) =>
          match.started_at &&
          match.started_at > new Date(2023, 8, 29).toISOString()
      )
      .map((match) => match.id)
      .filter(isDefined)
  );
}

async function getRoster(teamId: string) {
  const { data, error } = await henrikBetaClient.GET(
    "/valorant/v1/premier/{team_id}",
    {
      params: {
        path: {
          team_id: teamId,
        },
      },
    }
  );
  if (error) {
    throw Error(JSON.stringify(error));
  }
  if (!data.data?.member) {
    throw Error("No data");
  }
  return data.data.member.filter(
    (x): x is { puuid?: string; name: string; tag: string } => {
      return x.name !== undefined && x.tag !== undefined;
    }
  );
}
