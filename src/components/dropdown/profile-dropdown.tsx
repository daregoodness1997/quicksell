import React, { useState } from 'react';
import { ChevronIcon } from '../icons';
import { motion } from 'framer-motion';

interface DropdownProps {
  // list: {
  //   id: string;
  //   title: string;
  //   imgUrl?: string;
  //   selected: boolean;
  //   icon?: string;
  // }[];
  resetThenSet?: () => void;
  selectedOption?: {
    id: string;
    title: string;
    imgUrl?: string;
    selected: boolean;
    icon?: string;
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

const ProfileDropdown: React.FC<DropdownProps> = ({
  // list,
  resetThenSet,
  setSelectedOption,
  selectedOption,
}) => {
  const [open, setOpen] = useState(false);

  const toggleList = () => setOpen(!open);

  const list = [{ id: '1', title: 'Profile', selected: false, icon: '' }];

  return (
    <div className='dropdown-wrapper'>
      <button type='button' className='profile-btn' onClick={toggleList}>
        <img src={selectedOption?.icon} />

        <div className=''>
          <div>
            <img src='assets/img/profile-img.png' alt='' />
          </div>
        </div>
      </button>
      {open && (
        <motion.div
          variants={animation}
          initial='hidden'
          animate='visible'
          exit='exit'
          role='list'
          className='dropdown-list'
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
              <img src={item?.icon} />
              {item.title} {item.selected && 'checked'}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;
