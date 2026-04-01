import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (numberRef.current) {
        numberRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.3}px))`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{
      minHeight:      '100vh',
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'flex-end',
      padding:        '0 48px 80px',
      position:       'relative',
      overflow:       'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(232,255,0,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 80% 70%, rgba(255,107,0,0.06) 0%, transparent 50%)`,
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
        maskImage:       'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
      }} />

      {/* Big decorative number */}
      <div ref={numberRef} style={{
        position:      'absolute',
        right:         '48px',
        top:           '50%',
        transform:     'translateY(-50%)',
        fontFamily:    "'Bebas Neue', sans-serif",
        fontSize:      'clamp(200px, 25vw, 380px)',
        color:         'rgba(255,255,255,0.03)',
        lineHeight:    1,
        userSelect:    'none',
        letterSpacing: '-10px',
        pointerEvents: 'none',
      }}>
        20
      </div>

      {/* Badge */}
      <div style={{
        display:       'inline-flex',
        alignItems:    'center',
        gap:           '8px',
        border:        '1px solid var(--border)',
        padding:       '6px 14px',
        fontSize:      '11px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color:         'var(--muted)',
        marginBottom:  '32px',
        width:         'fit-content',
        fontFamily:    "'JetBrains Mono', monospace",
        position:      'relative',
        zIndex:        1,
      }}>
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: 'var(--accent)',
          animation:  'blink 2s infinite',
        }} />
        Automatyzacja Przemysłowa — Pyskowice
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily:    "'Bebas Neue', sans-serif",
        fontSize:      'clamp(64px, 11vw, 180px)',
        lineHeight:    0.9,
        letterSpacing: '-2px',
        marginBottom:  '40px',
        position:      'relative',
        zIndex:        1,
      }}>
        {['Zautomatyzujemy', 'Twoją Firmę.', 'Kompleksowo.'].map((line, i) => (
          <span key={i} style={{ overflow: 'hidden', display: 'block' }}>
            <span style={{
              display:         'block',
              transform:       'translateY(110%)',
              animation:       `slideUp 1s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.1}s forwards`,
              color:           i === 1 ? undefined : undefined,
            }}>
              {i === 1 ? (
                <>Twoją <span style={{ color: 'var(--accent)' }}>Firmę.</span></>
              ) : line}
            </span>
          </span>
        ))}
      </h1>

      {/* Bottom row */}
      <div style={{
        display:        'flex',
        alignItems:     'flex-end',
        justifyContent: 'space-between',
        position:       'relative',
        zIndex:         1,
        flexWrap:       'wrap',
        gap:            '32px',
      }}>
        <p style={{
          maxWidth:   '420px',
          color:      'var(--muted)',
          fontSize:   '15px',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Projektowanie, budowa i automatyzacja maszyn oraz linii produkcyjnych.
          Kompleksowe rozwiązania — od koncepcji po gotowe urządzenie.
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button to="/uslugi">Nasze Usługi</Button>
          <Button to="/kontakt" variant="secondary">
            Kontakt
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:       'absolute',
        bottom:         '80px',
        right:          '48px',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '12px',
        fontSize:       '10px',
        letterSpacing:  '3px',
        textTransform:  'uppercase',
        color:          'var(--muted)',
        fontFamily:     "'JetBrains Mono', monospace",
      }}>
        <span>Scroll</span>
        <div style={{
          width:      '1px',
          height:     '60px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation:  'scrollBar 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div:last-of-type { display: none; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
