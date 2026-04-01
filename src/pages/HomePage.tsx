import React from 'react';
import HeroSection    from '../components/sections/HeroSection';
import Ticker         from '../components/ui/Ticker';
import StatsSection   from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection   from '../components/sections/AboutSection';
import ClientsSection from '../components/sections/ClientsSection';
import FaqSection     from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';

const TICKER_ITEMS = [
  'Mechanika', 'Elektryka', 'Automatyka', 'Pneumatyka',
  'Robotyzacja', '20+ Lat Doświadczenia', '13 Krajów', '120+ Projektów',
];

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <Ticker items={TICKER_ITEMS} />
    <StatsSection />
    <ServicesSection />
    <AboutSection />
    <ClientsSection />
    <FaqSection />
    <ContactSection />
  </>
);

export default HomePage;
