import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';

interface ModalProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const flyoutAnimation = {
  hidden: {
    right: '-50vw',
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.01,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
  exit: {
    right: '50vw',
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
        <div className='modal-overlay'>
          <motion.div
            variants={flyoutAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='modal-wrapper'
          >
            <button onClick={() => setOpen(false)} className='modal-button'>
              <CloseIcon />
            </button>
            <div className='modal-header'>
              <div className='top'>
                <div>
                  <h3 className={`${status}`}>{title}</h3>
                  <p>{subTitle}</p>
                </div>
              </div>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FlyOuts;
