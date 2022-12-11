import React from 'react';

const Button = () => {
  return (
    <div className='button-wrapper'>
      <button className='button ribbon-outset border'>
        <div className='button-flex'>
          <img src='assets/svg/steam-icon.svg' alt='Sign in with Steam' />
          <span>Sign in with Steam</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
