import React from 'react';

const EmptyTradeCards = () => {
  return (
    <div className='empty-trade-wrapper empty empty-card'>
      <img src='img/clarity_warning-solid.png' />
      <h3>What are you getting?</h3>
      <p>Select some items first</p>
      <img src='img/steps.png' className='step-img' />
    </div>
  );
};

export default EmptyTradeCards;
