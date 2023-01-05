import { useState } from 'react';
import './App.css';
import AppRoute from './route';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AnimatePresence>
      <AppRoute />
    </AnimatePresence>
  );
}

export default App;
