import React from 'react';
import { Header } from './components/Header';
import { InputCard } from './components/InputCard';
import { Score } from './components/Score';
import { Settings } from './components/Settings';
import { TimeIndicator } from './components/TimeIndicator';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className=''>
        <TimeIndicator />
        <InputCard />
        <Score />
        <Settings />
      </div>
    </GlobalProvider>
  );
}

export default App;
