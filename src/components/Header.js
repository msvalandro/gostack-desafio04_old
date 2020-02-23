import React from 'react';

import logo from '../assets/facebook.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <div className="header__profile">
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </div>
    </header>
  );
}

export default Header;
