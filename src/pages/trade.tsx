import { motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import AppButton from '../components/button/AppButton';
import { TradeCard } from '../components/cards';
import SkeletalCard from '../components/cards/SkeletalCard';
import FlyOuts from '../components/flyouts';

import AlreadySelected from '../components/modal/views/AlreadySelected';
import PriceChanges from '../components/modal/views/PriceChanges';
import Successful from '../components/modal/views/Successful';
import UnsuccessfulSold from '../components/modal/views/UnsuccessfulSold';

import UnsuccessfulTrade from '../components/modal/views/UnsuccessfulTrade';
import { ProductContext } from '../context/AppContext';
import { ProductContextType } from '../types/@types.product';
import { tradeItems } from '../utils/data';
import ExchangeView from '../views/ExchangeView';
import TradeAction from '../views/trades/TradeAction';
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
  const [loading, setLoading] = useState(true);
  const {
    products,
    saveProduct,
    addToGet,
    addToGive,
    youGive,
    youGet,
    onLoggedIn,
    loggedIn,
    givecalculate,
    getcalculate,
    clearGet,
    clearGive,
  } = useContext(ProductContext) as ProductContextType;

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
        exchange: false,
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

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  const handleGive = (id: string) => addToGive(id);
  const handleGet = (id: string) => addToGet(id);

  const renderOurItems = () =>
    products.map(item => (
      <TradeCard onTrade={true} {...item} onClick={() => handleGive(item.id)} />
    ));
  const renderYourItems = () =>
    products.map(item => (
      <TradeCard onTrade={true} {...item} onClick={() => handleGet(item.id)} />
    ));

  const renderMocks = () => [...Array(16)].map(() => <SkeletalCard />);

  return (
    <>
      {/* <UnsuccessfulTrade open={open} setOpen={setOpen} /> */}

      {/* <AlreadySelected open={open} setOpen={setOpen} /> */}
      <Successful open={open} setOpen={setOpen} />
      {/* <FlyOuts open={open} setOpen={setOpen} /> */}

      {/* <UnsuccessfulSold open={open} setOpen={setOpen} /> */}
      {/* <PriceChanges open={open} setOpen={setOpen} /> */}
      <div className='trade-global'>
        <TradeMobileNav setDisplay={setDisplay} display={display} />
        {loggedIn && <TradeAction onClick={handleTradeClick} />}
        <motion.div className='trade-container container'>
          {display?.yourItems && (
            <TradeSection
              size='lg'
              title='Your Items'
              buyer={true}
              loggedIn={loggedIn}
              className={`${display.yourItems && 'show'}`}
            >
              {loading ? renderMocks() : renderOurItems()}
            </TradeSection>
          )}
          {display?.ourItems && (
            <TradeSection
              size='lg'
              title='Our Items'
              loggedIn={true}
              className={`${display.ourItems && 'show'}`}
            >
              {loading ? renderMocks() : renderYourItems()}
            </TradeSection>
          )}
          {display?.exchange && (
            <TradeSection
              size='sm'
              type='exchange'
              hasGrid={false}
              className={`${display.exchange && 'show'}`}
            >
              {display?.showExchange?.youGive && (
                <ExchangeView
                  label='You Give'
                  empty={youGive.length > 0 ? false : true}
                  data={youGive}
                  keys={givecalculate.keys}
                  refs={givecalculate.refs}
                  onClear={clearGive}
                />
              )}
              {display?.showExchange?.youGet && (
                <ExchangeView
                  label='You Get'
                  empty={youGet.length > 0 ? false : true}
                  data={youGet}
                  keys={getcalculate.keys}
                  refs={getcalculate.refs}
                  onClear={clearGet}
                />
              )}
              <div className='button-group'>
                <AppButton
                  label='Trade Now'
                  size='md'
                  variant='solid'
                  onClick={handleTradeClick}
                />
              </div>
            </TradeSection>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Trade;
