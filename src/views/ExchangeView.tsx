import React, { useState } from 'react';
import { TradeCard } from '../components/cards';
import { CogIcon, KeyIcon } from '../components/icons';
import { exchangeItems } from '../utils/data';
import EmptyExchange from './modal-views/EmptyExchange';

interface Props {
  label?: string;
}

const ExchangeView: React.FC<Props> = ({ label }) => {
  const [empty, setEmpty] = useState(true);
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
            <div className='exchange-section'>
              {exchangeItems.map(item => (
                <TradeCard onTrade={true} {...item} />
              ))}
            </div>
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
