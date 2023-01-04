import React from 'react';

interface TradeHeaderProps {
  title?: string;
  onReload?: (e?: any) => void;
}

const TradeHeader: React.FC<TradeHeaderProps> = ({ title, onReload }) => {
  return (
    <div className='trade-header'>
      <h3>{title}</h3>
      <button onClick={onReload}>Reload</button>
    </div>
  );
};

export default TradeHeader;
