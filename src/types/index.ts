// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  slug: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Client / Logo ────────────────────────────────────────────────────────────
export interface Client {
  name: string;
  logo: string; // SVG path string
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

// ─── Project / Realizacja ────────────────────────────────────────────────────
export interface Project {
  id: string;
  num: string;
  title: string;
  client: string;
  category: 'mechanika' | 'elektryka' | 'automatyka' | 'pneumatyka';
  gradient: string;
}

// ─── Timeline (O nas) ────────────────────────────────────────────────────────
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// ─── Value card (O nas) ───────────────────────────────────────────────────────
export interface Value {
  title: string;
  description: string;
  iconPath: string;
}
