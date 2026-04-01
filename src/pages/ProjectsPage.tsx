import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHero     from '../components/ui/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import Button       from '../components/ui/Button';
import SEO          from '../components/ui/SEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PROJECTS } from '../data';
import type { Project } from '../types';

type Category = 'all' | 'mechanika' | 'elektryka' | 'automatyka' | 'pneumatyka';

const ProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => {
  const ref     = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background:    project.gradient,
        border:        '1px solid var(--border)',
        aspectRatio:   '4/3',
        position:      'relative',
        overflow:      'hidden',
        cursor:        'pointer',
        transition:    'transform 0.4s cubic-bezier(.16,1,.3,1)',
        transform:     hovered ? 'scale(1.02)' : 'scale(1)',
        transitionDelay:`${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position:  'absolute', inset: 0,
        display:   'flex', alignItems:'center', justifyContent:'center',
        transition:'transform 0.6s cubic-bezier(.16,1,.3,1)',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
      }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.18 }}>
          <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="0.8"/>
          <circle cx="60" cy="60" r="28" stroke="#e8ff00" strokeWidth="1.5"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="white" strokeWidth="0.5"/>
          <line x1="60" y1="10" x2="60"  y2="110" stroke="white" strokeWidth="0.5"/>
          <circle cx="60" cy="60" r="5" fill="#e8ff00"/>
        </svg>
      </div>

      <div style={{
        position:      'absolute', right:'16px', top:'16px',
        fontFamily:    "'Bebas Neue',sans-serif",
        fontSize:      '100px',
        color:         hovered ? 'rgba(232,255,0,0.08)' : 'rgba(255,255,255,0.04)',
        lineHeight:    1,
        transition:    'color 0.3s',
      }}>
        {project.num}
      </div>

      <div style={{
        position:   'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.3) 60%, transparent 100%)',
        opacity:    hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      <div style={{
        position:   'absolute', bottom: 0, left: 0, right: 0,
        padding:    '28px',
        transform:  hovered ? 'translateY(0)' : 'translateY(20px)',
        opacity:    hovered ? 1 : 0,
        transition: 'all 0.3s',
      }}>
        <div style={{
          fontFamily:    "'JetBrains Mono',monospace",
          fontSize:      '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color:         'var(--accent)',
          marginBottom:  '8px',
        }}>
          {project.category}
        </div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'22px', letterSpacing:'2px' }}>
          {project.title}
        </div>
        <div style={{ fontSize:'13px', color:'rgba(240,240,240,.6)', marginTop:'4px' }}>
          {project.client}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [active, setActive] = useState<Category>('all');
  const { t } = useTranslation();

  const projTexts = t('projects', { returnObjects: true }) as { title: string; client: string }[];
  const projects  = PROJECTS.map((p, i) => ({
    ...p,
    title:  projTexts[i]?.title  || p.title,
    client: projTexts[i]?.client || p.client,
  }));

  const filters: { label: string; value: Category }[] = [
    { label: t('pages.projects.filter_all'),       value: 'all'       },
    { label: t('pages.projects.filter_mechanika'), value: 'mechanika' },
    { label: t('pages.projects.filter_elektryka'), value: 'elektryka' },
    { label: t('pages.projects.filter_automatyka'),value: 'automatyka'},
    { label: t('pages.projects.filter_pneumatyka'),value: 'pneumatyka'},
  ];

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <SEO page="projects" />
      <PageHero
        label={t('pages.projects.hero_label')}
        title={<><span style={{ color:'var(--accent)' }}>{t('pages.projects.hero_title_accent')}</span><br />{t('pages.projects.hero_title_mid')}<br />{t('pages.projects.hero_title_post')}</>}
        description={t('pages.projects.hero_description')}
      />

      <section className="page-section" style={{ padding:'100px 48px' }}>
        <div style={{ display:'flex', gap:'2px', marginBottom:'40px', flexWrap:'wrap' }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                padding:       '10px 24px',
                border:        '1px solid var(--border)',
                background:    active === f.value ? 'var(--accent)' : 'transparent',
                color:         active === f.value ? '#000' : 'var(--muted)',
                fontFamily:    "'Syne',sans-serif",
                fontSize:      '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor:        'pointer',
                fontWeight:    active === f.value ? 800 : 400,
                transition:    'all 0.2s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2px' }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.05} />
          ))}
        </div>
      </section>

      <section className="page-section" style={{ padding:'80px 48px', background:'var(--surface)', borderTop:'1px solid var(--border)', textAlign:'center' }}>
        <SectionLabel center>{t('pages.projects.cta_label')}</SectionLabel>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(42px,6vw,80px)', lineHeight:1, marginBottom:'24px' }}>
          {t('pages.projects.cta_title_pre')} <span style={{ color:'var(--accent)' }}>{t('pages.projects.cta_title_accent')}</span>
        </h2>
        <Button to="/kontakt">{t('pages.projects.cta_button')}</Button>
      </section>
    </>
  );
};

export default ProjectsPage;
