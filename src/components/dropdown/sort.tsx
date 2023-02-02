import React, { useState } from 'react';
import { ChevronIcon, SortIcon } from '../icons';
import { motion } from 'framer-motion';

interface DropdownProps {
  resetThenSet?: () => void;
  selectedOption?: {
    id: string;
    title: string;
    imgUrl?: string;
    selected: boolean;
  };
  setSelectedOption?: any;
}

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/

export const animation = {
  hidden: {
    scale: 0.65,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
  exit: {
    scale: 1.25,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    },
  },
};

const list = [
  { id: '1', title: 'By Name: Desc', selected: false },
  { id: '2', title: 'By Name: Asc', selected: false },
  { id: '2', title: 'By Price: Desc', selected: false },
  { id: '2', title: 'By Price: Asc', selected: false },
];

const SortDropdown: React.FC<DropdownProps> = ({
  resetThenSet,
  setSelectedOption,
  selectedOption,
}) => {
  const [open, setOpen] = useState(false);

  const toggleList = () => setOpen(!open);

  return (
    <div className='dropdown-wrapper'>
      <button type='button' className='dropdown-button' onClick={toggleList}>
        <SortIcon /> Sort {selectedOption?.title}
      </button>
      {open && (
        <motion.div
          variants={animation}
          initial='hidden'
          animate='visible'
          exit='exit'
          role='list'
          className='dropdown-list sort-list'
        >
          {list.map(item => (
            <button
              type='button'
              className='dropdown-list-item'
              key={item.id}
              onClick={() => {
                setSelectedOption(item);
                toggleList();
              }}
            >
              {item.title} {item.selected && 'checked'}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SortDropdown;
