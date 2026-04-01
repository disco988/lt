import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../data';

const Footer: React.FC = () => (
  <footer style={{
    padding:      '60px 48px 40px',
    borderTop:    '1px solid var(--border)',
    display:      'flex',
    justifyContent:'space-between',
    alignItems:   'center',
    flexWrap:     'wrap',
    gap:          '24px',
  }}>
    <Link to="/" style={{
      fontFamily:    "'Bebas Neue', sans-serif",
      fontSize:      '24px',
      letterSpacing: '4px',
      color:         'var(--muted)',
      textDecoration:'none',
    }}>
      Lubo<span style={{ color:'var(--accent)' }}>tech</span>
    </Link>

    <p style={{ fontSize:'12px', color:'var(--muted)', fontFamily:"'JetBrains Mono', monospace" }}>
      © 2026 Lubotech · ul. Poznańska 15, 44-120 Pyskowice
    </p>

    <nav style={{ display:'flex', gap:'32px', flexWrap:'wrap' }}>
      {NAV_LINKS.map(l => (
        <Link key={l.href} to={l.href} style={{
          fontSize:      '12px',
          color:         'var(--muted)',
          textDecoration:'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          transition:    'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {l.label}
        </Link>
      ))}
      <a href="#" style={{ fontSize:'12px', color:'var(--muted)', textDecoration:'none', letterSpacing:'2px', textTransform:'uppercase' }}>
        Polityka Prywatności
      </a>
    </nav>

    <style>{`
      @media (max-width: 900px) {
        footer { padding: 40px 24px 24px; flex-direction: column; align-items: flex-start; }
      }
    `}</style>
  </footer>
);

export default Footer;
