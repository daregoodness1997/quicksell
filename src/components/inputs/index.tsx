import React from 'react';
interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className='form-control'>
      <input className='input' placeholder={placeholder} />
    </div>
  );
};

export default Input;
