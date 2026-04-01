import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection    from '../components/sections/HeroSection';
import Ticker         from '../components/ui/Ticker';
import StatsSection   from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection   from '../components/sections/AboutSection';
import ClientsSection from '../components/sections/ClientsSection';
import FaqSection     from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import SEO            from '../components/ui/SEO';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const tickerItems = [
    t('services.mechanika.title'),
    t('services.elektryka.title'),
    t('services.automatyka.title'),
    t('services.pneumatyka.title'),
    'Robotyzacja', '20+ Lat', '13 Krajów', '120+ Projektów',
  ];

  return (
    <>
      <SEO page="home" />
      <HeroSection />
      <Ticker items={tickerItems} />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
