import React, { useState } from 'react';
import Button from './Button';

interface Field {
  name:        string;
  placeholder: string;
  type?:       string;
  required?:   boolean;
  rows?:       number;
}

const FIELDS: Field[] = [
  { name: 'name',    placeholder: 'Imię i nazwisko',    required: true  },
  { name: 'company', placeholder: 'Firma / Organizacja'                 },
  { name: 'email',   placeholder: 'Adres e-mail', type: 'email', required: true },
  { name: 'phone',   placeholder: 'Numer telefonu', type: 'tel'         },
  { name: 'subject', placeholder: 'Temat wiadomości'                    },
  { name: 'message', placeholder: 'Opisz swój projekt...', rows: 5, required: true },
];

const inputStyle: React.CSSProperties = {
  width:       '100%',
  background:  'var(--bg)',
  border:      '1px solid var(--border)',
  padding:     '20px 24px',
  fontSize:    '14px',
  fontFamily:  "'Syne', sans-serif",
  color:       'var(--text)',
  resize:      'none',
  outline:     'none',
  display:     'block',
};

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {FIELDS.slice(0, 2).map(f => (
          <input key={f.name} type={f.type || 'text'} placeholder={f.placeholder} required={f.required} style={inputStyle} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {FIELDS.slice(2, 4).map(f => (
          <input key={f.name} type={f.type || 'text'} placeholder={f.placeholder} required={f.required} style={inputStyle} />
        ))}
      </div>
      <input placeholder={FIELDS[4].placeholder} style={inputStyle} />
      <textarea placeholder={FIELDS[5].placeholder} rows={5} required style={inputStyle} />

      <button
        type="submit"
        style={{
          background:    'var(--accent)',
          color:         '#000',
          border:        'none',
          padding:       '20px 48px',
          fontFamily:    "'Syne', sans-serif",
          fontSize:      '13px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontWeight:    800,
          cursor:        'pointer',
          marginTop:     '2px',
          width:         '100%',
          clipPath:      'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)',
          transition:    'background 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
      >
        {sent ? 'Wysłano! Odezwiemy się wkrótce ✓' : 'Wyślij wiadomość →'}
      </button>
    </form>
  );
};

export default ContactForm;
