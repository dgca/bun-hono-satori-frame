import { type ReactNode } from "react";
import { FrameMeta, type FrameMetaProps } from "./FrameMeta";

export type FrameDocumentProps = FrameMetaProps & {
  children?: ReactNode;
};

export function FrameDocument({ children, ...rest }: FrameDocumentProps) {
  return (
    <html>
      <head>
        <FrameMeta {...rest} />
      </head>
      <body>{children}</body>
    </html>
  );
}
