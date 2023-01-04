import React from 'react';
import { Button } from '../components';
import { TradeCard } from '../components/cards';
import ExchangeView from '../views/ExchangeView';
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
        <TradeCard onTrade={true} />
        <TradeCard onTrade={true} />
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
      <TradeSection size='sm' type='exchange'>
        <div>
          <ExchangeView />
          <ExchangeView />
          <Button label='Trade Now' size='md' />
        </div>
      </TradeSection>
    </div>
  );
};

export default Trade;
