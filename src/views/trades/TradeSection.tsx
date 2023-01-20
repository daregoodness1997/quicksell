import React from 'react';
import { Button } from '../../components';
import { CogIcon, KeyIcon } from '../../components/icons';
import TradeHeader from './TradeHeader';
import { motion } from 'framer-motion';
import { animation } from '../../components/dropdown';
import EmptyTradeCards from '../modal-views/EmptyTradeCards';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
  children?: React.ReactNode;
  type?: string;
  hasGrid?: boolean;
  className?: string;
  loggedIn?: boolean;
  buyer?: boolean;
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
  loggedIn,
  buyer,
}) => {
  return (
    <motion.div
      variants={animation}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`trade-section ${size} ${className} `}
    >
      {type !== 'exchange' && (
        <TradeHeader title={title} onReload={onReload} type={type} />
      )}

      {type !== 'exchange' ? (
        <>
          {!loggedIn ? (
            <motion.div layout>
              <EmptyTradeCards />
            </motion.div>
          ) : (
            <>
              <motion.div layout className={`${hasGrid && 'grid'}`}>
                {children}
              </motion.div>
              {buyer && (
                <motion.div layout className='trade-section-footer'>
                  <h4>Your Items are worth</h4>
                  <div className='flex'>
                    <button className='icon'>
                      <KeyIcon /> 1940 Keys
                    </button>
                    <button className='icon'>
                      <CogIcon /> 200 Refs
                    </button>
                  </div>
                  <Button label='See All' logo={false} />
                </motion.div>
              )}
            </>
          )}
        </>
      ) : (
        <motion.div layout className={`${hasGrid && 'grid'}`}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TradeSection;
