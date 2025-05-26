import React from 'react';
import '../styles/tips.css';

const Tips = () => {
  return (
    <div className="tips-page">
      <main className="tips-container">
        <h2 className="tips-title">Советы для начинающих фронтендеров</h2>
        
        <section className="tip-card">
          <h3>1. Начинай с основ</h3>
          <p>Перед тем как изучать фреймворки, убедись, что хорошо понимаешь HTML, CSS и JavaScript. Это основа всего фронтенда!</p>
        </section>

        <section className="tip-card">
          <h3>2. Читай документацию</h3>
          <p>Не бойся читать официальную документацию — она часто лучше любых туториалов.</p>
        </section>

        <section className="tip-card">
          <h3>3. Создавай проекты</h3>
          <p>Лучший способ научиться — практика. Делай свои проекты, даже самые простые.</p>
        </section>

        <section className="tip-card">
          <h3>4. Используй современные инструменты</h3>
          <p>Изучи Git, Webpack, ESLint, Prettier — это сэкономит тебе время и сделает работу чище.</p>
        </section>

        <section className="tip-card">
          <h3>5. Не бойся ошибаться</h3>
          <p>Ошибки — часть обучения. Анализируй их и улучшай свои навыки.</p>
        </section>

        <section className="tip-card">
          <h3>6. Следи за трендами</h3>
          <p>Подпишись на блоги, YouTube-каналы, Telegram-каналы о фронтенде — это поможет быть в курсе новинок.</p>
        </section>
      </main>
    </div>
  );
};

export default Tips;