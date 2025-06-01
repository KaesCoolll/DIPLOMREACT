import React, { useState, useEffect, useRef } from 'react';
import '../styles/testirovanie.css'; // Подключаем стили
import { useAuth } from '../context/AuthContext';

const TestPage = () => {
  const { user, saveTestResult } = useAuth();
  const tests = {
    "html-css": [
      {
        question: "Что такое семантический тег в HTML?",
        answers: [
          "Тег, который описывает смысл содержимого",
          "Тег, который задаёт стиль",
          "Тег, который используется для скриптов",
          "Тег, который скрыт на странице"
        ],
        correct: 0
      },
      {
        question: "Какой метод подключения CSS считается лучшим?",
        answers: [
          "Встроенный стиль (inline)",
          "Внешний файл CSS",
          "Использование атрибута style в теге",
          "Использование тегов &lt;script&gt;"
        ],
        correct: 1
      },
      {
        question: "Что такое Flexbox и для чего он используется?",
        answers: [
          "Метод позиционирования элементов в строке или столбце",
          "Язык программирования",
          "Фреймворк для создания сайтов",
          "База данных"
        ],
        correct: 0
      },
      {
        question: "Какой тег используется для создания гиперссылки?",
        answers: [
          "&lt;link&gt;",
          "&lt;a&gt;",
          "&lt;href&gt;",
          "&lt;url&gt;"
        ],
        correct: 1
      },
      {
        question: "Что делает свойство CSS 'z-index'?",
        answers: [
          "Определяет прозрачность элемента",
          "Устанавливает порядок наложения элементов",
          "Задаёт цвет фона",
          "Устанавливает размер шрифта"
        ],
        correct: 1
      }
    ],
    "javascript": [
      {
        question: "Что такое замыкание (closure) в JavaScript?",
        answers: [
          "Функция вместе с лексическим окружением, в котором она была создана",
          "Объект, который хранит состояние",
          "Переменная, объявленная внутри функции",
          "Ошибка в коде"
        ],
        correct: 0
      },
      {
        question: "Чем отличаются var, let и const?",
        answers: [
          "var - глобальная, let и const - локальные",
          "var - устаревшая, let - изменяемая, const - неизменяемая",
          "var - функция, let и const - блоки",
          "var и let - одинаковые, const - константа"
        ],
        correct: 1
      },
      {
        question: "Что такое промис (Promise)?",
        answers: [
          "Объект для работы с асинхронным кодом",
          "Функция обратного вызова",
          "Тип ошибки",
          "Цикл в JavaScript"
        ],
        correct: 0
      },
      {
        question: "Какой метод используется для добавления элемента в конец массива?",
        answers: [
          "push()",
          "pop()",
          "shift()",
          "unshift()"
        ],
        correct: 0
      },
      {
        question: "Что делает оператор === в JavaScript?",
        answers: [
          "Сравнивает только значения",
          "Сравнивает значения и типы",
          "Присваивает значение",
          "Создаёт новую переменную"
        ],
        correct: 1
      }
    ],
    "react": [
      {
        question: "Что такое JSX?",
        answers: [
          "Расширение синтаксиса JavaScript для описания UI",
          "Язык программирования",
          "Библиотека для работы с сервером",
          "Фреймворк для CSS"
        ],
        correct: 0
      },
      {
        question: "Для чего используется хук useState?",
        answers: [
          "Для управления состоянием компонента",
          "Для создания маршрутов",
          "Для работы с формами",
          "Для стилизации компонентов"
        ],
        correct: 0
      },
      {
        question: "Что делает хук useEffect?",
        answers: [
          "Позволяет выполнять побочные эффекты в компонентах",
          "Создаёт новые компоненты",
          "Обрабатывает события",
          "Управляет состоянием"
        ],
        correct: 0
      },
      {
        question: "Что такое контролируемый компонент?",
        answers: [
          "Компонент, состояние которого управляется React",
          "Компонент без состояния",
          "Компонент, который не рендерится",
          "Компонент, который управляет другими компонентами"
        ],
        correct: 0
      },
      {
        question: "Какой метод жизненного цикла вызывается при монтировании компонента?",
        answers: [
          "componentDidMount",
          "componentWillUnmount",
          "render",
          "shouldComponentUpdate"
        ],
        correct: 0
      }
    ],
    "webpack": [
      {
        question: "Что такое entry в Webpack?",
        answers: [
          "Точка входа для сборки приложения",
          "Результат сборки",
          "Плагин для оптимизации",
          "Конфигурационный файл"
        ],
        correct: 0
      },
      {
        question: "Для чего нужны лоадеры (loaders) в Webpack?",
        answers: [
          "Для обработки файлов перед сборкой",
          "Для запуска сервера",
          "Для стилизации компонентов",
          "Для управления состоянием"
        ],
        correct: 0
      },
      {
        question: "Что делает плагин HtmlWebpackPlugin?",
        answers: [
          "Автоматически генерирует HTML-файл",
          "Оптимизирует JS-код",
          "Запускает тесты",
          "Создаёт CSS-файл"
        ],
        correct: 0
      },
      {
        question: "Как уменьшить размер итогового бандла?",
        answers: [
          "Использовать tree shaking",
          "Добавлять все библиотеки в бандл",
          "Отключить минификацию",
          "Использовать inline стили"
        ],
        correct: 0
      },
      {
        question: "Что такое code splitting?",
        answers: [
          "Разделение кода на части для загрузки по требованию",
          "Объединение всех файлов в один",
          "Удаление неиспользуемого кода",
          "Оптимизация CSS"
        ],
        correct: 0
      }
    ],
    "performance": [
      {
        question: "Что такое lazy loading?",
        answers: [
          "Загрузка ресурсов по мере необходимости",
          "Предварительная загрузка всех ресурсов",
          "Кэширование данных",
          "Оптимизация изображений"
        ],
        correct: 0
      },
      {
        question: "Как работает кеширование в браузере?",
        answers: [
          "Хранит копии ресурсов для ускорения загрузки",
          "Удаляет все данные после закрытия вкладки",
          "Загружает ресурсы заново при каждом запросе",
          "Отправляет данные на сервер"
        ],
        correct: 0
      },
      {
        question: "Какие инструменты помогают анализировать производительность?",
        answers: [
          "Chrome DevTools, Lighthouse",
          "Photoshop, Illustrator",
          "Git, GitHub",
          "Webpack, Babel"
        ],
        correct: 0
      },
      {
        question: "Что такое критический путь рендеринга?",
        answers: [
          "Последовательность действий браузера для отображения страницы",
          "Оптимизация CSS",
          "Загрузка изображений",
          "Асинхронный код"
        ],
        correct: 0
      },
      {
        question: "Как уменьшить время отклика страницы?",
        answers: [
          "Минимизировать HTTP-запросы и использовать кеширование",
          "Добавлять много скриптов",
          "Использовать большие изображения",
          "Отключать кеш"
        ],
        correct: 0
      }
    ]
  };

  const [activeTest, setActiveTest] = useState('html-css');
  const [testStates, setTestStates] = useState({});
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      Object.values(testStates).forEach(state => {
        if (state.timer) clearTimeout(state.timer);
      });
    };
  }, [testStates]);

  const handleTestChange = (testId) => {
    setTestStates(prev => {
      const newState = { ...prev };
      if (!newState[testId]) {
        newState[testId] = getInitialTestState(testId);
      }
      return newState;
    });
    setActiveTest(testId);
  };

  const handleAnswer = (selectedIdx, correctIdx) => {
    const testId = activeTest;

    // Очищаем предыдущий таймер, если он есть
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setTestStates(prev => {
      const currentState = prev[testId] || getInitialTestState(testId);
      return {
        ...prev,
        [testId]: {
          ...currentState,
          selectedAnswer: selectedIdx,
          showCorrect: true,
          correctCount: selectedIdx === correctIdx
            ? currentState.correctCount + 1
            : currentState.correctCount,
        }
      };
    });


    timerRef.current = setTimeout(() => {
      setTestStates(prev => {
        const currentState = prev[testId] || getInitialTestState(testId);
        return {
          ...prev,
          [testId]: {
            ...currentState,
            current: currentState.current + 1,
            selectedAnswer: null,
            showCorrect: false,
          }
        };
      });
    }, 1000);
  };
  const getInitialTestState = (testId) => ({
    current: 0,
    correctCount: 0,
    selectedAnswer: null,
    showCorrect: false,
    timer: null,
    total: tests[testId]?.length || 0
  });

  const currentState = testStates[activeTest] || getInitialTestState(activeTest);
  const currentQuestion = tests[activeTest]?.[currentState.current];

  return (
    <div className="test-page">
      <h1 className="page-title">Тестирование по фронтенд-разработке</h1>

      <nav className="test-menu">
        {Object.keys(tests).map(testId => (
          <button
            key={testId}
            className={`test-menu-item ${activeTest === testId ? 'active' : ''}`}
            onClick={() => handleTestChange(testId)}
          >
            {getTestName(testId)}
          </button>
        ))}
      </nav>

      <section className="test-content">
        {currentState.current < currentState.total ? (
          <div className="question-container">
            <h2>Тест: {getTestName(activeTest)}</h2>
            {currentQuestion ? (
              <div className="question">
                <div className="question-text">{currentQuestion.question}</div>
                <ul className="answers">
                  {currentQuestion.answers.map((answer, idx) => {
                    const isCorrect = idx === currentQuestion.correct;
                    const isSelected = idx === currentState.selectedAnswer;
                    let className = '';
                    if (currentState.showCorrect) {
                      if (isCorrect) className = 'answer-correct';
                      else if (isSelected) className = 'answer-wrong';
                    }
                    return (
                      <li key={`${currentState.current}-${idx}`}>
                        <label className={className}>
                          <input
                            type="radio"
                            name={`question-${currentState.current}`}
                            checked={isSelected}
                            onChange={() => handleAnswer(idx, currentQuestion.correct)}
                            disabled={currentState.selectedAnswer !== null}
                            className="hidden-radio"
                          />
                          <span className="custom-radio"></span>
                          <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="error">Вопрос не найден</div>
            )}
          </div>
        ) : (
          <div className="result">
            Тест завершён!<br />
            Правильных ответов: {currentState.correctCount} из {currentState.total}
            {user && (
              <button
                onClick={() => saveTestResult(
                  activeTest,
                  currentState.correctCount,
                  currentState.total
                )}
                className="save-result-button"
              >
                Сохранить результат
              </button>
            )}
          </div>
        )}
      </section>
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

export default TestPage;