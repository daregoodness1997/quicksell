import { useState } from 'react';
import './App.css';
import AppRoute from './route';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { AnimatePresence } from 'framer-motion';
import ProductProvider from './context/AppContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AnimatePresence>
      <ProductProvider>
        <AppRoute />
      </ProductProvider>
    </AnimatePresence>
  );
}

export default App;
