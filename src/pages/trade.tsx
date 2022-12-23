import React from 'react';
import TradeSection from '../views/trades/TradeSection';

const Trade = () => {
  return (
    <div className='trade-container container'>
      <TradeSection size='lg' title='Your Items' />
      <TradeSection size='lg' title='Our Items' />
      <TradeSection size='sm' />
    </div>
  );
};

export default Trade;
