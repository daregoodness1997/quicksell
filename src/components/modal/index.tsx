import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';

interface ModalProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  title?: string;
  status?: 'pending' | 'failed' | 'complete';
}

const Modal: React.FC<ModalProps> = ({ open, setOpen, children, title }) => (
  <AnimatePresence>
    {open && (
      <div className='modal-overlay'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
