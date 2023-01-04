import React from 'react';
import TradeHeader from './TradeHeader';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
  children?: React.ReactNode;
  type?: string;
}

const TradeSection: React.FC<TradeSectionProps> = ({
  title,
  data,
  size,
  onReload,
  children,
  type,
}) => {
  return (
    <div className={`trade-section ${size}`}>
      <TradeHeader title={title} onReload={onReload} type={type} />
      <div className='trade-container grid'>{children}</div>
    </div>
  );
};

export default TradeSection;
