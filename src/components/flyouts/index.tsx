import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';
import DualSlider from '../dual-slider';
import DualRangeSlider from '../dual-slider/DualRangeSlider';
import Accordion from '../accordion';
import Input from '../inputs';

interface ModalProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const flyoutAnimation = {
  hidden: {
    right: '-100vw',
  },
  visible: {
    scale: 1,
    opacity: 1,
    right: 0,
    transition: {
      duration: 0.01,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
  exit: {
    right: '-100vw',
    opacity: 0,
    transition: {
      duration: 0.01,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
};
const FlyOuts: React.FC<ModalProps> = ({
  open,
  setOpen,
  children,
  title,
  subTitle,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={flyoutAnimation}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='flyout-wrapper'
        >
          <button onClick={() => setOpen(false)} className='flyout-button'>
            <CloseIcon />
          </button>
          <div className='flyout-header'>
            <div className='top'>
              <div>
                <h3>Filters</h3>
                <p>{subTitle}</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flyout-content'>
              <p className='red' style={{ textAlign: 'right' }}>
                Reset Filter
              </p>
              <div style={{ marginTop: '1rem' }}>
                <Accordion header='Price'>
                  <DualRangeSlider max={200} />
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gridGap: '1rem',
                      padding: '0.6rem',
                      marginTop: '1rem',
                      borderRadius: '4px',
                    }}
                  >
                    <Input />
                    <Input />
                  </div>
                </Accordion>
                <Accordion header='Price'>
                  <DualRangeSlider max={200} />
                </Accordion>
                <Accordion header='Price'>
                  <DualRangeSlider max={200} />
                </Accordion>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlyOuts;
