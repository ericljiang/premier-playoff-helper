import { components } from "@/generated/henrik-4.0.0";
import { z } from "zod";
import { henrikClient } from "./henrik";
import { publicProcedure } from "./trpc";
import { ExhaustiveTuple } from "@/util";

const conferenceToAffinity: Record<components["schemas"]["premier_conferences"], components["schemas"]["affinities"]> = {
  EU_CENTRAL_EAST: "eu",
  EU_WEST: "eu",
  EU_MIDDLE_EAST: "eu",
  EU_TURKEY: "eu",
  NA_US_EAST: "na",
  NA_US_WEST: "na",
  LATAM_NORTH: "latam",
  LATAM_SOUTH: "latam",
  BR_BRAZIL: "br",
  KR_KOREA: "kr",
  AP_ASIA: "ap",
  AP_JAPAN: "ap",
  AP_OCEANIA: "ap",
  AP_SOUTH_ASIA: "ap",
};

const _conferences = [
  "EU_CENTRAL_EAST",
  "EU_WEST",
  "EU_MIDDLE_EAST",
  "EU_TURKEY",
  "NA_US_EAST",
  "NA_US_WEST",
  "LATAM_NORTH",
  "LATAM_SOUTH",
  "BR_BRAZIL",
  "KR_KOREA",
  "AP_ASIA",
  "AP_JAPAN",
  "AP_OCEANIA",
  "AP_SOUTH_ASIA",
] as const satisfies readonly components["schemas"]["premier_conferences"][];
const conferences: ExhaustiveTuple<components["schemas"]["premier_conferences"], typeof _conferences> = _conferences;

export const getPremierConference = publicProcedure
  .input(
    z.object({
      conference: z.enum(conferences),
      division: z.number(),
    })
  )
  .query(async ({ input }) => {
    const affinity = conferenceToAffinity[input.conference];
    const { data, error } = await henrikClient.GET(
      "/valorant/v1/premier/leaderboard/{region}/{conference}/{division}",
      {
        params: {
          path: {
            region: affinity,
            conference: input.conference,
            division: input.division,
          },
        },
      }
    );
    if (error) {
      throw Error(JSON.stringify(error));
    }
    if (!data.data) {
      throw Error("No data");
    }
    // if duplicates exist, take most recent record
    return Array.from(
      data.data
        .reduce((map, current) => {
          const existing = map.get(current.id!);
          const shouldUpdate =
            !existing ||
            ("updated_at" in current &&
              typeof current.updated_at === "string" &&
              "updated_at" in existing &&
              typeof existing.updated_at === "string" &&
              current.updated_at > existing.updated_at) ||
            (current.wins && existing.wins && current.wins > existing.wins) ||
            (current.losses &&
              existing.losses &&
              current.losses > existing.losses);
          if (shouldUpdate) {
            map.set(current.id!, current);
          }
          return map;
        }, new Map<string, components["schemas"]["v1_partial_premier_team"]>())
        .values()
    );
  });
