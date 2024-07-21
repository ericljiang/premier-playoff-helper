import createClient, { Middleware } from "openapi-fetch";
import { henrikApiKey, henrikBetaUrl, henrikRootUrl } from "../../environment";
import { paths } from "@/generated/henrik-4.0.0";

export const henrikClient = createClient<paths>({
  baseUrl: henrikRootUrl.toString(),
});
export const henrikBetaClient = createClient<paths>({
  baseUrl: henrikBetaUrl.toString(),
});

const henrikClientMiddleware: Middleware = {
  onRequest: ({ request }) => {
    if (henrikApiKey) request.headers.set("Authorization", henrikApiKey);
    return request;
  },
};

henrikClient.use(henrikClientMiddleware);
henrikBetaClient.use(henrikClientMiddleware);
