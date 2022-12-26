import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../navigations';
import Footer from '../navigations/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from '../loader';

interface Props {
  children?: React.ReactNode | undefined;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 1500,
    restDelta: 0.001,
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <TopNav />
          {children}
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
