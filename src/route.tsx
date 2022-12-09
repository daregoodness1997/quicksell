import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Page404 from './pages/404';
import About from './pages/about';
import Auction from './pages/auction';
import Brokering from './pages/brokering';
import Donations from './pages/donations';
import Giveaway from './pages/giveaway';
import Home from './pages/home';
import Keys from './pages/keys';
import Marketplace from './pages/marketplace';
import Notifications from './pages/notifications';
import Premium from './pages/premium';
import Raffle from './pages/raffle';
import Reserving from './pages/reserving';
import Single from './pages/single';
import Support from './pages/support';
import Trade from './pages/trade';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/trade' element={<Trade />} />
          <Route path='/keys' element={<Keys />} />
          <Route path='/giveaways' element={<Giveaway />} />
          <Route path='/raffles' element={<Raffle />} />
          <Route path='/auctions' element={<Auction />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/about' element={<About />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/brokering' element={<Brokering />} />
          <Route path='/reserving' element={<Reserving />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/trade/:itemId' element={<Single />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
