import { cn } from "@/lib/utils";
import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#22d3ee", stopOpacity: 1 }} />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="100" cy="100" r="95" fill="url(#bgGradient)" opacity="0.95" />

      <g opacity="0.15" stroke="#ffffff" strokeWidth="1" fill="none">
        <line x1="60" y1="60" x2="80" y2="60" />
        <line x1="80" y1="60" x2="80" y2="40" />
        <circle cx="80" cy="40" r="3" fill="#ffffff" />

        <line x1="140" y1="60" x2="120" y2="60" />
        <line x1="120" y1="60" x2="120" y2="80" />
        <circle cx="120" cy="80" r="3" fill="#ffffff" />

        <line x1="60" y1="140" x2="80" y2="140" />
        <line x1="80" y1="140" x2="80" y2="160" />
        <circle cx="80" cy="160" r="3" fill="#ffffff" />

        <line x1="140" y1="140" x2="120" y2="140" />
        <line x1="120" y1="140" x2="120" y2="120" />
        <circle cx="120" cy="120" r="3" fill="#ffffff" />
      </g>

      <g transform="translate(100, 100)">
        <rect
          x="-25"
          y="-25"
          width="50"
          height="50"
          rx="4"
          fill="none"
          stroke="url(#circuitGradient)"
          strokeWidth="2.5"
          filter="url(#glow)"
        />

        <line x1="-25" y1="-15" x2="-35" y2="-15" stroke="#60a5fa" strokeWidth="2" />
        <line x1="-25" y1="0" x2="-35" y2="0" stroke="#60a5fa" strokeWidth="2" />
        <line x1="-25" y1="15" x2="-35" y2="15" stroke="#60a5fa" strokeWidth="2" />

        <line x1="25" y1="-15" x2="35" y2="-15" stroke="#22d3ee" strokeWidth="2" />
        <line x1="25" y1="0" x2="35" y2="0" stroke="#22d3ee" strokeWidth="2" />
        <line x1="25" y1="15" x2="35" y2="15" stroke="#22d3ee" strokeWidth="2" />

        <line x1="-15" y1="-25" x2="-15" y2="-35" stroke="#60a5fa" strokeWidth="2" />
        <line x1="0" y1="-25" x2="0" y2="-35" stroke="#60a5fa" strokeWidth="2" />
        <line x1="15" y1="-25" x2="15" y2="-35" stroke="#60a5fa" strokeWidth="2" />

        <line x1="-15" y1="25" x2="-15" y2="35" stroke="#22d3ee" strokeWidth="2" />
        <line x1="0" y1="25" x2="0" y2="35" stroke="#22d3ee" strokeWidth="2" />
        <line x1="15" y1="25" x2="15" y2="35" stroke="#22d3ee" strokeWidth="2" />

        <circle cx="-10" cy="-10" r="3" fill="#60a5fa" opacity="0.8" />
        <circle cx="10" cy="-10" r="3" fill="#60a5fa" opacity="0.8" />
        <circle cx="-10" cy="10" r="3" fill="#22d3ee" opacity="0.8" />
        <circle cx="10" cy="10" r="3" fill="#22d3ee" opacity="0.8" />

        <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
        <line x1="-10" y1="10" x2="10" y2="10" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
        <line x1="-10" y1="-10" x2="-10" y2="10" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="-10" x2="10" y2="10" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
      </g>

      <text
        x="100"
        y="108"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        fill="#ffffff"
        filter="url(#glow)"
      >
        LN
      </text>

      <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />

      <g stroke="#ffffff" strokeWidth="1" opacity="0.4">
        <line x1="100" y1="8" x2="100" y2="15" />
        <line x1="100" y1="185" x2="100" y2="192" />
        <line x1="8" y1="100" x2="15" y2="100" />
        <line x1="185" y1="100" x2="192" y2="100" />

        <line x1="35" y1="35" x2="40" y2="40" />
        <line x1="165" y1="35" x2="160" y2="40" />
        <line x1="35" y1="165" x2="40" y2="160" />
        <line x1="165" y1="165" x2="160" y2="160" />
      </g>

      <text
        x="100"
        y="135"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="300"
        textAnchor="middle"
        fill="#ffffff"
        opacity="0.6"
        letterSpacing="2"
      >
        EMBEDDED SYSTEMS
      </text>
    </svg>
  );
}
