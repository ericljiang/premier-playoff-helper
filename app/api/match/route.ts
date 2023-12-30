import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";
import { retrieveMatchFromHenrik } from "./henrik";

export const runtime = "edge";

const HENRIK_API_KEY = process.env.HENRIK_API_KEY;
console.log(HENRIK_API_KEY ? "HENRIK_API_KEY found" : "HENRIK_API_KEY not found");

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
    const match = await retrieveMatchFromHenrik(matchId, HENRIK_API_KEY);
    return NextResponse.json(match, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({
      error: (e instanceof Error) ? e.message : "Unknown"
    }, {
      status: 500,
    });
  }

}
