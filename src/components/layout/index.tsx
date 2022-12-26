import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../navigations';
import Footer from '../navigations/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from '../loader';
import MobileNav from '../navigations/MobileNav';
import '../navigations/style.scss';

interface Props {
  children?: React.ReactNode | undefined;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 1500,
    restDelta: 0.001,
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const width = window.innerWidth;

  console.log('Width', width);

  useEffect(() => {
    const mobile = width <= 400 ? true : false;
    setIsMobile(mobile);
  }, [setIsMobile, isMobile, window.innerWidth]);

  console.log(isMobile);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`${toggle ? 'body-navigation' : ''}`}>
          <TopNav onClick={() => setToggle(!toggle)} toggle={toggle} />
          {children}
          <div id='bodyContent' className={`${toggle ? 'navigation' : ''}`}>
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
