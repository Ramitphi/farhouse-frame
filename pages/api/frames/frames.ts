import { farcasterHubContext } from "frames.js/middleware";
import { createFrames } from "frames.js/next/pages-router/server";

export const frames = createFrames({
  middleware: [
    farcasterHubContext({
      hubHttpUrl: "https://hubs.airstack.xyz",
      hubRequestOptions: {
        headers: {
          "x-airstack-hubs": "1cd28db661ccd461cb3663ffb06821cf4",
        },
      },
    }),
  ],
});
