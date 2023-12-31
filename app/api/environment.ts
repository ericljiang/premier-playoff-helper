export const henrikApiKey = process.env.HENRIK_API_KEY;
export const riotApiKey = process.env.RIOT_API_KEY;
console.log(henrikApiKey ? "HENRIK_API_KEY found" : "HENRIK_API_KEY not found");
console.log(riotApiKey ? "RIOT_API_KEY found" : "RIOT_API_KEY not found");

export const henrikRootUrl = new URL("https://api.henrikdev.xyz");
// TODO regionalize
export const riotRootUrl = new URL("https://na.api.riotgames.com");
