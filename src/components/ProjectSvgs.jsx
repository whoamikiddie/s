// SVG Illustrations for each department/domain
// These are inline SVG art components - no external images needed

export function AISvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D0D1A"/>
          <stop offset="100%" stopColor="#1A0F2E"/>
        </linearGradient>
        <linearGradient id="ai-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0"/>
          <stop offset="50%" stopColor="#6C63FF"/>
          <stop offset="100%" stopColor="#43E6C5" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="ai-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#6C63FF" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#ai-bg)"/>
      {/* Grid lines */}
      {[40,80,120,160,200,240,280,320,360].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="#6C63FF" strokeOpacity="0.06" strokeWidth="1"/>
      ))}
      {[30,60,90,120,150,180,210].map(y => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#6C63FF" strokeOpacity="0.06" strokeWidth="1"/>
      ))}
      {/* Neural network nodes */}
      {/* Layer 1 */}
      {[60,100,140,180].map((y, i) => (
        <g key={i}>
          <circle cx="80" cy={y} r="10" fill="#1A1A2E" stroke="#6C63FF" strokeWidth="1.5"/>
          <circle cx="80" cy={y} r="4" fill="#6C63FF"/>
        </g>
      ))}
      {/* Layer 2 */}
      {[70,110,150,190].map((y, i) => (
        <g key={i}>
          <circle cx="180" cy={y} r="10" fill="#1A1A2E" stroke="#8B83FF" strokeWidth="1.5"/>
          <circle cx="180" cy={y} r="4" fill="#8B83FF"/>
        </g>
      ))}
      {/* Layer 3 */}
      {[80,120,160].map((y, i) => (
        <g key={i}>
          <circle cx="280" cy={y} r="12" fill="#1A1A2E" stroke="#43E6C5" strokeWidth="2"/>
          <circle cx="280" cy={y} r="5" fill="#43E6C5"/>
        </g>
      ))}
      {/* Output */}
      <circle cx="360" cy="120" r="16" fill="#1A1A2E" stroke="#6C63FF" strokeWidth="2.5"/>
      <circle cx="360" cy="120" r="7" fill="#6C63FF"/>
      <circle cx="360" cy="120" r="28" fill="url(#ai-glow)"/>
      {/* Connection lines layer 1 → 2 */}
      {[60,100,140,180].map((y1,i) =>
        [70,110,150,190].map((y2,j) => (
          <line key={`${i}-${j}`} x1="90" y1={y1} x2="170" y2={y2}
            stroke="#6C63FF" strokeOpacity="0.2" strokeWidth="0.8"/>
        ))
      )}
      {/* Connection lines layer 2 → 3 */}
      {[70,110,150,190].map((y1,i) =>
        [80,120,160].map((y2,j) => (
          <line key={`${i}-${j}`} x1="190" y1={y1} x2="268" y2={y2}
            stroke="#43E6C5" strokeOpacity="0.2" strokeWidth="0.8"/>
        ))
      )}
      {/* Layer 3 → output */}
      {[80,120,160].map((y, i) => (
        <line key={i} x1="292" y1={y} x2="344" y2="120"
          stroke="#6C63FF" strokeOpacity="0.4" strokeWidth="1.2"/>
      ))}
      {/* Label */}
      <text x="200" y="225" textAnchor="middle" fill="#6C63FF" fillOpacity="0.5"
        fontFamily="monospace" fontSize="11" letterSpacing="3">NEURAL NETWORK</text>
    </svg>
  );
}

export function IoTSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="iot-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#080F1A"/>
          <stop offset="100%" stopColor="#0B1A1A"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#iot-bg)"/>
      {/* Central hub */}
      <circle cx="200" cy="120" r="28" fill="#0D2020" stroke="#43E6C5" strokeWidth="2"/>
      <circle cx="200" cy="120" r="16" fill="#43E6C5" fillOpacity="0.15" stroke="#43E6C5" strokeWidth="1.5"/>
      <circle cx="200" cy="120" r="6" fill="#43E6C5"/>
      {/* Wifi rings */}
      <circle cx="200" cy="120" r="45" fill="none" stroke="#43E6C5" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6"/>
      <circle cx="200" cy="120" r="70" fill="none" stroke="#43E6C5" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 8"/>
      {/* Connected devices */}
      {[
        { x: 80, y: 60 }, { x: 320, y: 60 }, { x: 60, y: 160 },
        { x: 340, y: 160 }, { x: 200, y: 28 },
      ].map((d, i) => (
        <g key={i}>
          <line x1="200" y1="120" x2={d.x} y2={d.y} stroke="#43E6C5" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4"/>
          <rect x={d.x-14} y={d.y-14} width="28" height="28" rx="6"
            fill="#0D2020" stroke="#43E6C5" strokeWidth="1.5"/>
          <rect x={d.x-6} y={d.y-6} width="12" height="12" rx="2" fill="#43E6C5" fillOpacity="0.6"/>
        </g>
      ))}
      <text x="200" y="225" textAnchor="middle" fill="#43E6C5" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">IoT MESH NETWORK</text>
    </svg>
  );
}

