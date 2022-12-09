import React from 'react';

const Button = () => {
  return (
    <>
      <div className='btn-wrapper'>
        <a href='#' className='btn flex' data-jzz-gui-player='true'>
          <img src='assets/svg/steam-icon.svg' alt='Sign in with Steam' />
          <span>Sign in with Steam</span>
        </a>
      </div>
    </>
  );
};

export default Button;
