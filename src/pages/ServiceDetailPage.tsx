import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero     from '../components/ui/PageHero';
import Ticker       from '../components/ui/Ticker';
import SectionLabel from '../components/ui/SectionLabel';
import Button       from '../components/ui/Button';
import SEO          from '../components/ui/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SERVICES } from '../data';

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

const ServiceDetailPage: React.FC = () => {
  const { slug }  = useParams<{ slug: string }>();
  const service   = SERVICES.find(s => s.id === slug);
  const leftRef   = useScrollReveal<HTMLDivElement>();
  const rightRef  = useScrollReveal<HTMLDivElement>();
  const { t }     = useTranslation();

  if (!service) {
    return (
      <div style={{ padding:'200px 48px', textAlign:'center' }}>
        <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'80px' }}>
          {t('service_detail.not_found')}
        </h1>
        <div style={{ marginTop: '32px' }}>
          <Button to="/uslugi">{t('service_detail.back_to_services')}</Button>
        </div>
      </div>
    );
  }

  const translatedTitle    = t(`services.${service.id}.title`);
  const translatedSubtitle = t(`services.${service.id}.subtitle`);
  const translatedDesc     = t(`services.${service.id}.description`);
  const translatedItems    = t(`services.${service.id}.items`, { returnObjects: true }) as string[];

  const tickerItems = [
    translatedTitle,
    t('service_detail.ticker_experience'),
    t('service_detail.ticker_projects'),
    t('service_detail.ticker_reach'),
  ];

  return (
    <>
      <SEO page="services" slug={service.id} />
      <PageHero
        label={`${t('service_detail.service_label')} ${service.num}`}
        title={<>{translatedTitle}<br /><span style={{ color:'var(--accent)' }}>{translatedSubtitle}</span></>}
        description={translatedDesc}
      />

      <Ticker items={tickerItems} />

      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div className="detail-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start', marginBottom:'60px' }}>
          <div ref={leftRef} className="reveal-left">
            <SectionLabel>{t('service_detail.scope_label')}</SectionLabel>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,72px)', lineHeight:1, letterSpacing:'1px' }}>
              {t('service_detail.scope_title_pre')}<br />
              <span style={{ color:'var(--accent)' }}>{translatedTitle}</span>
            </h2>
          </div>
          <div ref={rightRef} className="reveal-right" style={{ transitionDelay:'0.15s' }}>
            <p style={{ fontSize:'16px', color:'rgba(240,240,240,.7)', lineHeight:1.8, marginBottom:'32px' }}>
              {translatedDesc} {t('service_detail.detail_suffix')}
            </p>
            <Button to="/kontakt">{t('service_detail.cta_button')}</Button>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'2px', marginTop:'60px' }}>
          {translatedItems.map((item, i) => (
            <FeatureRow key={item} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="page-section" style={{ padding:'80px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>{t('service_detail.cta_label')}</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          {t('service_detail.cta_title_pre')} <span style={{ color:'var(--accent)' }}>{t('service_detail.cta_title_accent')}</span>
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:'480px', margin:'0 auto 40px', fontSize:'16px', lineHeight:1.7 }}>
          {t('service_detail.cta_description')}
        </p>
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <Button to="/kontakt">{t('service_detail.cta_contact')}</Button>
          <Button to="/uslugi" variant="secondary">
            {t('service_detail.cta_all_services')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
