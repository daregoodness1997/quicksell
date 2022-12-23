import React from 'react';
import Skeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
interface SkeletonProps {
  height?: number | string;
}

const SkeletalLoader: React.FC<SkeletonProps> = ({ height }) => {
  return (
    <Skeleton
      height={height}
      duration={2}
      enableAnimation={true}
      direction={'ltr'}
      borderRadius={'4px'}
      baseColor={'#21232f'}
      highlightColor={'#1A1C24'}
    />
  );
};

export default SkeletalLoader;
