import React from 'react';
import { Button } from '../components';

const CTA = () => {
  return (
    <div className='container cta'>
      <h2>Trading made easy, Try it now!</h2>
      <div className='bottom-wrapper'>
        <Button label='Trade Now' />
      </div>
      {/* <Button label='Trade Now' />{' '} */}
    </div>
  );
};

export default CTA;
