import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";
import { retrieveMatchFromHenrik } from "./henrik";
import { retrieveMatchFromRiot } from "./riot";
import { riotApiKey, henrikApiKey } from "../environment";

export const runtime = "edge";

export async function GET(request: NextRequest): Promise<NextResponse<Match | ErrorResponseBody>> {
  const matchId = request.nextUrl.searchParams.get("matchId");
  if (!matchId) {
    return NextResponse.json({
      error: "Missing matchId query parameter"
    }, {
      status: 400,
    });
  }

  try {
    if (riotApiKey) {
      const match = await retrieveMatchFromRiot(matchId, riotApiKey);
      return NextResponse.json(match, {
        status: 200,
      });
    } else {
      throw Error("Environment variable RIOT_API_KEY not defined");
    }
  } catch (e1) {
    console.error("Failed to call Riot API for match, falling back to Henrik API.");
    console.error(e1);
    try {
      const match = await retrieveMatchFromHenrik(matchId, henrikApiKey);
      return NextResponse.json(match, {
        status: 200,
      });
    } catch (e2) {
      console.error(e2);
      return NextResponse.json({
        error: (e2 instanceof Error) ? e2.message : "Unknown"
      }, {
        status: 500,
      });
    }
  }
}
