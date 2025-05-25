import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="contact-info">
          <h3>Связь с нами</h3>
          <p>Телефон: <a href="tel:+79203932334">+7 920 393-23-34</a></p>
          <p>Email: <a href="mailto:kaes.cooll@gmail.com">kaes.cooll@gmail.com</a></p>
        </div>
        <div className="social-links">
          <h3>Социальные сети</h3>
          <p><a href="https://t.me/KaesCool" target="_blank" rel="noopener noreferrer">@KaesCool</a></p>
          <p><a href="https://vk.com/astraxxanskayasuch" target="_blank" rel="noopener noreferrer">VK: https://vk.com/MaximRudak</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FrontTest. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;