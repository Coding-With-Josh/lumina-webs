interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImagePlaceholder({
  width = "100%",
  height = "100%",
  className = "",
  style = {},
}: ImagePlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundColor: "#1a1a2e",
        borderRadius: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    />
  );
}
