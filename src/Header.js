import React from 'react';
import logo from './img/logo.svg';
import './Header.scss';

function Header() {
    return (
        <header className="App-header row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 d-flex justify-content-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-lg-2"></div>
        </header>
    );
  }
  
  export default Header;
  