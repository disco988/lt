import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ContactCardProps {
  icon:  React.ReactNode;
  label: string;
  value: React.ReactNode;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, value, delay }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        style={{
          background: 'var(--bg)',
          border:     '1px solid var(--border)',
          padding:    '48px 40px',
          position:   'relative',
          overflow:   'hidden',
          transition: 'background 0.3s',
          height:     '100%',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.background = 'rgba(232,255,0,0.03)';
          const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.accent-line');
          if (line) line.style.transform = 'scaleX(1)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.background = 'var(--bg)';
          const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.accent-line');
          if (line) line.style.transform = 'scaleX(0)';
        }}
      >
        <div className="accent-line" style={{
          position:        'absolute',
          bottom: 0, left: 0, right: 0,
          height:          '2px',
          background:      'var(--accent)',
          transform:       'scaleX(0)',
          transformOrigin: 'left',
          transition:      'transform 0.4s cubic-bezier(.16,1,.3,1)',
        }} />

        <div style={{
          width:'40px', height:'40px',
          border: '1px solid var(--border)',
          display:'flex', alignItems:'center', justifyContent:'center',
          marginBottom:'24px',
        }}>
          {icon}
        </div>

        <div style={{
          fontSize:      '11px',
          color:         'var(--muted)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontFamily:    "'JetBrains Mono', monospace",
          marginBottom:  '12px',
        }}>
          {label}
        </div>

        <div style={{ fontSize:'18px', fontWeight:700, lineHeight:1.5 }}>
          {value}
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="contact-section" style={{
      padding:   '120px 48px',
      background:'var(--surface)',
      borderTop: '1px solid var(--border)',
      position:  'relative',
      overflow:  'hidden',
    }}>
      {/* Ghost text */}
      <div style={{
        position:      'absolute',
        fontFamily:    "'Bebas Neue', sans-serif",
        fontSize:      'clamp(100px, 15vw, 200px)',
        color:         'rgba(255,255,255,0.02)',
        letterSpacing: '-5px',
        top:           '50%',
        left:          '50%',
        transform:     'translate(-50%, -50%)',
        whiteSpace:    'nowrap',
        pointerEvents: 'none',
      }}>
        KONTAKT
      </div>

      {/* Header */}
      <div
        ref={headerRef}
        className="reveal"
        style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-end',
          marginBottom:   '80px',
          borderBottom:   '1px solid var(--border)',
          paddingBottom:  '48px',
          position:       'relative',
          zIndex:         1,
          flexWrap:       'wrap',
          gap:            '32px',
        }}
      >
        <div>
          <SectionLabel>{t('contact_section.label')}</SectionLabel>
          <h2 style={{
            fontFamily:    "'Bebas Neue', sans-serif",
            fontSize:      'clamp(42px, 6vw, 80px)',
            lineHeight:    1,
            letterSpacing: '1px',
          }}>
            {t('contact_section.title')}<br />
            <span style={{ color: 'var(--accent)' }}>{t('contact_section.title_accent')}</span>
          </h2>
        </div>
        <p style={{ maxWidth:'360px', color:'var(--muted)', fontSize:'15px', lineHeight:1.7 }}>
          {t('contact_section.description')}
        </p>
      </div>

      {/* Cards */}
      <div className="contact-cards" style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:                 '2px',
        position:            'relative',
        zIndex:              1,
      }}>
        <ContactCard
          delay={0}
          label={t('contact_section.phone_label')}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>}
          value={
            <a href="tel:+48326664450" style={{ color:'inherit', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
            >
              +48 32 66 64 450
            </a>
          }
        />
        <ContactCard
          delay={0.1}
          label={t('contact_section.email_label')}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
          value={
            <a href="mailto:info@lubotech.pl" style={{ color:'inherit', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
            >
              info@lubotech.pl
            </a>
          }
        />
        <ContactCard
          delay={0.2}
          label={t('contact_section.address_label')}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
          value={<>ul. Poznańska 15,<br />44-120 Pyskowice</>}
        />
      </div>
    </section>
  );
};

export default ContactSection;
