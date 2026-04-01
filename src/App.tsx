import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout            from './components/layout/Layout';
import { LangProvider }  from './contexts/LangContext';
import HomePage          from './pages/HomePage';
import AboutPage         from './pages/AboutPage';
import ServicesPage      from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage      from './pages/ProjectsPage';
import ContactPage       from './pages/ContactPage';
import './styles.css';

/* Syncs i18next language with URL prefix */
const LanguageSync: React.FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/de') ? 'de' : 'pl';
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [pathname, i18n]);

  return null;
};

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '200px 48px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '80px', color: 'var(--accent)' }}>404</h1>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '40px' }}>{t('notfound.description')}</p>
      <a href="/" style={{
        background: 'var(--accent)', color: '#000', padding: '16px 40px',
        textDecoration: 'none', fontWeight: 800, fontSize: '13px', letterSpacing: '2px',
      }}>
        {t('notfound.back')}
      </a>
    </div>
  );
};

/* Page routes - shared for all languages */
const PageRoutes: React.FC = () => (
  <Routes>
    <Route path="/"              element={<HomePage />}          />
    <Route path="/o-nas"         element={<AboutPage />}         />
    <Route path="/uslugi"        element={<ServicesPage />}      />
    <Route path="/uslugi/:slug"  element={<ServiceDetailPage />} />
    <Route path="/realizacje"    element={<ProjectsPage />}      />
    <Route path="/kontakt"       element={<ContactPage />}       />

    <Route path="/en"                element={<HomePage />}          />
    <Route path="/en/o-nas"          element={<AboutPage />}         />
    <Route path="/en/uslugi"         element={<ServicesPage />}      />
    <Route path="/en/uslugi/:slug"   element={<ServiceDetailPage />} />
    <Route path="/en/realizacje"     element={<ProjectsPage />}      />
    <Route path="/en/kontakt"        element={<ContactPage />}       />

    <Route path="/de"                element={<HomePage />}          />
    <Route path="/de/o-nas"          element={<AboutPage />}         />
    <Route path="/de/uslugi"         element={<ServicesPage />}      />
    <Route path="/de/uslugi/:slug"   element={<ServiceDetailPage />} />
    <Route path="/de/realizacje"     element={<ProjectsPage />}      />
    <Route path="/de/kontakt"        element={<ContactPage />}       />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App: React.FC = () => (
  <BrowserRouter>
    <LangProvider>
      <LanguageSync />
      <Layout>
        <PageRoutes />
      </Layout>
    </LangProvider>
  </BrowserRouter>
);

export default App;
