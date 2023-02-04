import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';
import React, { useState, useEffect } from 'react';

interface TooltipProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  name?: string;
  status?: 'pending' | 'failed' | 'complete';
  refs: any;
  keys: any;
}
const TooltipAnimation = {
  hidden: {
    scale: 0.65,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
  exit: {
    scale: 0.65,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
};

const Tooltip: React.FC<TooltipProps> = ({
  open,
  setOpen,
  children,
  name,
  keys,
  refs,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={TooltipAnimation}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='tooltip-wrapper'
          style={{ left: mousePos?.x, top: mousePos.y }}
        >
          <div className='tooltip-header'>
            <h4>{name}</h4>
          </div>
          <div>
            <h3>
              {keys} Keys {refs} Refs
            </h3>
            <p style={{ marginTop: '-0.75rem' }}>
              {keys * 1 - 4} Keys and {refs * 1 - 4} Ref with our bonus
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <div className='flex space-between align-center'>
              <h5>Class</h5>
              <p>Heavy</p>
            </div>
            <div className='flex space-between align-center'>
              <h5>Hallowen Spell</h5>
              <p>Special Spectrum</p>
            </div>
            <div className='flex space-between align-center'>
              <h5>Sheen</h5>
              <p>Villianous Violet</p>
            </div>
            <div
              className='flex space-between align-center'
              style={{ marginTop: '-0.5rem' }}
            >
              <h5>Kill Streaker</h5>
              <p>Incirator</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
