import React, { useState } from 'react';

interface DropdownProps {
  headerTitle: string;
  list: { id: string; title: string; selected: boolean }[];
  resetThenSet: () => void;
}

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/

const Dropdown: React.FC<DropdownProps> = ({
  headerTitle,
  list,
  resetThenSet,
}) => {
  const [open, setOpen] = useState(false);

  const toggleList = () => setOpen(!open);

  const selectItem = (item: any) => {};

  return (
    <div className='dropdown-wrapper'>
      <button type='button' className='dropdown-header' onClick={toggleList}>
        <div className='dropdown-header-title'>{headerTitle}</div>
        {open ? 'up' : 'down'}
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
