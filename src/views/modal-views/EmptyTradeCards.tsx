import React, { useContext } from 'react';
import { Button } from '../../components';
import AppButton from '../../components/button/AppButton';
import { ProductContext } from '../../context/AppContext';
import { ProductContextType } from '../../types/@types.product';

const EmptyTradeCards = () => {
  const { onLoggedIn } = useContext(ProductContext) as ProductContextType;
  return (
    <div className='empty-trade-wrapper empty empty-card'>
      <div className='empty-content'>
        <img src='img/clarity_warning-solid.png' />
        <h3>What are you getting?</h3>
        <p>Select some items first</p>
      </div>

      <img src='img/Steps.svg' className='step-img' />
      <div style={{ marginTop: '1rem' }}>
        <AppButton
          label='Signin with Steam'
          size='md'
          variant='solid'
          onClick={onLoggedIn}
        />
      </div>
    </div>
  );
};

export default EmptyTradeCards;
