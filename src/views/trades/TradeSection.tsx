import React from 'react';
import { Button } from '../../components';
import { CogIcon, KeyIcon } from '../../components/icons';
import TradeHeader from './TradeHeader';
import { motion } from 'framer-motion';
import { animation } from '../../components/dropdown';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
  children?: React.ReactNode;
  type?: string;
  hasGrid?: boolean;
  className?: string;
}

const TradeSection: React.FC<TradeSectionProps> = ({
  title,
  data,
  size,
  onReload,
  children,
  type,
  hasGrid = true,
  className,
}) => {
  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`trade-section ${size} ${className}`}
    >
      {type !== 'exchange' ? (
        <TradeHeader title={title} onReload={onReload} type={type} />
      ) : (
        <div className='trade-header'>
          <h5>You Get</h5>
          <div className='flex'>
            <button>
              <KeyIcon /> 10 Keys
            </button>
            <button>
              <CogIcon /> Refs
            </button>
          </div>
        </div>
      )}

      <motion.div layout className={`${hasGrid && 'grid'}`}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TradeSection;
