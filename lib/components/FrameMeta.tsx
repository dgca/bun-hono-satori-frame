import { FrameButton, type FrameButtonProps } from "./FrameButton";

export type FrameMetaProps = {
  image: string;
  title?: string;
  description?: string;
  version?: string;
  postUrl?: string;
  aspectRatio?: "1.91:1" | "1:1";
  input?: string;
  buttons?: Array<Omit<FrameButtonProps, "position">>;
};

export function FrameMeta({
  image,
  version = "vNext",
  aspectRatio = "1.91:1",
  title,
  description,
  postUrl,
  input,
  buttons,
}: FrameMetaProps) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="fc:frame" content={version} />
      <meta property="fc:frame:image" content={image} />
      <meta property="fc:frame:image:aspect_ratio" content={aspectRatio} />
      {postUrl !== undefined && (
        <meta property="fc:frame:post_url" content={postUrl} />
      )}
      {input !== undefined && (
        <meta property="fc:frame:input:text" content={input} />
      )}
      {buttons?.map((button, i) => {
        const position = i + 1;
        return <FrameButton key={i} position={position} {...button} />;
      })}
    </>
  );
}
