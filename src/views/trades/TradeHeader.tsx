import React, { useState } from 'react';
import { Input } from '../../components';
import Dropdown from '../../components/dropdown';
import { FilterIcon, SortIcon, ReloadIcon } from '../../components/icons';

interface TradeHeaderProps {
  title?: string;
  onReload?: (e?: any) => void;
  type?: string;
}

const tradeOptions = [
  { id: '1', title: 'TF2', selected: false },
  { id: '2', title: 'FR', selected: false },
  { id: '3', title: 'RU', selected: false },
  { id: '4', title: 'DE', selected: false },
];

const TradeHeader: React.FC<TradeHeaderProps> = ({ title, onReload, type }) => {
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    selected: boolean;
  }>({ id: '1', title: 'TF2', selected: false });
  return (
    <div className='trade-heading'>
      <div className='trade-header top'>
        <h4>{title}</h4>
        <button onClick={onReload} className='green'>
          <ReloadIcon /> Reload
        </button>
      </div>

      <div className='trade-header'>
        <Dropdown
          list={tradeOptions}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
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
