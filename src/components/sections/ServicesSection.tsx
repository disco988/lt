import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangCtx } from '../../contexts/LangContext';
import SectionLabel from '../ui/SectionLabel';
import Button       from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SERVICES } from '../../data';
import type { Service } from '../../types';
import { ConveyorBg } from '../ui/AutomationBg';

const Arrow: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ServiceRow: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => {
  const wrapRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const { prefix } = useLangCtx();

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = 'rgba(232,255,0,0.04)';
    e.currentTarget.style.transform  = 'translateX(4px)';
    const bar = e.currentTarget.querySelector<HTMLDivElement>('.svc-bar');
    if (bar) bar.style.transform = 'scaleY(1)';
    const num = e.currentTarget.querySelector<HTMLDivElement>('.svc-num');
    if (num) num.style.color = 'rgba(232,255,0,0.2)';
    const arr = e.currentTarget.querySelector<HTMLDivElement>('.svc-arrow');
    if (arr) { arr.style.background = 'var(--accent)'; arr.style.borderColor = 'var(--accent)'; arr.style.transform = 'rotate(45deg)'; arr.style.color = '#000'; }
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = 'var(--surface)';
    e.currentTarget.style.transform  = 'translateX(0)';
    const bar = e.currentTarget.querySelector<HTMLDivElement>('.svc-bar');
    if (bar) bar.style.transform = 'scaleY(0)';
    const num = e.currentTarget.querySelector<HTMLDivElement>('.svc-num');
    if (num) num.style.color = 'rgba(255,255,255,0.08)';
    const arr = e.currentTarget.querySelector<HTMLDivElement>('.svc-arrow');
    if (arr) { arr.style.background = 'transparent'; arr.style.borderColor = 'var(--border)'; arr.style.transform = 'rotate(0deg)'; arr.style.color = 'var(--muted)'; }
  };

  return (
    <div ref={wrapRef} className="reveal" style={{ transitionDelay:`${delay}s` }}>
      <Link
        to={`${prefix}${service.slug}`}
        className="service-row"
        style={{
          display:             'grid',
          gridTemplateColumns: '80px 1fr auto',
          alignItems:          'center',
          gap:                 '32px',
          padding:             '40px 48px',
          background:          'var(--surface)',
          border:              '1px solid var(--border)',
          textDecoration:      'none',
          color:               'inherit',
          position:            'relative',
          overflow:            'hidden',
          transition:          'background 0.4s cubic-bezier(.16,1,.3,1), transform 0.4s cubic-bezier(.16,1,.3,1)',
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="svc-bar" style={{
          position:'absolute', left:0, top:0, bottom:0, width:'3px',
          background:'var(--accent)', transform:'scaleY(0)',
          transformOrigin:'bottom', transition:'transform 0.4s cubic-bezier(.16,1,.3,1)',
        }} />

        <div className="svc-num" style={{
          fontFamily:'Bebas Neue,sans-serif', fontSize:'48px',
          color:'rgba(255,255,255,0.08)', lineHeight:1, transition:'color 0.3s',
        }}>
          {service.num}
        </div>

        <div>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'32px', letterSpacing:'2px' }}>
            {t(`services.${service.id}.title`)}
          </div>
          <div style={{ fontSize:'13px', color:'var(--muted)', marginTop:'6px' }}>
            {t(`services.${service.id}.subtitle`)}
          </div>
        </div>

        <div className="svc-arrow" style={{
          width:'48px', height:'48px',
          border:'1px solid var(--border)',
          display:'flex', alignItems:'center', justifyContent:'center',
          transition:'all 0.3s', flexShrink:0, color:'var(--muted)',
        }}>
          <Arrow />
        </div>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="services-section" style={{ padding:'0 48px 120px', position:'relative', overflow:'hidden' }}>
      <ConveyorBg style={{ bottom: 0, left: 0, width: '100%', height: 'auto' }} />
      <div className="services-intro" style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px',
        marginBottom:'80px', alignItems:'flex-end',
      }}>
        <div ref={leftRef} className="reveal-left">
          <SectionLabel>{t('services_section.label')}</SectionLabel>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1 }}>
            {t('services_section.title')}<br />{t('services_section.title2')}<br />
            <span style={{ color:'var(--accent)' }}>{t('services_section.title_accent')}</span>
          </h2>
        </div>
        <div ref={rightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
          <p style={{ fontSize:'16px', color:'var(--muted)', lineHeight:1.8, marginBottom:'32px' }}>
            {t('services_section.description')}
          </p>
          <Button to="/kontakt" variant="secondary">
            {t('services_section.cta')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </div>

      <div style={{ display:'grid', gap:'2px' }}>
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.id} service={s} delay={i * 0.05} />
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
