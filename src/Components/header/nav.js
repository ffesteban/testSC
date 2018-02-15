import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes';

const Nav = () => (
  <div>
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/men" >Men</Link></li>
        <li className=""><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
    <Routes />
  </div>
);

export default Nav;
