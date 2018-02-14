import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../routes'

class Nav extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {/* <li className="active"><Link to="/home" >Home</Link></li> */}
                    <li className="active"><Link to="/men" >Men</Link></li>
                    {/* <li className=""><Link to="/men">Men</Link></li> */}
                    <li className=""><Link to="/checkout">Checkout</Link></li>
                    {/* <li className=""><Link to="/courses" activateClassName="active">Women</Link></li>
                    <li className=""><Link to="/courses" activateClassName="active">Sale</Link></li>
                    <li className=""><Link to="/courses" activateClassName="active">Checkout</Link></li> */}
                </ul>
            </nav>
            <Routes />
        </div>
    );
  }
}

export default Nav;