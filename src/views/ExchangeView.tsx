import { motion } from 'framer-motion';
import React from 'react';
import { TradeCard } from '../components/cards';
import { CogIcon, KeyIcon } from '../components/icons';
import { Product } from '../types/@types.product';
import EmptyExchange from './modal-views/EmptyExchange';

interface Props {
  label?: string;
  data: Product[];
  empty: boolean;
}

const ExchangeView: React.FC<Props> = ({ label, data, empty }) => {
  return (
    <div>
      <div className='trade-header'>
        <h5>{label}</h5>
        <div className='flex'>
          <button>
            <KeyIcon /> 10 Keys
          </button>
          <button>
            <CogIcon /> Refs
          </button>
        </div>
      </div>
      <div className='exchange-wrapper'>
        <div>
          {empty ? (
            <EmptyExchange />
          ) : (
            <motion.div layout className='exchange-section'>
              {data.map(item => (
                <TradeCard onTrade={true} {...item} isMockup={true} />
              ))}
            </motion.div>
          )}
        </div>
        <div className='flex'>
          <button>Auto Select</button>
          <button className='red'>Clear Items</button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeView;
