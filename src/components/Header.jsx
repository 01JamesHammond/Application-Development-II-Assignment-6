import "./Header.css";
import { Link } from 'react-router-dom';
//import React from 'react';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
        <h1>{storeName}</h1>
        <nav>
            <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        
        <div className="cart-container">
          <Link to="/cart">
              <span className="cart-icon">🛒</span>
              {cartCount}
           </Link>

        </div>
    </header>
  );
}

export default Header;