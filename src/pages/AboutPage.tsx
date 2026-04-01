import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero       from '../components/ui/PageHero';
import Ticker         from '../components/ui/Ticker';
import SectionLabel   from '../components/ui/SectionLabel';
import Button         from '../components/ui/Button';
import SEO            from '../components/ui/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { VALUES } from '../data';
import type { Value } from '../types';

interface TimelineEntry { year: string; title: string; description: string }

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

const ValueCard: React.FC<{ value: Value; translatedTitle: string; translatedDesc: string; delay: number }> = ({ value, translatedTitle, translatedDesc, delay }) => {
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
        {translatedTitle}
      </h3>
      <p style={{ fontSize:'14px', color:'var(--muted)', lineHeight:1.7 }}>{translatedDesc}</p>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const missionLeftRef  = useScrollReveal<HTMLDivElement>();
  const missionRightRef = useScrollReveal<HTMLDivElement>();
  const tlLabelRef      = useScrollReveal<HTMLDivElement>();
  const tlTitleRef      = useScrollReveal<HTMLHeadingElement>();
  const valLabelRef     = useScrollReveal<HTMLDivElement>();
  const valTitleRef     = useScrollReveal<HTMLHeadingElement>();

  const timeline   = t('timeline',   { returnObjects: true }) as TimelineEntry[];
  const valuesText = t('values',     { returnObjects: true }) as { title: string; description: string }[];
  const tickerItems = t('pages.about.ticker', { returnObjects: true }) as string[];

  return (
    <>
      <SEO page="about" />
      <PageHero
        label={t('pages.about.hero_label')}
        title={<>{t('pages.about.hero_title_pre')}<br /><span style={{ color:'var(--accent)' }}>{t('pages.about.hero_title_accent')}</span></>}
        description={t('pages.about.hero_description')}
      />

      <Ticker items={tickerItems} />

      {/* Mission */}
      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div className="two-col-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start' }}>
          <div ref={missionLeftRef} className="reveal-left">
            <SectionLabel>{t('pages.about.mission_label')}</SectionLabel>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,72px)', lineHeight:1, letterSpacing:'1px' }}>
              {t('pages.about.mission_title')}<br /><span style={{ color:'var(--accent)' }}>{t('pages.about.mission_title_accent')}</span>
            </h2>
          </div>
          <div ref={missionRightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8, marginBottom:'20px' }}>
              {t('pages.about.mission_p1')}
            </p>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8 }}>
              {t('pages.about.mission_p2')}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section" style={{ padding:'100px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div ref={tlLabelRef} className="reveal"><SectionLabel>{t('pages.about.timeline_label')}</SectionLabel></div>
        <h2 ref={tlTitleRef} className="reveal" style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)',
          lineHeight:1, letterSpacing:'1px', transitionDelay:'0.1s',
        }}>
          {t('pages.about.timeline_title')} <span style={{ color:'var(--accent)' }}>{t('pages.about.timeline_title_accent')}</span> {t('pages.about.timeline_title_post')}
        </h2>
        <div style={{ marginTop:'60px' }}>
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.year} entry={entry} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div ref={valLabelRef} className="reveal"><SectionLabel>{t('pages.about.values_label')}</SectionLabel></div>
        <h2 ref={valTitleRef} className="reveal" style={{
          fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)',
          lineHeight:1, letterSpacing:'1px', marginBottom:'60px', transitionDelay:'0.1s',
        }}>
          {t('pages.about.values_title')} <span style={{ color:'var(--accent)' }}>{t('pages.about.values_title_accent')}</span>
        </h2>
        <div className="values-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2px' }}>
          {VALUES.map((v, i) => (
            <ValueCard
              key={v.title}
              value={v}
              translatedTitle={valuesText[i]?.title || v.title}
              translatedDesc={valuesText[i]?.description || v.description}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ padding:'100px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>{t('pages.about.cta_label')}</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          {t('pages.about.cta_title')} <span style={{ color:'var(--accent)' }}>{t('pages.about.cta_title_accent')}</span>
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:'480px', margin:'0 auto 40px', fontSize:'16px', lineHeight:1.7 }}>
          {t('pages.about.cta_description')}
        </p>
        <Button to="/kontakt">{t('pages.about.cta_button')}</Button>
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
