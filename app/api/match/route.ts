import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";

export const runtime = "edge";

const endpoint = new URL("https://api.henrikdev.xyz");
const matchUrl = new URL("valorant/v2/match/", endpoint);

export async function GET(request: NextRequest): Promise<NextResponse<Match | ErrorResponseBody>> {
  const matchId = request.nextUrl.searchParams.get("matchId");
  if (!matchId) {
    return NextResponse.json({
      error: "Missing matchId query parameter"
    }, {
      status: 400,
    });
  }

  const response = await fetch(new URL(matchId, matchUrl));
  const data = await response.json();
  const match: Match = {
    map: data.data.metadata.map
  };

  return NextResponse.json(match, {
    status: response.status,
  });
}
