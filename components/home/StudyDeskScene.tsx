"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

/**
 * Large 2.5D "study desk" hero illustration. The desk lamp is the day/night
 * toggle - clicking (or Enter/Space on) the lamp flips the theme. In night mode
 * the lamp lights up and casts a warm glow; the monitors brighten and the whole
 * scene shifts to the navy/cyan palette.
 */
export function StudyDeskScene() {
  const { isNight, toggleTheme } = useTheme();
  const reduce = useReducedMotion();

  const c = isNight
    ? {
        deskTop: "#2a3a52",
        deskTopHi: "#354965",
        deskSide: "#19222f",
        bezel: "#0e1827",
        screen: "#0a1320",
        grid: "#1c2a3d",
        chart: "#22d3ee",
        chart2: "#a78bfa",
        up: "#34d399",
        down: "#f472b6",
        hoodie: "#0e7490",
        hoodieDark: "#0b5566",
        hoodieHi: "#22a3bf",
        hair: "#0b1220",
        skin: "#e6b48f",
        skinShade: "#d09e78",
        chair: "#283548",
        chairDark: "#1b2533",
        cup: "#22d3ee",
        lampArm: "#64748b",
        lampHead: "#fbbf24",
        bulb: "#fef9c3",
        plantPot: "#334155",
        leaf: "#34d399",
        mug: "#475569",
        steam: "#64748b",
        paper: "#1e293b",
        line: "#334155",
        label: "#94a3b8",
        floor: "rgba(0,0,0,0.4)",
      }
    : {
        deskTop: "#d2dae4",
        deskTopHi: "#e6ebf1",
        deskSide: "#9aa7b8",
        bezel: "#e2e8f0",
        screen: "#f8fafc",
        grid: "#e2e8f0",
        chart: "#0369a1",
        chart2: "#7c3aed",
        up: "#059669",
        down: "#e11d48",
        hoodie: "#0369a1",
        hoodieDark: "#075985",
        hoodieHi: "#0ea5e9",
        hair: "#27303f",
        skin: "#f1c8a5",
        skinShade: "#e0b38d",
        chair: "#b9c4d2",
        chairDark: "#9aa7b8",
        cup: "#0369a1",
        lampArm: "#64748b",
        lampHead: "#cbd5e1",
        bulb: "#fde68a",
        plantPot: "#94a3b8",
        leaf: "#10b981",
        mug: "#94a3b8",
        steam: "#cbd5e1",
        paper: "#f1f5f9",
        line: "#cbd5e1",
        label: "#64748b",
        floor: "rgba(15,23,42,0.12)",
      };

  const float = reduce ? undefined : { y: [0, -6, 0] as number[] };

  return (
    <div className="relative w-full max-w-[460px]">
      <motion.svg
        viewBox="0 0 440 380"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        animate={float}
        transition={
          reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        role="img"
        aria-label="Illustration of Priyansh studying at a desk with finance charts. Click the desk lamp to switch between day and night mode."
      >
        {/* Floor shadow */}
        <ellipse cx="215" cy="338" rx="168" ry="22" fill={c.floor} />

        {/* ============ Floating chart screen (top-left) ============ */}
        <g transform="translate(24 36) skewY(-6)">
          <rect x="0" y="0" width="190" height="130" rx="12" fill={c.bezel} stroke={c.line} strokeWidth="1.5" />
          <rect x="9" y="9" width="172" height="112" rx="6" fill={c.screen} />
          {[30, 53, 76, 99].map((y) => (
            <line key={y} x1="16" y1={y} x2="174" y2={y} stroke={c.grid} strokeWidth="1" />
          ))}
          {[
            { x: 26, o: 80, c2: 62, h: 88, l: 56, up: true },
            { x: 45, o: 62, c2: 72, h: 54, l: 78, up: false },
            { x: 64, o: 72, c2: 50, h: 46, l: 76, up: true },
            { x: 83, o: 50, c2: 60, h: 42, l: 66, up: false },
            { x: 102, o: 60, c2: 38, h: 32, l: 64, up: true },
          ].map((k, i) => (
            <motion.g
              key={i}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              <line x1={k.x} y1={k.h} x2={k.x} y2={k.l} stroke={k.up ? c.up : c.down} strokeWidth="1.5" />
              <rect x={k.x - 3} y={Math.min(k.o, k.c2)} width="6" height={Math.abs(k.o - k.c2) + 2} rx="1" fill={k.up ? c.up : c.down} />
            </motion.g>
          ))}
          <motion.polyline
            points="122,86 134,72 146,78 158,54 170,60"
            fill="none"
            stroke={c.chart}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 1.1, ease: "easeInOut" }}
          />
          <text x="122" y="26" fontSize="11" fontFamily="monospace" fontWeight="600" fill={c.up}>
            α +2.3%
          </text>
          <text x="16" y="20" fontSize="8" fontFamily="monospace" fill={c.label}>
            ALPHANET
          </text>
        </g>

        {/* ============ Office chair (behind person) ============ */}
        <g>
          {/* headrest + back */}
          <path
            d="M176 150 Q176 130 198 130 L232 130 Q254 130 254 150 L254 212 Q254 224 240 224 L190 224 Q176 224 176 212 Z"
            fill={c.chair}
          />
          <path
            d="M189 150 Q189 142 200 142 L230 142 Q241 142 241 150 L241 206 L189 206 Z"
            fill={c.chairDark}
            opacity="0.55"
          />
          {/* armrests */}
          <rect x="165" y="198" width="13" height="30" rx="5" fill={c.chairDark} />
          <rect x="252" y="198" width="13" height="30" rx="5" fill={c.chairDark} />
        </g>

        {/* ============ Person ============ */}
        {/* neck */}
        <rect x="207" y="156" width="16" height="18" rx="7" fill={c.skinShade} />
        {/* torso / hoodie */}
        <path d="M181 236 Q179 182 204 174 L226 174 Q251 182 249 236 Z" fill={c.hoodie} />
        {/* hoodie highlight + center seam */}
        <path d="M215 178 Q232 184 240 224 L215 230 Z" fill={c.hoodieHi} opacity="0.18" />
        {/* hood collar */}
        <path d="M202 175 Q215 190 228 175 Q227 166 215 165 Q203 166 202 175 Z" fill={c.hoodieDark} />
        {/* drawstrings */}
        <line x1="211" y1="182" x2="210" y2="202" stroke={c.hoodieDark} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="219" y1="182" x2="220" y2="202" stroke={c.hoodieDark} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="210" cy="203" r="1.8" fill={c.hoodieDark} />
        <circle cx="220" cy="203" r="1.8" fill={c.hoodieDark} />
        {/* ears */}
        <circle cx="194" cy="148" r="4.5" fill={c.skinShade} />
        <circle cx="236" cy="148" r="4.5" fill={c.skinShade} />
        {/* head */}
        <circle cx="215" cy="146" r="22" fill={c.skin} />
        {/* hair (looking slightly down) */}
        <path
          d="M192 152 Q189 119 215 118 Q241 119 238 152 Q236 137 226 132 Q221 139 215 139 Q209 139 204 132 Q194 137 192 152 Z"
          fill={c.hair}
        />
        {/* headphones */}
        <path d="M191 148 Q215 114 239 148" fill="none" stroke={c.hair} strokeWidth="5" strokeLinecap="round" />
        <rect x="185" y="141" width="11" height="17" rx="5" fill={c.hair} />
        <rect x="234" y="141" width="11" height="17" rx="5" fill={c.hair} />
        <rect x="187" y="145" width="4" height="9" rx="2" fill={c.cup} />
        <rect x="239" y="145" width="4" height="9" rx="2" fill={c.cup} />

        {/* ============ Desk (iso diamond) ============ */}
        <path d="M90 254 L215 290 L215 304 L90 268 Z" fill={c.deskSide} />
        <path d="M215 290 L340 254 L340 268 L215 304 Z" fill={c.deskSide} />
        <path d="M215 218 L340 254 L215 290 L90 254 Z" fill={c.deskTop} stroke={c.deskTopHi} strokeWidth="1" />
        <path d="M215 218 L340 254 L215 290 Z" fill={c.deskTopHi} opacity="0.4" />
        {/* legs */}
        <rect x="96" y="262" width="7" height="74" rx="2" fill={c.deskSide} />
        <rect x="327" y="262" width="7" height="74" rx="2" fill={c.deskSide} />
        <rect x="211" y="298" width="8" height="42" rx="2" fill={c.deskSide} />

        {/* ============ Laptop on desk ============ */}
        <g>
          {/* screen (open) */}
          <path d="M198 256 L252 256 L246 232 L204 232 Z" fill={c.bezel} stroke={c.line} strokeWidth="1" />
          <path d="M203 253 L247 253 L242 235 L208 235 Z" fill={c.screen} />
          <polyline points="211,248 219,242 227,245 235,238 242,241" fill="none" stroke={c.chart} strokeWidth="1.5" strokeLinecap="round" />
          {/* base / keyboard */}
          <path d="M188 264 L242 264 L252 256 L198 256 Z" fill={c.deskTopHi} stroke={c.line} strokeWidth="1" />
          <path d="M200 260 L240 260 L244 257 L204 257 Z" fill={c.line} opacity="0.5" />
        </g>

        {/* ============ Forearms + hands (resting on laptop) ============ */}
        <path d="M188 200 Q180 232 206 256" fill="none" stroke={c.hoodie} strokeWidth="15" strokeLinecap="round" />
        <path d="M242 200 Q250 232 224 256" fill="none" stroke={c.hoodie} strokeWidth="15" strokeLinecap="round" />
        <circle cx="206" cy="257" r="7" fill={c.skin} />
        <circle cx="224" cy="257" r="7" fill={c.skin} />

        {/* ============ Coffee mug ============ */}
        <g>
          <rect x="150" y="240" width="17" height="17" rx="3" fill={c.mug} />
          <path d="M167 244 Q173 244 173 248 Q173 252 167 252" fill="none" stroke={c.mug} strokeWidth="2.5" />
          {!reduce && (
            <motion.path
              d="M157 238 q3 -4 0 -8"
              stroke={c.steam}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.6, 0], y: -6 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </g>

        {/* notebook */}
        <path d="M256 262 L290 252 L306 256 L272 266 Z" fill={c.paper} stroke={c.line} strokeWidth="1" />

        {/* ============ Plant (front-right) ============ */}
        <g>
          <path d="M316 302 L338 302 L334 324 L320 324 Z" fill={c.plantPot} />
          <path d="M327 302 Q318 282 324 268 Q330 282 327 302" fill={c.leaf} />
          <path d="M327 302 Q338 286 346 288 Q338 298 327 302" fill={c.leaf} opacity="0.85" />
          <path d="M327 302 Q316 288 308 292 Q318 300 327 302" fill={c.leaf} opacity="0.85" />
        </g>

        {/* ============ Desk lamp - the THEME TOGGLE ============ */}
        <motion.circle
          cx="306"
          cy="196"
          r="50"
          fill="url(#deskLampGlow)"
          animate={{ opacity: isNight ? 0.9 : 0, scale: isNight ? 1 : 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ filter: "blur(6px)" }}
        />
        <g
          onClick={toggleTheme}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTheme();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
          className="cursor-pointer focus:outline-none"
        >
          {!isNight && !reduce && (
            <motion.circle
              cx="320"
              cy="186"
              r="14"
              fill="none"
              stroke={c.chart}
              strokeWidth="1.5"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: "320px 186px" }}
            />
          )}
          {/* base */}
          <ellipse cx="305" cy="258" rx="18" ry="6" fill={c.lampArm} />
          {/* lower arm */}
          <line x1="305" y1="256" x2="297" y2="216" stroke={c.lampArm} strokeWidth="4" strokeLinecap="round" />
          {/* upper arm */}
          <line x1="297" y1="216" x2="320" y2="192" stroke={c.lampArm} strokeWidth="4" strokeLinecap="round" />
          <circle cx="297" cy="216" r="4" fill={c.lampArm} />
          {/* head */}
          <motion.g
            animate={{ rotate: isNight ? 6 : 0 }}
            style={{ transformOrigin: "320px 192px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <path d="M307 176 Q320 167 332 178 L328 192 Q320 186 312 192 Z" fill={c.lampHead} stroke={c.lampArm} strokeWidth="1.5" />
            <motion.ellipse
              cx="320"
              cy="190"
              rx="8"
              ry="3"
              fill={c.bulb}
              animate={{
                opacity: isNight ? 1 : 0.5,
                filter: isNight ? "drop-shadow(0 0 6px #fbbf24)" : "drop-shadow(0 0 0 transparent)",
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.g>
        </g>

        <defs>
          <radialGradient id="deskLampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#22d3ee" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      <motion.p
        className="pointer-events-none mt-2 text-center font-mono text-[11px] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {isNight ? "lamp on - click to switch to day" : "click the lamp to go night"}
      </motion.p>
    </div>
  );
}
