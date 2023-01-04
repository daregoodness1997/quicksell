import React from 'react';
import { Input } from '../../components';

interface TradeHeaderProps {
  title?: string;
  onReload?: (e?: any) => void;
  type?: string;
}

const TradeHeader: React.FC<TradeHeaderProps> = ({ title, onReload, type }) => {
  return (
    <div>
      <div className='trade-header'>
        <h3>{title}</h3>
        <button onClick={onReload}>Reload</button>
      </div>

      <div className='trade-header'>
        <h4>TF2</h4>
        <div>
          <button onClick={onReload}>Filter</button>
          <button onClick={onReload}>Sort</button>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
