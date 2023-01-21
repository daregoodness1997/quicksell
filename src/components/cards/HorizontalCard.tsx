import React from 'react';

const HorizontalCard = () => {
  return (
    <div className='flex horizontal-card'>
      <div className='hex'></div>
      <div>
        <h5>Refined Metals</h5>
        <p>8 Keys 10 Refs</p>
      </div>

      <img className='icon-img' src='img/item-img-1.png' />
    </div>
  );
};

export default HorizontalCard;
