import { Box, sx } from "@/lib/components";

const colors = {
  blue: "#0F2859",
  white: "#FFFADF",
  salmon: "#F87B73",
};

const wrapperStyle = sx({
  backgroundColor: colors.white,
  padding: "20px",
});

const innerStyle = sx({
  border: `8px solid ${colors.blue}`,
  borderRadius: "30px",
  flexGrow: 1,
});

const dividerStyle = sx({
  margin: "30px 0",
});

const sharedTextStyles = sx({
  color: colors.blue,
});

const titleStyle = sx(sharedTextStyles, {
  fontSize: 60,
  fontWeight: "bold",
});

const descriptionStyle = sx(sharedTextStyles, {
  fontSize: 38,
  maxWidth: "600px",
  textAlign: "center",
});

export function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box style={wrapperStyle}>
      <Box style={innerStyle}>
        <Box style={titleStyle}>{title}</Box>
        <Box style={dividerStyle}>
          <svg width={42} height={42} fill="none">
            <rect
              width={50}
              height={8}
              x={41.012}
              y={5.657}
              fill={colors.salmon}
              rx={4}
              transform="rotate(135 41.012 5.657)"
            />
            <rect
              width={50}
              height={8}
              x={35.355}
              y={41.012}
              fill={colors.salmon}
              rx={4}
              transform="rotate(-135 35.355 41.012)"
            />
          </svg>
        </Box>
        <Box style={descriptionStyle}>{description}</Box>
      </Box>
    </Box>
  );
}
