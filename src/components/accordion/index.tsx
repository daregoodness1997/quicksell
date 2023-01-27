import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  icon?: any;
  header?: string;
  icon2?: any;
}

const Accordion: React.FC<Props> = ({ children, icon, header, icon2 }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: 'transparent',
          color: open ? '#fff' : '#6fcf97',
          cursor: 'pointer',
          fontWeight: 'bold',
          padding: '0.5rem',
        }}
        onClick={() => setOpen(!open)}
      >
        {icon} {header} {icon2}
      </motion.header>
      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
