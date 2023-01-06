import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button, Modal } from '../components';
import { TradeCard } from '../components/cards';
import ExchangeView from '../views/ExchangeView';
import TradeMobileNav from '../views/trades/TradeMobileNav';
import TradeSection from '../views/trades/TradeSection';

const Trade = () => {
  const [open, setOpen] = useState(false);
  const handleTradeClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} setOpen={setOpen} title='Trade Now'>
        <p>Test Modal</p>
      </Modal>
      <TradeMobileNav />
      <motion.div layout className='trade-container container'>
        <TradeSection size='lg' title='Your Items'>
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
        <TradeSection size='lg' title='Our Items'>
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
        <TradeSection size='sm' type='exchange' hasGrid={false}>
          <ExchangeView />
          <ExchangeView />
          <div className='button'>
            <Button label='Trade Now' size='md' onClick={handleTradeClick} />
          </div>
        </TradeSection>
      </motion.div>
    </>
  );
};

export default Trade;
