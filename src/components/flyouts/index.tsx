import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';
import DualSlider from '../dual-slider';

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
            <div>
              <p className='red'>Reset Filter</p>
              <DualSlider
                min={0}
                max={1000}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlyOuts;
