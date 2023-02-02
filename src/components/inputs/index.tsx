import React from 'react';
interface Props {
  placeholder?: string;
  hasSearch?: boolean;
}

const Input: React.FC<Props> = ({ placeholder, hasSearch }) => {
  return (
    <div className='form-control'>
      <input className='input' placeholder={placeholder} />
      
    </div>
  );
};

export default Input;
