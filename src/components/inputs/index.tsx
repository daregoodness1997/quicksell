import React from 'react';
import { SearchIcon } from '../icons';
interface Props {
  placeholder?: string;
  hasSearch?: boolean;
}

const Input: React.FC<Props> = ({ placeholder, hasSearch }) => {
  return (
    <div className='form-control'>
      <input className='input' placeholder={placeholder} />
      {hasSearch && (
        <div className='search-icon'>
          <SearchIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
