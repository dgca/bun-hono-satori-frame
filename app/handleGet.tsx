import { routeHandler } from "@/lib/routeHandler";
import { Card } from "./shared/Card";
import { renderImage } from "@/lib/renderImage";
import { renderFrameDocument } from "@/lib/renderFrameDocument";
import { buildFullUrl } from "@/lib/urlUtils";

export const rootImage = await renderImage(
  <Card
    title="bun-hono-satori-frame"
    description="A bare-bones frames server with JSX to PNG generation"
  />
);

const GITHUB_LINK = "https://github.com/dgca/bun-hono-satori-frame";

export const rootFrameContent = renderFrameDocument(
  {
    image: rootImage.asBase64(),
    input: "What's your name?",
    postUrl: buildFullUrl("/", {
      step: "flip-coin",
    }),
    buttons: [
      {
        label: "Repo",
        target: GITHUB_LINK,
        action: "link",
      },
      { label: "Submit", action: "post" },
    ],
  },
  <main>
    <h1>
      <code>bun-hono-satori-frame</code>
    </h1>
    <p>
      Hi, I'm a demo project by{" "}
      <a
        href="https://warpcast.com/typeof.eth"
        target="_blank"
        rel="noreferrer"
      >
        @typeof.eth
      </a>
      . See my source code on{" "}
      <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
        Github
      </a>
      .
    </p>
  </main>
);

export const handleGet = routeHandler(async (c) => {
  return c.html(rootFrameContent);
});
