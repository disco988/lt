import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { GearsBg } from '../ui/AutomationBg';

const AboutSection: React.FC = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const checkItems = t('about_section.check_items', { returnObjects: true }) as string[];

  return (
    <section className="about-section" style={{
      padding:      '120px 48px',
      background:   'var(--surface)',
      borderTop:    '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position:     'relative',
      overflow:     'hidden',
    }}>
      {/* Gears decoration */}
      <GearsBg style={{ left: '-4%', bottom: '-5%', height: '85%', width: 'auto' }} />

      {/* Glow */}
      <div style={{
        position:     'absolute',
        right:        '-200px',
        top:          '-200px',
        width:        '600px',
        height:       '600px',
        borderRadius: '50%',
        background:   'radial-gradient(circle, rgba(232,255,0,0.04) 0%, transparent 60%)',
        pointerEvents:'none',
      }} />

      <div className="about-grid" style={{
        display:             'grid',
        gridTemplateColumns: '1fr 1fr',
        gap:                 '120px',
        alignItems:          'center',
      }}>
        {/* Visual */}
        <div ref={leftRef} className="reveal-left">
          <div style={{ position: 'relative', aspectRatio: '4/3' }}>
            <div style={{
              position:   'absolute',
              inset:      0,
              background: `linear-gradient(135deg, rgba(232,255,0,0.06) 0%, transparent 50%), var(--bg)`,
              border:     '1px solid var(--border)',
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow:   'hidden',
            }}>
              <svg width="80%" height="80%" viewBox="0 0 400 300" fill="none"
                stroke="rgba(232,255,0,0.6)" strokeWidth="0.8" style={{ opacity: 0.15 }}>
                <rect x="50" y="50" width="300" height="200" rx="4"/>
                <line x1="50" y1="100" x2="10" y2="100"/><line x1="50" y1="150" x2="10" y2="150"/>
                <line x1="50" y1="200" x2="10" y2="200"/><line x1="350" y1="100" x2="390" y2="100"/>
                <line x1="350" y1="150" x2="390" y2="150"/><line x1="350" y1="200" x2="390" y2="200"/>
                <rect x="140" y="110" width="120" height="80" rx="2" fill="rgba(232,255,0,0.05)"/>
                <line x1="160" y1="130" x2="240" y2="130"/><line x1="160" y1="150" x2="240" y2="150"/>
                <line x1="160" y1="170" x2="220" y2="170"/>
                <circle cx="200" cy="75" r="15" fill="rgba(232,255,0,0.08)"/>
                <line x1="200" y1="60" x2="200" y2="50"/>
                <circle cx="100" cy="75" r="8"/><circle cx="300" cy="75" r="8"/>
                <circle cx="100" cy="225" r="8"/><circle cx="300" cy="225" r="8"/>
              </svg>
            </div>
            <div style={{
              position:      'absolute',
              bottom:        '-20px',
              right:         '-20px',
              background:    'var(--accent)',
              color:         '#000',
              padding:       '20px 24px',
              fontFamily:    "'Bebas Neue', sans-serif",
              fontSize:      '18px',
              letterSpacing: '3px',
            }}>
              {t('about_section.badge')}
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={rightRef} className="reveal-right" style={{ transitionDelay: '0.2s' }}>
          <SectionLabel>{t('about_section.label')}</SectionLabel>
          <h2 style={{
            fontFamily:    "'Bebas Neue', sans-serif",
            fontSize:      'clamp(42px, 5vw, 72px)',
            lineHeight:    1,
            letterSpacing: '1px',
            marginBottom:  '32px',
          }}>
            {t('about_section.title_pre')}<br />
            {t('about_section.title_middle')} <span style={{ color: 'var(--accent)' }}>{t('about_section.title_accent')}</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(240,240,240,0.65)', lineHeight: 1.8, marginBottom: '16px' }}>
            {t('about_section.p1')}
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(240,240,240,0.65)', lineHeight: 1.8 }}>
            {t('about_section.p2')}
          </p>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {checkItems.map(item => (
              <div key={item} style={{
                display:       'flex',
                alignItems:    'center',
                gap:           '20px',
                padding:       '16px 0',
                borderBottom:  '1px solid var(--border)',
                fontSize:      '15px',
                fontWeight:    600,
              }}>
                <span style={{
                  flexShrink: 0,
                  width:      '24px',
                  height:     '24px',
                  background: 'var(--accent)',
                  clipPath:   'polygon(50% 0%,100% 50%,50% 100%,0% 50%)',
                  display:    'inline-block',
                }} />
                {item}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Button to="/o-nas" variant="secondary">
              {t('about_section.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
