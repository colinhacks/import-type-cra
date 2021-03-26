import React from 'react';
import logo from './logo.svg';
import './App.css';

import type { MyType } from '../../server';
const test: MyType = { test: 'asdf' };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(test, null, 2)}</p>
      </header>
    </div>
  );
}

export default App;
