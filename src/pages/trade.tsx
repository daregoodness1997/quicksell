import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Button, Modal } from '../components';
import { TradeCard } from '../components/cards';
import ExchangeView from '../views/ExchangeView';
import TradeMobileNav from '../views/trades/TradeMobileNav';
import TradeSection from '../views/trades/TradeSection';

const Trade = () => {
  const [open, setOpen] = useState(false);
  let showItems = {
    yourItems: true,
    ourItems: true,
    exchange: true,
    showExchange: { youGive: true, youGet: true },
  };
  const [view, setView] = useState(showItems);
  const [display, setDisplay] = useState(view);
  const handleTradeClick = () => {
    setOpen(true);
  };
  let isMobile = true;
  const [width, setWidth] = useState(window.innerWidth); // check width size of the window
  const [mobile, setMobile] = useState(false);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 700 ? true : false;
    setMobile(isMobile);
    if (!mobile) {
      setDisplay({
        yourItems: true,
        ourItems: true,
        exchange: true,
        showExchange: { youGive: true, youGet: true },
      });
    } else {
      setDisplay({
        yourItems: true,
        ourItems: false,
        exchange: true,
        showExchange: { youGive: false, youGet: false },
      });
    }
  };

  // call your useEffect
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [mobile]);


  return (
    <>
      <Modal open={open} setOpen={setOpen} title='Trade Now'>
        <p>Test Modal</p>
      </Modal>
      <TradeMobileNav setDisplay={setDisplay} display={display} />
      <motion.div className='trade-container container'>
        {display?.ourItems && (
          <TradeSection
            size='lg'
            title='Your Items'
            className={`${display.ourItems && 'show'}`}
          >
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
          </TradeSection>
        )}
        {display?.yourItems && (
          <TradeSection
            size='lg'
            title='Your Items'
            className={`${display.yourItems && 'show'}`}
          >
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
            <TradeCard onTrade={true} />
          </TradeSection>
        )}
        {display?.exchange && (
          <TradeSection
            size='sm'
            type='exchange'
            hasGrid={false}
            className={`${display.exchange && 'show'}`}
          >
            {display?.showExchange?.youGive && <ExchangeView />}
            {display?.showExchange?.youGet && <ExchangeView />}
            <div className='button'>
              <Button label='Trade Now' size='md' onClick={handleTradeClick} />
            </div>
          </TradeSection>
        )}
      </motion.div>
    </>
  );
};

export default Trade;
