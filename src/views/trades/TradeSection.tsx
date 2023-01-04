import React from 'react';
import { Button } from '../../components';
import { CogIcon, KeyIcon } from '../../components/icons';
import TradeHeader from './TradeHeader';

interface TradeSectionProps {
  title?: string;
  data?: any;
  size?: string;
  onReload?: (e?: any) => void;
  children?: React.ReactNode;
  type?: string;
}

const TradeSection: React.FC<TradeSectionProps> = ({
  title,
  data,
  size,
  onReload,
  children,
  type,
}) => {
  return (
    <div className={`trade-section ${size}`}>
      {type !== 'exchange' ? (
        <TradeHeader title={title} onReload={onReload} type={type} />
      ) : (
        <div className='trade-header'>
          <h5>You Get</h5>
          <div className='flex'>
            <button>
              <KeyIcon /> 10 Keys
            </button>
            <button>
              <CogIcon /> Refs
            </button>
          </div>
        </div>
      )}

      <div className='trade-container grid'>{children}</div>
    </div>
  );
};

export default TradeSection;
