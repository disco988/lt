import React from 'react';
import { Link } from 'react-router-dom';

interface BaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
}

interface LinkProps extends BaseProps {
  to: string;
  onClick?: never;
}
interface ButtonProps extends BaseProps {
  onClick: () => void;
  to?: never;
}

type Props = LinkProps | ButtonProps;

const primaryStyle: React.CSSProperties = {
  background:    'var(--accent)',
  color:         '#000',
  padding:       '16px 40px',
  fontSize:      '13px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontWeight:    800,
  textDecoration:'none',
  display:       'inline-block',
  clipPath:      'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
  transition:    'all 0.3s',
  position:      'relative',
  cursor:        'pointer',
  border:        'none',
  fontFamily:    "'Syne', sans-serif",
};

const secondaryStyle: React.CSSProperties = {
  color:         'var(--text)',
  textDecoration:'none',
  fontSize:      '13px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontWeight:    600,
  display:       'inline-flex',
  alignItems:    'center',
  gap:           '12px',
  padding:       '16px 0',
  borderBottom:  '1px solid var(--border)',
  transition:    'border-color 0.2s, gap 0.3s',
  background:    'none',
  border:        'none',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'var(--border)',
  cursor:        'pointer',
};

const Button: React.FC<Props> = ({ children, variant = 'primary', to, onClick, style }) => {
  const base = variant === 'primary' ? primaryStyle : secondaryStyle;
  const merged = { ...base, ...style };

  if (to) {
    return (
      <Link to={to} style={merged}
        onMouseEnter={e => {
          if (variant === 'primary') (e.currentTarget as HTMLElement).style.background = '#fff';
          if (variant === 'secondary') { (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--text)'; (e.currentTarget as HTMLElement).style.gap = '20px'; }
        }}
        onMouseLeave={e => {
          if (variant === 'primary') (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
          if (variant === 'secondary') { (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.gap = '12px'; }
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={merged}>{children}</button>
  );
};

export default Button;
