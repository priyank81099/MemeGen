import React from 'react';
import './style.css';
import face from './face.png'

const Header = () => {
  return(
    <header className="Header">
        <img
          src={face}
          alt="problem?"
          id="headimg"
        />
        <h1 id="hd1">  MEME GENERATOR </h1>
    </header>
  );
}

export default Header;
