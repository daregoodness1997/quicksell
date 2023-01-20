import React from 'react';
import { Button } from '../../components';

const EmptyTradeCards = () => {
  return (
    <div className='empty-trade-wrapper empty empty-card'>
      <div className='empty-content'>
        <img src='img/clarity_warning-solid.png' />
        <h3>What are you getting?</h3>
        <p>Select some items first</p>
      </div>

      <img src='img/steps.png' className='step-img' />
      <div className='button-group' style={{ marginTop: '1rem' }}>
        <Button label='Signup through steam' size='md' variant='solid' />
      </div>
    </div>
  );
};

export default EmptyTradeCards;
