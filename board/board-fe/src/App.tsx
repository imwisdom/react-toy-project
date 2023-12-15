import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuFrame from './components/MenuFrame';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MenuFrame>
        <Home/>
      </MenuFrame>
    </div>
  );
}

export default App;
