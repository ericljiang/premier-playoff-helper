import { PremierConferences } from '@/valorant-api';
import { initTRPC } from '@trpc/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  ping: publicProcedure.query(() => "pong"),
  getConference: publicProcedure
    .input(z.object({
      conference: z.nativeEnum(PremierConferences),
      division: z.number()
    }))
    .query(({ input }) => {
      return {
        a: input.conference,
        b: input.division
      };
    })
});

export type AppRouter = typeof appRouter;

function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter
  });
}

export { handler as GET, handler as POST };
