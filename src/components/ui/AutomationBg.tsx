import React from 'react';

/* ─── helper: compute a gear outline polygon ──────────────── */
function gear(
  cx: number, cy: number,
  R: number,   // tip radius
  r: number,   // root radius
  n: number,   // tooth count
): string {
  const tf  = 0.42;            // tooth width as fraction of pitch
  const gap = (1 - tf) / 2;
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const base = (2 * Math.PI * i) / n;
    const c    = (a: number, rad: number) =>
      `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
    pts.push(
      c(base,                              r),
      c(base + gap * (2 * Math.PI / n),   R),
      c(base + (gap + tf) * (2 * Math.PI / n), R),
      c(base + (2 * Math.PI / n),         r),
    );
  }
  return `M ${pts.join(' L ')} Z`;
}

/* ════════════════════════════════════════════════════════════
   ROBOT ARM  — industrial 6-DOF arm, side-view schematic
   ════════════════════════════════════════════════════════════ */
export const RobotArmBg: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 500 620"
    fill="none"
    stroke="white"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      position: 'absolute',
      opacity:  0.055,
      pointerEvents: 'none',
      userSelect:    'none',
      ...style,
    }}
  >
    {/* ── base plate ── */}
    <rect x="115" y="552" width="270" height="36" rx="5" />
    <rect x="168" y="522" width="164" height="34" rx="4" />
    {/* mounting bolts */}
    <circle cx="148" cy="570" r="8" /><circle cx="148" cy="570" r="3" fill="white" />
    <circle cx="352" cy="570" r="8" /><circle cx="352" cy="570" r="3" fill="white" />
    <circle cx="185" cy="539" r="5" /><circle cx="185" cy="539" r="2" fill="white" />
    <circle cx="315" cy="539" r="5" /><circle cx="315" cy="539" r="2" fill="white" />

    {/* ── shoulder joint ── */}
    <circle cx="250" cy="522" r="30" />
    <circle cx="250" cy="522" r="17" />
    <circle cx="250" cy="522" r="6"  fill="white" />

    {/* ── link 1  (shoulder → elbow, up-left) ── */}
    <line x1="237" y1="505" x2="158" y2="322" />
    <line x1="263" y1="510" x2="186" y2="330" />
    <line x1="158" y1="322" x2="186" y2="330" />   {/* end cap */}

    {/* ── elbow joint ── */}
    <circle cx="172" cy="326" r="24" />
    <circle cx="172" cy="326" r="13" />
    <circle cx="172" cy="326" r="5"  fill="white" />

    {/* ── link 2  (elbow → wrist, up-right) ── */}
    <line x1="160" y1="308" x2="318" y2="216" />
    <line x1="184" y1="344" x2="342" y2="246" />
    <line x1="318" y1="216" x2="342" y2="246" />

    {/* ── wrist joint ── */}
    <circle cx="330" cy="231" r="20" />
    <circle cx="330" cy="231" r="11" />
    <circle cx="330" cy="231" r="4"  fill="white" />

    {/* ── link 3  (forearm) ── */}
    <line x1="320" y1="213" x2="418" y2="196" />
    <line x1="340" y1="249" x2="434" y2="228" />
    <line x1="418" y1="196" x2="434" y2="228" />

    {/* ── tool flange ── */}
    <circle cx="426" cy="212" r="18" />
    <circle cx="426" cy="212" r="9"  />

    {/* ── gripper ── */}
    <line x1="436" y1="204" x2="478" y2="185" />
    <line x1="436" y1="220" x2="478" y2="240" />
    {/* finger tips */}
    <line x1="478" y1="185" x2="478" y2="170" />
    <line x1="478" y1="185" x2="500" y2="185" />
    <line x1="478" y1="240" x2="478" y2="255" />
    <line x1="478" y1="240" x2="500" y2="240" />
    {/* finger closing lines */}
    <line x1="500" y1="185" x2="500" y2="198" />
    <line x1="500" y1="240" x2="500" y2="228" />

    {/* ── cable harness (dashed) ── */}
    <path
      d="M250 522 Q278 460 230 390 Q192 328 172 326"
      strokeDasharray="6 5"
      opacity="0.38"
    />

    {/* ── dimension lines ── */}
    <line x1="56" y1="326" x2="56" y2="522" opacity="0.28" />
    <line x1="46" y1="326" x2="66" y2="326" opacity="0.28" />
    <line x1="46" y1="522" x2="66" y2="522" opacity="0.28" />
    <path d="M52 337 L56 326 L60 337"  fill="none" opacity="0.28" />
    <path d="M52 511 L56 522 L60 511"  fill="none" opacity="0.28" />

    {/* ── top annotation ── */}
    <line x1="426" y1="194" x2="426" y2="130" strokeDasharray="4 3" opacity="0.22" />
    <line x1="426" y1="130" x2="490" y2="130" strokeDasharray="4 3" opacity="0.22" />

    {/* ── axis markers at each joint ── */}
    {([[250, 522], [172, 326], [330, 231]] as [number, number][]).map(([x, y], i) => (
      <g key={i}>
        <line x1={x - 14} y1={y} x2={x + 14} y2={y} opacity="0.35" />
        <line x1={x} y1={y - 14} x2={x} y2={y + 14} opacity="0.35" />
      </g>
    ))}
  </svg>
);

/* ════════════════════════════════════════════════════════════
   GEARS  — three interlocking gears, animated rotation
   ════════════════════════════════════════════════════════════ */
export const GearsBg: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const spokes = (
    cx: number, cy: number,
    r1: number, r2: number,
    count: number, offset = 0,
  ) =>
    Array.from({ length: count }, (_, i) => {
      const a = (2 * Math.PI * i) / count + offset;
      return (
        <line
          key={i}
          x1={cx + r1 * Math.cos(a)} y1={cy + r1 * Math.sin(a)}
          x2={cx + r2 * Math.cos(a)} y2={cy + r2 * Math.sin(a)}
        />
      );
    });

  return (
    <svg
      viewBox="0 0 530 530"
      fill="none"
      stroke="white"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
      style={{
        position: 'absolute',
        opacity:  0.058,
        pointerEvents: 'none',
        userSelect:    'none',
        ...style,
      }}
    >
      {/* ── large gear (clockwise, 38 s) ── */}
      <g>
        {/* @ts-ignore */}
        <animateTransform
          attributeName="transform" attributeType="XML"
          type="rotate"
          from="0 182 282" to="360 182 282"
          dur="38s" repeatCount="indefinite"
        />
        <path d={gear(182, 282, 128, 106, 18)} />
        <circle cx="182" cy="282" r="52" />
        <circle cx="182" cy="282" r="26" />
        {spokes(182, 282, 28, 50, 6)}
      </g>

      {/* ── medium gear (counter-clockwise, 23 s) ── */}
      <g>
        {/* @ts-ignore */}
        <animateTransform
          attributeName="transform" attributeType="XML"
          type="rotate"
          from="0 356 158" to="-360 356 158"
          dur="23s" repeatCount="indefinite"
        />
        <path d={gear(356, 158, 80, 67, 12)} />
        <circle cx="356" cy="158" r="32" />
        <circle cx="356" cy="158" r="15" />
        {spokes(356, 158, 17, 30, 4, Math.PI / 4)}
      </g>

      {/* ── small gear (clockwise, 15 s) ── */}
      <g>
        {/* @ts-ignore */}
        <animateTransform
          attributeName="transform" attributeType="XML"
          type="rotate"
          from="0 374 410" to="360 374 410"
          dur="15s" repeatCount="indefinite"
        />
        <path d={gear(374, 410, 56, 46, 9)} />
        <circle cx="374" cy="410" r="22" />
        <circle cx="374" cy="410" r="10" />
        {spokes(374, 410, 11, 20, 3, 0)}
      </g>

      {/* ── shafts (static) ── */}
      <line x1="182" y1="282" x2="182" y2="530" strokeDasharray="7 5" opacity="0.32" />
      <line x1="356" y1="158" x2="356" y2="0"   strokeDasharray="7 5" opacity="0.32" />
      <line x1="374" y1="410" x2="530" y2="410" strokeDasharray="7 5" opacity="0.32" />

      {/* ── mesh-contact indicators ── */}
      <circle cx="322" cy="218" r="5" fill="white" opacity="0.5" />
      <circle cx="330" cy="354" r="5" fill="white" opacity="0.5" />
    </svg>
  );
};

/* ════════════════════════════════════════════════════════════
   CIRCUIT BOARD  — PCB traces, vias, ICs, passives
   ════════════════════════════════════════════════════════════ */
export const CircuitBg: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const VIA = (x: number, y: number) => (
    <g key={`v${x}${y}`}>
      <circle cx={x} cy={y} r="8" />
      <circle cx={x} cy={y} r="3.5" fill="rgba(232,255,0,0.75)" />
    </g>
  );
  const PAD = (x: number, y: number) => (
    <rect key={`p${x}${y}`} x={x - 5} y={y - 5}
      width="10" height="10" rx="2"
      fill="rgba(232,255,0,0.55)" />
  );

  return (
    <svg
      viewBox="0 0 960 580"
      fill="none"
      stroke="rgba(232,255,0,0.85)"
      strokeWidth="1"
      aria-hidden="true"
      style={{
        position: 'absolute',
        opacity:  0.04,
        pointerEvents: 'none',
        userSelect:    'none',
        ...style,
      }}
    >
      {/* ── horizontal buses ── */}
      {[100, 200, 300, 400, 490].map(y => (
        <line key={y} x1="60" y1={y} x2="900" y2={y} />
      ))}

      {/* ── vertical traces ── */}
      {[180, 340, 500, 660, 800].map(x => (
        <line key={x} x1={x} y1="55" x2={x} y2="535" />
      ))}

      {/* ── diagonal traces ── */}
      <path d="M180 200 L340 100" />
      <path d="M500 300 L660 200" />
      <path d="M340 400 L500 490" />
      <path d="M660 300 L800 200" />
      <path d="M60 300 L180 400" />
      <path d="M800 400 L900 300" />
      <path d="M500 100 L660 200" strokeDasharray="6 4" opacity="0.6" />
      <path d="M180 300 L340 400" strokeDasharray="6 4" opacity="0.6" />

      {/* ── vias at intersections ── */}
      {[180, 340, 500, 660, 800].flatMap(x =>
        [100, 200, 300, 400, 490].map(y => VIA(x, y))
      )}

      {/* ── IC chip 1 ── */}
      <rect x="224" y="232" width="92" height="68" rx="2" />
      <path d="M238 232 Q270 220 298 232" />         {/* notch */}
      {[238, 258, 278, 298].map(x => (
        <g key={x}>
          <line x1={x} y1="232" x2={x} y2="212" />{PAD(x, 212)}
          <line x1={x} y1="300" x2={x} y2="320" />{PAD(x, 320)}
        </g>
      ))}
      <line x1="224" y1="252" x2="204" y2="252" />{PAD(204, 252)}
      <line x1="224" y1="272" x2="204" y2="272" />{PAD(204, 272)}
      <line x1="316" y1="252" x2="336" y2="252" />{PAD(336, 252)}
      <line x1="316" y1="272" x2="336" y2="272" />{PAD(336, 272)}

      {/* ── IC chip 2 ── */}
      <rect x="562" y="338" width="84" height="58" rx="2" />
      <path d="M574 338 Q604 326 622 338" />
      {[574, 595, 616].map(x => (
        <g key={x}>
          <line x1={x} y1="338" x2={x} y2="318" />{PAD(x, 318)}
          <line x1={x} y1="396" x2={x} y2="416" />{PAD(x, 416)}
        </g>
      ))}
      <line x1="562" y1="356" x2="542" y2="356" />{PAD(542, 356)}
      <line x1="562" y1="374" x2="542" y2="374" />{PAD(542, 374)}
      <line x1="646" y1="356" x2="666" y2="356" />{PAD(666, 356)}

      {/* ── IC chip 3 ── */}
      <rect x="720" y="130" width="72" height="54" rx="2" />
      {[732, 752, 772].map(x => (
        <g key={x}>
          <line x1={x} y1="130" x2={x} y2="112" />{PAD(x, 112)}
          <line x1={x} y1="184" x2={x} y2="202" />{PAD(x, 202)}
        </g>
      ))}

      {/* ── resistors ── */}
      <line x1="60"  y1="150" x2="108" y2="150" />
      <rect x="108"  y="142" width="40" height="16" rx="3" />
      <line x1="148" y1="150" x2="180" y2="150" />
      {PAD(60, 150)}{PAD(180, 150)}

      <line x1="408" y1="450" x2="456" y2="450" />
      <rect x="456"  y="442" width="40" height="16" rx="3" />
      <line x1="496" y1="450" x2="500" y2="450" />
      {PAD(408, 450)}

      <line x1="740" y1="450" x2="788" y2="450" />
      <rect x="788"  y="442" width="40" height="16" rx="3" />
      <line x1="828" y1="450" x2="860" y2="450" />

      {/* ── capacitors ── */}
      <line x1="620" y1="100" x2="620" y2="140" />
      <line x1="606" y1="140" x2="634" y2="140" strokeWidth="2" />
      <line x1="606" y1="150" x2="634" y2="150" strokeWidth="2" />
      <line x1="620" y1="150" x2="620" y2="200" />
      {PAD(620, 100)}{PAD(620, 200)}

      <line x1="440" y1="300" x2="440" y2="334" />
      <line x1="428" y1="334" x2="452" y2="334" strokeWidth="2" />
      <line x1="428" y1="342" x2="452" y2="342" strokeWidth="2" />
      <line x1="440" y1="342" x2="440" y2="376" />

      {/* ── edge pads / board outline ── */}
      <rect x="52"  y="90"  width="16" height="16" rx="2" />
      <rect x="892" y="90"  width="16" height="16" rx="2" />
      <rect x="52"  y="474" width="16" height="16" rx="2" />
      <rect x="892" y="474" width="16" height="16" rx="2" />
    </svg>
  );
};

/* ════════════════════════════════════════════════════════════
   PIPE SCHEMATIC  — P&ID style industrial diagram
   ════════════════════════════════════════════════════════════ */
export const PipeSchematicBg: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 680 500"
    fill="none"
    stroke="white"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      position: 'absolute',
      opacity:  0.052,
      pointerEvents: 'none',
      userSelect:    'none',
      ...style,
    }}
  >
    {/* ── main horizontal pipe ── */}
    <line x1="40"  y1="230" x2="640" y2="230" strokeWidth="2.5" />
    <line x1="40"  y1="244" x2="640" y2="244" strokeWidth="2.5" />

    {/* ── branch up-left ── */}
    <line x1="130" y1="230" x2="130" y2="78" />
    <line x1="144" y1="230" x2="144" y2="78" />
    <line x1="115" y1="78"  x2="160" y2="78" strokeWidth="2" />

    {/* ── branch up-right ── */}
    <line x1="510" y1="230" x2="510" y2="78" />
    <line x1="524" y1="230" x2="524" y2="78" />
    <line x1="494" y1="78"  x2="540" y2="78" strokeWidth="2" />

    {/* ── branch down-center ── */}
    <line x1="318" y1="244" x2="318" y2="390" />
    <line x1="332" y1="244" x2="332" y2="390" />

    {/* ── tank / vessel ── */}
    <rect x="280" y="390" width="92" height="76" rx="5" />
    <ellipse cx="326" cy="390" rx="46" ry="10" />
    {/* liquid level wave */}
    <path d="M282 432 Q310 418 338 428 Q358 436 372 428" opacity="0.7" />
    {/* level mark */}
    <line x1="372" y1="428" x2="384" y2="428" opacity="0.5" />
    <line x1="372" y1="444" x2="384" y2="444" opacity="0.5" />
    <line x1="372" y1="460" x2="384" y2="460" opacity="0.5" />

    {/* ── pump (left) ── */}
    <circle cx="84" cy="237" r="24" />
    <path d="M72 250 L96 224 M72 224 L84 237" strokeWidth="1.6" />

    {/* ── gate valve (center-left) ── */}
    <g transform="translate(248 237)">
      <line x1="-24" y1="0" x2="-10" y2="0" />
      <polygon points="-10,-20 10,0 -10,20 -30,0" />
      <line x1="10"  y1="0" x2="24" y2="0" />
      <line x1="0"   y1="-20" x2="0" y2="-36" />
      <rect x="-12"  y="-44" width="24" height="10" rx="2" />
    </g>

    {/* ── control valve with actuator (center-right) ── */}
    <g transform="translate(430 237)">
      <line x1="-24" y1="0" x2="-10" y2="0" />
      <polygon points="-10,-18 10,0 -10,18 -30,0" />
      <line x1="10"  y1="0" x2="24" y2="0" />
      <line x1="0"   y1="-18" x2="0" y2="-32" />
      <circle cx="0"  cy="-40" r="10" />
      <line x1="0"   y1="-50" x2="0" y2="-66" strokeDasharray="4 3" />
      <rect x="-18"  y="-82" width="36" height="20" rx="2" />
      <text x="-12"  y="-68" fontSize="9" fill="white" fontFamily="monospace">FC</text>
    </g>

    {/* ── pressure transmitter (left branch) ── */}
    <line x1="137" y1="78" x2="137" y2="52" strokeDasharray="4 3" />
    <rect x="108"  y="32" width="58" height="24" rx="3" />
    <text x="113"  y="48" fontSize="9" fill="white" fontFamily="monospace">PT-01</text>

    {/* ── flow transmitter (right branch) ── */}
    <line x1="517" y1="78" x2="517" y2="52" strokeDasharray="4 3" />
    <rect x="488"  y="32" width="58" height="24" rx="3" />
    <text x="493"  y="48" fontSize="9" fill="white" fontFamily="monospace">FT-02</text>

    {/* ── level transmitter (tank) ── */}
    <line x1="372" y1="428" x2="434" y2="428" strokeDasharray="4 3" />
    <rect x="434"  y="416" width="58" height="24" rx="3" />
    <text x="438"  y="432" fontSize="9" fill="white" fontFamily="monospace">LT-01</text>

    {/* ── temperature element (main pipe) ── */}
    <line x1="340" y1="237" x2="340" y2="276" strokeDasharray="4 3" />
    <circle cx="340" cy="282" r="10" />
    <text x="334" y="286" fontSize="8" fill="white" fontFamily="monospace">T</text>

    {/* ── elbow fittings ── */}
    <circle cx="130" cy="78"  r="7" fill="none" />
    <circle cx="144" cy="78"  r="7" fill="none" />
    <circle cx="510" cy="78"  r="7" fill="none" />
    <circle cx="524" cy="78"  r="7" fill="none" />
    <circle cx="318" cy="390" r="7" fill="none" />
    <circle cx="332" cy="390" r="7" fill="none" />
  </svg>
);

/* ════════════════════════════════════════════════════════════
   CONVEYOR / ASSEMBLY LINE  — top-view production line
   ════════════════════════════════════════════════════════════ */
export const ConveyorBg: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 900 300"
    fill="none"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      position: 'absolute',
      opacity:  0.05,
      pointerEvents: 'none',
      userSelect:    'none',
      ...style,
    }}
  >
    {/* ── belt rails ── */}
    <line x1="60"  y1="110" x2="840" y2="110" strokeWidth="2" />
    <line x1="60"  y1="190" x2="840" y2="190" strokeWidth="2" />

    {/* ── rollers ── */}
    {Array.from({ length: 16 }, (_, i) => {
      const x = 60 + i * 52;
      return (
        <g key={i}>
          <ellipse cx={x} cy="150" rx="7" ry="40" />
          <line x1={x} y1="110" x2={x} y2="190" strokeDasharray="none" opacity="0.4" />
        </g>
      );
    })}

    {/* ── end drums ── */}
    <ellipse cx="60"  cy="150" rx="10" ry="42" />
    <ellipse cx="840" cy="150" rx="10" ry="42" />

    {/* ── product boxes on belt ── */}
    {[160, 320, 480, 640].map(x => (
      <g key={x}>
        <rect x={x - 28} y="122" width="56" height="56" rx="3" />
        <line x1={x - 28} y1="150" x2={x + 28} y2="150" opacity="0.5" />
        <line x1={x}      y1="122" x2={x}       y2="178" opacity="0.5" />
      </g>
    ))}

    {/* ── robot arm station 1 ── */}
    <g transform="translate(380 80)">
      <circle cx="0" cy="0" r="14" />
      <line x1="0"  y1="14" x2="0" y2="30" />
      <line x1="-30" y1="30" x2="30" y2="30" strokeWidth="2" />
      {/* arm */}
      <line x1="0" y1="0" x2="-40" y2="-30" strokeWidth="2" />
      <circle cx="-40" cy="-30" r="8" />
      <line x1="-40" y1="-30" x2="-68" y2="-10" />
      {/* gripper */}
      <line x1="-68" y1="-10" x2="-78" y2="-18" />
      <line x1="-68" y1="-10" x2="-78" y2="-2" />
    </g>

    {/* ── robot arm station 2 ── */}
    <g transform="translate(620 80)">
      <circle cx="0" cy="0" r="14" />
      <line x1="0"  y1="14" x2="0" y2="30" />
      <line x1="-30" y1="30" x2="30" y2="30" strokeWidth="2" />
      <line x1="0" y1="0" x2="42" y2="-26" strokeWidth="2" />
      <circle cx="42" cy="-26" r="8" />
      <line x1="42" y1="-26" x2="70" y2="-10" />
      <line x1="70" y1="-10" x2="80" y2="-18" />
      <line x1="70" y1="-10" x2="80" y2="-2" />
    </g>

    {/* ── motion arrows ── */}
    {[200, 400, 600, 760].map(x => (
      <path key={x}
        d={`M${x} 150 L${x + 30} 150`}
        strokeWidth="1.5"
        opacity="0.4"
      />
    ))}
    {[200, 400, 600, 760].map(x => (
      <path key={`a${x}`}
        d={`M${x + 22} 144 L${x + 30} 150 L${x + 22} 156`}
        fill="none" opacity="0.4"
      />
    ))}
  </svg>
);
