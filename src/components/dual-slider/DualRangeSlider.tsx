import React, { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

interface Props {
  minValue?: number;
  maxValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value?: any) => void;
}

const DualRangeSlider: React.FC<Props> = ({
  minValue = 25,
  maxValue = 75,
  min = 0,
  max = 100,
  step = 5,
  onChange,
}) => {
  return (
    <MultiRangeSlider
      min={min}
      max={max}
      step={step}
      minValue={minValue}
      maxValue={maxValue}
      onInput={onChange}
      style={{ border: 'none', boxShadow: 'none' }}
    />
  );
};

export default DualRangeSlider;
