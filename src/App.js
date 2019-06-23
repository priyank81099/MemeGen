import React from 'react';
import './App.css';
import Memegen from './Memegen.js';
import Header from './Header.js';
import './style.css';

const App = (props) => {
  return(
    <div>
      <Header/>
      <Memegen/>
    </div>
  );
}

export default App;
