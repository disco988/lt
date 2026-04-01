import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FAQ_ITEMS } from '../../data';
import type { FaqItem } from '../../types';
import { PipeSchematicBg } from '../ui/AutomationBg';

interface FaqRowProps {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  delay: number;
}

const FaqRow: React.FC<FaqRowProps> = ({ item, open, onToggle, delay }) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        borderBottom:  '1px solid var(--border)',
        transitionDelay: `${delay}s`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width:         '100%',
          background:    'none',
          border:        'none',
          cursor:        'pointer',
          color:         open ? 'var(--accent)' : 'var(--text)',
          fontFamily:    "'Syne', sans-serif",
          fontSize:      '17px',
          fontWeight:    700,
          display:       'flex',
          justifyContent:'space-between',
          alignItems:    'flex-start',
          gap:           '24px',
          padding:       '24px 0',
          textAlign:     'left',
          transition:    'color 0.2s',
        }}
      >
        <span>{item.question}</span>
        <span style={{
          width:        '32px',
          height:       '32px',
          flexShrink:   0,
          border:       '1px solid var(--border)',
          display:      'flex',
          alignItems:   'center',
          justifyContent:'center',
          fontSize:     '20px',
          lineHeight:   1,
          transition:   'all 0.3s',
          background:   open ? 'var(--accent)' : 'transparent',
          borderColor:  open ? 'var(--accent)' : 'var(--border)',
          color:        open ? '#000' : 'var(--muted)',
          transform:    open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>

      <div style={{
        fontSize:   '14px',
        lineHeight: 1.8,
        color:      'var(--muted)',
        maxHeight:  open ? '300px' : '0',
        overflow:   'hidden',
        transition: 'max-height 0.5s cubic-bezier(.16,1,.3,1), padding 0.3s',
        paddingBottom: open ? '24px' : '0',
      }}>
        {item.answer}
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  const half = Math.ceil(FAQ_ITEMS.length / 2);
  const left  = FAQ_ITEMS.slice(0, half);
  const right = FAQ_ITEMS.slice(half);

  return (
    <section className="faq-section" style={{
      padding:  '120px 48px',
      borderTop:'1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <PipeSchematicBg style={{ right: '-4%', bottom: '-8%', height: '90%', width: 'auto' }} />
      <div ref={labelRef} className="reveal">
        <SectionLabel>Pytania i odpowiedzi</SectionLabel>
      </div>
      <h2
        ref={titleRef}
        className="reveal"
        style={{
          fontFamily:      "'Bebas Neue', sans-serif",
          fontSize:        'clamp(42px, 6vw, 80px)',
          lineHeight:      1,
          letterSpacing:   '1px',
          transitionDelay: '0.1s',
        }}
      >
        Najczęstsze <span style={{ color: 'var(--accent)' }}>pytania</span>
      </h2>

      <div className="faq-grid" style={{
        display:             'grid',
        gridTemplateColumns: '1fr 1fr',
        gap:                 '80px',
        marginTop:           '80px',
      }}>
        <div>
          {left.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              delay={i * 0.1}
            />
          ))}
        </div>
        <div>
          {right.map((item, i) => (
            <FaqRow
              key={i + half}
              item={item}
              open={openIndex === i + half}
              onToggle={() => setOpenIndex(openIndex === i + half ? null : i + half)}
              delay={(i + 0.05) * 0.1}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default FaqSection;