export function BlockchainSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="bc-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1020"/>
          <stop offset="100%" stopColor="#101A0A"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bc-bg)"/>
      {/* Blockchain blocks */}
      {[40, 120, 200, 280, 360].map((x, i) => (
        <g key={i}>
          <rect x={x-32} y="85" width="64" height="70" rx="8"
            fill="#0F1A0F" stroke={i === 2 ? '#6C63FF' : '#60BFFF'} strokeWidth={i===2?2:1.5}/>
          {/* Hash lines */}
          <rect x={x-20} y="100" width="40" height="4" rx="2" fill="#60BFFF" fillOpacity="0.4"/>
          <rect x={x-20} y="110" width="28" height="4" rx="2" fill="#60BFFF" fillOpacity="0.25"/>
          <rect x={x-20} y="120" width="34" height="4" rx="2" fill="#60BFFF" fillOpacity="0.25"/>
          <rect x={x-20} y="130" width="22" height="4" rx="2" fill={i===2?'#6C63FF':'#60BFFF'} fillOpacity="0.5"/>
          {/* Block number */}
          <text x={x} y="145" textAnchor="middle" fill="#60BFFF" fillOpacity="0.5"
            fontFamily="monospace" fontSize="9">{`#${1000+i}`}</text>
          {/* Chain link */}
          {i < 4 && (
            <line x1={x+32} y1="120" x2={x+88} y2="120"
              stroke="#60BFFF" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 2"/>
          )}
        </g>
      ))}
      <text x="200" y="225" textAnchor="middle" fill="#60BFFF" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">BLOCKCHAIN LEDGER</text>
    </svg>
  );
}

export function EnergyHarvestSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="en-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A"/>
          <stop offset="100%" stopColor="#1A1400"/>
        </linearGradient>
        <linearGradient id="solar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#FF8C00"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#en-bg)"/>
      {/* Sun */}
      <circle cx="320" cy="60" r="30" fill="url(#solar-grad)" fillOpacity="0.15" stroke="#FFD700" strokeOpacity="0.5" strokeWidth="1.5"/>
      <circle cx="320" cy="60" r="16" fill="url(#solar-grad)" fillOpacity="0.8"/>
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={i}
            x1={320 + Math.cos(rad)*20} y1={60 + Math.sin(rad)*20}
            x2={320 + Math.cos(rad)*34} y2={60 + Math.sin(rad)*34}
            stroke="#FFD700" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round"/>
        );
      })}
      {/* Solar panel grid */}
      <rect x="60" y="60" width="160" height="100" rx="4" fill="#0A1020" stroke="#FFD700" strokeOpacity="0.4" strokeWidth="1.5"/>
      {[80,100,120,140,160,180,200].map(x => (
        <line key={x} x1={x} y1="60" x2={x} y2="160" stroke="#FFD700" strokeOpacity="0.15" strokeWidth="1"/>
      ))}
      {[80,100,120,140].map(y => (
        <line key={y} x1="60" y1={y} x2="220" y2={y} stroke="#FFD700" strokeOpacity="0.15" strokeWidth="1"/>
      ))}
      {/* Energy flow */}
      <path d="M 220 110 Q 270 90 300 140 Q 330 180 360 120"
        fill="none" stroke="#FFD700" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 4"/>
      {/* Battery */}
      <rect x="300" y="130" width="60" height="30" rx="4" fill="#0A0A0A" stroke="#FFD700" strokeOpacity="0.5" strokeWidth="1.5"/>
      <rect x="360" y="140" width="6" height="10" rx="2" fill="#FFD700" fillOpacity="0.5"/>
      <rect x="306" y="136" width="36" height="18" rx="2" fill="#FFD700" fillOpacity="0.25"/>
      <text x="200" y="225" textAnchor="middle" fill="#FFD700" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">ENERGY HARVESTING</text>
    </svg>
  );
}

