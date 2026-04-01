import type { Service, Stat, Client, FaqItem, Project, TimelineEntry, Value, NavLink } from '../types';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'O nas',      href: '/o-nas'      },
  { label: 'Usługi',     href: '/uslugi'     },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Kontakt',    href: '/kontakt'    },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: 120, suffix: '+', label: 'Zrealizowanych projektów' },
  { value: 20,  suffix: '+', label: 'Lat doświadczenia'        },
  { value: 85,  suffix: '',  label: 'Zatrudnionych pracowników' },
  { value: 13,  suffix: '',  label: 'Krajów obsługi'           },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id:          'mechanika',
    num:         '01',
    title:       'Mechanika',
    subtitle:    'Projektowanie, Montaż i Relokacja Maszyn',
    description: 'Specjalizujemy się w projektowaniu i budowie maszyn specjalnych, montażu i relokacji linii produkcyjnych oraz serwisie mechanicznym dla przemysłu.',
    slug:        '/uslugi/mechanika',
    items: [
      'Projektowanie i budowa maszyn specjalnych',
      'Montaż i relokacja linii produkcyjnych',
      'Modernizacja istniejących stanowisk',
      'Serwis i naprawy mechaniczne',
      'Dokumentacja techniczna i rysunki 3D',
    ],
  },
  {
    id:          'elektryka',
    num:         '02',
    title:       'Elektryka',
    subtitle:    'Instalacje, Szafy Sterownicze, Pomiary, EPLAN',
    description: 'Kompleksowe usługi elektryczne dla przemysłu — od projektowania szaf sterowniczych, przez instalacje, po pomiary i dokumentację EPLAN.',
    slug:        '/uslugi/elektryka',
    items: [
      'Projektowanie i budowa szaf sterowniczych',
      'Instalacje elektryczne przemysłowe',
      'Pomiary i certyfikacja instalacji',
      'Dokumentacja EPLAN Electric P8',
      'Wsparcie certyfikacji CE maszyn',
    ],
  },
  {
    id:          'automatyka',
    num:         '03',
    title:       'Automatyka',
    subtitle:    'Programowanie i Automatyzacja Procesów',
    description: 'Automatyzujemy i optymalizujemy procesy produkcyjne — od programowania sterowników PLC, przez robotyzację, po systemy SCADA i rozwiązania Przemysłu 4.0.',
    slug:        '/uslugi/automatyka',
    items: [
      'Programowanie sterowników PLC (Siemens, Beckhoff)',
      'Robotyzacja stanowisk (FANUC, ABB, KUKA)',
      'Systemy SCADA i HMI',
      'Systemy wizyjne i kontrola jakości',
      'Integracja systemów Przemysłu 4.0',
    ],
  },
  {
    id:          'pneumatyka',
    num:         '04',
    title:       'Pneumatyka',
    subtitle:    'Projektowanie i Optymalizacja Układów',
    description: 'Projektujemy, montujemy i optymalizujemy układy pneumatyczne dla maszyn i linii produkcyjnych. Pracujemy ze wszystkimi wiodącymi dostawcami komponentów.',
    slug:        '/uslugi/pneumatyka',
    items: [
      'Projektowanie układów pneumatycznych',
      'Montaż i okablowanie komponentów',
      'Optymalizacja zużycia sprężonego powietrza',
      'Diagnostyka i serwis układów',
      'Dobór komponentów Festo, SMC, Bosch Rexroth',
    ],
  },
];

