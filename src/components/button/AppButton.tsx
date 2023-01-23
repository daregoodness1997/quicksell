import React from 'react';
import './button.scss';

interface ButtonProps {
  border?: string;
  variant?: 'regular' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  logo?: boolean;
  onClick?: (event?: any) => void;
  loading?: boolean;
}

const AppButton: React.FC<ButtonProps> = ({
  border,
  variant,
  size,
  label,
  logo = true,
  onClick,
  loading,
}) => {
  return (
    <div className='btn-wrapper' onClick={onClick}>
      <button
        className={`btn flex ${border} ${size} ${variant}  `}
        data-jzz-gui-player='true'
        onClick={onClick}
      >
        <div className='btn-content'>
          {logo && (
            <>
              {variant !== 'solid' ? (
                <img src='assets/svg/steam-icon.svg' alt={label} />
              ) : (
                <img src='assets/svg/cib_steam.svg' alt={label} />
              )}
            </>
          )}
          <span>{label}</span>
        </div>
      </button>
    </div>
  );
};

export default AppButton;
