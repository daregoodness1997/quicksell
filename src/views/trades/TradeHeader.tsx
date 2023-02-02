import React, { useState } from 'react';
import { Input } from '../../components';
import Dropdown from '../../components/dropdown';
import SortDropdown from '../../components/dropdown/sort';
import FlyOuts from '../../components/flyouts';
import { FilterIcon, SortIcon, ReloadIcon } from '../../components/icons';

interface TradeHeaderProps {
  title?: string;
  onReload?: (e?: any) => void;
  type?: string;
}

const tradeOptions = [
  {
    id: '1',
    title: 'TF2',
    selected: false,
    icon: 'assets/svg/tf2.svg',
  },
  {
    id: '2',
    title: 'Steam',
    selected: false,
    icon: 'assets/svg/select-icon-2.svg',
  },
  {
    id: '3',
    title: 'CG:CO',
    selected: false,
    icon: 'assets/svg/select-icon-3.svg',
  },
  {
    id: '4',
    title: 'Rust',
    selected: false,
    icon: 'assets/svg/select-icon-4.svg',
  },
];

const TradeHeader: React.FC<TradeHeaderProps> = ({ title, onReload, type }) => {
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    selected: boolean;
    icon: string;
  }>({
    id: '1',
    title: 'TF2',
    selected: false,
    icon: 'assets/svg/tf2.svg',
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenFilter = () => {
    setOpen(!open);
  };
  return (
    <>
      <FlyOuts open={open} setOpen={setOpen} />
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
              <button onClick={handleOpenFilter}>
                <FilterIcon /> Filter
              </button>
              <SortDropdown />
            </div>
            <div className='filter'>
              <Input placeholder='Search' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeHeader;
