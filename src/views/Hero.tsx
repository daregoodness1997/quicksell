import React from 'react';
import { Button } from '../components';

const Hero = () => {
  return (
    <div className='container flex hero'>
      <div className='box-1 content-box'>
        <h1>
          THE BEST WAY TO EXCHANGE <span>IN-GAME</span> ITEMS
        </h1>
        <p>Easy and very secure way to sell your in-game items for money</p>
        <div className='bottom-wrapper'>
          <Button />
        </div>
      </div>
      <div className='box-2'>
        <img src='/assets/img/item-grid.png' alt='item grid' />
        <div className='flex stats-box'>
          <div>
            <h2>6000+</h2>
            <p>Item in Stock</p>
          </div>
          <div>
            <h2>2</h2>
            <p>Years of non-stop working</p>
          </div>
          <div>
            <h2>30sec</h2>
            <p>we need to send you an offer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
