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
      <div className='trade-header top'>
        <h4>{title}</h4>
        <button onClick={onReload} className='green'>
          <ReloadIcon /> Reload
        </button>
      </div>

      <div className='trade-header'>
        <h5>TF2</h5>
        <div className='flex filters'>
          <div className='flex filter'>
            <button onClick={onReload}>
              <FilterIcon /> Filter
            </button>
            <button onClick={onReload}>
              <SortIcon /> Sort
            </button>
          </div>
          <div className='filter'>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