export function SDNSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="sdn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#080B18"/>
          <stop offset="100%" stopColor="#0C1020"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#sdn-bg)"/>
      {/* Central controller */}
      <rect x="158" y="72" width="84" height="50" rx="10" fill="#0F1530" stroke="#6C63FF" strokeWidth="2"/>
      <text x="200" y="93" textAnchor="middle" fill="#6C63FF" fontSize="8" fontFamily="monospace" letterSpacing="1">SDN</text>
      <text x="200" y="107" textAnchor="middle" fill="#6C63FF" fillOpacity="0.7" fontSize="8" fontFamily="monospace">CONTROLLER</text>
      {/* Switches */}
      {[
        {x: 70, y: 160}, {x: 160, y: 175}, {x: 240, y: 175}, {x: 330, y: 160}
      ].map((s, i) => (
        <g key={i}>
          <line x1="200" y1="122" x2={s.x} y2={s.y}
            stroke="#6C63FF" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="5 3"/>
          <rect x={s.x-24} y={s.y-14} width="48" height="28" rx="6"
            fill="#0F1530" stroke="#8B83FF" strokeWidth="1.5"/>
          <text x={s.x} y={s.y+4} textAnchor="middle" fill="#8B83FF" fontSize="8" fontFamily="monospace">SW{i+1}</text>
        </g>
      ))}
      {/* Connections between switches */}
      <line x1="94" y1="160" x2="136" y2="168" stroke="#6C63FF" strokeOpacity="0.2" strokeWidth="1"/>
      <line x1="184" y1="175" x2="216" y2="175" stroke="#6C63FF" strokeOpacity="0.2" strokeWidth="1"/>
      <line x1="264" y1="168" x2="306" y2="162" stroke="#6C63FF" strokeOpacity="0.2" strokeWidth="1"/>
      {/* Data flow packets */}
      <rect x="148" y="140" width="8" height="5" rx="1" fill="#43E6C5" fillOpacity="0.7"/>
      <rect x="220" y="148" width="8" height="5" rx="1" fill="#43E6C5" fillOpacity="0.5"/>
      <text x="200" y="225" textAnchor="middle" fill="#6C63FF" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">NETWORK TOPOLOGY</text>
    </svg>
  );
}

export function BiomedSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="bio-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A0A14"/>
          <stop offset="100%" stopColor="#0F0A18"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bio-bg)"/>
      {/* Heart rate line */}
      <polyline
        points="20,120 70,120 90,70 105,160 120,120 160,120 180,90 195,145 208,120 380,120"
        fill="none" stroke="#FF6584" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline
        points="20,120 70,120 90,70 105,160 120,120 160,120 180,90 195,145 208,120 380,120"
        fill="none" stroke="#FF6584" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1"/>
      {/* Pulsing dot */}
      <circle cx="208" cy="120" r="6" fill="#FF6584"/>
      <circle cx="208" cy="120" r="16" fill="#FF6584" fillOpacity="0.15"/>
      {/* Grid */}
      {[40,80,120,160,200,240,280,320,360].map(x => (
        <line key={x} x1={x} y1="40" x2={x} y2="200" stroke="#FF6584" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {[60,100,140,180].map(y => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#FF6584" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {/* Stats */}
      <text x="340" y="60" textAnchor="middle" fill="#FF6584" fillOpacity="0.6" fontSize="10" fontFamily="monospace">BPM</text>
      <text x="340" y="75" textAnchor="middle" fill="#FF6584" fontSize="22" fontFamily="monospace" fontWeight="bold">72</text>
      <text x="200" y="225" textAnchor="middle" fill="#FF6584" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">BIOMEDICAL SIGNAL</text>
    </svg>
  );
}

export function MechSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="mech-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A0804"/>
          <stop offset="100%" stopColor="#14100A"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#mech-bg)"/>
      {/* Large gear */}
      <g transform="translate(140,120)">
        <circle r="50" fill="none" stroke="#FF7B65" strokeOpacity="0.2" strokeWidth="1"/>
        <circle r="35" fill="#14100A" stroke="#FF7B65" strokeOpacity="0.5" strokeWidth="2"/>
        <circle r="12" fill="#FF7B65" fillOpacity="0.3" stroke="#FF7B65" strokeWidth="1.5"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => {
          const r1=35, r2=50, rad=a*Math.PI/180;
          return (
            <rect key={i}
              x={r1*Math.cos(rad)-5} y={r1*Math.sin(rad)-5}
              width="10" height="15"
              transform={`rotate(${a} ${r1*Math.cos(rad)} ${r1*Math.sin(rad)})`}
              fill="#FF7B65" fillOpacity="0.6" rx="2"/>
          );
        })}
        {/* Spokes */}
        {[0,60,120,180,240,300].map((a,i) => {
          const rad=a*Math.PI/180;
          return (
            <line key={i} x1={12*Math.cos(rad)} y1={12*Math.sin(rad)}
              x2={33*Math.cos(rad)} y2={33*Math.sin(rad)}
              stroke="#FF7B65" strokeOpacity="0.6" strokeWidth="3"/>
          );
        })}
      </g>
      {/* Small gear */}
      <g transform="translate(260,100)">
        <circle r="20" fill="#14100A" stroke="#FF7B65" strokeOpacity="0.4" strokeWidth="1.5"/>
        <circle r="7" fill="#FF7B65" fillOpacity="0.2" stroke="#FF7B65" strokeWidth="1"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => {
          const rad=a*Math.PI/180;
          return (
            <rect key={i} x={20*Math.cos(rad)-3} y={20*Math.sin(rad)-3}
              width="6" height="9"
              transform={`rotate(${a} ${20*Math.cos(rad)} ${20*Math.sin(rad)})`}
              fill="#FF7B65" fillOpacity="0.5" rx="1"/>
          );
        })}
      </g>
      <text x="200" y="225" textAnchor="middle" fill="#FF7B65" fillOpacity="0.4"
        fontFamily="monospace" fontSize="11" letterSpacing="3">MECHANICAL DESIGN</text>
    </svg>
  );
}

