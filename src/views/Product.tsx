import React from 'react';

const Product = () => {
  return (
    <div className='container product'>
      <div className='container-content'>
        <h2>
          Over <span className='green-text'>1 Million</span> trades are
          completed for all time
        </h2>
        <img src='assets/img/mockup.png' alt='Product Moockup' />
      </div>
    </div>
  );
};

export default Product;
