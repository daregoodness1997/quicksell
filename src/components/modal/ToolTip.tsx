import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';

interface TooltipProps {
  open?: boolean;
  setOpen?: any;
  children?: React.ReactNode;
  name?: string;
  status?: 'pending' | 'failed' | 'complete';
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

const Tooltip: React.FC<TooltipProps> = ({ open, setOpen, children, name }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        variants={TooltipAnimation}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='tooltip-wrapper'
      >
        <div className='tooltip-header'>
          <h4>{name}</h4>
        </div>
        <p>
          You have <span>443 Keys</span> available! Select some items and
          currency will automatically be added to the trade
        </p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Tooltip;
