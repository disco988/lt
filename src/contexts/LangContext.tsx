import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

interface LangContextType {
  lang: 'pl' | 'en' | 'de';
  prefix: string;
}

const LangContext = createContext<LangContextType>({ lang: 'pl', prefix: '' });

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const lang: 'pl' | 'en' | 'de' = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/de')
    ? 'de'
    : 'pl';
  const prefix = lang === 'pl' ? '' : `/${lang}`;
  return (
    <LangContext.Provider value={{ lang, prefix }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangCtx = () => useContext(LangContext);

export default LangContext;
