import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import MaterialsPage from './components/MaterialsPage';
import Tips from './components/Tips';
import LoginForm from './context/LoginForm';
import RegisterForm from './context/RegisterForm';
import ProfilePage from './components/ProfilePage';
import BannerSlider from './components/BannerSlider';
import MainContent from './components/MainContent';
import FAQ from './components/FAQ';
import './styles/main.css';

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
          <Route path="sovety" element={<Tips />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