// ─── Clients ──────────────────────────────────────────────────────────────────
export const CLIENTS: Client[] = [
  {
    name: 'Opel',
    logo: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="40" rx="68" ry="30" stroke="currentColor" stroke-width="3"/><path d="M89 22L109 22L97 39L113 39L87 58L99 41L83 41Z" fill="currentColor"/></svg>`,
  },
  {
    name: 'Volkswagen',
    logo: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="40" r="32" stroke="currentColor" stroke-width="2.5"/><path d="M85 24L95 46L100 34L105 46L115 24" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><text x="100" y="68" text-anchor="middle" fill="currentColor" font-family="Arial" font-size="8" letter-spacing="2" font-weight="bold">VOLKSWAGEN</text></svg>`,
  },
  {
    name: 'KUKA',
    logo: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="27" width="5" height="26" fill="currentColor"/><path d="M23 40L40 27L40 33L32 40L40 47L40 53Z" fill="currentColor"/><text x="50" y="52" font-family="Arial Black,Arial" font-size="22" font-weight="900" fill="currentColor" letter-spacing="1">KUKA</text></svg>`,
  },
  {
    name: 'ThyssenKrupp',
    logo: `<svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="27" width="8" height="8" fill="currentColor"/><rect x="28" y="21" width="8" height="8" fill="currentColor"/><rect x="28" y="33" width="8" height="8" fill="currentColor"/><text x="45" y="46" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="currentColor" letter-spacing="0.5">thyssenkrupp</text></svg>`,
  },
  {
    name: 'Dürr',
    logo: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20L18 60L38 60C56 60 64 50 64 40C64 30 56 20 38 20Z" stroke="currentColor" stroke-width="2.5"/><text x="74" y="50" font-family="Arial Black" font-size="24" font-weight="900" fill="currentColor" letter-spacing="2">DÜRR</text></svg>`,
  },
  {
    name: 'EDAG',
    logo: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 28L48 28L48 34L24 34L24 37L44 37L44 43L24 43L24 46L48 46L48 52L18 52Z" fill="currentColor"/><text x="56" y="49" font-family="Arial Black" font-size="22" font-weight="900" fill="currentColor" letter-spacing="2">EDAG</text></svg>`,
  },
  {
    name: 'FFT',
    logo: `<svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 28L48 28L48 33L24 33L24 38L44 38L44 43L24 43" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><text x="58" y="50" font-family="Arial Black" font-size="24" font-weight="900" fill="currentColor" letter-spacing="2">FFT</text></svg>`,
  },
  {
    name: 'TMS',
    logo: `<svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="27" width="42" height="5" fill="currentColor"/><rect x="46" y="32" width="5" height="20" fill="currentColor"/><text x="80" y="50" font-family="Arial Black" font-size="22" font-weight="900" fill="currentColor" letter-spacing="2">TMS</text></svg>`,
  },
  {
    name: 'Movomech',
    logo: `<svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="40" r="14" stroke="currentColor" stroke-width="2.5"/><circle cx="34" cy="40" r="5" fill="currentColor"/><text x="56" y="46" font-family="Arial,sans-serif" font-size="15" font-weight="bold" fill="currentColor" letter-spacing="1">MOVOMECH</text></svg>`,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Czy projektujecie maszyny specjalne na zamówienie?',
    answer:   'Tak. Tworzymy maszyny specjalne i stanowiska zrobotyzowane dopasowane do indywidualnych wymagań procesu produkcyjnego. Projektujemy od podstaw — od koncepcji po gotowe urządzenie.',
  },
  {
    question: 'Czy zapewniacie serwis i wsparcie techniczne?',
    answer:   'Zapewniamy serwis gwarancyjny i pogwarancyjny, przeglądy, modernizacje oraz zdalne wsparcie. Dbamy o ciągłość pracy linii produkcyjnych i szybkie reagowanie na potrzeby klientów.',
  },
  {
    question: 'Czy zajmujecie się relokacją linii produkcyjnych?',
    answer:   'Tak. Oferujemy kompleksową relokację linii produkcyjnych — demontaż, transport, ponowny montaż, integrację systemów oraz uruchomienie w nowej lokalizacji. Relokujemy zarówno pojedyncze maszyny, jak i całe linie technologiczne.',
  },
  {
    question: 'Czy modernizujecie istniejące linie produkcyjne?',
    answer:   'Oferujemy modernizacje i optymalizacje linii produkcyjnych, w tym wymianę sterowników, integrację robotów, przebudowę stanowisk, zwiększenie wydajności oraz poprawę bezpieczeństwa.',
  },
  {
    question: 'Czy wykonujecie pomiary elektryczne instalacji?',
    answer:   'Tak. Wykonujemy profesjonalne pomiary elektryczne instalacji, maszyn oraz linii produkcyjnych zgodnie z obowiązującymi normami. Dostarczamy pełną dokumentację z wynikami pomiarów i zaleceniami.',
  },
  {
    question: 'Ile krajów obsługujecie?',
    answer:   'Świadczyliśmy usługi w 13 krajach Europy. Realizujemy projekty na terenie Polski i za granicą — w Niemczech, Czechach, Słowacji i innych krajach europejskich.',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  { id: '1', num: '01', title: 'Linia Spawalnicza z Robotem FANUC',       client: 'Volkswagen — Niemcy',      category: 'automatyka',  gradient: 'linear-gradient(135deg,#0f1020,#1a2040)' },
  { id: '2', num: '02', title: 'Relokacja Linii Tłoczni',                 client: 'Opel — Polska',            category: 'mechanika',   gradient: 'linear-gradient(135deg,#121008,#2a2010)' },
  { id: '3', num: '03', title: 'Szafy Sterownicze dla Linii',             client: 'ThyssenKrupp — Czechy',    category: 'elektryka',   gradient: 'linear-gradient(135deg,#0a0f15,#102030)' },
  { id: '4', num: '04', title: 'System SCADA — Nadzór Produkcji',         client: 'KUKA — Niemcy',            category: 'automatyka',  gradient: 'linear-gradient(135deg,#0d0f18,#181a30)' },
  { id: '5', num: '05', title: 'Optymalizacja Układu Pneumatycznego',     client: 'Dürr — Polska',            category: 'pneumatyka',  gradient: 'linear-gradient(135deg,#0f1208,#1e2410)' },
  { id: '6', num: '06', title: 'Stanowisko Montażowe Specjalne',          client: 'EDAG — Niemcy',            category: 'mechanika',   gradient: 'linear-gradient(135deg,#0f0a08,#201508)' },
  { id: '7', num: '07', title: 'Zrobotyzowane Stanowisko Paletyzacji',    client: 'FFT — Polska',             category: 'automatyka',  gradient: 'linear-gradient(135deg,#100d18,#201828)' },
  { id: '8', num: '08', title: 'Modernizacja Instalacji Zakładu',         client: 'Movomech — Szwecja',       category: 'elektryka',   gradient: 'linear-gradient(135deg,#080f10,#101f20)' },
  { id: '9', num: '09', title: 'Budowa Maszyny Spawalniczej CNC',         client: 'TMS — Polska',             category: 'mechanika',   gradient: 'linear-gradient(135deg,#0e0e0e,#1c1c1c)' },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const TIMELINE: TimelineEntry[] = [
  { year: '2003', title: 'Założenie firmy',            description: 'Lubotech rozpoczyna działalność w Pyskowicach jako firma mechaniczna obsługująca lokalne zakłady przemysłowe.' },
  { year: '2008', title: 'Ekspansja na elektrykę',     description: 'Rozszerzenie oferty o kompleksowe usługi elektryczne i budowę szaf sterowniczych. Pierwsze kontrakty zagraniczne.' },
  { year: '2013', title: 'Automatyzacja i robotyzacja',description: 'Wdrożenie działu automatyki. Realizacja pierwszych stanowisk zrobotyzowanych dla przemysłu motoryzacyjnego.' },
  { year: '2018', title: '13 krajów, 85 pracowników',  description: 'Dynamiczny rozwój — firma liczy 85 pracowników i realizuje projekty w 13 krajach Europy.' },
  { year: '2024', title: '120+ zrealizowanych projektów', description: 'Przekraczamy próg 120 projektów. Rozwijamy kompetencje w zakresie Przemysłu 4.0 i systemów SCADA.' },
];

// ─── Values (O nas) ───────────────────────────────────────────────────────────
export const VALUES: Value[] = [
  { title: 'Jakość',        description: 'Każdy projekt realizujemy z najwyższą dbałością o szczegóły. Stosujemy normy ISO i najlepsze praktyki branżowe.',            iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { title: 'Zespół',        description: '85 doświadczonych inżynierów i techników gotowych do realizacji nawet najbardziej wymagających projektów.',                   iconPath: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { title: 'Innowacje',     description: 'Nieustannie śledzimy nowe technologie i wdrażamy rozwiązania Przemysłu 4.0, robotyzację i systemy wizyjne.',                  iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { title: 'Terminowość',   description: 'Dotrzymujemy umówionych terminów. Każdy projekt planujemy szczegółowo, by być gotowi na czas.',                               iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2' },
  { title: 'Zasięg',        description: 'Działamy w 13 krajach Europy. Żaden projekt nie jest dla nas za daleki — jesteśmy tam, gdzie jest klient.',                   iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10a2 2 0 100-4 2 2 0 000 4' },
  { title: 'Niezawodność',  description: 'Serwis gwarancyjny i pogwarancyjny, wsparcie zdalne. Jesteśmy z klientem przez cały cykl życia maszyny.',                     iconPath: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3' },
];