export function AgriTechSvg() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="ag-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060D08"/>
          <stop offset="100%" stopColor="#0A1408"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#ag-bg)"/>
      {/* Ground */}
      <rect x="0" y="170" width="400" height="70" fill="#0A1408" rx="0"/>
      <rect x="0" y="165" width="400" height="10" fill="#0D1A0A" rx="4"/>
      {/* Plant */}
      <line x1="200" y1="170" x2="200" y2="90" stroke="#3A8A3A" strokeWidth="3" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="200" cy="130" rx="35" ry="16" fill="#2D7A2D" fillOpacity="0.7" transform="rotate(-30 200 130)"/>
      <ellipse cx="200" cy="115" rx="30" ry="14" fill="#3A9A3A" fillOpacity="0.7" transform="rotate(30 200 115)"/>
      <ellipse cx="200" cy="100" rx="22" ry="12" fill="#4DB84D" fillOpacity="0.65" transform="rotate(-15 200 100)"/>
      {/* Droplets */}
      {[[80,60],[160,30],[280,50],[340,80]].map(([x,y],i) => (
        <g key={i}>
          <ellipse cx={x} cy={y+10} rx="6" ry="10" fill="#43E6C5" fillOpacity="0.4"/>
          <path d={`M${x},${y} Q${x-6},${y+6} ${x},${y+20} Q${x+6},${y+6} ${x},${y}`}
            fill="#43E6C5" fillOpacity="0.35"/>
          <line x1={x} y1={y+20} x2={x} y2={y+40}
            stroke="#43E6C5" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3"/>
        </g>
      ))}
      {/* Sensor */}
      <rect x="300" y="140" width="40" height="28" rx="5" fill="#0A1408" stroke="#43E6C5" strokeWidth="1.5"/>
      <text x="320" y="160" textAnchor="middle" fill="#43E6C5" fontSize="8" fontFamily="monospace">SENSOR</text>
      <text x="200" y="225" textAnchor="middle" fill="#3A9A3A" fillOpacity="0.5"
        fontFamily="monospace" fontSize="11" letterSpacing="3">SMART IRRIGATION</text>
    </svg>
  );
}

export function defaultSvgForDept(dept) {
  const map = { cse: AISvg, ece: IoTSvg, it: BlockchainSvg, eee: BiomedSvg, mech: MechSvg, civil: SDNSvg };
  return map[dept] || AISvg;
}

export const projectSvgMap = {
  1: AISvg,
  2: EnergyHarvestSvg,
  3: SDNSvg,
  4: BiomedSvg,
  5: IoTSvg,
  6: BlockchainSvg,
  7: AgriTechSvg,
  8: MechSvg,
};
