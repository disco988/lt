import React from 'react';
import { Link } from 'react-router-dom';
import PageHero     from '../components/ui/PageHero';
import Ticker       from '../components/ui/Ticker';
import Button       from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SERVICES } from '../data';
import type { Service } from '../types';

const ServiceBigCard: React.FC<{ service: Service; side: 'left' | 'right'; delay: number }> = ({ service, side, delay }) => {
  const ref = useScrollReveal<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={service.slug}
      className={side === 'left' ? 'reveal-left' : 'reveal-right'}
      style={{
        background:    'var(--surface)',
        padding:       '64px',
        position:      'relative',
        overflow:      'hidden',
        textDecoration:'none',
        color:         'inherit',
        transition:    'background 0.4s cubic-bezier(.16,1,.3,1)',
        transitionDelay:`${delay}s`,
        display:       'block',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,255,0,0.04)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
    >
      {/* num */}
      <div style={{
        fontFamily:    "'Bebas Neue',sans-serif",
        fontSize:      '80px',
        color:         'rgba(232,255,0,0.08)',
        lineHeight:    1,
        marginBottom:  '24px',
        transition:    'color 0.3s',
      }}>
        {service.num}
      </div>

      <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'44px', letterSpacing:'3px', marginBottom:'16px' }}>
        {service.title}
      </h3>
      <p style={{ fontSize:'14px', color:'var(--muted)', lineHeight:1.8, marginBottom:'32px' }}>
        {service.description}
      </p>

      <ul style={{ display:'flex', flexDirection:'column', gap:'8px', listStyle:'none' }}>
        {service.items.map(item => (
          <li key={item} style={{
            fontSize:'13px', color:'rgba(240,240,240,.6)',
            paddingLeft:'20px', position:'relative',
          }}>
            <span style={{ position:'absolute', left:0, color:'var(--accent)' }}>→</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <div style={{
        position:'absolute', bottom:'40px', right:'40px',
        width:'48px', height:'48px',
        border:'1px solid var(--border)',
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'all 0.3s',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  );
};

const ServicesPage: React.FC = () => (
  <>
    <PageHero
      label="Usługi"
      title={<>Kompletna<br /><span style={{ color:'var(--accent)' }}>oferta</span><br />inżynieryjna</>}
      description="Cztery kluczowe działy — mechanika, elektryka, automatyka i pneumatyka — tworzą kompleksowe rozwiązanie dla Twojego zakładu produkcyjnego."
    />

    <Ticker items={['Mechanika','Elektryka','Automatyka','Pneumatyka']} />

    <section style={{ padding:'100px 48px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px' }}>
        {SERVICES.map((s, i) => (
          <ServiceBigCard
            key={s.id}
            service={s}
            side={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>

    <section style={{ padding:'80px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
      <SectionLabel center>Kompleksowe podejście</SectionLabel>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
        Od koncepcji do <span style={{ color:'var(--accent)' }}>realizacji</span>
      </h2>
      <p style={{ color:'var(--muted)', maxWidth:'560px', margin:'0 auto 48px', fontSize:'16px', lineHeight:1.7 }}>
        Nie jesteśmy tylko podwykonawcą — jesteśmy partnerem technologicznym.
        Przejmujemy odpowiedzialność za cały projekt.
      </p>
      <Button to="/kontakt">Zapytaj o wycenę</Button>
    </section>

    <style>{`
      @media (max-width: 900px) {
        section { padding-left: 24px !important; padding-right: 24px !important; }
        .services-big-grid { grid-template-columns: 1fr !important; }
        .service-big-card  { padding: 40px 24px !important; }
      }
    `}</style>
  </>
);

export default ServicesPage;
