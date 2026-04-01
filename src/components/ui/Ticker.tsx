import React from 'react';

interface Props {
  items: string[];
  speed?: number; // seconds
}

const Ticker: React.FC<Props> = ({ items, speed = 30 }) => {
  const doubled = [...items, ...items];

  return (
    <div style={{
      borderTop:    '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow:     'hidden',
      padding:      '16px 0',
      background:   'rgba(232,255,0,0.02)',
    }}>
      <div style={{
        display:   'flex',
        animation: `ticker ${speed}s linear infinite`,
        whiteSpace:'nowrap',
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            fontFamily:    "'Bebas Neue', sans-serif",
            fontSize:      '22px',
            letterSpacing: '4px',
            padding:       '0 48px',
            color:         'var(--muted)',
            display:       'flex',
            alignItems:    'center',
            gap:           '48px',
          }}>
            {item}
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--accent)', flexShrink:0 }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
