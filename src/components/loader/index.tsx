import React from 'react';

const Loader = () => {
  return (
    <div className='loader-wrapper '>
      <div className='loader'>
        <a
          className='bg_links social portfolio'
          href='https://www.quicksell.store'
          target='_blank'
        >
          <span className='icon'></span>
        </a>
        <a
          className='bg_links social dribbble'
          href='https://www.quicksell.store'
          target='_blank'
        >
          <span className='icon'></span>
        </a>
        <a
          className='bg_links social linkedin'
          href='https://www.quicksell.store'
          target='_blank'
        >
          <span className='icon'></span>
        </a>
        <a className='bg_links logo'></a>
      </div>
      <div className='content'>
        <div className='planet'>
          <div className='ring'></div>
          <div className='cover-ring'></div>
          <div className='spots'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
    </div>
  );
};

export default Loader;
