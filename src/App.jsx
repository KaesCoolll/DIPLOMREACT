import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MaterialsPage from './components/MaterialsPage';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import Tips from './components/Tips';
import './styles/main.css';
import BannerSlider from './components/BannerSlider';
import MainContent from './components/MainContent';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <HomePage
              BannerSlider={BannerSlider}
              MainContent={MainContent}
              FAQ={FAQ}
            />
          } />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="testirovanie" element={<TestPage />} />
          <Route path="tips" element={<Tips />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
