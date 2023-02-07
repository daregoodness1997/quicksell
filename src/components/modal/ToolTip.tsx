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
          <div
            style={{
              padding: '6px 0  ',
              margin: '0px ',
            }}
          >
            <div
              style={{
                padding: '6px 0px',
                margin: '0px ',
                fontSize: '12px',
                lineHeight: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: '600' }}>Class</span>
              <span>Heavy</span>
            </div>
            <div
              style={{
                padding: '6px 0px',
                margin: '0px ',
                fontSize: '12px',
                lineHeight: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: '600' }}>Hallowen Spell</span>
              <span>Special Spectrum</span>
            </div>
            <div
              style={{
                padding: '6px 0px',
                margin: '0px ',
                fontSize: '12px',
                lineHeight: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: '600' }}>Sheen</span>
              <span>Villianous Violet</span>
            </div>
            <div
              style={{
                padding: '6px 0px',
                margin: '0px ',
                fontSize: '12px',
                lineHeight: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: '600' }}>Kill Streaker</span>
              <span>Incirator</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
