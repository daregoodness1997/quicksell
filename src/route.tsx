import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Keys from './pages/keys';
import Support from './pages/support';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/keys' element={<Keys />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
