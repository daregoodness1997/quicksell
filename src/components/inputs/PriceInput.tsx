import React from 'react';
import { SearchIcon } from '../icons';
interface Props {
  placeholder?: string;
  hasSearch?: boolean;
  price?: boolean;
  label?: string;
}

const PriceInput: React.FC<Props> = ({
  placeholder,
  hasSearch,
  price,
  label,
}) => {
  return (
    <div className={`form-control-price`}>
      {price && <span>{label}</span>}
      <input className='input' placeholder={placeholder} />
      {hasSearch && (
        <div className='search-icon'>
          <SearchIcon />
        </div>
      )}
    </div>
  );
};

export default PriceInput;
