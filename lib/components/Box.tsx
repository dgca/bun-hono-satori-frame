import { sx } from "./styler";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const baseStyles = sx({
  alignContent: "flex-start",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

export function Box({ children, ...rest }: BoxProps) {
  const { style, ...restProps } = rest;
  return (
    <div
      style={{
        ...baseStyles,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
}
