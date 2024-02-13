import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

import { fonts } from "@/fonts";
import { arrayBufferToBase64Png } from "@/lib/imageUtils";

function getSize(type: "1:1" | "1.91:1", width: number) {
  if (type === "1:1") {
    return { width, height: width };
  }
  return { width, height: width / 1.91 };
}

const defaultOptions = {
  aspectRatio: "1.91:1",
  width: 1200,
} as const;

export async function renderImage(
  element: JSX.Element,
  options?: {
    aspectRatio?: "1:1" | "1.91:1";
    width?: number;
  }
) {
  const { width, height } = getSize(
    options?.aspectRatio ?? defaultOptions.aspectRatio,
    options?.width ?? defaultOptions.width
  );

  const svg = await satori(
    <div
      style={{
        width,
        height,
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {element}
    </div>,
    {
      width,
      height,
      fonts,
    }
  );
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const png = pngData.asPng().buffer as ArrayBuffer;

  return {
    png,
    width,
    height,
    asBase64: () => arrayBufferToBase64Png(png),
  };
}
