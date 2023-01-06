import React from 'react';
import { ReloadIcon } from '../../components/icons';

interface TradeMobileNavProps {
  onReload?: (e?: any) => void;
}
const TradeMobileNav: React.FC<TradeMobileNavProps> = ({ onReload }) => {
  return (
    <div className='trade-mobile-nav'>
      <div className='flex '>
        <div className='flex tab trade-tab'>
          <p>You Give</p>
          <div>
            <p>10 Keys</p>
            <small className='green'>10 Refs</small>
          </div>
          <div className='item-number'>3</div>
        </div>
        <button onClick={onReload} className='green'>
          <ReloadIcon />
        </button>
        <div className='flex tab trade-tab'>
          <p>You Give</p>
          <div>
            <p>10 Keys</p>
            <small className='green'>10 Refs</small>
          </div>
          <div className='item-number'>3</div>
        </div>
      </div>
      <div className='flex items'>
        <div className='item-tab'>Our Items</div>
        <div className='item-tab'>Your Items</div>
      </div>
    </div>
  );
};

export default TradeMobileNav;
