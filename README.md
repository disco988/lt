# Lubotech — React + TypeScript + Vite

Profesjonalna strona firmy Lubotech zbudowana w **React 18 + TypeScript + Vite**.

## Wymagania

- Node.js >= 18
- npm >= 9

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz `http://localhost:5173`

## Produkcja

```bash
npm run build
npm run preview
```

---

## Struktura projektu

```
lubotech-react/
├── index.html              ← Vite entry (root, nie /public)
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
│
└── src/
    ├── index.tsx           ← ReactDOM.createRoot
    ├── App.tsx             ← BrowserRouter + Routes
    ├── styles.css          ← CSS vars, animacje, scrollbar
    │
    ├── types/
    │   └── index.ts        ← Wszystkie interfejsy TypeScript
    │
    ├── data/
    │   └── index.ts        ← NAV_LINKS, STATS, SERVICES, CLIENTS,
    │                          FAQ_ITEMS, PROJECTS, TIMELINE, VALUES
    │
    ├── hooks/
    │   ├── useCursor.ts        ← Custom cursor z animacją lag
    │   ├── useNavScroll.ts     ← Glassmorphism navbar on scroll
    │   ├── useScrollReveal.ts  ← IntersectionObserver reveal
    │   └── useCounter.ts       ← Animated number counter
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.tsx      ← Wrapper + scroll-to-top on route change
    │   │   ├── Navbar.tsx      ← Desktop + mobile menu
    │   │   └── Footer.tsx
    │   │
    │   ├── sections/           ← Sekcje strony głównej
    │   │   ├── HeroSection.tsx
    │   │   ├── StatsSection.tsx
    │   │   ├── ServicesSection.tsx
    │   │   ├── AboutSection.tsx
    │   │   ├── ClientsSection.tsx
    │   │   ├── FaqSection.tsx
    │   │   └── ContactSection.tsx
    │   │
    │   └── ui/                 ← Reusable komponenty
    │       ├── Button.tsx          ← primary / secondary, Link lub button
    │       ├── SectionLabel.tsx    ← Żółty label z kreską
    │       ├── Ticker.tsx          ← Animowany pasek tekstowy
    │       ├── PageHero.tsx        ← Hero podstrony
    │       └── ContactForm.tsx     ← Formularz z walidacją
    │
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx           ← O nas + timeline + wartości
        ├── ServicesPage.tsx        ← Przegląd 4 usług
        ├── ServiceDetailPage.tsx   ← Dynamiczny /uslugi/:slug
        ├── ProjectsPage.tsx        ← Realizacje z filtrowaniem kategorii
        └── ContactPage.tsx
```

## Trasy (React Router v6)

| Trasa            | Strona                              |
|------------------|-------------------------------------|
| `/`              | Strona główna                       |
| `/o-nas`         | O firmie, timeline, wartości        |
| `/uslugi`        | Przegląd usług                      |
| `/uslugi/mechanika`  | Szczegóły usługi mechanika       |
| `/uslugi/elektryka`  | Szczegóły usługi elektryka       |
| `/uslugi/automatyka` | Szczegóły usługi automatyka     |
| `/uslugi/pneumatyka` | Szczegóły usługi pneumatyka     |
| `/realizacje`    | Portfolio z filtrowaniem            |
| `/kontakt`       | Kontakt + formularz                 |
