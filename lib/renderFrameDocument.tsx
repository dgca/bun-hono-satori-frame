import { renderToString } from "react-dom/server";
import type { ReactNode } from "react";
import { type FrameMetaProps } from "@/lib/components/FrameMeta";
import { FrameDocument } from "@/lib/components/FrameDocument";

export function renderFrameDocument(props: FrameMetaProps, body?: ReactNode) {
  return (
    "<!DOCTYPE html>" +
    renderToString(<FrameDocument {...props} children={body} />)
  );
}
