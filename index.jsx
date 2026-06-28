import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════
   GHOSIA DAWAKHANA — Cinematic Unani Healing Experience
   Palette: Obsidian · Deep Forest · Living Emerald · Ancient Gold · Fog
   ═══════════════════════════════════════════════════════════════════ */

const C = {
  obsidian:  "#080F0C",
  forest:    "#0D1F1A",
  deep:      "#122B22",
  emerald:   "#1A4035",
  green:     "#2D6A4F",
  sage:      "#5A9E82",
  fog:       "#8FBFAA",
  gold:      "#C49A3C",
  goldLight: "#E2C06A",
  parchment: "#F0E6CC",
  white:     "#FAFAF8",
};

/* ─── Full Anatomical SVG Body ──────────────────────────────────── */
function SkeletonBody({ activeOrgan, onOrganClick }) {
  const organs = [
    { id: "brain",   label: "Brain & Nervous System",   cx: 200, cy: 52,  rx: 28, ry: 24  },
    { id: "heart",   label: "Heart & Circulation",       cx: 186, cy: 165, rx: 18, ry: 16  },
    { id: "lungs",   label: "Lungs & Respiratory",       cx: 200, cy: 170, rx: 32, ry: 28  },
    { id: "stomach", label: "Digestive System",          cx: 200, cy: 220, rx: 22, ry: 18  },
    { id: "liver",   label: "Liver & Detox",             cx: 182, cy: 210, rx: 20, ry: 15  },
    { id: "kidneys", label: "Kidneys & Urinary",         cx: 200, cy: 255, rx: 28, ry: 12  },
    { id: "joints",  label: "Joints & Musculoskeletal",  cx: 200, cy: 330, rx: 18, ry: 16  },
    { id: "skin",    label: "Skin & Immunity",           cx: 200, cy: 130, rx: 48, ry: 30  },
  ];

  return (
    <svg viewBox="0 0 400 680" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 40px #2D6A4F33)" }}>
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#080F0C" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="organGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A9E82" stopOpacity="0.4"/>
          <stop offset="50%" stopColor="#8FBFAA" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#5A9E82" stopOpacity="0.4"/>
        </linearGradient>
        <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2C06A" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#C49A3C" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Background body glow */}
      <ellipse cx="200" cy="300" rx="130" ry="280" fill="url(#bodyGlow)" />

      {/* ── SKULL ── */}
      {/* Cranium */}
      <ellipse cx="200" cy="46" rx="46" ry="42" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.85"/>
      {/* Skull details - suture lines */}
      <path d="M200 6 Q210 26 200 36 Q190 26 200 6" fill="none" stroke="#5A9E82" strokeWidth="0.8" opacity="0.5"/>
      <path d="M154 40 Q170 32 200 30 Q230 32 246 40" fill="none" stroke="#5A9E82" strokeWidth="0.8" opacity="0.5"/>
      {/* Eye sockets */}
      <ellipse cx="183" cy="52" rx="11" ry="9" fill="none" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.7"/>
      <ellipse cx="217" cy="52" rx="11" ry="9" fill="none" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.7"/>
      <ellipse cx="183" cy="52" rx="5" ry="4" fill="#0D1F1A" opacity="0.8"/>
      <ellipse cx="217" cy="52" rx="5" ry="4" fill="#0D1F1A" opacity="0.8"/>
      {/* Nasal */}
      <path d="M194 62 L194 72 Q196 75 200 75 Q204 75 206 72 L206 62" fill="none" stroke="#8FBFAA" strokeWidth="1" opacity="0.6"/>
      {/* Cheekbones */}
      <path d="M156 55 Q168 58 172 64" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.5"/>
      <path d="M244 55 Q232 58 228 64" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.5"/>
      {/* Jaw / Mandible */}
      <path d="M168 70 Q170 88 180 92 Q190 96 200 96 Q210 96 220 92 Q230 88 232 70" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.75"/>
      {/* Teeth hint */}
      <path d="M184 93 L184 88 M188 94 L188 89 M192 95 L192 90 M196 95 L196 90 M200 95 L200 90 M204 95 L204 90 M208 95 L208 90 M212 94 L212 89 M216 93 L216 88" stroke="#5A9E82" strokeWidth="0.8" opacity="0.4"/>

      {/* ── CERVICAL SPINE (neck vertebrae) ── */}
      {[100,106,112,118,124,130,136].map((y,i)=>(
        <g key={i}>
          <rect x="193" y={y} width="14" height="5" rx="2" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.6"/>
          <line x1="200" y1={y} x2="200" y2={y+5} stroke="url(#spineGrad)" strokeWidth="0.8" opacity="0.7"/>
        </g>
      ))}

      {/* ── CLAVICLES ── */}
      <path d="M200 142 Q175 138 152 148" fill="none" stroke="url(#boneGrad)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M200 142 Q225 138 248 148" fill="none" stroke="url(#boneGrad)" strokeWidth="2" strokeLinecap="round"/>

      {/* ── RIBCAGE ── */}
      {/* Sternum */}
      <rect x="196" y="148" width="8" height="90" rx="3" fill="none" stroke="url(#spineGrad)" strokeWidth="2" opacity="0.8"/>
      {/* Ribs - left */}
      {[0,1,2,3,4,5,6,7,8,9,10].map((i)=>{
        const y = 155 + i*9;
        const spread = 5 + i*1.8;
        const arcH = 6 + i*0.8;
        return (
          <path key={i} d={`M196 ${y} Q${196-spread*1.8} ${y+arcH} ${152+i*1} ${y+arcH*0.5}`}
            fill="none" stroke="#5A9E82" strokeWidth={i<7?"1.4":"1.1"} opacity={0.55+i*0.01}/>
        );
      })}
      {/* Ribs - right */}
      {[0,1,2,3,4,5,6,7,8,9,10].map((i)=>{
        const y = 155 + i*9;
        const spread = 5 + i*1.8;
        const arcH = 6 + i*0.8;
        return (
          <path key={i} d={`M204 ${y} Q${204+spread*1.8} ${y+arcH} ${248-i*1} ${y+arcH*0.5}`}
            fill="none" stroke="#5A9E82" strokeWidth={i<7?"1.4":"1.1"} opacity={0.55+i*0.01}/>
        );
      })}
      {/* Costal cartilage hint */}
      <path d="M154 215 Q168 230 196 238" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.3"/>
      <path d="M246 215 Q232 230 204 238" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.3"/>

      {/* ── THORACIC + LUMBAR SPINE ── */}
      {[148,157,166,175,184,193,202,211,220,229,238,247].map((y,i)=>(
        <g key={i}>
          <rect x="192" y={y} width="16" height="7" rx="2" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.65"/>
          {/* Spinous process */}
          <path d={`M192 ${y+3} L184 ${y+3}`} stroke="#5A9E82" strokeWidth="0.8" opacity="0.4"/>
          <path d={`M208 ${y+3} L216 ${y+3}`} stroke="#5A9E82" strokeWidth="0.8" opacity="0.4"/>
        </g>
      ))}
      {[256,267,278,289,300].map((y,i)=>(
        <g key={i}>
          <rect x="190" y={y} width="20" height="9" rx="2" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.7"/>
          <path d={`M190 ${y+4} L180 ${y+4}`} stroke="#5A9E82" strokeWidth="0.9" opacity="0.45"/>
          <path d={`M210 ${y+4} L220 ${y+4}`} stroke="#5A9E82" strokeWidth="0.9" opacity="0.45"/>
        </g>
      ))}

      {/* ── PELVIS ── */}
      <path d="M160 315 Q155 335 160 355 Q175 375 200 378 Q225 375 240 355 Q245 335 240 315" fill="none" stroke="url(#boneGrad)" strokeWidth="2" opacity="0.75"/>
      <path d="M160 315 Q180 308 200 307 Q220 308 240 315" fill="none" stroke="url(#boneGrad)" strokeWidth="2" opacity="0.75"/>
      {/* Iliac crests */}
      <path d="M160 315 Q148 322 145 338" fill="none" stroke="#5A9E82" strokeWidth="1.5" opacity="0.6"/>
      <path d="M240 315 Q252 322 255 338" fill="none" stroke="#5A9E82" strokeWidth="1.5" opacity="0.6"/>
      {/* Sacrum */}
      <path d="M190 307 Q185 325 186 345 Q190 360 200 362 Q210 360 214 345 Q215 325 210 307" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.6"/>

      {/* ── SHOULDER JOINTS ── */}
      <circle cx="145" cy="152" r="10" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="255" cy="152" r="10" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>

      {/* ── HUMERUS (upper arm) ── */}
      <line x1="138" y1="160" x2="120" y2="255" stroke="url(#boneGrad)" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
      <line x1="262" y1="160" x2="280" y2="255" stroke="url(#boneGrad)" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
      {/* Humerus detail */}
      <line x1="136" y1="165" x2="118" y2="258" stroke="#8FBFAA" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      <line x1="264" y1="165" x2="282" y2="258" stroke="#8FBFAA" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>

      {/* ── ELBOW JOINTS ── */}
      <ellipse cx="118" cy="260" rx="10" ry="8" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>
      <ellipse cx="282" cy="260" rx="10" ry="8" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>

      {/* ── RADIUS & ULNA (forearm) ── */}
      <line x1="112" y1="266" x2="95" y2="360" stroke="url(#boneGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="122" y1="267" x2="108" y2="362" stroke="url(#boneGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.55"/>
      <line x1="288" y1="266" x2="305" y2="360" stroke="url(#boneGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="278" y1="267" x2="292" y2="362" stroke="url(#boneGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.55"/>

      {/* ── WRIST & HAND ── */}
      {/* Left wrist */}
      <ellipse cx="102" cy="366" rx="12" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.7"/>
      {/* Left fingers */}
      {[-12,-6,0,6,12].map((dx,i)=>(
        <g key={i}>
          <line x1={102+dx} y1="372" x2={100+dx*1.1} y2={398+i*1} stroke="#5A9E82" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          <line x1={100+dx*1.1} y1={398+i*1} x2={100+dx*1.1} y2={412+i*1} stroke="#5A9E82" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          <line x1={100+dx*1.1} y1={412+i*1} x2={100+dx*1.1} y2={424} stroke="#5A9E82" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        </g>
      ))}
      {/* Thumb left */}
      <line x1="88" y1="374" x2="78" y2="390" stroke="#5A9E82" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="78" y1="390" x2="73" y2="402" stroke="#5A9E82" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>

      {/* Right wrist */}
      <ellipse cx="298" cy="366" rx="12" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.7"/>
      {/* Right fingers */}
      {[-12,-6,0,6,12].map((dx,i)=>(
        <g key={i}>
          <line x1={298+dx} y1="372" x2={300+dx*1.1} y2={398+i*1} stroke="#5A9E82" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          <line x1={300+dx*1.1} y1={398+i*1} x2={300+dx*1.1} y2={412+i*1} stroke="#5A9E82" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          <line x1={300+dx*1.1} y1={412+i*1} x2={300+dx*1.1} y2={424} stroke="#5A9E82" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
        </g>
      ))}
      {/* Thumb right */}
      <line x1="312" y1="374" x2="322" y2="390" stroke="#5A9E82" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="322" y1="390" x2="327" y2="402" stroke="#5A9E82" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>

      {/* ── FEMUR (upper leg) ── */}
      <line x1="178" y1="378" x2="172" y2="480" stroke="url(#boneGrad)" strokeWidth="7" strokeLinecap="round" opacity="0.75"/>
      <line x1="222" y1="378" x2="228" y2="480" stroke="url(#boneGrad)" strokeWidth="7" strokeLinecap="round" opacity="0.75"/>
      {/* Femur detail ridge */}
      <line x1="175" y1="382" x2="169" y2="478" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.3"/>
      <line x1="225" y1="382" x2="231" y2="478" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.3"/>
      {/* Greater trochanter */}
      <ellipse cx="170" cy="380" rx="10" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.5"/>
      <ellipse cx="230" cy="380" rx="10" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1" opacity="0.5"/>

      {/* ── KNEE JOINTS ── */}
      <ellipse cx="170" cy="488" rx="16" ry="14" fill="none" stroke="url(#boneGrad)" strokeWidth="1.8" opacity="0.85"/>
      <ellipse cx="230" cy="488" rx="16" ry="14" fill="none" stroke="url(#boneGrad)" strokeWidth="1.8" opacity="0.85"/>
      {/* Patella */}
      <ellipse cx="170" cy="484" rx="7" ry="6" fill="none" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.7"/>
      <ellipse cx="230" cy="484" rx="7" ry="6" fill="none" stroke="#8FBFAA" strokeWidth="1.2" opacity="0.7"/>

      {/* ── TIBIA & FIBULA ── */}
      <line x1="167" y1="500" x2="162" y2="600" stroke="url(#boneGrad)" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
      <line x1="175" y1="502" x2="170" y2="602" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="233" y1="500" x2="238" y2="600" stroke="url(#boneGrad)" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
      <line x1="225" y1="502" x2="230" y2="602" stroke="url(#boneGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>

      {/* ── ANKLE & FOOT ── */}
      {/* Ankles */}
      <ellipse cx="164" cy="606" rx="14" ry="9" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>
      <ellipse cx="236" cy="606" rx="14" ry="9" fill="none" stroke="url(#boneGrad)" strokeWidth="1.5" opacity="0.8"/>
      {/* Heel */}
      <ellipse cx="158" cy="616" rx="12" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.6"/>
      <ellipse cx="242" cy="616" rx="12" ry="7" fill="none" stroke="#5A9E82" strokeWidth="1.2" opacity="0.6"/>
      {/* Metatarsals */}
      {[-10,-5,0,5,10].map((dx,i)=>(
        <g key={i}>
          <line x1={158+dx*0.5} y1="620" x2={145+dx*2} y2="640" stroke="#5A9E82" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
          <line x1={145+dx*2} y1="640" x2={143+dx*2} y2="650" stroke="#5A9E82" strokeWidth="1.1" strokeLinecap="round" opacity="0.45"/>
          <line x1={242+dx*0.5} y1="620" x2={255+dx*2} y2="640" stroke="#5A9E82" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
          <line x1={255+dx*2} y1="640" x2={257+dx*2} y2="650" stroke="#5A9E82" strokeWidth="1.1" strokeLinecap="round" opacity="0.45"/>
        </g>
      ))}

      {/* ── ORGAN HOTSPOTS ── */}
      {organs.map(org => {
        const isActive = activeOrgan === org.id;
        const isHover = false;
        return (
          <g key={org.id} onClick={() => onOrganClick(org)} style={{ cursor: "pointer" }}>
            <ellipse
              cx={org.cx} cy={org.cy} rx={org.rx} ry={org.ry}
              fill={isActive ? "#C49A3C" : "#2D6A4F"}
              fillOpacity={isActive ? 0.35 : 0.18}
              stroke={isActive ? "#E2C06A" : "#2D6A4F"}
              strokeWidth={isActive ? 1.5 : 1}
              strokeOpacity={isActive ? 1 : 0.5}
              filter="url(#organGlow)"
            >
              <animate
                attributeName="fillOpacity"
                values={isActive ? "0.35;0.55;0.35" : "0.10;0.25;0.10"}
                dur={isActive ? "1.5s" : "3s"}
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Pulse ring */}
            <ellipse
              cx={org.cx} cy={org.cy} rx={org.rx + 4} ry={org.ry + 4}
              fill="none"
              stroke={isActive ? "#E2C06A" : "#2D6A4F"}
              strokeWidth="0.5"
              strokeOpacity={isActive ? 0.6 : 0.2}
            >
              <animate attributeName="r" values="0;1;0" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="strokeOpacity" values={isActive?"0.6;0;0.6":"0.2;0;0.2"} dur="2s" repeatCount="indefinite"/>
            </ellipse>
          </g>
        );
      })}

      {/* ── CONNECTING VESSELS (simplified circulatory hint) ── */}
      <path d="M200 96 Q198 110 200 142" stroke="#C49A3C" strokeWidth="0.8" strokeOpacity="0.25" fill="none" strokeDasharray="3,4"/>
      <path d="M200 238 Q200 246 200 256" stroke="#C49A3C" strokeWidth="0.8" strokeOpacity="0.2" fill="none" strokeDasharray="3,4"/>
    </svg>
  );
}

