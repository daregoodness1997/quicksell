import React from 'react';

interface ButtonProps {
  border?: string;
  variant?: 'regular' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  logo?: boolean;
  onClick?: (event?: any) => void;
  loading?: boolean;
}


const AppButton = () => {
  return (
    <div className='btn-wrapper'>
      <button className='btn flex' data-jzz-gui-player='true'>
        <img
          src='./Quicksell.store_files/img/steam-icon.svg'
          alt='Sign in with Steam'
        />
        <span>Sign in with Steam</span>
      </button>
    </div>
  );
};

export default AppButton;
