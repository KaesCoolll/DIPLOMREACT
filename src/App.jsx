import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Добавьте импорт Layout
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import './styles/main.css';

// Компоненты для HomePage
import BannerSlider from './components/BannerSlider';
import MainContent from './components/MainContent';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout будет оборачивать все дочерние маршруты */}
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={
            <HomePage
              BannerSlider={BannerSlider}
              MainContent={MainContent}
              FAQ={FAQ}
            />
          } />
          
          {/* Страница тестирования */}
          <Route path="testirovanie" element={<TestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;