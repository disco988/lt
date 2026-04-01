import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangCtx } from '../contexts/LangContext';
import PageHero     from '../components/ui/PageHero';
import Ticker       from '../components/ui/Ticker';
import Button       from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';
import SEO          from '../components/ui/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SERVICES } from '../data';
import type { Service } from '../types';

const ServiceBigCard: React.FC<{ service: Service; side: 'left' | 'right'; delay: number }> = ({ service, side, delay }) => {
  const ref = useScrollReveal<HTMLAnchorElement>();
  const { t } = useTranslation();
  const { prefix } = useLangCtx();

  return (
    <Link
      ref={ref}
      to={`${prefix}${service.slug}`}
      className={`${side === 'left' ? 'reveal-left' : 'reveal-right'} service-big-card`}
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
        {t(`services.${service.id}.title`)}
      </h3>
      <p style={{ fontSize:'14px', color:'var(--muted)', lineHeight:1.8, marginBottom:'32px' }}>
        {t(`services.${service.id}.description`)}
      </p>

      <ul style={{ display:'flex', flexDirection:'column', gap:'8px', listStyle:'none' }}>
        {(t(`services.${service.id}.items`, { returnObjects: true }) as string[]).map(item => (
          <li key={item} style={{
            fontSize:'13px', color:'rgba(240,240,240,.6)',
            paddingLeft:'20px', position:'relative',
          }}>
            <span style={{ position:'absolute', left:0, color:'var(--accent)' }}>→</span>
            {item}
          </li>
        ))}
      </ul>

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

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const tickerItems = t('pages.services.ticker', { returnObjects: true }) as string[];

  return (
    <>
      <SEO page="services" />
      <PageHero
        label={t('pages.services.hero_label')}
        title={<>{t('pages.services.hero_title_pre')}<br /><span style={{ color:'var(--accent)' }}>{t('pages.services.hero_title_mid')}</span><br />{t('pages.services.hero_title_accent')}</>}
        description={t('pages.services.hero_description')}
      />

      <Ticker items={tickerItems} />

      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div className="services-big-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px' }}>
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

      <section className="page-section" style={{ padding:'80px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>{t('pages.services.bottom_label')}</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          {t('pages.services.bottom_title_pre')} <span style={{ color:'var(--accent)' }}>{t('pages.services.bottom_title_accent')}</span>
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:'560px', margin:'0 auto 48px', fontSize:'16px', lineHeight:1.7 }}>
          {t('pages.services.bottom_description')}
        </p>
        <Button to="/kontakt">{t('pages.services.bottom_cta')}</Button>
      </section>
    </>
  );
};

export default ServicesPage;
