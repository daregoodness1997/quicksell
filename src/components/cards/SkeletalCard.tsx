import React from 'react';
import SkeletalLoader from '../skeletal';

const SkeletalCard = () => {
  return (
    <div>
      <SkeletalLoader width={'100%'} height={'60px'} />
      <SkeletalLoader height={'4px'} />
      <SkeletalLoader height={'8px'} />
      <SkeletalLoader />
    </div>
  );
};

export default SkeletalCard;
