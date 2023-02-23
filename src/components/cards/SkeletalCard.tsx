import React from 'react';
import SkeletalLoader from '../skeletal';

const SkeletalCard = () => {
  return (
    <div
      style={{
        padding: '0.2rem 0.4rem',
        background: '#1f2124',
        borderRadius: '6px',
        height: '135px',
      }}
    >
      <SkeletalLoader width={'100%'} height={'80px'} />
      <div style={{ marginTop: '0.2rem' }}>
        <SkeletalLoader height={'8px'} />
      </div>
      <div style={{ marginTop: '-0.72rem' }}>
        <SkeletalLoader height={'8px'} />
      </div>
      <div style={{ marginTop: '-0.72rem' }}>
        <SkeletalLoader height={'8px'} />
      </div>
    </div>
  );
};

export default SkeletalCard;
