import React from 'react';

interface Props {
  children:  React.ReactNode;
  center?:   boolean;
  style?:    React.CSSProperties;
}

const SectionLabel: React.FC<Props> = ({ children, center = false, style }) => (
  <div style={{
    fontFamily:     "'JetBrains Mono', monospace",
    fontSize:       '11px',
    letterSpacing:  '3px',
    textTransform:  'uppercase',
    color:          'var(--accent)',
    marginBottom:   '16px',
    display:        'flex',
    alignItems:     'center',
    gap:            '12px',
    justifyContent: center ? 'center' : 'flex-start',
    ...style,
  }}>
    <span style={{ display:'block', width:'30px', height:'1px', background:'var(--accent)', flexShrink:0 }} />
    {children}
  </div>
);

export default SectionLabel;
