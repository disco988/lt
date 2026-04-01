import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout            from './components/layout/Layout';
import HomePage          from './pages/HomePage';
import AboutPage         from './pages/AboutPage';
import ServicesPage      from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage      from './pages/ProjectsPage';
import ContactPage       from './pages/ContactPage';
import './styles.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/"                   element={<HomePage />}          />
        <Route path="/o-nas"              element={<AboutPage />}         />
        <Route path="/uslugi"             element={<ServicesPage />}      />
        <Route path="/uslugi/:slug"       element={<ServiceDetailPage />} />
        <Route path="/realizacje"         element={<ProjectsPage />}      />
        <Route path="/kontakt"            element={<ContactPage />}       />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{ padding:'200px 48px', textAlign:'center' }}>
            <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'80px', color:'var(--accent)' }}>404</h1>
            <p style={{ color:'var(--muted)', fontSize:'18px', marginBottom:'40px' }}>Strona nie istnieje</p>
            <a href="/" style={{
              background:'var(--accent)', color:'#000', padding:'16px 40px',
              textDecoration:'none', fontWeight:800, fontSize:'13px', letterSpacing:'2px',
            }}>Wróć do strony głównej</a>
          </div>
        } />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
