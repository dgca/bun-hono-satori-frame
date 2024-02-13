import { renderImage } from "@/lib/renderImage";
import { parseUrl } from "@/lib/urlUtils";
import { renderFrameDocument } from "@/lib/renderFrameDocument";
import { parseFrameResponse } from "@/lib/parseFrameResponse";
import { routeHandler } from "@/lib/routeHandler";

import { Card } from "./shared/Card";

export const handlePost = routeHandler(async (c) => {
  const url = parseUrl(c.req.url);

  const fcData = parseFrameResponse(await c.req.json());
  const name =
    fcData?.untrustedData.inputText || url.searchParams.name || "anon";

  // If step is flip-coin, user selects heads or tails
  if (url.searchParams.step === "flip-coin") {
    const image = await renderImage(
      <Card
        title={`Hello, ${name}!`}
        description="Let's play heads or tails. Your call."
      />
    );

    return c.html(
      renderFrameDocument({
        image: image.asBase64(),
        postUrl: url
          .addParams({
            name,
            step: "result",
          })
          .toString(),
        buttons: [
          {
            label: "Repo",
            target: "https://github.com/dgca/bun-hono-satori-frame",
            action: "link",
          },
          { label: "Heads", action: "post" },
          { label: "Tails", action: "post" },
        ],
      })
    );
  }

  // Otherwise, we show the result
  const userChoice =
    fcData?.untrustedData.buttonIndex === 2 ? "Heads" : "Tails";
  const coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
  const didWin = userChoice === coinFlip;

  const image = await renderImage(
    <Card
      title={
        didWin ? `Congratulations, ${name}!` : `Better luck next time, ${name}!`
      }
      description={`You chose ${userChoice.toLowerCase()}, and the coin landed on ${coinFlip.toLowerCase()}.`}
    />
  );

  return c.html(
    renderFrameDocument({
      image: image.asBase64(),
      postUrl: url
        .addParams({
          name,
          step: "flip-coin",
        })
        .toString(),
      buttons: [
        {
          label: "Repo",
          target: "https://github.com/dgca/bun-hono-satori-frame",
          action: "link",
        },
        { label: "Play Again", action: "post" },
      ],
    })
  );
});
