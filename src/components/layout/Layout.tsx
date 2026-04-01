import React, { useEffect } from 'react';
import { useLocation }       from 'react-router-dom';
import Navbar                from './Navbar';
import Footer                from './Footer';
import { useCursor }         from '../../hooks/useCursor';

interface Props { children: React.ReactNode }

const Layout: React.FC<Props> = ({ children }) => {
  useCursor();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
