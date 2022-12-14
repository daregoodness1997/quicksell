import React from 'react';

interface ButtonProps {
  border?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  logo?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  border,
  variant,
  size,
  label,
  logo = true,
}) => {
  return (
    <div className={`button-wrapper ${border} ${variant}`}>
      <button className={`button ribbon-outset border ${variant} ${size}`}>
        <div className='button-flex'>
          {logo && <img src='assets/svg/steam-icon.svg' alt={label} />}
          <span>{label}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
