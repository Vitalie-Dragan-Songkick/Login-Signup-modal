// components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <input type="search" placeholder="Search" />
      <nav>
        <a href="#">DOCS</a>
        <a href="#">SERVICES</a>
      </nav>
    </header>
  );
};

export default Header;