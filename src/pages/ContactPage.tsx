import React from 'react';
import PageHero     from '../components/ui/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ContactForm  from '../components/ui/ContactForm';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => (
  <div style={{
    padding:'24px 0', borderBottom:'1px solid var(--border)',
    display:'flex', alignItems:'center', gap:'24px', fontSize:'15px',
  }}>
    <div style={{
      width:'40px', height:'40px', border:'1px solid var(--border)',
      display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{
        fontSize:'12px', color:'var(--muted)', letterSpacing:'2px',
        textTransform:'uppercase', marginBottom:'4px',
        fontFamily:"'JetBrains Mono',monospace",
      }}>
        {label}
      </div>
      <div style={{ fontSize:'17px', fontWeight:700 }}>{value}</div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <PageHero
        label="Skontaktuj się"
        title={<>Napisz<br />do <span style={{ color:'var(--accent)' }}>nas.</span></>}
        description="Jesteśmy gotowi wysłuchać Twojego projektu. Skontaktuj się z nami — odpowiemy w ciągu 24 godzin."
      />

      <section style={{ padding:'100px 48px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'80px' }}>
          {/* Left */}
          <div ref={leftRef} className="reveal-left">
            <SectionLabel>Dane kontaktowe</SectionLabel>

            <div style={{ marginBottom:'60px' }}>
              <div style={{
                fontFamily:"'JetBrains Mono',monospace",
                fontSize:'11px', letterSpacing:'3px',
                textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px',
              }}>
                Telefon
              </div>
              <a href="tel:+48326664450" style={{
                fontFamily:"'Bebas Neue',sans-serif",
                fontSize:'clamp(28px,4vw,48px)',
                letterSpacing:'1px', lineHeight:1.1,
                color:'inherit', textDecoration:'none',
                display:'block', marginBottom:'40px',
                transition:'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
              >
                +48 32 66 64 450
              </a>

              <div style={{
                fontFamily:"'JetBrains Mono',monospace",
                fontSize:'11px', letterSpacing:'3px',
                textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px',
              }}>
                Email
              </div>
              <a href="mailto:info@lubotech.pl" style={{
                fontFamily:"'Bebas Neue',sans-serif",
                fontSize:'clamp(22px,3vw,40px)',
                letterSpacing:'1px', lineHeight:1.1,
                color:'inherit', textDecoration:'none',
                display:'block', marginBottom:'40px',
                transition:'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
              >
                info@lubotech.pl
              </a>

              <div style={{
                fontFamily:"'JetBrains Mono',monospace",
                fontSize:'11px', letterSpacing:'3px',
                textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px',
              }}>
                Adres
              </div>
              <div style={{
                fontFamily:"'Bebas Neue',sans-serif",
                fontSize:'clamp(22px,3vw,36px)',
                letterSpacing:'1px', lineHeight:1.1,
              }}>
                ul. Poznańska 15<br />44-120 Pyskowice
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              background: 'var(--surface)',
              border:     '1px solid var(--border)',
              aspectRatio:'16/9',
              display:    'flex', alignItems:'center', justifyContent:'center',
              position:   'relative', overflow:'hidden',
            }}>
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(135deg,rgba(232,255,0,0.03) 0%,transparent 60%)',
              }}/>
              <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{
                  width:'40px', height:'40px',
                  background:'var(--accent)',
                  borderRadius:'50% 50% 50% 0',
                  transform:'rotate(-45deg)',
                  margin:'0 auto 24px',
                }} />
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'18px', letterSpacing:'3px', color:'var(--muted)' }}>
                  ul. Poznańska 15, Pyskowice
                </div>
                <div style={{ fontSize:'14px', color:'rgba(240,240,240,.4)', marginTop:'8px' }}>
                  44-120 Pyskowice, Polska
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="reveal-right" style={{ transitionDelay:'0.2s' }}>
            <SectionLabel style={{ marginBottom:'32px' }}>Formularz kontaktowy</SectionLabel>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .contact-page-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
