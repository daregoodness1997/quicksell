import React from 'react';
import { TopNav } from '../components';
import Feautures from '../views/Feautures';
import Hero from '../views/Hero';
import Keys from '../views/Keys';
import Product from '../views/Product';
import Trades from '../views/Trades';

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Feautures />
      <Keys />
      <Trades />
    </div>
  );
};

export default Home;
