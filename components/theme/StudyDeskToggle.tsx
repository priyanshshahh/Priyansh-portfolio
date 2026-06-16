"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function StudyDeskToggle() {
  const { isNight, toggleTheme } = useTheme();

  return (
    <div className="relative flex items-end" aria-label="Theme toggle desk">
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Desk surface */}
        <rect
          x="5"
          y="58"
          width="110"
          height="6"
          rx="2"
          className="fill-slate-400/40 transition-colors duration-500"
        />
        <rect x="10" y="64" width="4" height="14" rx="1" fill="currentColor" className="text-slate-500/50" />
        <rect x="106" y="64" width="4" height="14" rx="1" fill="currentColor" className="text-slate-500/50" />

        {/* Left monitor */}
        <rect
          x="12"
          y="22"
          width="36"
          height="26"
          rx="2"
          className="stroke-current transition-colors duration-500"
          strokeWidth="1.5"
          fill={isNight ? "#1e293b" : "#f1f5f9"}
        />
        <motion.g
          animate={{ opacity: isNight ? 1 : 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Candlestick chart left */}
          <line x1="18" y1="40" x2="18" y2="32" stroke={isNight ? "#22d3ee" : "#0369a1"} strokeWidth="1.5" />
          <rect x="16" y="34" width="4" height="4" fill={isNight ? "#22d3ee" : "#0369a1"} />
          <line x1="26" y1="42" x2="26" y2="30" stroke={isNight ? "#22d3ee" : "#0369a1"} strokeWidth="1.5" />
          <rect x="24" y="32" width="4" height="6" fill={isNight ? "#a78bfa" : "#0284c7"} />
          <line x1="34" y1="38" x2="34" y2="31" stroke={isNight ? "#22d3ee" : "#0369a1"} strokeWidth="1.5" />
          <rect x="32" y="33" width="4" height="3" fill={isNight ? "#22d3ee" : "#0369a1"} />
          <line x1="42" y1="41" x2="42" y2="29" stroke={isNight ? "#a78bfa" : "#0284c7"} strokeWidth="1.5" />
          <rect x="40" y="31" width="4" height="7" fill={isNight ? "#22d3ee" : "#0369a1"} />
        </motion.g>
        <rect x="26" y="48" width="8" height="4" rx="1" fill="currentColor" className="text-slate-500/40" />

        {/* Right monitor */}
        <rect
          x="58"
          y="22"
          width="36"
          height="26"
          rx="2"
          className="stroke-current transition-colors duration-500"
          strokeWidth="1.5"
          fill={isNight ? "#1e293b" : "#f1f5f9"}
        />
        <motion.g
          animate={{ opacity: isNight ? 1 : 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <polyline
            points="64,42 70,35 76,38 82,30 88,33 90,28"
            fill="none"
            stroke={isNight ? "#22d3ee" : "#0369a1"}
            strokeWidth="1.5"
          />
          <text x="64" y="46" fontSize="5" fontFamily="monospace" fill={isNight ? "#94a3b8" : "#64748b"}>
            α +2.3%
          </text>
        </motion.g>
        <rect x="72" y="48" width="8" height="4" rx="1" fill="currentColor" className="text-slate-500/40" />

        {/* Lamp glow */}
        <motion.circle
          cx="100"
          cy="18"
          r="20"
          fill="url(#lampGlow)"
          animate={{
            opacity: isNight ? 0.85 : 0,
            scale: isNight ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ filter: "blur(8px)" }}
        />

        {/* Lamp - clickable */}
        <g
          onClick={toggleTheme}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTheme();
            }
          }}
        >
          <motion.g
            animate={{ rotate: isNight ? -8 : 0 }}
            style={{ originX: "100px", originY: "52px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <line x1="100" y1="52" x2="100" y2="28" stroke="currentColor" strokeWidth="2" className="text-slate-500" />
            <path
              d="M92 28 Q100 20 108 28 L106 34 Q100 30 94 34 Z"
              fill={isNight ? "#fbbf24" : "#cbd5e1"}
              className="transition-colors duration-500"
            />
            <motion.circle
              cx="100"
              cy="24"
              r="4"
              fill={isNight ? "#fef08a" : "#e2e8f0"}
              animate={{
                filter: isNight
                  ? "drop-shadow(0 0 6px #fbbf24)"
                  : "drop-shadow(0 0 0px transparent)",
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.g>
          <rect x="97" y="52" width="6" height="6" rx="1" fill="currentColor" className="text-slate-500/60" />
        </g>

        <defs>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
