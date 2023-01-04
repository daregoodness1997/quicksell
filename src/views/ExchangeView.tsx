import React from 'react';
import { TradeCard } from '../components/cards';

const ExchangeView = () => {
  return (
    <div className='exchange-wrapper'>
      <div className='exchange-section'>
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
      </div>
      <div className='flex'>
        <button>Auto Select</button>
        <button className='red'>Clear Items</button>
      </div>
    </div>
  );
};

export default ExchangeView;
