import React from 'react';
import PageHero       from '../components/ui/PageHero';
import Ticker         from '../components/ui/Ticker';
import SectionLabel   from '../components/ui/SectionLabel';
import Button         from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TIMELINE, VALUES } from '../data';
import type { Value, TimelineEntry } from '../types';

/* ─── Timeline Item ─────────────────────────────────────────── */
const TimelineItem: React.FC<{ entry: TimelineEntry; delay: number }> = ({ entry, delay }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal tl-item" style={{
      display:             'grid',
      gridTemplateColumns: '120px 1fr',
      gap:                 '40px',
      padding:             '32px 0',
      borderBottom:        '1px solid var(--border)',
      alignItems:          'start',
      transitionDelay:     `${delay}s`,
    }}>
      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'36px', color:'var(--accent)', lineHeight:1 }}>
        {entry.year}
      </span>
      <div>
        <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'24px', letterSpacing:'2px', marginBottom:'8px' }}>
          {entry.title}
        </h3>
        <p style={{ fontSize:'14px', color:'var(--muted)', lineHeight:1.7 }}>{entry.description}</p>
      </div>
    </div>
  );
};

/* ─── Value Card ─────────────────────────────────────────────── */
const ValueCard: React.FC<{ value: Value; delay: number }> = ({ value, delay }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={{
      background:   'var(--surface)',
      border:       '1px solid var(--border)',
      padding:      '40px',
      position:     'relative',
      overflow:     'hidden',
      transition:   'background 0.4s',
      transitionDelay: `${delay}s`,
    }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,255,0,0.04)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
    >
      <div style={{
        width:'48px', height:'48px', border:'1px solid var(--border)',
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={value.iconPath} />
        </svg>
      </div>
      <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'22px', letterSpacing:'2px', marginBottom:'12px' }}>
        {value.title}
      </h3>
      <p style={{ fontSize:'14px', color:'var(--muted)', lineHeight:1.7 }}>{value.description}</p>
    </div>
  );
};

/* ─── Page ───────────────────────────────────────────────────── */
const AboutPage: React.FC = () => {
  const missionLeftRef  = useScrollReveal<HTMLDivElement>();
  const missionRightRef = useScrollReveal<HTMLDivElement>();
  const tlLabelRef      = useScrollReveal<HTMLDivElement>();
  const tlTitleRef      = useScrollReveal<HTMLHeadingElement>();
  const valLabelRef     = useScrollReveal<HTMLDivElement>();
  const valTitleRef     = useScrollReveal<HTMLHeadingElement>();

  return (
    <>
      <PageHero
        label="O firmie"
        title={<>Twoja produkcja.<br /><span style={{ color:'var(--accent)' }}>Nasza inżynieria.</span></>}
        description="Lubotech to firma z ponad 20-letnim doświadczeniem w projektowaniu, budowie i automatyzacji maszyn oraz linii produkcyjnych. Działamy w Polsce i 13 krajach Europy."
      />

      <Ticker items={['20+ Lat','120+ Projektów','85 Pracowników','13 Krajów']} />

      {/* Mission */}
      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div className="two-col-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start' }}>
          <div ref={missionLeftRef} className="reveal-left">
            <SectionLabel>Misja i wizja</SectionLabel>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,72px)', lineHeight:1, letterSpacing:'1px' }}>
              Zaangażowani<br />w <span style={{ color:'var(--accent)' }}>doskonałość</span>
            </h2>
          </div>
          <div ref={missionRightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8, marginBottom:'20px' }}>
              Misją Lubotech jest dostarczanie innowacyjnych rozwiązań inżynieryjnych, które zwiększają
              efektywność i konkurencyjność naszych klientów. Realizujemy projekty kompleksowo — od koncepcji
              po wdrożenie i serwis.
            </p>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8 }}>
              Naszą wizją jest bycie liderem w automatyzacji przemysłowej w Polsce i Europie Środkowej,
              rozwijając się wraz z naszymi klientami i wdrażając najnowsze technologie Przemysłu 4.0.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section" style={{ padding:'100px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div ref={tlLabelRef} className="reveal"><SectionLabel>Historia</SectionLabel></div>
        <h2 ref={tlTitleRef} className="reveal" style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)',
          lineHeight:1, letterSpacing:'1px', transitionDelay:'0.1s',
        }}>
          Ponad <span style={{ color:'var(--accent)' }}>20 lat</span> na rynku
        </h2>
        <div style={{ marginTop:'60px' }}>
          {TIMELINE.map((entry, i) => (
            <TimelineItem key={entry.year} entry={entry} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div ref={valLabelRef} className="reveal"><SectionLabel>Nasze wartości</SectionLabel></div>
        <h2 ref={valTitleRef} className="reveal" style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)',
          lineHeight:1, letterSpacing:'1px', marginBottom:'60px', transitionDelay:'0.1s',
        }}>
          Co nas <span style={{ color:'var(--accent)' }}>wyróżnia</span>
        </h2>
        <div className="values-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2px' }}>
          {VALUES.map((v, i) => <ValueCard key={v.title} value={v} delay={i * 0.08} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ padding:'100px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>Dołącz do nas</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          Zacznijmy <span style={{ color:'var(--accent)' }}>współpracę</span>
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:'480px', margin:'0 auto 40px', fontSize:'16px', lineHeight:1.7 }}>
          Skontaktuj się z nami i opowiedz o swoim projekcie. Przygotujemy indywidualną ofertę.
        </p>
        <Button to="/kontakt">Skontaktuj się z nami</Button>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .tl-item { grid-template-columns: 80px 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
