import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">PlatziConf Merch</h1>
      <button className="Header-checkout">
        Salir
      </button>
    </div>
  );
}

export default Header;