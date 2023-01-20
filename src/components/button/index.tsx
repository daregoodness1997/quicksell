import React, { MouseEvent, MouseEventHandler } from 'react';

interface ButtonProps {
  border?: string;
  variant?: 'regular' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  logo?: boolean;
  onClick?: (event?: any) => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  border,
  variant,
  size,
  label,
  logo = true,
  onClick,
  loading,
}) => {
  return (
    <div
      className={`button-wrapper ${border} ${size} ${variant}`}
      onClick={onClick}
    >
      <button
        className={`button ribbon-outset border ${variant} ${size}`}
        onClick={onClick}
      >
        {loading ? (
          `Loading`
        ) : (
          <div className='button-flex'>
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
        )}
      </button>
    </div>
  );
};

export default Button;
