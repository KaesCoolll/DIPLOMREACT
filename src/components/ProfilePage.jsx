// ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import '../styles/profile.css';

const ProfilePage = () => {
  const { user, logout, getUserResults } = useAuth();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (user) {
        const userResults = await getUserResults();
        setResults(userResults);
        setIsLoading(false);
      }
    };
    
    fetchResults();
  }, [user, getUserResults]);

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <h2>Профиль</h2>
          <p>Пожалуйста, войдите в систему, чтобы просмотреть свой профиль.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Профиль пользователя</h2>
          <p className="username">{user.username}</p>
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
          <button onClick={logout} className="logout-button">Выйти из аккаунта</button>
        </div>
        
        <div className="results-section">
          <h3>Результаты тестов</h3>
          {isLoading ? (
            <div className="loading-message">Загрузка результатов...</div>
          ) : results.length === 0 ? (
            <div className="empty-message">У вас пока нет сохранённых результатов тестов.</div>
          ) : (
            <div className="results-table">
              <table>
                <thead>
                  <tr>
                    <th>Тест</th>
                    <th>Результат</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr key={result.id}>
                      <td>{getTestName(result.test_type)}</td>
                      <td>{result.score} из {result.total_questions}</td>
                      <td>{new Date(result.completed_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function getTestName(testId) {
  const names = {
    'html-css': 'HTML & CSS',
    'javascript': 'JavaScript',
    'react': 'React',
    'webpack': 'Webpack & Бандлеры',
    'performance': 'Оптимизация и производительность'
  };
  return names[testId] || testId;
}

export default ProfilePage;