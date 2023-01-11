import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button, Modal } from '../components';
import { TradeCard } from '../components/cards';
import ExchangeView from '../views/ExchangeView';
import TradeMobileNav from '../views/trades/TradeMobileNav';
import TradeSection from '../views/trades/TradeSection';

const Trade = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState({
    yourItems: true,
    ourItems: false,
    exchange: true,
    showExchange: { youGive: false, youGet: false },
  });
  const handleTradeClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} setOpen={setOpen} title='Trade Now'>
        <p>Test Modal</p>
      </Modal>
      <TradeMobileNav setDisplay={setDisplay} display={display} />
      <motion.div className='trade-container container'>
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
        <TradeSection
          size='lg'
          title='Our Items'
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
        </TradeSection>
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
      </motion.div>
    </>
  );
};

export default Trade;
