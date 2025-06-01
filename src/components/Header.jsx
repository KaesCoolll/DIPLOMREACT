import React from 'react';
import logo from '../assets/img/FrontTest.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} className="logo" width="55" height="55" alt="FrontTest Logo" />
        <span className="nav_item0">FrontTest</span>
      </a>
      <div className="nav">
        <a className="nav_item" href="/">Главная</a>
        <Link to="/testirovanie" className="nav_item1">Тестирование</Link>
        <Link to="/materials" className="nav_item2">Учебные материалы</Link>
        <a className="nav_item3" href="/sovety">Советы</a>
        {user ? (
          <>
            <Link to="/profile" className="nav_item4">Профиль</Link>
            <button onClick={logout} className="nav_item5">Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav_item4">Вход</Link>
            <Link to="/register" className="nav_item5">Регистрация</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;