import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TopNav } from './components';
import AppRoute from './route';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
