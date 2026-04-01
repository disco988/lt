import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCounter } from '../../hooks/useCounter';
import { STATS } from '../../data';
import type { Stat } from '../../types';
import { CircuitBg } from '../ui/AutomationBg';

interface StatCardProps { stat: Stat; label: string; delay: number }

const StatCard: React.FC<StatCardProps> = ({ stat, label, delay }) => {
  const wrapRef = useScrollReveal<HTMLDivElement>();
  const [count, numRef] = useCounter(stat.value);

  return (
    <div ref={wrapRef} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <div
        style={{
          background: 'var(--bg)',
          padding:    '48px 40px',
          position:   'relative',
          overflow:   'hidden',
          transition: 'background 0.3s',
          height:     '100%',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.background = 'var(--surface)';
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
          bottom:0, left:0, right:0,
          height:          '2px',
          background:      'var(--accent)',
          transform:       'scaleX(0)',
          transformOrigin: 'left',
          transition:      'transform 0.4s cubic-bezier(.16,1,.3,1)',
        }} />

        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize:   'clamp(64px, 7vw, 100px)',
          lineHeight: 1,
          color:      'var(--text)',
        }}>
          <span ref={numRef} style={{
            display:   'inline-block',
            opacity:    0,
            transform: 'translateY(20px)',
            transition:'opacity 0.6s, transform 0.6s',
          }}>
            {count}
          </span>
          <span style={{ color:'var(--accent)' }}>{stat.suffix}</span>
        </div>

        <p style={{
          fontSize:      '13px',
          color:         'var(--muted)',
          letterSpacing: '1px',
          marginTop:     '12px',
          textTransform: 'uppercase',
          fontWeight:    600,
        }}>
          {label}
        </p>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const labels = t('stats.labels', { returnObjects: true }) as string[];

  return (
    <section className="stats-section" style={{ padding:'120px 48px', position:'relative', overflow:'hidden' }}>
      <CircuitBg style={{ top: 0, left: 0, width: '100%', height: '100%' }} />
      <div
        ref={headerRef}
        className="reveal"
        style={{
          display:       'flex',
          justifyContent:'space-between',
          alignItems:    'flex-end',
          marginBottom:  '80px',
          borderBottom:  '1px solid var(--border)',
          paddingBottom: '48px',
          flexWrap:      'wrap',
          gap:           '32px',
        }}
      >
        <div>
          <SectionLabel>{t('stats.label')}</SectionLabel>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1 }}>
            {t('stats.title_pre')}<br /><span style={{ color:'var(--accent)' }}>{t('stats.title_accent')}</span>
          </h2>
        </div>
        <p style={{ maxWidth:'360px', color:'var(--muted)', fontSize:'15px', lineHeight:1.7 }}>
          {t('stats.description')}
        </p>
      </div>

      <div className="stats-grid" style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap:                 '1px',
        background:          'var(--border)',
      }}>
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} label={labels[i] || stat.label} delay={i * 0.1} />
        ))}
      </div>

    </section>
  );
};

export default StatsSection;
