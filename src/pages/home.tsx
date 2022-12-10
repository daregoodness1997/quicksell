import React from 'react';
import { TopNav } from '../components';
import Feautures from '../views/Feautures';
import Hero from '../views/Hero';
import Product from '../views/Product';

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Feautures />
    </div>
  );
};

export default Home;
