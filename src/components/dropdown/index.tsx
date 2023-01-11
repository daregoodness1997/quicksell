import React, { useState } from 'react';
import { ChevronIcon } from '../icons';

interface DropdownProps {
  list: { id: string; title: string; selected: boolean }[];
  resetThenSet?: () => void;
  selectedOption?: { id: string; title: string; selected: boolean };
  setSelectedOption?: any;
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

  console.log('selected option dropdown', selectedOption);
  return (
    <div className='dropdown-wrapper'>
      <button type='button' className='dropdown-header' onClick={toggleList}>
        <div className='dropdown-header-title'>
          <div>
            {selectedOption?.title} <img src='' alt='' />
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
              onClick={() => setSelectedOption(item)}
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
