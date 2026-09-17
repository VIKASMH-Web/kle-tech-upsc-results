"use client";

import React from "react";

interface AshokaChakraProps {
  className?: string;
  size?: number;
  color?: string;
  spokeOpacity?: number;
}

export const AshokaChakraEmblem: React.FC<AshokaChakraProps> = ({
  className = "",
  size = 120,
  color = "#c8963e",
  spokeOpacity = 0.85,
}) => {
  const center = 50;
  const radius = 42;
  const innerRadius = 10;
  const hubRadius = 6;
  const spokesCount = 24;

  const spokes = Array.from({ length: spokesCount }, (_, i) => {
    const angle = (i * 360) / spokesCount;
    const rad = (angle * Math.PI) / 180;
    const x1 = center + innerRadius * Math.cos(rad);
    const y1 = center + innerRadius * Math.sin(rad);
    const x2 = center + radius * Math.cos(rad);
    const y2 = center + radius * Math.sin(rad);

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity={spokeOpacity}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ashoka Chakra emblem"
    >
      {/* Outer Rim */}
      <circle
        cx={center}
        cy={center}
        r={radius + 4}
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth="2.5"
        strokeOpacity="0.9"
      />

      {/* Decorative Outer Pips (24 pips) */}
      {Array.from({ length: spokesCount }).map((_, i) => {
        const angle = (i * 360) / spokesCount;
        const rad = (angle * Math.PI) / 180;
        const px = center + (radius + 2) * Math.cos(rad);
        const py = center + (radius + 2) * Math.sin(rad);
        return (
          <circle
            key={`pip-${i}`}
            cx={px}
            cy={py}
            r="1"
            fill={color}
            fillOpacity="0.8"
          />
        );
      })}

      {/* Inner Rim */}
      <circle
        cx={center}
        cy={center}
        r={innerRadius}
        stroke={color}
        strokeWidth="1.6"
        strokeOpacity="0.8"
      />

      {/* Central Hub */}
      <circle cx={center} cy={center} r={hubRadius} fill={color} fillOpacity="0.95" />
      <circle cx={center} cy={center} r="2.5" fill="#060d1f" />

      {/* 24 Spokes */}
      {spokes}
    </svg>
  );
};
