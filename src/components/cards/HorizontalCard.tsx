import React from 'react';
interface Props {
  changes?: boolean;
}

const HorizontalCard: React.FC<Props> = ({ changes }) => {
  return (
    <div className='flex horizontal-card'>
      <div className='hex'></div>

      <div>
        <h5>Refined Metals</h5>
        <div className='flex'>
          {changes && <p className='red'>8 Keys 10 Refs</p>}
          <p>8 Keys 10 Refs</p>
        </div>
      </div>

      <img className='icon-img' src='img/item-img-1.png' />
    </div>
  );
};

export default HorizontalCard;
