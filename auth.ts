import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [{
    id: "riot-sign-on", // signIn("riot-sign-on") and will be part of the callback URL
    name: "Riot Sign On", // optional, used on the default login page as the button text.
    type: "oauth",
    issuer: "https://auth.riotgames.com", // to infer the .well-known/openid-configuration URL
    clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
    clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
  }],
});
