import { auth } from "@/auth";
import { initTRPC, TRPCError } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { z } from "zod";

const t = initTRPC.context<typeof createContext>().create();
export const router = t.router;

export const createContext = async (_opts: FetchCreateContextFnOptions) => {
  const session = await auth();
  if (session?.accessToken) {
    const res = await fetch(
      "https://americas.api.riotgames.com/riot/account/v1/accounts/me",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );
    const accountSchema = z.object({
      puuid: z.string().min(1),
      gameName: z.string().min(1),
      tagLine: z.string().min(1),
    });
    if (res.status === 200) {
      const account = accountSchema.safeParse(await res.json());
      if (account.success) {
        return {
          session,
          account: account.data,
        };
      }
    }
  }
  return {
    session,
  };
};

export const publicProcedure = t.procedure;
export const rsoProtectedProcedure = t.procedure.use(async (opts) => {
  if (!opts.ctx.session?.accessToken || !opts.ctx.account) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next();
});
