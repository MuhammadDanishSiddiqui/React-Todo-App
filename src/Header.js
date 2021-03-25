import React from 'react'
import logo from "./logo.png"
import './App.css';

function Header() {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logo"/>
        <h1>Today's Plan</h1>
    </div>
  );
}

export default Header;
