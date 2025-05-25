import React from 'react';
import logo from '../assets/img/FrontTest.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} className="logo" width="55" height="55" alt="FrontTest Logo" />
        <span className="nav_item0">FrontTest</span>
      </a>
      <div className="nav">
        <a className="nav_item" href="/">Главная</a>
        <Link to="/testirovanie" className="nav_item1">Тестирование</Link>
        <a className="nav_item2" href="/materials">Учебные материалы</a>
        <a className="nav_item3" href="/sovety">Советы</a>
      </div>
    </header>
  );
}

export default Header;