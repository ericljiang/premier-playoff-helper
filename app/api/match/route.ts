import { NextRequest, NextResponse } from "next/server";
import { ErrorResponseBody, Match } from "../types";
import { z } from "zod";

export const runtime = "edge";

const endpoint = new URL("https://api.henrikdev.xyz");
const matchUrl = new URL("valorant/v2/match/", endpoint);

/**
 * https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API
 */
const henrikMatchResponseSchema = z.object({
  data: z.object({
    metadata: z.object({
      map: z.string()
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

  const response = await fetch(new URL(matchId, matchUrl));

  if (response.status !== 200) {
    return NextResponse.json({
      error: "unknown"
    }, {
      status: response.status,
    });
  }

  const safeParseResult = henrikMatchResponseSchema.safeParse(await response.json());
  if (!safeParseResult.success) {
    return NextResponse.json({
      error: "Parsing error"
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
    map: henrikMatch.data.metadata.map
  };
}
