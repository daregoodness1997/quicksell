import React from 'react';
import { TradeCard } from '../components/cards';
import TradeSection from '../views/trades/TradeSection';

const Trade = () => {
  return (
    <div className='trade-container container'>
      <TradeSection size='lg' title='Your Items'>
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
      </TradeSection>
      <TradeSection size='lg' title='Our Items'>
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
      </TradeSection>
      <TradeSection size='sm' />
    </div>
  );
};

export default Trade;
