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
        <h2>Профиль</h2>
        <p>Пожалуйста, войдите в систему, чтобы просмотреть свой профиль.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Профиль пользователя: {user.username}</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={logout} className="logout-button">Выйти</button>
      </div>
      
      <h3>Результаты тестов</h3>
      {isLoading ? (
        <p>Загрузка результатов...</p>
      ) : results.length === 0 ? (
        <p>У вас пока нет сохранённых результатов тестов.</p>
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