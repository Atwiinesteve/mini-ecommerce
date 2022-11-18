import React from 'react'

import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar">
        <div className="logo__area">
            <div className="logo">    	
                <i className="fa fa-shopping-basket"></i>
            </div>
        </div>
        <div className="menu__area">
            <ul className="menu__links">
                <li><a href="/signin" className="link">signin</a></li>
                <li><a href="/signup" className="link">signup</a></li>
                <li><a href="/cart" className="link">cart</a></li>
            </ul>
        </div>
    </nav>
  );

}

export default Navbar;