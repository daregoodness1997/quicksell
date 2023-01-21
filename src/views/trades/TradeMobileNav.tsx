import React from 'react';
import { MobileReloadIcon, ReloadIcon } from '../../components/icons';

interface TradeMobileNavProps {
  onReload?: (e?: any) => void;
  display?: any;
  setDisplay: any;
}
const TradeMobileNav: React.FC<TradeMobileNavProps> = ({
  onReload,
  display,
  setDisplay,
}) => {
  return (
    <div className='trade-mobile-nav'>
      <div className='flex trade-tabs mobile '>
        <div
          className={`flex tab trade-tab ${
            display?.exchange?.youGive && 'active'
          }`}
          onClick={() =>
            setDisplay({
              exchange: { youGive: true },
              showExchange: { youGive: true },
            })
          }
        >
          <h5>You Give</h5>
          <div className='trade-flex'>
            <div className='box'>
              <p>10 Keys</p>
              <small className='green'>10 Refs</small>
            </div>
            <div className='item-number hex'>3 </div>
          </div>
        </div>
        <button onClick={onReload} className='green'>
          <MobileReloadIcon />
        </button>
        <div
          className={`flex tab trade-tab ${
            display?.exchange?.youGet && 'active'
          }`}
          onClick={() =>
            setDisplay({
              exchange: { youGet: true },
              showExchange: { youGet: true },
            })
          }
        >
          <h5>You Get</h5>
          <div className='trade-flex'>
            <div className='box'>
              <p>10 Keys</p>
              <small className='green'>10 Refs</small>
            </div>
            <div className='item-number hex'>30</div>
          </div>
        </div>
      </div>
      <div className='flex items'>
        <div
          className={`item-tab ${display?.ourItems && 'active'} `}
          onClick={() => setDisplay({ ourItems: true })}
        >
          Our Items
        </div>
        <div
          className={`item-tab ${display?.yourItems && 'active'} `}
          onClick={() => setDisplay({ yourItems: true })}
        >
          Your Items
        </div>
      </div>
    </div>
  );
};

export default TradeMobileNav;
