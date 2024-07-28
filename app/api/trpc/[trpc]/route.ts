import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./trpc";
import { appRouter } from "./router";

export const dynamic = "force-dynamic";

function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
    onError: ({ error, path, input }) => {
      console.error(
        `Error occurred for path ${path} with input ${JSON.stringify(input)}`
      );
      console.error(error);
    },
    allowMethodOverride: true
  });
}

export { handler as GET, handler as POST };
