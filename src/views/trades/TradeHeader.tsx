import React from 'react';
import { Input } from '../../components';
import { FilterIcon, SortIcon, ReloadIcon } from '../../components/icons';

interface TradeHeaderProps {
  title?: string;
  onReload?: (e?: any) => void;
  type?: string;
}

const TradeHeader: React.FC<TradeHeaderProps> = ({ title, onReload, type }) => {
  return (
    <div className='trade-heading'>
      <div className='trade-header'>
        <h4>{title}</h4>
        <button onClick={onReload}>
          <ReloadIcon /> Reload
        </button>
      </div>

      <div className='trade-header'>
        <h5>TF2</h5>
        <div className='flex'>
          <button onClick={onReload}>
            <FilterIcon /> Filter
          </button>
          <button onClick={onReload}>
            <SortIcon /> Sort
          </button>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
