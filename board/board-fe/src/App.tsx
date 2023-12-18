import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuFrame from './components/MenuFrame';
import Home from './pages/Home';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
