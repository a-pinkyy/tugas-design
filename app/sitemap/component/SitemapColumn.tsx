type BoxProps = {
  x: number;
  y: number;
  width: number;
  height?: number;
  text: string;
  color: string;
  title?: boolean;
  fontSize?: number;
};

export function Box({
  x,
  y,
  width,
  height = 35,
  text,
  color,
  title = false,
  fontSize = 18,
}: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={title ? color : "white"}
        stroke={title ? "none" : color}
        strokeWidth={title ? 0 : 3}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + fontSize / 3}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={fontSize}
        fill={title ? "white" : "#333"}
      >
        {text}
      </text>
    </g>
  );
}

export function MultiTextBox({
  x,
  y,
  width,
  height,
  lines,
  color,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  lines: string[];
  color: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="white"
        stroke={color}
        strokeWidth={3}
      />
      {lines.map((line, index) => (
        <text
          key={line}
          x={x + width / 2}
          y={y + 22 + index * 20}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize={17}
          fill="#333"
        >
          {line}
        </text>
      ))}
    </g>
  );
}