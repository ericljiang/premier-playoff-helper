import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";
import { retrieveMatchFromHenrik } from "./henrik";
import { retrieveMatchFromRiot } from "./riot";

export const runtime = "edge";

const HENRIK_API_KEY = process.env.HENRIK_API_KEY;
const RIOT_API_KEY = process.env.RIOT_API_KEY;
console.log(HENRIK_API_KEY ? "HENRIK_API_KEY found" : "HENRIK_API_KEY not found");
console.log(RIOT_API_KEY ? "RIOT_API_KEY found" : "RIOT_API_KEY not found");

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
    if (RIOT_API_KEY) {
      const match = await retrieveMatchFromRiot(matchId, RIOT_API_KEY);
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
      const match = await retrieveMatchFromHenrik(matchId, HENRIK_API_KEY);
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
