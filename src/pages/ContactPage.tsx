import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero     from '../components/ui/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import SEO          from '../components/ui/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
          background: 'var(--surface)',
          border:     '1px solid var(--border)',
          padding:    '48px 40px',
          position:   'relative',
          overflow:   'hidden',
          transition: 'background 0.3s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.background = 'rgba(232,255,0,0.03)';
          const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.cline');
          if (line) line.style.transform = 'scaleX(1)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.background = 'var(--surface)';
          const line = (e.currentTarget as HTMLDivElement).querySelector<HTMLDivElement>('.cline');
          if (line) line.style.transform = 'scaleX(0)';
        }}
      >
        <div className="cline" style={{
          position:        'absolute',
          bottom: 0, left: 0, right: 0,
          height:          '2px',
          background:      'var(--accent)',
          transform:       'scaleX(0)',
          transformOrigin: 'left',
          transition:      'transform 0.4s cubic-bezier(.16,1,.3,1)',
        }} />

        <div style={{
          width:'48px', height:'48px',
          border: '1px solid var(--border)',
          display:'flex', alignItems:'center', justifyContent:'center',
          marginBottom:'28px',
        }}>
          {icon}
        </div>

        <div style={{
          fontSize:'11px', color:'var(--muted)', letterSpacing:'3px',
          textTransform:'uppercase', fontFamily:"'JetBrains Mono',monospace",
          marginBottom:'16px',
        }}>
          {label}
        </div>

        <div style={{ fontSize:'20px', fontWeight:700, lineHeight:1.5 }}>
          {value}
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const mapRef = useScrollReveal<HTMLDivElement>();
  const { t }  = useTranslation();

  return (
    <>
      <SEO page="contact" />
      <PageHero
        label={t('pages.contact.hero_label')}
        title={<>{t('pages.contact.hero_title_pre')}<br /><span style={{ color:'var(--accent)' }}>{t('pages.contact.hero_title_accent')}</span></>}
        description={t('pages.contact.hero_description')}
      />

      <section className="page-section" style={{ padding:'100px 48px' }}>
        <SectionLabel>{t('pages.contact.section_label')}</SectionLabel>

        <div className="contact-cards" style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '2px',
          marginTop:           '48px',
          marginBottom:        '2px',
        }}>
          <ContactCard
            delay={0}
            label={t('pages.contact.phone_label')}
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>}
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
            label={t('pages.contact.email_label')}
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
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
            label={t('pages.contact.address_label')}
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
            value={<>ul. Poznańska 15,<br />44-120 Pyskowice</>}
          />
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="reveal"
          style={{
            border:    '1px solid var(--border)',
            marginTop: '2px',
            overflow:  'hidden',
            lineHeight: 0,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.4343517107864!2d18.612474277132836!3d50.41419287158529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471124384ebbe1ed%3A0xc417afe2c88e389b!2sLubotech!5e1!3m2!1spl!2spl!4v1775050910984!5m2!1spl!2spl"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lubotech — ul. Poznańska 15, Pyskowice"
          />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
