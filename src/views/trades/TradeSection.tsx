import React from 'react';
import { Button } from '../../components';
import { CogIcon, KeyIcon } from '../../components/icons';
import TradeHeader from './TradeHeader';
import { motion } from 'framer-motion';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
  children?: React.ReactNode;
  type?: string;
  hasGrid?: boolean;
}

const TradeSection: React.FC<TradeSectionProps> = ({
  title,
  data,
  size,
  onReload,
  children,
  type,
  hasGrid = true,
}) => {
  return (
    <motion.div layout className={`trade-section ${size}`}>
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