/* ─── Cinematic Particle Field ────────────────────────────────── */
function Particles({ count = 30, color = "#C49A3C", size = 2, speed = 1 }) {
  const p = useRef(Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100, y: Math.random() * 100,
    s: Math.random() * size + 0.5,
    d: (6 + Math.random() * 10) / speed,
    delay: Math.random() * 10, id: i,
  }))).current;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {p.map(pt => (
        <div key={pt.id} style={{
          position: "absolute", left: `${pt.x}%`, top: `${pt.y}%`,
          width: pt.s, height: pt.s, borderRadius: "50%",
          background: color, opacity: 0,
          animation: `cinemaFloat ${pt.d}s ${pt.delay}s infinite ease-in-out`,
        }} />
      ))}
    </div>
  );
}

/* ─── Organ Detail Panel ────────────────────────────────────── */
const ORGAN_DATA = {
  brain:   { name: "Brain & Nervous System", urdu: "دماغ", phase0: "Chaotic neural activity. Cortisol overwhelms the limbic system. Sleep fractures. Anxiety compounds.", phase1: "Ashwagandha, Brahmi, and Valerian enter the bloodstream. Adaptogens bind to stress receptors.", phase2: "Neural oscillations slow. Delta waves return. The mind grows still as a forest at dawn.", herb: "Ashwagandha · Brahmi · Valerian Root", color: "#7B5EA7" },
  heart:   { name: "Heart & Circulation", urdu: "قلب", phase0: "Blood pressure elevated. Arterial walls inflamed. The heart labors against resistance.", phase1: "Arjuna bark compounds dilate the vessels. Hawthorn flavonoids reduce cardiac load.", phase2: "Pulse steadies. Circulation opens. Warm blood reaches the extremities once more.", herb: "Arjuna Bark · Hawthorn · Garlic · Olive Leaf", color: "#A73C3C" },
  lungs:   { name: "Lungs & Respiratory", urdu: "پھیپھڑے", phase0: "Bronchial passages narrow. Mucus accumulates. Each breath becomes a quiet struggle.", phase1: "Tulsi vapors open the airways. Licorice root coats and soothes inflamed bronchial tissue.", phase2: "The chest expands fully. Oxygen floods the alveoli. Breathing returns to silence.", herb: "Tulsi · Mulethi · Eucalyptus · Thyme", color: "#3C7BA7" },
  stomach: { name: "Digestive System", urdu: "معدہ", phase0: "Stomach acid disrupted. Intestinal flora imbalanced. Inflammation climbs the gut wall.", phase1: "Ginger, mulethi, and fennel seeds dissolve. Their compounds restore the mucosal lining.", phase2: "Digestive fire rekindles. Food moves with ease. The gut ecosystem finds equilibrium.", herb: "Ginger · Mulethi · Fennel · Ajwain", color: "#2D6A4F" },
  liver:   { name: "Liver & Detoxification", urdu: "جگر", phase0: "Toxin load accumulates. Liver enzymes elevate. Bile flow slows and thickens.", phase1: "Milk thistle silymarin shields hepatocytes. Dandelion root opens bile ducts.", phase2: "The liver breathes. Detoxification pathways clear. The blood runs clean.", herb: "Milk Thistle · Dandelion · Turmeric · Bhumyamalaki", color: "#8B6914" },
  kidneys: { name: "Kidneys & Urinary", urdu: "گردے", phase0: "Crystalline deposits form in the renal pelvis. Filtration rate declines. Fluid retention builds.", phase1: "Punarnava and Gokshura increase glomerular filtration. Stone-dissolving compounds mobilize.", phase2: "Crystals dissolve. Filtration restores. The body releases what it no longer needs.", herb: "Punarnava · Gokshura · Stone Breaker · Corn Silk", color: "#4A7FA5" },
  joints:  { name: "Joints & Musculoskeletal", urdu: "جوڑ", phase0: "Cartilage degrades. Synovial fluid depletes. Bone surfaces grind. Inflammation radiates.", phase1: "Boswellia resins inhibit leukotriene formation. Turmeric curcumin penetrates joint tissue.", phase2: "Synovial fluid replenishes. Cartilage cushion returns. Movement flows without resistance.", herb: "Boswellia · Turmeric · Sesame Oil · Shallaki", color: "#8B6914" },
  skin:    { name: "Skin & Immunity", urdu: "جلد", phase0: "Cellular inflammation spreads. Barrier function compromised. Immune response misdirected.", phase1: "Neem compounds purify. Rose hip oils restore the lipid barrier at the cellular level.", phase2: "Cells regenerate. The barrier seals. Skin becomes what it always was — radiant.", herb: "Neem · Rose Hip · Aloe · Manjistha", color: "#C49A3C" },
};

