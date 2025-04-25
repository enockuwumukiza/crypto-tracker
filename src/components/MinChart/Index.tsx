
import React from 'react';

interface MiniChartProps {
  data: number[];
  color: string;
}


const MiniChart: React.FC<MiniChartProps> = ({ data }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const width = 120;
  const height = 40;
  const padding = 2;

  const points = data.map((value, index) => {
    const x = padding + (index * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  const color = data[0] < data[data.length - 1] ? "#10B981" : "#EF4444"; // green or red

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default MiniChart;