import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Link from './components/Link';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link />
      </header>
    </div>
  );
}

export default App;
