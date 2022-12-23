import React from 'react';
import Skeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
interface SkeletonProps {
  height?: number | string;
  width?: number | string;
  count?: number;
}

const SkeletalLoader: React.FC<SkeletonProps> = ({ height, width, count }) => {
  return (
    <Skeleton
      height={height}
      width={width}
      count={count}
      duration={8}
      enableAnimation={true}
      direction={'ltr'}
      borderRadius={'4px'}
      baseColor={'#21232A'}
      highlightColor={'#1A1C24'}
    />
  );
};

export default SkeletalLoader;
