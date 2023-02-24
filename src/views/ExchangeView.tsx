import { motion } from 'framer-motion';
import React from 'react';
import { TradeCard } from '../components/cards';
import { CogIcon, KeyIcon } from '../components/icons';
import { Product } from '../types/@types.product';
import EmptyExchange from './modal-views/EmptyExchange';
import TradeAction from './trades/TradeAction';

interface Props {
  label?: string;
  data: Product[];
  empty: boolean;
  keys?: any;
  refs?: any;
  onClear?: (e?: any) => void;
}

const ExchangeView: React.FC<Props> = ({
  label,
  data,
  empty,
  keys,
  refs,
  onClear,
}) => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div className='trade-header'>
        <h5>{label}</h5>
        <div className='flex'>
          <button>
            <KeyIcon /> {keys} Keys
          </button>
          <button>
            <CogIcon /> {refs} Refs
          </button>
        </div>
      </div>
      <div className='exchange-wrapper'>
        <div style={{ height: 'auto' }}>
          {empty ? (
            <EmptyExchange />
          ) : (
            <motion.div layout className='exchange-section'>
              {data.map(item => (
                <TradeCard onTrade={true} {...item} isExchange={true} />
              ))}
            </motion.div>
          )}
        </div>
        <div className='flex'>
          <button style={{ fontSize: '70%' }}>Auto Select</button>
          <button style={{ fontSize: '70%' }} className='red' onClick={onClear}>
            Clear Items
          </button>
        </div>
      </div>

      <TradeAction />
    </div>
  );
};

export default ExchangeView;
