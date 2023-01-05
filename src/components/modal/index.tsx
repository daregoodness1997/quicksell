import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';

interface ModalProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  title?: string;
  status?: 'pending' | 'failed' | 'complete';
}
const modalAnimation = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.01,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.01,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
};

const Modal: React.FC<ModalProps> = ({ open, setOpen, children, title }) => (
  <AnimatePresence>
    {open && (
      <div className='modal-overlay'>
        <motion.div
          variants={modalAnimation}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='modal-wrapper'
        >
          <button onClick={() => setOpen(false)} className='modal-button'>
            <CloseIcon />
          </button>
          <div className='modal-header'>
            <h3>{title}</h3>
          </div>
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default Modal;
