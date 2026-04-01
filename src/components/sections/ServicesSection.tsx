import React from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import Button       from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SERVICES } from '../../data';
import type { Service } from '../../types';

/* ── Arrow icon ── */
const Arrow: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Single service row – own component keeps hooks at top level ── */
const ServiceRow: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => {
  const wrapRef  = useScrollReveal<HTMLDivElement>();

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
        to={service.slug}
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
        {/* left accent bar */}
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
            {service.title}
          </div>
          <div style={{ fontSize:'13px', color:'var(--muted)', marginTop:'6px' }}>
            {service.subtitle}
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

/* ── Section ── */
const ServicesSection: React.FC = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ padding:'0 48px 120px' }}>
      {/* Intro */}
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px',
        marginBottom:'80px', alignItems:'flex-end',
      }}>
        <div ref={leftRef} className="reveal-left">
          <SectionLabel>Co robimy</SectionLabel>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1 }}>
            Kompleksowe<br />rozwiązania<br />
            <span style={{ color:'var(--accent)' }}>przemysłowe</span>
          </h2>
        </div>
        <div ref={rightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
          <p style={{ fontSize:'16px', color:'var(--muted)', lineHeight:1.8, marginBottom:'32px' }}>
            Specjalizujemy się w projektowaniu, budowie i automatyzacji maszyn
            oraz linii produkcyjnych. Wspieramy przedsiębiorstwa w modernizacji
            i optymalizacji procesów.
          </p>
          <Button to="/kontakt" variant="secondary">
            Porozmawiajmy o projekcie
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Rows */}
      <div style={{ display:'grid', gap:'2px' }}>
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.id} service={s} delay={i * 0.05} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
