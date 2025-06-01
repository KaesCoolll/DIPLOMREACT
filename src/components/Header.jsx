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

      <nav className="nav">
        <a className="nav_item" href="/">Главная</a>
        <Link to="/testirovanie" className="nav_item1">Тестирование</Link>
        <Link to="/materials" className="nav_item2">Учебные материалы</Link>
        <a className="nav_item3" href="/sovety">Советы</a>
      </nav>

      <div className="nav-right">
        {user ? (
          <>
            <Link to="/profile" className="btn btn-profile">Профиль</Link>
            <button onClick={logout} className="btn btn-logout">Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-login">Вход</Link>
            <Link to="/register" className="btn btn-register">Регистрация</Link>
          </>
        )}
      </div>
    </header>

  );
}

export default Header;