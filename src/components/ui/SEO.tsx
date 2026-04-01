import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLangCtx } from '../../contexts/LangContext';

interface SEOProps {
  page: 'home' | 'about' | 'services' | 'projects' | 'contact';
  slug?: string;
}

const BASE_URL = 'https://lubotech.pl';

const SEO: React.FC<SEOProps> = ({ page, slug }) => {
  const { t } = useTranslation();
  const { lang, prefix } = useLangCtx();

  const title       = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);

  const pagePaths: Record<string, string> = {
    home:     '/',
    about:    '/o-nas',
    services: slug ? `/uslugi/${slug}` : '/uslugi',
    projects: '/realizacje',
    contact:  '/kontakt',
  };

  const pagePath  = pagePaths[page] || '/';
  const canonical = `${BASE_URL}${prefix}${pagePath === '/' ? '' : pagePath}`;

  const htmlLang = lang;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lubotech',
    description: 'Projektowanie, budowa i automatyzacja maszyn oraz linii produkcyjnych.',
    url: BASE_URL,
    telephone: '+48326664450',
    email: 'info@lubotech.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Poznańska 15',
      addressLocality: 'Pyskowice',
      postalCode: '44-120',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.3951,
      longitude: 18.6254,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
    sameAs: ['https://www.facebook.com/p/Lubotech-100054369948528/'],
  };

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* hreflang alternates */}
      <link rel="alternate" hrefLang="pl" href={`${BASE_URL}${pagePath === '/' ? '' : pagePath}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${pagePath === '/' ? '' : pagePath}`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}/de${pagePath === '/' ? '' : pagePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${pagePath === '/' ? '' : pagePath}`} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={`${BASE_URL}/og-image.jpg`} />
      <meta property="og:locale"      content={lang === 'pl' ? 'pl_PL' : lang === 'en' ? 'en_GB' : 'de_DE'} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD (only on home) */}
      {page === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
