import React from 'react';
import SkeletalLoader from '../skeletal';

const SkeletalCard = () => {
  return (
    <div
      style={{ padding: '0.4rem', background: '#1f2124', borderRadius: '6px' }}
    >
      <SkeletalLoader width={'100%'} height={'60px'} />
      <div style={{ marginTop: '-1.6rem' }}>
        <SkeletalLoader height={'6px'} />
      </div>
      <SkeletalLoader height={'8px'} />
      <SkeletalLoader />
    </div>
  );
};

export default SkeletalCard;
