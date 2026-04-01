import React from 'react';
import SectionLabel from './SectionLabel';

interface Props {
  label: string;
  title: React.ReactNode;
  description?: string;
}

const PageHero: React.FC<Props> = ({ label, title, description }) => (
  <section style={{
    padding:   '180px 48px 100px',
    borderBottom: '1px solid var(--border)',
    position:  'relative',
    overflow:  'hidden',
  }}>
    {/* bg glow */}
    <div style={{
      position:   'absolute', inset: 0,
      background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(232,255,0,0.04) 0%, transparent 60%)',
    }} />
    {/* grid */}
    <div style={{
      position:   'absolute', inset: 0,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
      backgroundSize: '80px 80px',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
      maskImage:       'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
    }} />

    <div style={{ position: 'relative', zIndex: 1 }}>
      <SectionLabel>{label}</SectionLabel>
      <h1 style={{
        fontFamily:  "'Bebas Neue', sans-serif",
        fontSize:    'clamp(64px, 10vw, 140px)',
        lineHeight:  0.9,
        letterSpacing: '-2px',
      }}>
        {title}
      </h1>
      {description && (
        <p style={{
          maxWidth:    '560px',
          color:       'var(--muted)',
          fontSize:    '17px',
          lineHeight:  1.7,
          marginTop:   '32px',
        }}>
          {description}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
