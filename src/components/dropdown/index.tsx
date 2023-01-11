import React, { useState } from 'react';
import { ChevronIcon } from '../icons';

interface DropdownProps {
  list: { id: string; title: string; selected: boolean }[];
  resetThenSet?: () => void;
  selectedOption?: { label: string; value: string; selected?: boolean };
  setSelectedOption?: (option: any) => void;
}

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/

const Dropdown: React.FC<DropdownProps> = ({
  list,
  resetThenSet,
  setSelectedOption,
  selectedOption,
}) => {
  const [open, setOpen] = useState(false);

  const toggleList = () => setOpen(!open);

  const selectItem = (item: any) => {};

  return (
    <div className='dropdown-wrapper'>
      <button type='button' className='dropdown-header' onClick={toggleList}>
        <div className='dropdown-header-title'>
          <div>
            {list[0].title} <img src='' alt='' />
          </div>
        </div>
        <ChevronIcon />
      </button>
      {open && (
        <div role='list' className='dropdown-list'>
          {list.map(item => (
            <button
              type='button'
              className='dropdown-list-item'
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.title} {item.selected && 'checked'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
