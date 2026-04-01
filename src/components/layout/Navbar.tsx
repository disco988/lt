import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavScroll } from '../../hooks/useNavScroll';
import { NAV_LINKS } from '../../data';

const Navbar: React.FC = () => {
  const scrolled  = useNavScroll();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* ── Desktop Nav ─────────────────────────────────────── */}
      <nav style={{
        position:   'fixed', top: 0, left: 0, right: 0,
        zIndex:     100,
        padding:    '24px 48px',
        display:    'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background:   scrolled ? 'rgba(5,5,7,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s',
      }}>
        <Link to="/" style={{
          fontFamily:    "'Bebas Neue', sans-serif",
          fontSize:      '28px',
          letterSpacing: '4px',
          color:         'var(--text)',
          textDecoration:'none',
        }}>
          Lubo<span style={{ color: 'var(--accent)' }}>tech</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display:'flex', gap:'36px', alignItems:'center' }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} style={{
              color:         pathname === l.href ? 'var(--text)' : 'var(--muted)',
              textDecoration:'none',
              fontSize:      '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight:    600,
              transition:    'color 0.2s',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link to="/kontakt" style={{
          background:    'var(--accent)',
          color:         '#000',
          padding:       '10px 24px',
          fontSize:      '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight:    800,
          textDecoration:'none',
          clipPath:      'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
          transition:    'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          className="nav-cta"
        >
          Zapytaj o projekt
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(true)}
          className="nav-burger"
          style={{
            display:        'none',
            flexDirection:  'column',
            gap:            '5px',
            background:     'none',
            border:         'none',
            cursor:         'pointer',
            padding:        '4px',
          }}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display:'block', width:'24px', height:'2px', background:'var(--text)' }} />
          ))}
        </button>
      </nav>

      {/* ── Mobile Menu ─────────────────────────────────────── */}
      {open && (
        <div style={{
          position:       'fixed', inset: 0,
          background:     'rgba(5,5,7,0.98)',
          zIndex:         90,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          alignItems:     'center',
          gap:            '32px',
          backdropFilter: 'blur(20px)',
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} style={{
              fontFamily:    "'Bebas Neue', sans-serif",
              fontSize:      '48px',
              letterSpacing: '4px',
              color:         'var(--text)',
              textDecoration:'none',
            }}>
              {l.label}
            </Link>
          ))}
          <button onClick={() => setOpen(false)} style={{
            position:   'absolute', top: '24px', right: '24px',
            background: 'none', border: 'none', color: 'var(--muted)',
            fontSize:   '32px', cursor: 'pointer',
          }}>✕</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta     { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
