import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from 'react'; // for step 8
//import React from 'react';

function Header({ storeName, cartCount, onSearch}) {


  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

        <div className="search-container" >
            <input 
                type="text" 
                placeholder="Search movies..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
        
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