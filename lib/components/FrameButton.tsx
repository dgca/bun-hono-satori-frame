export type FrameButtonProps = {
  position: number;
  label: string;
  action: "post" | "post_redirect" | "mint" | "link";
  target?: string;
};

export function FrameButton({
  position,
  label,
  target,
  action,
}: FrameButtonProps) {
  return (
    <>
      <meta property={`fc:frame:button:${position}`} content={label} />
      {action !== undefined && (
        <meta
          property={`fc:frame:button:${position}:action`}
          content={action}
        />
      )}
      {target !== undefined && (
        <meta
          property={`fc:frame:button:${position}:target`}
          content={target}
        />
      )}
    </>
  );
}
