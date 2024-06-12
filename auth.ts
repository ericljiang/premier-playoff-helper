import NextAuth, { DefaultSession } from "next-auth";
import { z } from "zod";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    accessToken?: string;
    /**
     * Included for convenience for client-side use cases. Server code must use
     * the access token to retrieve account info.
     */
    account?: z.infer<typeof meSchema>;
  }
}

const meSchema = z.object({
  puuid: z.string().min(1),
  gameName: z.string().min(1),
  tagLine: z.string().min(1)
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    // logo: "https://static.developer.riotgames.com/img/favicon.png",
    colorScheme: "dark"
  },
  providers: [{
    id: "riot-sign-on", // signIn("riot-sign-on") and will be part of the callback URL
    name: "Riot", // optional, used on the default login page as the button text.
    type: "oidc", // or "oauth" for OAuth 2 providers
    issuer: "https://auth.riotgames.com", // to infer the .well-known/openid-configuration URL
    clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
    clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
    style: {
      brandColor: "#FF0000",
      logo: "https://static.developer.riotgames.com/img/favicon.png"
    },
  }],
  callbacks: {
    // Forward the access token and account info to the session callback.
    jwt: async (params) => {
      const { token, account } = params;
      if (account?.provider === "riot-sign-on") {
        const res = await fetch("https://americas.api.riotgames.com/riot/account/v1/accounts/me", {
          headers: {
            "Authorization": `Bearer ${account.access_token}`
          }
        });
        if (res.status === 200) {
          const me = meSchema.safeParse(await res.json());
          if (me.success) {
            return { ...token, accessToken: account.access_token, account: me.data };
          }
        }
        return { ...token, accessToken: account.access_token };
      }
      return token;
    },
    // Make the access token and account info available to client code.
    session: async ({ session, token }) => {
      if (typeof token.accessToken === "string") {
        session.accessToken = token.accessToken;
      }
      const parsedMe = meSchema.safeParse(token.account);
      if (parsedMe.success) {
        session.account = parsedMe.data;
      }
      return session;
    }
  },
  debug: true
});
