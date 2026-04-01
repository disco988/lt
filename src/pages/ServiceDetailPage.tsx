import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import PageHero     from '../components/ui/PageHero';
import Ticker       from '../components/ui/Ticker';
import SectionLabel from '../components/ui/SectionLabel';
import Button       from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SERVICES } from '../data';

/* ── Feature row – own component so hooks are called at top level ── */
interface FeatureRowProps { item: string; index: number }

const FeatureRow: React.FC<FeatureRowProps> = ({ item, index }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        display:    'flex',
        gap:        '24px',
        alignItems: 'flex-start',
        padding:    '28px 32px',
        background: 'var(--surface)',
        border:     '1px solid var(--border)',
        borderLeft: '1px solid var(--border)',
        transition: 'all 0.3s',
        transitionDelay: `${index * 0.05}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background     = 'rgba(232,255,0,0.03)';
        e.currentTarget.style.borderLeftColor = 'var(--accent)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background     = 'var(--surface)';
        e.currentTarget.style.borderLeftColor = 'var(--border)';
      }}
    >
      <span style={{
        fontFamily: "'Bebas Neue',sans-serif", fontSize:'32px',
        color: 'rgba(232,255,0,.3)', flexShrink:0, lineHeight:1, minWidth:'40px',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'22px', letterSpacing:'2px' }}>
        {item}
      </h3>
    </div>
  );
};

/* ── Page ── */
const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service   = SERVICES.find(s => s.id === slug);
  const leftRef   = useScrollReveal<HTMLDivElement>();
  const rightRef  = useScrollReveal<HTMLDivElement>();

  if (!service) {
    return (
      <div style={{ padding:'200px 48px', textAlign:'center' }}>
        <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'80px' }}>
          Nie znaleziono usługi
        </h1>
        <div style={{ marginTop: '32px' }}>
          <Button to="/uslugi">Wróć do usług</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        label={`Usługa ${service.num}`}
        title={<>{service.title}<br /><span style={{ color:'var(--accent)' }}>{service.subtitle}</span></>}
        description={service.description}
      />

      <Ticker items={[service.title, '20+ Lat Doświadczenia', '120+ Projektów', 'Europa']} />

      <section style={{ padding:'100px 48px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start', marginBottom:'60px' }}>
          <div ref={leftRef} className="reveal-left">
            <SectionLabel>Zakres usług</SectionLabel>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,72px)', lineHeight:1, letterSpacing:'1px' }}>
              Co oferujemy<br />w zakresie<br />
              <span style={{ color:'var(--accent)' }}>{service.title}</span>
            </h2>
          </div>
          <div ref={rightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8, marginBottom:'32px' }}>
              {service.description} Każde zlecenie traktujemy indywidualnie — dobieramy
              optymalne rozwiązanie techniczne i zapewniamy pełne wsparcie.
            </p>
            <Button to="/kontakt">Zapytaj o wycenę</Button>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'2px', marginTop:'60px' }}>
          {service.items.map((item, i) => (
            <FeatureRow key={item} item={item} index={i} />
          ))}
        </div>
      </section>

      <section style={{ padding:'80px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>Gotowi do realizacji</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          Porozmawiajmy o Twoim <span style={{ color:'var(--accent)' }}>projekcie</span>
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:'480px', margin:'0 auto 40px', fontSize:'16px', lineHeight:1.7 }}>
          Skontaktuj się — wycenimy projekt i zaproponujemy najlepsze rozwiązanie techniczne.
        </p>
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <Button to="/kontakt">Kontakt z nami</Button>
          <Button to="/uslugi" variant="secondary">
            Wszystkie usługi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default ServiceDetailPage;
