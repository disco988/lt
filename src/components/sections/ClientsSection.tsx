import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CLIENTS } from '../../data';

const ClientsSection: React.FC = () => {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const doubled  = [...CLIENTS, ...CLIENTS];

  return (
    <section style={{ padding: '120px 48px' }}>
      <div ref={labelRef} className="reveal">
        <SectionLabel>Zaufali nam</SectionLabel>
      </div>
      <h2
        ref={titleRef}
        className="reveal"
        style={{
          fontFamily:    "'Bebas Neue', sans-serif",
          fontSize:      'clamp(42px, 6vw, 80px)',
          lineHeight:    1,
          letterSpacing: '1px',
          marginBottom:  '60px',
          transitionDelay: '0.1s',
        }}
      >
        Klienci z całej <span style={{ color: 'var(--accent)' }}>Europy</span>
      </h2>

      {/* Marquee track */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* fade edges */}
        <div style={{
          position:   'absolute', top: 0, bottom: 0, left: 0, width: '200px',
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex:     2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position:   'absolute', top: 0, bottom: 0, right: 0, width: '200px',
          background: 'linear-gradient(to left, var(--bg), transparent)',
          zIndex:     2,
          pointerEvents: 'none',
        }} />

        <div style={{
          display:   'flex',
          animation: 'clientScroll 25s linear infinite',
          width:     'max-content',
          alignItems:'center',
        }}>
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              style={{
                padding:        '20px 48px',
                borderRight:    '1px solid var(--border)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                minWidth:       '180px',
                height:         '80px',
                color:          'rgba(255,255,255,0.2)',
                transition:     'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
              title={client.name}
              dangerouslySetInnerHTML={{ __html: client.logo }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
