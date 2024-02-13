import { buildFullUrl } from "@/lib/urlUtils";
import { renderFrameDocument } from "@/lib/renderFrameDocument";
import { renderImage } from "@/lib/renderImage";
import { Card } from "./Card";

export const rootImage = await renderImage(
  <Card
    title="bun-hono-satori-frame"
    description="A bare-bones frames server with JSX to PNG generation"
  />
);

export const rootFrameContent = renderFrameDocument({
  image: rootImage.asBase64(),
  input: "What's your name?",
  postUrl: buildFullUrl("/", {
    step: "flip-coin",
  }),
  buttons: [
    {
      label: "Repo",
      target: "https://github.com/dgca/bun-hono-satori-frame",
      action: "link",
    },
    { label: "Submit", action: "post" },
  ],
});
