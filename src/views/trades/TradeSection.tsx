import React from 'react';
import TradeHeader from './TradeHeader';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
}

const TradeSection: React.FC<TradeSectionProps> = ({
  title,
  data,
  size,
  onReload,
}) => {
  return (
    <div className={`trade-section ${size}`}>
      <TradeHeader title={title} onReload={onReload} />
    </div>
  );
};

export default TradeSection;