function OrganModal({ organId, onClose }) {
  const [phase, setPhase] = useState(0);
  const data = ORGAN_DATA[organId];
  useEffect(() => {
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), 2800);
    const t2 = setTimeout(() => setPhase(2), 5800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [organId]);

  const texts = [data.phase0, data.phase1, data.phase2];
  const phaseLabels = ["The Condition", "Healing Begins", "Restored"];
  const phaseColors = ["#A73C3C", "#2D6A4F", "#C49A3C"];

  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(8,15,12,0.97)", display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeIn 0.6s ease" }}>
      <Particles count={25} color={phaseColors[phase]} size={2} />
      
      {/* Cinematic vignette bars */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:80, background:"linear-gradient(180deg,#080F0C,transparent)", zIndex:2 }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80, background:"linear-gradient(0deg,#080F0C,transparent)", zIndex:2 }} />

      <div style={{ maxWidth:640, width:"90%", position:"relative", zIndex:10 }}>
        {/* Circular visualization */}
        <div style={{ position:"relative", width:200, height:200, margin:"0 auto 3rem" }}>
          {/* Outer ring */}
          <svg viewBox="0 0 200 200" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
            <circle cx="100" cy="100" r="90" fill="none" stroke={phaseColors[phase]} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 6"/>
            <circle cx="100" cy="100" r="72" fill="none" stroke={phaseColors[phase]} strokeWidth="1" strokeOpacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="100" r="52" fill={phaseColors[phase]} fillOpacity="0.08" stroke={phaseColors[phase]} strokeWidth="1.5" strokeOpacity="0.7"/>
            {/* Inner pulse */}
            <circle cx="100" cy="100" r="52" fill="none" stroke={phaseColors[phase]} strokeWidth="2" strokeOpacity="0.3">
              <animate attributeName="r" values="52;68;52" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="strokeOpacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            {/* Phase dot markers */}
            {[0,1,2].map(i => (
              <circle key={i}
                cx={100 + 80 * Math.cos((i * 2.094) - 1.57)}
                cy={100 + 80 * Math.sin((i * 2.094) - 1.57)}
                r="5"
                fill={i <= phase ? phaseColors[i] : "#1A4035"}
                strokeOpacity="0.8"
              />
            ))}
          </svg>
        </div>

        {/* Phase tag */}
        <p style={{ textAlign:"center", color:phaseColors[phase], fontSize:"0.6rem", letterSpacing:"0.5em", textTransform:"uppercase", marginBottom:"0.75rem", transition:"color 1s" }}>
          {phaseLabels[phase]}
        </p>
        <h2 style={{ textAlign:"center", fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", color:C.white, marginBottom:"0.3rem" }}>
          {data.name}
        </h2>
        <p style={{ textAlign:"center", color:C.fog, fontSize:"1.4rem", marginBottom:"2rem", fontWeight:300 }}>{data.urdu}</p>

        {/* Phase progress bar */}
        <div style={{ display:"flex", gap:6, marginBottom:"2.5rem" }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ flex:1, height:2, background: i <= phase ? phaseColors[i] : "#1A4035", borderRadius:1, transition:"background 1s ease" }} />
          ))}
        </div>

        {/* Text */}
        <p style={{ textAlign:"center", color:C.fog, lineHeight:2, fontSize:"1.05rem", minHeight:"6rem", transition:"opacity 0.8s", fontStyle:"italic" }}>
          {texts[phase]}
        </p>

        {phase === 2 && (
          <p style={{ textAlign:"center", color:C.goldLight, fontSize:"0.8rem", letterSpacing:"0.2em", marginTop:"1.5rem", textTransform:"uppercase" }}>
            Remedy · {data.herb}
          </p>
        )}

        <div style={{ textAlign:"center", marginTop:"3rem" }}>
          <button onClick={onClose} style={{
            background:"transparent", border:`1px solid ${C.green}66`,
            color:C.sage, padding:"0.75rem 2.5rem", cursor:"pointer",
            fontSize:"0.75rem", letterSpacing:"0.25em", textTransform:"uppercase",
            transition:"all 0.3s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.goldLight;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.green+"66";e.currentTarget.style.color=C.sage;}}
          >
            Return to the Body
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Booking Modal ─────────────────────────────────────────── */
function BookingModal({ onClose }) {
  const [form, setForm] = useState({ name:"", phone:"", concern:"", type:"clinic", date:"" });
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(8,15,12,0.98)", display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeIn 0.6s" }}>
      <Particles count={60} color={C.goldLight} size={2} speed={0.5} />
      <div style={{ textAlign:"center", position:"relative", zIndex:10 }}>
        {/* Seal animation */}
        <div style={{ width:120, height:120, margin:"0 auto 2rem", position:"relative" }}>
          <svg viewBox="0 0 120 120" style={{ width:"100%", height:"100%" }}>
            <circle cx="60" cy="60" r="55" fill="none" stroke={C.gold} strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="48" fill="#C49A3C22"/>
            <text x="60" y="56" textAnchor="middle" fill={C.goldLight} fontSize="11" fontFamily="Cinzel,serif" letterSpacing="2">GHOSIA</text>
            <text x="60" y="70" textAnchor="middle" fill={C.goldLight} fontSize="11" fontFamily="Cinzel,serif" letterSpacing="2">DAWAKHANA</text>
            <text x="60" y="84" textAnchor="middle" fill={C.sage} fontSize="8">✦ CONFIRMED ✦</text>
          </svg>
        </div>
        <p style={{ color:C.gold, fontSize:"0.65rem", letterSpacing:"0.5em", marginBottom:"1rem" }}>APPOINTMENT SEALED</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,4vw,3rem)", color:C.white, marginBottom:"1rem" }}>
          Your Healing Journey<br/>
          <em style={{ color:C.goldLight }}>Begins Here.</em>
        </h2>
        <p style={{ color:C.fog, marginBottom:"3rem", lineHeight:1.8 }}>We will contact you on WhatsApp within 24 hours to confirm your appointment.</p>
        <button onClick={onClose} style={{ background:`linear-gradient(135deg,${C.green},${C.emerald})`, border:`1px solid ${C.gold}44`, color:C.parchment, padding:"1rem 3rem", cursor:"pointer", fontSize:"0.8rem", letterSpacing:"0.2em" }}>
          Return Home
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(8,15,12,0.97)", overflowY:"auto", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
      <div style={{ maxWidth:560, width:"100%", background:`linear-gradient(160deg,${C.deep},${C.forest})`, border:`1px solid ${C.gold}22`, padding:"3.5rem" }}>
        <p style={{ color:C.gold, fontSize:"0.6rem", letterSpacing:"0.5em", marginBottom:"0.75rem" }}>BEGIN YOUR JOURNEY</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", color:C.white, marginBottom:"0.5rem" }}>Book a Consultation</h2>
        <p style={{ color:C.fog, marginBottom:"2.5rem", fontSize:"0.875rem", lineHeight:1.7 }}>Clinic · Online · Toba Tek Singh, Pakistan</p>

        {[
          { k:"name", label:"Full Name", ph:"Your name" },
          { k:"phone", label:"WhatsApp / Phone", ph:"+92 300 0000000" },
          { k:"concern", label:"Health Concern", ph:"Briefly describe your condition" },
          { k:"date", label:"Preferred Date", ph:"dd / mm / yyyy" },
        ].map(f=>(
          <div key={f.k} style={{ marginBottom:"1.5rem" }}>
            <label style={{ display:"block", color:C.sage, fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"0.5rem" }}>{f.label}</label>
            <input value={form[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.ph}
              style={{ width:"100%", background:C.obsidian, border:`1px solid ${C.emerald}`, color:C.parchment, padding:"0.875rem", fontSize:"0.9rem", outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}
            />
          </div>
        ))}

        <div style={{ marginBottom:"2rem" }}>
          <label style={{ display:"block", color:C.sage, fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"0.75rem" }}>Consultation Type</label>
          <div style={{ display:"flex", gap:"1rem" }}>
            {[["clinic","At Clinic"],["online","Online"]].map(([t,l])=>(
              <button key={t} onClick={()=>setForm({...form,type:t})} style={{
                flex:1, padding:"0.875rem",
                background:form.type===t ? `linear-gradient(135deg,${C.green},${C.emerald})` : "transparent",
                border:`1px solid ${form.type===t ? C.green : C.emerald+"44"}`,
                color:form.type===t ? C.white : C.sage, cursor:"pointer",
                fontSize:"0.8rem", letterSpacing:"0.1em", fontFamily:"inherit",
                transition:"all 0.3s",
              }}>{l}</button>
            ))}
          </div>
        </div>

        <button onClick={()=>form.name&&form.phone&&setConfirmed(true)} style={{
          width:"100%", background:`linear-gradient(135deg,${C.green},${C.emerald})`,
          border:`1px solid ${C.gold}33`, color:C.parchment, padding:"1.1rem",
          cursor:"pointer", fontSize:"0.8rem", letterSpacing:"0.25em", textTransform:"uppercase",
          fontFamily:"inherit", marginBottom:"1rem",
        }}>
          Confirm Appointment
        </button>
        <button onClick={onClose} style={{ width:"100%", background:"transparent", border:`1px solid ${C.emerald}44`, color:C.fog, padding:"0.875rem", cursor:"pointer", fontSize:"0.8rem", fontFamily:"inherit" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ─── Herb Card ─────────────────────────────────────────────── */
const HERBS = [
  { name:"Ashwagandha", urdu:"اشوگندھا", desc:"The great adaptogen. Restores vitality, quiets the overworked adrenal system, and deepens sleep. Used in Unani medicine for three millennia as the sovereign tonic for exhaustion and anxiety.", origin:"South Asia", uses:"Stress · Fatigue · Anxiety · Immunity", note:"Withania somnifera" },
  { name:"Kalonji", urdu:"کلونجی", desc:"Black seed. The prophetic medicine. Nigella sativa's thymoquinone has been validated by modern research for its anti-inflammatory, antifungal, and immune-modulating properties.", origin:"Middle East", uses:"Immunity · Respiratory · Skin · Digestion", note:"Nigella sativa" },
  { name:"Mulethi", urdu:"ملیٹھی", desc:"Licorice root — fifty times sweeter than sugar, yet profoundly medicinal. Its glycyrrhizin heals stomach ulcers, soothes bronchial inflammation, and supports adrenal function.", origin:"Central Asia", uses:"Cough · Gut Healing · Inflammation · Adrenal", note:"Glycyrrhiza glabra" },
  { name:"Zafran", urdu:"زعفران", desc:"Saffron, more precious than gold by weight. Crocin and safranal compounds elevate serotonin, reduce oxidative stress, and have graced royal Unani pharmacopoeias for centuries.", origin:"Persia · Kashmir", uses:"Depression · Circulation · Anti-aging · Eyes", note:"Crocus sativus" },
  { name:"Adrak", urdu:"ادرک", desc:"Ginger — the universal remedy traded along the Silk Road for four thousand years. Warms the digestive system, reduces nausea, and carries active compounds deep into inflamed tissue.", origin:"Southeast Asia", uses:"Digestion · Nausea · Circulation · Pain", note:"Zingiber officinale" },
  { name:"Tulsi", urdu:"تُلسی", desc:"Sacred basil, revered across South Asia. A potent antimicrobial and respiratory tonic whose eugenol compounds reduce viral load, clear airways, and calm the nervous system simultaneously.", origin:"India · Pakistan", uses:"Respiratory · Immunity · Anxiety · Viral", note:"Ocimum sanctum" },
];

function HerbCard({ herb, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background: hov ? `linear-gradient(135deg,${C.deep},${C.emerald}44)` : `linear-gradient(135deg,${C.deep},${C.forest})`,
        border:`1px solid ${hov ? C.gold+"55" : C.emerald+"33"}`,
        padding:"2rem", cursor:"pointer",
        transition:"all 0.4s ease",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov ? `0 20px 60px ${C.obsidian}` : "none",
      }}>
      <p style={{ color:C.gold, fontSize:"0.6rem", letterSpacing:"0.35em", marginBottom:"0.5rem", textTransform:"uppercase" }}>{herb.note}</p>
      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", color:C.white, marginBottom:"0.2rem" }}>{herb.name}</h3>
      <p style={{ color:C.fog, fontSize:"1.1rem", fontWeight:300, marginBottom:"1rem" }}>{herb.urdu}</p>
      <p style={{ color:C.sage, fontSize:"0.8rem", lineHeight:1.8, marginBottom:"1rem" }}>{herb.desc.slice(0,120)}…</p>
      <p style={{ color:C.gold+"99", fontSize:"0.7rem", letterSpacing:"0.1em" }}>{herb.uses}</p>
    </div>
  );
}

function HerbModal({ herb, onClose }) {
  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(8,15,12,0.96)", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem", animation:"fadeIn 0.4s" }} onClick={onClose}>
      <div style={{ maxWidth:560, width:"100%", background:`linear-gradient(160deg,${C.deep},${C.forest})`, border:`1px solid ${C.gold}33`, padding:"3rem", position:"relative" }} onClick={e=>e.stopPropagation()}>
        {/* Botanical illustration placeholder */}
        <div style={{ width:80, height:80, border:`1px solid ${C.gold}44`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.5rem" }}>
          <svg viewBox="0 0 80 80" width="80" height="80">
            <circle cx="40" cy="40" r="30" fill="none" stroke={C.gold} strokeWidth="0.5" strokeOpacity="0.4"/>
            <path d="M40 20 Q50 30 40 40 Q30 30 40 20" fill="none" stroke={C.sage} strokeWidth="1.2"/>
            <path d="M40 40 Q50 50 40 60 Q30 50 40 40" fill="none" stroke={C.sage} strokeWidth="1.2"/>
            <path d="M20 40 Q30 30 40 40 Q30 50 20 40" fill="none" stroke={C.sage} strokeWidth="1.2"/>
            <path d="M60 40 Q50 30 40 40 Q50 50 60 40" fill="none" stroke={C.sage} strokeWidth="1.2"/>
            <line x1="40" y1="10" x2="40" y2="70" stroke={C.gold} strokeWidth="0.5" strokeOpacity="0.3"/>
            <line x1="10" y1="40" x2="70" y2="40" stroke={C.gold} strokeWidth="0.5" strokeOpacity="0.3"/>
          </svg>
        </div>
        <p style={{ color:C.gold, fontSize:"0.6rem", letterSpacing:"0.4em", marginBottom:"0.5rem" }}>ORIGIN · {herb.origin}</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.2rem", color:C.white, marginBottom:"0.3rem" }}>{herb.name}</h2>
        <p style={{ color:C.fog, fontSize:"1.3rem", fontWeight:300, marginBottom:"1.5rem" }}>{herb.urdu}</p>
        <p style={{ color:C.fog, lineHeight:2, marginBottom:"1.5rem" }}>{herb.desc}</p>
        <div style={{ borderTop:`1px solid ${C.emerald}44`, paddingTop:"1rem" }}>
          <p style={{ color:C.sage, fontSize:"0.8rem", letterSpacing:"0.05em" }}>
            <span style={{ color:C.gold }}>Traditional Uses · </span>{herb.uses}
          </p>
        </div>
        <button onClick={onClose} style={{ marginTop:"1.5rem", background:"transparent", border:`1px solid ${C.emerald}`, color:C.sage, padding:"0.6rem 1.75rem", cursor:"pointer", fontSize:"0.75rem", letterSpacing:"0.2em", fontFamily:"inherit" }}>
          Close
        </button>
      </div>
    </div>
  );
}

/* ─── Main App ─────────────────────────────────────────────── */
export default function GhosiaDawakhana() {
  const [intro, setIntro] = useState(0);
  const [navVis, setNavVis] = useState(false);
  const [activeOrgan, setActiveOrgan] = useState(null);
  const [activeHerb, setActiveHerb] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bodyHint, setBodyHint] = useState(null);

  useEffect(() => {
    const t = [
      setTimeout(() => setIntro(1), 600),
      setTimeout(() => setIntro(2), 1800),
      setTimeout(() => setIntro(3), 3200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const fn = () => { setNavVis(window.scrollY > 60); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ background:C.obsidian, color:C.parchment, fontFamily:"'Cormorant Garamond','Georgia',serif", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::selection{background:#2D6A4F;color:#FAFAF8;}
        button,input{font-family:inherit;}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes cinemaFloat{0%{transform:translateY(100vh);opacity:0}5%{opacity:0.8}85%{opacity:0.4}100%{transform:translateY(-100px) translateX(30px);opacity:0}}
        @keyframes fogDrift{from{transform:translateX(-60px) scaleX(1.1)}to{transform:translateX(60px) scaleX(1.3)}}
        @keyframes shimmerText{0%{background-position:200% center}100%{background-position:-200% center}}
        @keyframes pulse{0%,100%{opacity:0.5}50%{opacity:1}}
        @keyframes orbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
        @keyframes scanline{0%{top:-100%}100%{top:200%}}
        @keyframes glowBreath{0%,100%{box-shadow:0 0 20px #2D6A4F22}50%{box-shadow:0 0 60px #2D6A4F55,0 0 120px #C49A3C11}}
        @keyframes lineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes rayFlicker{0%,100%{opacity:0.04}40%{opacity:0.12}70%{opacity:0.06}}
        input:focus{border-color:#2D6A4F!important;outline:none;box-shadow:0 0 0 1px #2D6A4F44;}
      `}</style>

      {/* ══ FLOATING NAV ══════════════════════════════════════════ */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:100,
        padding:"1.25rem 4rem",
        background: navVis ? "rgba(8,15,12,0.9)" : "transparent",
        backdropFilter: navVis ? "blur(24px)" : "none",
        borderBottom: navVis ? `1px solid ${C.emerald}22` : "none",
        transition:"all 0.6s ease",
        display:"flex",alignItems:"center",justifyContent:"space-between",
      }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:"0.8rem", letterSpacing:"0.2em", color:C.goldLight }}>
          GHOSIA DAWAKHANA
        </div>
        <div style={{ display:"flex",gap:"2.5rem",alignItems:"center" }}>
          {["treatments","herbs","about","contact"].map(s=>(
            <button key={s} onClick={()=>goto(s)} style={{
              background:"none",border:"none",color:C.fog,cursor:"pointer",
              fontSize:"0.7rem",letterSpacing:"0.25em",textTransform:"uppercase",
              transition:"color 0.3s",padding:0,
            }}
              onMouseEnter={e=>e.target.style.color=C.goldLight}
              onMouseLeave={e=>e.target.style.color=C.fog}
            >{s}</button>
          ))}
          <button onClick={()=>setShowBooking(true)} style={{
            background:"transparent",border:`1px solid ${C.gold}55`,color:C.goldLight,
            padding:"0.5rem 1.5rem",cursor:"pointer",fontSize:"0.7rem",letterSpacing:"0.2em",
            transition:"all 0.3s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.background=C.gold+"22";e.currentTarget.style.borderColor=C.gold;}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor=C.gold+"55";}}
          >
            Book Consultation
          </button>
        </div>
      </nav>

      {/* ══ HERO — CINEMATIC OPENING ══════════════════════════════ */}
      <section style={{ minHeight:"100vh", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        {/* Deep forest gradient */}
        <div style={{ position:"absolute",inset:0, background:`radial-gradient(ellipse 100% 70% at 50% 20%, ${C.emerald}55 0%, ${C.deep}88 40%, ${C.obsidian} 100%)` }}/>

        {/* Sunrays */}
        {[18,28,38,52,66,76].map((x,i)=>(
          <div key={i} style={{
            position:"absolute",top:0,left:`${x}%`,
            width:1,height:"75%",
            background:`linear-gradient(180deg, ${C.goldLight}${intro>=2?"18":"00"}, transparent)`,
            transformOrigin:"top center",
            animation:`rayFlicker ${3.5+i*0.7}s ${i*0.4}s ease-in-out infinite`,
            transition:"background 3s ease",
          }}/>
        ))}

        {/* Fog layer */}
        <div style={{
          position:"absolute",bottom:"15%",left:"-20%",right:"-20%",height:220,
          background:`linear-gradient(180deg,transparent,${C.deep}55,transparent)`,
          animation:"fogDrift 18s ease-in-out infinite alternate",
          opacity: intro >= 1 ? 0.7 : 0,
          transition:"opacity 3s ease",
        }}/>

        {/* Falling leaves — pure CSS shapes */}
        {intro >= 2 && [8,22,40,58,74,88].map((x,i)=>(
          <div key={i} style={{
            position:"absolute",top:"-5%",left:`${x}%`,
            width:6,height:8,
            background:C.green,
            clipPath:"ellipse(50% 100% at 50% 100%)",
            animation:`cinemaFloat ${10+i*1.5}s ${i*1.8}s linear infinite`,
            opacity:0.4,
          }}/>
        ))}

        {/* Particles */}
        {intro >= 2 && <Particles count={30} color={C.goldLight} size={1.5} speed={0.4}/>}

        {/* HERO CONTENT */}
        <div style={{
          textAlign:"center",position:"relative",zIndex:10,
          opacity: intro >= 3 ? 1 : 0,
          transform: intro >= 3 ? "translateY(0)" : "translateY(24px)",
          transition:"all 1.5s ease",
          padding:"0 2rem",
          maxWidth:900,
        }}>
          {/* Decorative rule */}
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:"1.5rem",marginBottom:"2rem" }}>
            <div style={{ width:80,height:1,background:`linear-gradient(90deg,transparent,${C.gold})`, animation:"lineGrow 2s ease both" }}/>
            <span style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.55em",whiteSpace:"nowrap" }}>UNANI · NATURAL HEALING · TOBA TEK SINGH</span>
            <div style={{ width:80,height:1,background:`linear-gradient(90deg,${C.gold},transparent)`, animation:"lineGrow 2s ease both" }}/>
          </div>

          {/* Main wordmark */}
          <h1 style={{
            fontFamily:"'Cinzel',serif",
            fontSize:"clamp(3rem,10vw,7rem)",
            fontWeight:400,letterSpacing:"0.1em",lineHeight:1,
            background:`linear-gradient(135deg, ${C.parchment} 0%, ${C.goldLight} 35%, ${C.parchment} 55%, ${C.gold} 75%, ${C.parchment} 100%)`,
            backgroundSize:"300% auto",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
            animation:"shimmerText 8s linear infinite",
            marginBottom:"0.2rem",
          }}>GHOSIA</h1>
          <h1 style={{
            fontFamily:"'Cinzel',serif",
            fontSize:"clamp(3rem,10vw,7rem)",
            fontWeight:400,letterSpacing:"0.1em",lineHeight:1,
            background:`linear-gradient(135deg, ${C.parchment} 0%, ${C.goldLight} 35%, ${C.parchment} 55%, ${C.gold} 75%, ${C.parchment} 100%)`,
            backgroundSize:"300% auto",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
            animation:"shimmerText 8s 0.6s linear infinite",
            marginBottom:"1.5rem",
          }}>DAWAKHANA</h1>

          {/* Urdu */}
          <p style={{ color:C.sage,fontSize:"clamp(1rem,2.5vw,1.4rem)",fontWeight:300,marginBottom:"0.5rem",fontStyle:"italic" }}>گھوسیہ دواخانہ</p>

          {/* Tagline */}
          <p style={{ color:C.gold+"bb",fontSize:"clamp(0.65rem,1.2vw,0.8rem)",letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"3.5rem" }}>
            Healing Through Nature &nbsp;·&nbsp; Guided by Tradition
          </p>

          {/* CTAs */}
          <div style={{ display:"flex",gap:"1.25rem",justifyContent:"center",flexWrap:"wrap" }}>
            <button onClick={()=>setShowBooking(true)} style={{
              background:`linear-gradient(135deg,${C.green},${C.emerald})`,
              border:`1px solid ${C.green}`,color:C.parchment,
              padding:"1rem 2.75rem",cursor:"pointer",
              fontSize:"0.75rem",letterSpacing:"0.25em",textTransform:"uppercase",
              transition:"all 0.35s",
              animation:"glowBreath 3s ease-in-out infinite",
            }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
            >Book Appointment</button>
            <button onClick={()=>goto("treatments")} style={{
              background:"transparent",border:`1px solid ${C.gold}44`,color:C.goldLight,
              padding:"1rem 2.75rem",cursor:"pointer",
              fontSize:"0.75rem",letterSpacing:"0.25em",textTransform:"uppercase",
              transition:"all 0.35s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.gold+"44";e.currentTarget.style.transform="translateY(0)";}}
            >Explore Treatments</button>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)", opacity: intro >= 3 ? 0.4 : 0, transition:"opacity 1.5s 0.5s", display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem" }}>
          <div style={{ width:1,height:50,background:`linear-gradient(180deg,transparent,${C.gold},transparent)`,animation:"pulse 2s ease-in-out infinite" }}/>
          <span style={{ color:C.sage,fontSize:"0.55rem",letterSpacing:"0.4em" }}>SCROLL</span>
        </div>
      </section>

      {/* ══ THE BODY — INTERACTIVE ANATOMY ═══════════════════════ */}
      <section id="treatments" style={{ padding:"8rem 2rem",background:C.obsidian,position:"relative",overflow:"hidden" }}>
        {/* Ambient glow */}
        <div style={{ position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%)", width:600,height:600,borderRadius:"50%", background:`radial-gradient(circle,${C.emerald}12,transparent)`, pointerEvents:"none" }}/>
        <Particles count={15} color={C.green} size={1.5} speed={0.3}/>

        <div style={{ maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 480px",gap:"6rem",alignItems:"center",position:"relative",zIndex:2 }}>

          {/* Left — Organ list */}
          <div>
            <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.5em",marginBottom:"1.25rem" }}>ENTER THE BODY</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.5rem)",marginBottom:"1.5rem",lineHeight:1.15 }}>
              Journey Inside<br/><em style={{ color:C.sage }}>the Human Body</em>
            </h2>
            <p style={{ color:C.fog,lineHeight:2,marginBottom:"3rem",maxWidth:480 }}>
              The skeleton beside you is a map. Each glowing region marks a system in need of care. Select one to begin the cinematic healing sequence — from condition, through treatment, to restoration.
            </p>

            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem" }}>
              {Object.entries(ORGAN_DATA).map(([id,d])=>(
                <button key={id} onClick={()=>setActiveOrgan(id)}
                  onMouseEnter={()=>setBodyHint(id)}
                  onMouseLeave={()=>setBodyHint(null)}
                  style={{
                    background: bodyHint===id ? `linear-gradient(135deg,${C.deep},${d.color}22)` : C.deep,
                    border:`1px solid ${bodyHint===id ? d.color+"55" : C.emerald+"33"}`,
                    color: C.parchment,
                    padding:"1.25rem",textAlign:"left",cursor:"pointer",
                    transition:"all 0.35s",
                  }}>
                  <div style={{ width:8,height:8,borderRadius:"50%",background:d.color,marginBottom:"0.75rem",animation:"pulse 2s ease-in-out infinite" }}/>
                  <p style={{ fontSize:"0.8rem",fontFamily:"'Playfair Display',serif",marginBottom:"0.2rem",color:C.white }}>{d.name}</p>
                  <p style={{ fontSize:"0.7rem",color:C.fog,fontWeight:300 }}>{d.urdu}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Skeleton */}
          <div style={{ position:"relative",height:680, animation:"orbPulse 5s ease-in-out infinite" }}>
            {/* Scanline effect */}
            <div style={{
              position:"absolute",left:0,right:0,height:3,
              background:`linear-gradient(180deg,transparent,${C.sage}22,transparent)`,
              animation:"scanline 6s linear infinite",
              zIndex:5,pointerEvents:"none",
            }}/>
            <SkeletonBody
              activeOrgan={bodyHint || activeOrgan}
              onOrganClick={org=>setActiveOrgan(org.id)}
            />
            {/* Organ label tooltip */}
            {bodyHint && ORGAN_DATA[bodyHint] && (
              <div style={{
                position:"absolute",bottom:-30,left:"50%",transform:"translateX(-50%)",
                color:C.goldLight,fontSize:"0.7rem",letterSpacing:"0.2em",
                whiteSpace:"nowrap",animation:"fadeIn 0.3s ease",
              }}>
                {ORGAN_DATA[bodyHint].name} &rarr; Select to begin
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ HAKEEM — STORY ════════════════════════════════════════ */}
      <section id="about" style={{ padding:"8rem 2rem",background:`linear-gradient(180deg,${C.obsidian},${C.forest}55,${C.obsidian})`,position:"relative" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6rem",alignItems:"start" }}>
          {/* Portrait */}
          <div>
            <div style={{
              width:"100%",paddingBottom:"125%",position:"relative",
              border:`1px solid ${C.emerald}44`,
              background:`linear-gradient(155deg,${C.deep},${C.forest})`,
              overflow:"hidden",
            }}>
              {/* Portrait visual — anatomical mandala */}
              <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <svg viewBox="0 0 260 320" width="260" height="320">
                  {/* Concentric rings */}
                  {[110,90,70,50].map((r,i)=>(
                    <circle key={i} cx="130" cy="155" r={r} fill="none" stroke={C.green} strokeWidth="0.6" strokeOpacity={0.2+i*0.08} strokeDasharray={i%2===0?"4 8":"2 6"}/>
                  ))}
                  {/* Silhouette suggestion */}
                  <ellipse cx="130" cy="75" rx="38" ry="42" fill="none" stroke={C.sage} strokeWidth="1" strokeOpacity="0.5"/>
                  <path d="M92 115 Q95 145 90 180 L100 280 L130 285 L160 280 L170 180 Q165 145 168 115" fill="none" stroke={C.sage} strokeWidth="1" strokeOpacity="0.4"/>
                  {/* Spine line */}
                  <line x1="130" y1="115" x2="130" y2="280" stroke={C.gold} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 5"/>
                  {/* Botanical overlays */}
                  {[0,60,120,180,240,300].map((angle,i)=>(
                    <path key={i}
                      d={`M130 155 Q${130+55*Math.cos((angle-90)*Math.PI/180)} ${155+55*Math.sin((angle-90)*Math.PI/180)} ${130+48*Math.cos((angle-60)*Math.PI/180)} ${155+48*Math.sin((angle-60)*Math.PI/180)}`}
                      fill="none" stroke={C.gold} strokeWidth="0.5" strokeOpacity="0.15"/>
                  ))}
                  <text x="130" y="308" textAnchor="middle" fill={C.gold} fontSize="9" fontFamily="Cinzel,serif" letterSpacing="3" opacity="0.7">HAKEEM</text>
                </svg>
              </div>
              {/* Corner marks */}
              {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i)=>(
                <div key={i} style={{ position:"absolute",[v]:16,[h]:16,width:18,height:18,
                  borderTop:v==="top"?`1px solid ${C.gold}66`:undefined,
                  borderBottom:v==="bottom"?`1px solid ${C.gold}66`:undefined,
                  borderLeft:h==="left"?`1px solid ${C.gold}66`:undefined,
                  borderRight:h==="right"?`1px solid ${C.gold}66`:undefined,
                }}/>
              ))}
            </div>
          </div>

          {/* Story */}
          <div style={{ paddingTop:"1rem" }}>
            <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.5em",marginBottom:"1.25rem" }}>THE PRACTITIONER</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",marginBottom:"1.5rem",lineHeight:1.2 }}>
              Where Ancient Wisdom<br/>
              <em style={{ color:C.sage }}>Meets Compassionate Care</em>
            </h2>
            <p style={{ color:C.fog,lineHeight:2,marginBottom:"1.5rem",fontSize:"1.05rem" }}>
              Unani medicine does not treat disease. It restores the conditions in which the body can heal itself — adjusting temperament, clearing obstruction, and rebalancing the four humours through precisely formulated herbal compounds.
            </p>
            <p style={{ color:C.fog,lineHeight:2,marginBottom:"3rem" }}>
              At Ghosia Dawakhana, every consultation begins with the pulse. Government-qualified, rooted in classical Unani canon, and guided by decades of clinical observation, our practice serves the families of Toba Tek Singh and patients across Pakistan through online and in-clinic care.
            </p>

            {/* Credentials */}
            <div style={{ borderLeft:`1px solid ${C.gold}33`,paddingLeft:"1.75rem",marginBottom:"2.5rem" }}>
              {[
                { label:"Qualification", text:"Government Certified Unani Practitioner" },
                { label:"Specialty", text:"Hijama Therapy · Herbal Medicine · Chronic Conditions" },
                { label:"Location", text:"Toba Tek Singh, Punjab, Pakistan" },
                { label:"Consultation", text:"Clinic · Online · WhatsApp Available" },
              ].map((c,i)=>(
                <div key={i} style={{ display:"flex",gap:"1.5rem",marginBottom:"1.25rem",alignItems:"flex-start" }}>
                  <div style={{ width:6,height:6,borderRadius:"50%",background:C.gold,marginTop:8,flexShrink:0,animation:"pulse 3s ease-in-out infinite" }}/>
                  <div>
                    <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.25em",marginBottom:"0.2rem" }}>{c.label.toUpperCase()}</p>
                    <p style={{ color:C.fog,fontSize:"0.9rem",lineHeight:1.6 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={()=>setShowBooking(true)} style={{
              background:"transparent",border:`1px solid ${C.gold}55`,color:C.goldLight,
              padding:"1rem 2.5rem",cursor:"pointer",fontSize:"0.75rem",letterSpacing:"0.25em",
              transition:"all 0.35s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background=C.gold+"22";e.currentTarget.style.borderColor=C.gold;}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor=C.gold+"55";}}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ══ HERBAL LIBRARY ════════════════════════════════════════ */}
      <section id="herbs" style={{ padding:"8rem 2rem",background:C.obsidian }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ marginBottom:"5rem", maxWidth:600 }}>
            <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.5em",marginBottom:"1rem" }}>THE APOTHECARY</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.5rem)",marginBottom:"1rem",lineHeight:1.15 }}>
              The Herbal<br/><em style={{ color:C.sage }}>Materia Medica</em>
            </h2>
            <p style={{ color:C.fog,lineHeight:2 }}>
              Each plant carries centuries of clinical observation. These are not supplements — they are medicines, refined over millennia of Unani pharmacological tradition.
            </p>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5px",background:C.emerald+"22" }}>
            {HERBS.map((h,i)=>(
              <div key={i} style={{ background:C.obsidian }}>
                <HerbCard herb={h} onClick={()=>setActiveHerb(h)}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HEALING JOURNEY ═══════════════════════════════════════ */}
      <section style={{ padding:"8rem 2rem",background:`linear-gradient(180deg,${C.obsidian},${C.deep}44,${C.obsidian})` }}>
        <div style={{ maxWidth:900,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:"5rem" }}>
            <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.5em",marginBottom:"1rem" }}>THE PATH TO HEALING</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4vw,3.5rem)" }}>
              Your Healing Journey
            </h2>
          </div>

          <div style={{ position:"relative" }}>
            {/* Spine line */}
            <div style={{ position:"absolute",left:"50%",top:0,bottom:0,width:1, background:`linear-gradient(180deg,transparent,${C.gold}55,${C.green}55,${C.gold}33,transparent)`,transform:"translateX(-50%)" }}/>

            {[
              { n:"Consultation", t:"A deep listening session. Pulse reading, tongue examination, constitutional assessment through classical Unani diagnostic methods." },
              { n:"Formulation", t:"Personalized herbal compounds prepared specifically for your constitution — not generic protocols, but individual medicine." },
              { n:"Lifestyle", t:"Dietary guidance, sleep architecture, and daily routine aligned with Unani principles of temperament and seasonal care." },
              { n:"Healing", t:"The body, now supported and nourished, initiates its own deep repair. The physician guides; nature restores." },
              { n:"Follow-up", t:"Formula adjustments as your health evolves. Ongoing partnership through your complete recovery." },
            ].map((item,i)=>(
              <div key={i} style={{ display:"flex", justifyContent: i%2===0?"flex-start":"flex-end", marginBottom:"3.5rem",position:"relative" }}>
                {/* Timeline dot */}
                <div style={{ position:"absolute",left:"50%",top:"1.25rem",transform:"translate(-50%,-50%)",width:10,height:10,borderRadius:"50%",background:C.gold,boxShadow:`0 0 20px ${C.gold}88`,zIndex:2 }}/>
                {/* Connector */}
                <div style={{
                  position:"absolute",
                  left: i%2===0 ? "50%" : "auto",
                  right: i%2===1 ? "50%" : "auto",
                  top:"1.25rem",
                  width:"5%",height:1,
                  background:C.gold+"44",
                  transform: i%2===0 ? "translateY(-50%)" : "translateY(-50%)",
                }}/>

                <div style={{ width:"42%",background:C.deep,border:`1px solid ${C.emerald}33`,padding:"1.75rem" }}>
                  <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.35em",marginBottom:"0.6rem" }}>0{i+1}</p>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",color:C.white,fontSize:"1.15rem",marginBottom:"0.6rem" }}>{item.n}</h3>
                  <p style={{ color:C.fog,fontSize:"0.875rem",lineHeight:1.85 }}>{item.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
      <section id="contact" style={{ padding:"10rem 2rem",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,background:`radial-gradient(ellipse 70% 60% at 50% 60%,${C.emerald}20,${C.obsidian})` }}/>
        <Particles count={40} color={C.goldLight} size={1.5} speed={0.3}/>

        <div style={{ maxWidth:720,margin:"0 auto",textAlign:"center",position:"relative",zIndex:2 }}>
          {/* Seal */}
          <div style={{ width:100,height:100,margin:"0 auto 3rem" }}>
            <svg viewBox="0 0 100 100" width="100" height="100">
              <circle cx="50" cy="50" r="46" fill="none" stroke={C.gold} strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 5"/>
              <circle cx="50" cy="50" r="38" fill="none" stroke={C.gold} strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="50" cy="50" r="30" fill={C.gold+"11"}/>
              <path d="M50 24 L55 38 L70 38 L58 47 L63 61 L50 52 L37 61 L42 47 L30 38 L45 38 Z" fill="none" stroke={C.gold} strokeWidth="0.8" strokeOpacity="0.6"/>
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
            </svg>
          </div>

          <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.55em",marginBottom:"1.5rem" }}>THE FINAL CHAPTER</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.2rem,5vw,4rem)",lineHeight:1.2,marginBottom:"1.5rem" }}>
            Your Healing Journey<br/>
            <em style={{ color:C.goldLight }}>Begins Here.</em>
          </h2>
          <p style={{ color:C.fog,lineHeight:2,marginBottom:"3.5rem",maxWidth:520,margin:"0 auto 3.5rem",fontSize:"1.05rem" }}>
            You have walked through nature, journeyed inside the body, and witnessed the intelligence of traditional healing. The next step is a single conversation.
          </p>

          <button onClick={()=>setShowBooking(true)} style={{
            background:`linear-gradient(135deg,${C.green},${C.emerald})`,
            border:`1px solid ${C.gold}44`,color:C.parchment,
            padding:"1.25rem 4rem",cursor:"pointer",
            fontSize:"0.8rem",letterSpacing:"0.3em",textTransform:"uppercase",
            display:"block",margin:"0 auto 4rem",
            transition:"all 0.4s",
            animation:"glowBreath 3s ease-in-out infinite",
          }}
            onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px) scale(1.02)"}
            onMouseLeave={e=>e.currentTarget.style.transform="translateY(0) scale(1)"}
          >
            Book Your Consultation
          </button>

          {/* Contact grid */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"3rem",borderTop:`1px solid ${C.emerald}33`,paddingTop:"3rem" }}>
            {[
              { label:"Location", value:"Toba Tek Singh\nPunjab, Pakistan" },
              { label:"Hours", value:"Sat – Thu\n9 am – 6 pm" },
              { label:"Consultation", value:"Clinic · Online\nWhatsApp Available" },
            ].map((c,i)=>(
              <div key={i}>
                <p style={{ color:C.gold,fontSize:"0.6rem",letterSpacing:"0.3em",marginBottom:"0.75rem" }}>{c.label.toUpperCase()}</p>
                <p style={{ color:C.fog,fontSize:"0.875rem",lineHeight:1.9,whiteSpace:"pre-line" }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER — NIGHT FALLS ══════════════════════════════════ */}
      <footer style={{ padding:"4rem 2rem",textAlign:"center",background:C.obsidian,borderTop:`1px solid ${C.deep}`,position:"relative",overflow:"hidden" }}>
        {/* Fireflies */}
        {[15,30,48,65,80,92].map((x,i)=>(
          <div key={i} style={{
            position:"absolute",top:`${20+i*10}%`,left:`${x}%`,
            width:3,height:3,borderRadius:"50%",background:C.goldLight,
            boxShadow:`0 0 8px ${C.goldLight}`,
            animation:`pulse ${2+i*0.6}s ${i*0.5}s ease-in-out infinite`,
          }}/>
        ))}
        <div style={{ position:"relative",zIndex:2 }}>
          <p style={{ fontFamily:"'Cinzel',serif",color:C.gold,fontSize:"0.85rem",letterSpacing:"0.25em",marginBottom:"0.5rem" }}>GHOSIA DAWAKHANA</p>
          <p style={{ color:C.emerald,fontSize:"0.7rem",marginBottom:"0.4rem" }}>گھوسیہ دواخانہ · Toba Tek Singh, Pakistan</p>
          <p style={{ color:C.emerald+"88",fontSize:"0.65rem",marginTop:"2rem",letterSpacing:"0.1em" }}>
            Healing Through Nature · Guided by Tradition · © 2026
          </p>
        </div>
      </footer>

      {/* ══ MODALS ════════════════════════════════════════════════ */}
      {activeOrgan && <OrganModal organId={activeOrgan} onClose={()=>setActiveOrgan(null)}/>}
      {activeHerb  && <HerbModal herb={activeHerb} onClose={()=>setActiveHerb(null)}/>}
      {showBooking && <BookingModal onClose={()=>setShowBooking(false)}/>}
    </div>
  );
}
