import React from 'react';
import { TradeCard } from '../components/cards';

const ExchangeView = () => {
  return (
    <div className='exchange-section'>
      <TradeCard onTrade={true} />
      <TradeCard onTrade={true} />
      <TradeCard onTrade={true} />
      <TradeCard onTrade={true} />
      <TradeCard onTrade={true} />
      <TradeCard onTrade={true} />
    </div>
  );
};

export default ExchangeView;
