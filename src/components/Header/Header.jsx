import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import './Header.css'

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
          <span className="Header-alert">{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;