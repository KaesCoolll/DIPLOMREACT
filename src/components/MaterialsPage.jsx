import React, { useState } from 'react';
import '../styles/materials.css';

const MaterialsPage = () => {
  const [activeTopic, setActiveTopic] = useState('html-css');

  const topics = {
    "html-css": `
            <h2>HTML & CSS</h2>
            <p><strong>HTML</strong> (HyperText Markup Language) — это язык разметки, который используется для создания структуры и содержания веб-страниц. Без HTML невозможно представить современный интернет — именно он задаёт каркас любой веб-страницы.</p>
            <p><strong>CSS</strong> (Cascading Style Sheets) — это язык описания внешнего вида документов, написанных на HTML. С помощью CSS веб-страницы становятся красивыми, адаптивными и удобочитаемыми.</p>

            <h3>Основные понятия HTML</h3>
            <ul>
                <li><strong>Семантические теги</strong> — современные теги, которые придают структуре страницы смысл. Например:
                    <ul>
                        <li><code>&lt;header&gt;</code> — шапка страницы или блока</li>
                        <li><code>&lt;main&gt;</code> — основное содержимое</li>
                        <li><code>&lt;footer&gt;</code> — подвал</li>
                        <li><code>&lt;article&gt;</code> — самостоятельная статья или пост</li>
                        <li><code>&lt;section&gt;</code> — раздел или секция</li>
                        <li><code>&lt;nav&gt;</code> — навигационное меню</li>
                    </ul>
                </li>
                <li><strong>Атрибуты</strong> — дополнительные параметры тегов, которые позволяют настраивать их поведение. Например:
                    <ul>
                        <li><code>href</code> — ссылка у тега <code>&lt;a&gt;</code></li>
                        <li><code>src</code> — путь к изображению у тега <code>&lt;img&gt;</code></li>
                        <li><code>class</code>, <code>id</code> — идентификаторы для стилизации и JavaScript</li>
                    </ul>
                </li>
                <li><strong>Валидация</strong> — проверка корректности HTML-кода с помощью специальных сервисов и инструментов. Валидный код лучше работает, легче поддерживается и правильно отображается во всех браузерах.</li>
                <li><strong>Формы</strong> — с помощью тегов <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code> создаются поля для ввода данных и отправки на сервер.</li>
                <li><strong>Мультимедиа</strong> — теги <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> позволяют добавлять изображения, видео и аудио на страницу.</li>
            </ul>

            <h3>Основные понятия CSS</h3>
            <ul>
                <li><strong>Селекторы</strong> — определяют, к каким элементам применять стили. Например:
                    <ul>
                        <li><code>div</code> — все элементы <code>&lt;div&gt;</code></li>
                        <li><code>.class</code> — все элементы с классом <code>class</code></li>
                        <li><code>#id</code> — элемент с идентификатором <code>id</code></li>
                    </ul>
                </li>
                <li><strong>Flexbox</strong> и <strong>Grid</strong> — современные технологии для создания адаптивных и гибких макетов:
                    <ul>
                        <li><strong>Flexbox</strong> — идеален для одномерных раскладок (по горизонтали или вертикали)</li>
                        <li><strong>Grid</strong> — позволяет создавать сложные двумерные сетки</li>
                    </ul>
                </li>
                <li><strong>Позиционирование</strong> — свойства, которые управляют расположением элементов:
                    <ul>
                        <li><code>position: static|relative|absolute|fixed|sticky</code></li>
                        <li><code>z-index</code> — управление слоями элементов</li>
                        <li><code>float</code> — обтекание элементов (устаревший подход, но иногда используется)</li>
                    </ul>
                </li>
                <li><strong>Медиазапросы</strong> — позволяют создавать адаптивные макеты для разных устройств (телефоны, планшеты, компьютеры):
                    <ul>
                        <li><code>@media (max-width: 768px) {...}</code> — стили для устройств с шириной экрана до 768px</li>
                    </ul>
                </li>
                <li><strong>Анимации и переходы</strong> — с помощью свойств <code>transition</code> и <code>animation</code> можно оживить интерфейс</li>
                <li><strong>Переменные (Custom Properties)</strong> — позволяют хранить повторяющиеся значения (например, цвета, отступы)</li>
            </ul>

            <h3>Почему важно изучать HTML и CSS?</h3>
            <p>HTML и CSS — это фундамент веб-разработки. Даже если вы планируете изучать JavaScript или React, без понимания основ HTML и CSS невозможно создавать современные и красивые веб-приложения.</p>

            <h3>Полезные ресурсы</h3>
            <ul>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML" target="_blank">MDN HTML</a> — подробная документация по HTML</li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS" target="_blank">MDN CSS</a> — подробная документация по CSS</li>
                <li><a href="https://html5book.ru/" target="_blank">html5book.ru</a> — учебник по HTML и CSS на русском</li>
                <li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a> — советы и трюки по CSS (на английском)</li>
                <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a> — интерактивные примеры и справочник</li>
            </ul>
        `,
    "javascript": `
            <h2>JavaScript</h2>
            <p><b>JavaScript</b> — основной язык программирования для веб-разработки, который позволяет создавать динамичные и интерактивные веб-страницы. На сегодняшний день JavaScript используется не только в браузере, но и на сервере (Node.js), в мобильных и десктопных приложениях.</p>

            <h3>Основные темы и особенности JavaScript</h3>
            <ul>
                <li><b>Переменные:</b>
                    <ul>
                        <li><code>var</code> — устаревший способ объявления переменных (не рекомендуется)</li>
                        <li><code>let</code> — переменная с блочной областью видимости</li>
                        <li><code>const</code> — константа, значение нельзя изменить после объявления</li>
                    </ul>
                </li>
                <li><b>Типы данных:</b>
                    <ul>
                        <li><strong>Числа</strong> — целые и дробные</li>
                        <li><strong>Строки</strong> — текст, заключённый в кавычки</li>
                        <li><strong>Объекты</strong> — наборы пар "ключ-значение"</li>
                        <li><strong>Массивы</strong> — упорядоченные списки элементов</li>
                        <li><strong>Функции</strong> — блоки кода, которые можно вызывать</li>
                        <li><strong>Boolean</strong> — логические значения <code>true</code> и <code>false</code></li>
                        <li><strong>null</strong> и <strong>undefined</strong> — специальные значения</li>
                    </ul>
                </li>
                <li><b>Функции:</b>
                    <ul>
                        <li><strong>Объявление функций</strong>: <code>function имя() { ... }</code></li>
                        <li><strong>Функциональные выражения</strong>: <code>const имя = function() { ... }</code></li>
                        <li><strong>Стрелочные функции</strong>: <code>const имя = () => { ... }</code> (современный синтаксис)</li>
                        <li><strong>Замыкания</strong> — функции, которые запоминают контекст, в котором были созданы</li>
                    </ul>
                </li>
                <li><b>Асинхронность:</b>
                    <ul>
                        <li><strong>Callback-функции</strong> — функции, которые вызываются после завершения асинхронной операции</li>
                        <li><strong>Promises</strong> (Обещания) — объекты, представляющие результат асинхронной операции</li>
                        <li><strong>async/await</strong> — современный синтаксис для работы с асинхронным кодом</li>
                    </ul>
                </li>
                <li><b>Работа с DOM:</b>
                    <ul>
                        <li><strong>Изменение элементов</strong>: добавление, удаление, изменение содержимого и стилей</li>
                        <li><strong>Обработка событий</strong>: клики, наведение, ввод текста и другие действия пользователя</li>
                    </ul>
                </li>
                <li><b>Модули и импорты:</b>
                    <ul>
                        <li><strong>ES6 Modules</strong> — современный способ организации кода в файлы и модули</li>
                    </ul>
                </li>
                <li><b>Встроенные методы:</b>
                    <ul>
                        <li><strong>Методы массивов</strong>: <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>forEach</code> и др.</li>
                        <li><strong>Методы строк</strong>: <code>split</code>, <code>join</code>, <code>toUpperCase</code>, <code>toLowerCase</code> и др.</li>
                    </ul>
                </li>
                <li><b>Классы и объектно-ориентированное программирование:</b>
                    <ul>
                        <li><strong>Классы</strong> — синтаксис для создания объектов с общими свойствами и методами</li>
                        <li><strong>Наследование</strong> — возможность создавать классы на основе других классов</li>
                    </ul>
                </li>
            </ul>

            <h3>Почему важно изучать JavaScript?</h3>
            <p>JavaScript — это язык, который делает веб живым и интерактивным. Без него невозможно создавать современные веб-приложения, сайты с динамическим контентом, анимации, формы обратной связи и многое другое. Знание JavaScript открывает возможности для работы с фреймворками (React, Vue, Angular), серверной разработкой (Node.js) и даже мобильными приложениями (React Native, Ionic).</p>

            <h3>Полезные ресурсы</h3>
            <ul>
                <li><a href="https://learn.javascript.ru/" target="_blank">learn.javascript.ru</a> — современный учебник по JavaScript на русском</li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank">MDN JavaScript</a> — подробная документация и справочник</li>
                <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">freeCodeCamp</a> — интерактивные уроки по JavaScript (на английском)</li>
                <li><a href="https://eloquentjavascript.net/" target="_blank">Eloquent JavaScript</a> — книга для углублённого изучения (на английском)</li>
            </ul>
        `,
    "react": `
            <h2>React</h2>
            <p><b>React</b> — это одна из самых популярных библиотек для разработки пользовательских интерфейсов, созданная компанией Facebook (сейчас Meta). Она широко используется как для небольших проектов, так и для крупных корпоративных приложений.</p>

            <h3>Основные особенности React</h3>
            <ul>
                <li><b>JSX</b> — расширение синтаксиса JavaScript, которое позволяет описывать интерфейсы в виде HTML-подобных элементов прямо в JavaScript-коде.</li>
                <li><b>Компоненты</b> — основная концепция React. Каждый компонент — это независимая, переиспользуемая часть интерфейса, которую можно легко комбинировать.</li>
                <li><b>Состояние (state)</b> и <b>пропсы (props)</b> — два главных типа данных, которые управляют поведением и внешним видом компонентов.</li>
                <li><b>Хуки (Hooks)</b> — функции, которые дают возможность использовать состояние и другие возможности React без написания классов. Самые популярные: useState, useEffect, useContext, useRef и другие.</li>
                <li><b>Жизненный цикл компонентов</b> — набор методов, которые вызываются в разные моменты жизни компонента (например, при создании, обновлении или удалении из DOM).</li>
                <li><b>Виртуальный DOM</b> — внутренний механизм React, который позволяет эффективно обновлять интерфейс, минимизируя количество реальных изменений в браузере.</li>
                <li><b>Односторонний поток данных</b> — данные всегда передаются от родителя к потомку, что делает код более предсказуемым и простым для отладки.</li>
                <li><b>Серверный рендеринг (SSR)</b> — React можно использовать для рендеринга на стороне сервера, что улучшает SEO и скорость загрузки страниц.</li>
                <li><b>React Native</b> — отдельная платформа для создания мобильных приложений на базе React.</li>
            </ul>

            <h3>Дополнительные возможности</h3>
            <ul>
                <li><b>Контекст (Context)</b> — позволяет передавать данные через дерево компонентов без явной передачи пропсов на каждом уровне.</li>
                <li><b>Порталы (Portals)</b> — дают возможность рендерить элементы вне DOM-дерева компонента (например, модальные окна).</li>
                <li><b>Стилизация</b> — React поддерживает различные подходы: CSS-модули, CSS-in-JS (например, styled-components), инлайновые стили и другие.</li>
            </ul>

            <h3>Преимущества React</h3>
            <ul>
                <li><b>Высокая производительность</b> благодаря виртуальному DOM.</li>
                <li><b>Простота повторного использования кода</b> за счёт компонентного подхода.</li>
                <li><b>Большое сообщество</b> и множество готовых библиотек для любых задач.</li>
                <li><b>Гибкость</b> — можно использовать с любыми другими библиотеками и фреймворками.</li>
            </ul>

            <h3>Полезные ресурсы</h3>
            <ul>
                <li><a href="https://ru.react.dev/" target="_blank">Официальная документация React</a></li>
                <li><a href="https://learn-reactjs.ru/" target="_blank">learn-reactjs.ru</a></li>
                <li><a href="https://habr.com/ru/hub/reactjs/" target="_blank">Статьи и новости о React на Хабре</a></li>
                <li><a href="https://github.com/facebook/react" target="_blank">Исходный код React на GitHub</a></li>
            </ul>
        `,
        "webpack": `
            <h2>Webpack & Бандлеры</h2>
            <p><b>Webpack</b> — это современный инструмент для сборки и оптимизации модулей JavaScript, а также любых других ресурсов веб-приложений: CSS, изображений, шрифтов, HTML и т.д. Благодаря Webpack можно объединять множество файлов в один или несколько бандлов, которые загружаются браузером максимально эффективно.</p>

            <h3>Зачем нужны бандлеры?</h3>
            <p>Бандлеры, такие как Webpack, позволяют:</p>
            <ul>
                <li>Объединять множество модулей и ресурсов в один или несколько файлов для ускорения загрузки страницы.</li>
                <li>Преобразовывать код (например, из TypeScript в JavaScript, из SASS в CSS).</li>
                <li>Минифицировать и оптимизировать код для уменьшения размера файлов.</li>
                <li>Автоматически обрабатывать зависимости между модулями.</li>
                <li>Внедрять современные инструменты разработки (hot reload, source maps и др.).</li>
            </ul>

            <h3>Основные понятия Webpack</h3>
            <ul>
                <li><b>Entry (точка входа)</b> — основной файл, с которого начинается сборка приложения. Обычно это <code>src/index.js</code> или <code>src/main.js</code>. Webpack анализирует импорты и строит граф зависимостей.</li>
                <li><b>Output (выходной файл)</b> — путь и имя файла, куда сохраняется собранный бандл (например, <code>dist/main.js</code>).</li>
                <li><b>Loaders (загрузчики)</b> — модули, которые преобразуют файлы по мере их импорта. Например, загрузчики для CSS, изображений, TypeScript, SASS и др.</li>
                <li><b>Plugins (плагины)</b> — расширяют функциональность Webpack: минификация, очистка папки с результатом, копирование файлов, генерация HTML и многое другое.</li>
                <li><b>Code splitting (разделение кода)</b> — разделение бандла на части для оптимизации загрузки. Например, можно отдельно загружать код для разных страниц или компонентов.</li>
                <li><b>Mode (режим сборки)</b> — определяет, какие инструменты будут использоваться для сборки (<code>development</code> или <code>production</code>). В режиме production код минифицируется и оптимизируется.</li>
                <li><b>DevServer</b> — встроенный сервер для разработки с hot reload и автоматической перезагрузкой страницы при изменении кода.</li>
            </ul>

            <h3>Как работает Webpack?</h3>
            <p>Webpack анализирует все модули и зависимости, строит граф зависимостей, затем применяет загрузчики и плагины для преобразования и объединения файлов. В результате получается один или несколько оптимизированных бандлов, которые можно использовать в проекте.</p>

            <h3>Популярные альтернативы Webpack</h3>
            <ul>
                <li><b>Parcel</b> — простой и быстрый бандлер без конфигурации</li>
                <li><b>Rollup</b> — идеально подходит для библиотек и небольших проектов</li>
                <li><b>Vite</b> — современный инструмент для быстрой сборки и разработки</li>
            </ul>

            <h3>Полезные ресурсы</h3>
            <ul>
                <li><a href="https://webpack.js.org/concepts/" target="_blank">Официальная документация Webpack</a></li>
                <li><a href="https://habr.com/ru/company/ruvds/blog/336626/" target="_blank">Webpack для начинающих (Хабр)</a></li>
                <li><a href="https://skillbox.ru/media/code/osnovy-webpack-samyy-podrobnyy-gayd/" target="_blank">Подробный гайд по Webpack (Skillbox)</a></li>
                <li><a href="https://vc.ru/dev/418917-krupnyi-gaid-po-webpack" target="_blank">Крупный гайд по Webpack (vc.ru)</a></li>
                <li><a href="https://my-js.org/docs/cheatsheet/webpack/" target="_blank">Шпаргалка по Webpack (MyJavaScript)</a></li>
            </ul>
        `,
    "performance": `
            <h2>Оптимизация и производительность</h2>
            <p>Оптимизация фронтенда — это комплекс мер, направленных на ускорение загрузки и работы сайта. Быстрый сайт не только приятнее для пользователей, но и лучше ранжируется в поисковых системах, что положительно влияет на посещаемость и конверсию.</p>

            <h3>Ключевые техники оптимизации</h3>
            <ul>
                <li><b>Lazy loading (отложенная загрузка)</b>
                    <ul>
                        <li>Позволяет загружать изображения, видео и другие ресурсы только тогда, когда они действительно нужны пользователю (например, когда пользователь прокручивает страницу до них).</li>
                        <li>Уменьшает время первоначальной загрузки страницы и экономит трафик.</li>
                        <li>Пример: атрибут <code>loading="lazy"</code> для тега <code>&lt;img&gt;</code>.</li>
                    </ul>
                </li>
                <li><b>Минификация (minification)</b>
                    <ul>
                        <li>Уменьшает размер файлов CSS, JavaScript и HTML за счёт удаления пробелов, комментариев и сокращения имён переменных.</li>
                        <li>Позволяет ускорить загрузку страницы и снизить нагрузку на сервер.</li>
                        <li>Пример: использование плагинов Webpack или Rollup для автоматической минификации.</li>
                    </ul>
                </li>
                <li><b>Кеширование (caching)</b>
                    <ul>
                        <li>Позволяет браузеру хранить копии ресурсов (изображений, стилей, скриптов) и использовать их при повторном посещении сайта.</li>
                        <li>Снижает нагрузку на сервер и ускоряет повторную загрузку страницы.</li>
                        <li>Пример: настройка заголовков <code>Cache-Control</code> и <code>ETag</code> на сервере.</li>
                    </ul>
                </li>
                <li><b>Оптимизация критического пути рендеринга (Critical Rendering Path)</b>
                    <ul>
                        <li>Позволяет браузеру быстрее отображать содержимое страницы, оптимизируя порядок и способ загрузки CSS и JavaScript.</li>
                        <li>Пример: размещение скриптов перед закрывающим тегом <code>&lt;/body&gt;</code>, использование атрибута <code>defer</code> и <code>async</code>.</li>
                    </ul>
                </li>
                <li><b>Оптимизация изображений</b>
                    <ul>
                        <li>Сжатие и преобразование изображений в современные форматы (WebP, AVIF) для уменьшения размера файлов.</li>
                        <li>Пример: использование инструментов типа ImageOptim или онлайн-конвертеров.</li>
                    </ul>
                </li>
                <li><b>Использование CDN (Content Delivery Network)</b>
                    <ul>
                        <li>Позволяет доставлять статические файлы с серверов, расположенных ближе к пользователю.</li>
                        <li>Ускоряет загрузку ресурсов для пользователей из разных регионов.</li>
                    </ul>
                </li>
                <li><b>Инструменты для анализа и оптимизации</b>
                    <ul>
                        <li><b>Chrome DevTools</b> — встроенный инструмент для анализа производительности, сетевых запросов и рендеринга страницы.</li>
                        <li><b>Lighthouse</b> — бесплатный инструмент от Google для аудита производительности, доступности, SEO и лучших практик. Lighthouse предоставляет подробный отчёт с рекомендациями по улучшению сайта[2][5][6].</li>
                        <li><b>PageSpeed Insights</b> — онлайн-сервис для анализа скорости загрузки и рекомендаций по оптимизации.</li>
                    </ul>
                </li>
            </ul>

            <h3>Почему важно оптимизировать сайт?</h3>
            <p>Быстрый сайт — это не только удобство для пользователей, но и важный фактор для SEO и конверсии. Современные пользователи ожидают, что страницы будут загружаться за 2-3 секунды, а поисковые системы учитывают скорость загрузки при ранжировании сайтов[2][5].</p>

            <h3>Полезные ресурсы</h3>
            <ul>
                <li><a href="https://web.dev/fast/" target="_blank">web.dev/fast</a> — руководства по ускорению загрузки сайтов</li>
                <li><a href="https://developers.google.com/web/tools/lighthouse" target="_blank">Google Lighthouse</a> — официальная документация по инструменту Lighthouse</li>
                <li><a href="https://habr.com/ru/companies/htmlacademy/articles/585866/" target="_blank">Lighthouse: руководство по оптимизации сайтов для начинающих</a> — подробный гайд по работе с Lighthouse[1][2][5]</li>
                <li><a href="https://web-standards.ru/articles/web-vitals-lighthouse/" target="_blank">Оптимизация метрик Web Vitals с помощью Lighthouse</a> — разбор метрик производительности и рекомендации по улучшению[3]</li>
            </ul>
        `
  };

  return (
    <main className="materials-main">
      <h1 className="page-title">Учебные материалы по фронтенд-разработке</h1>

      <div className="materials-container">
        <nav className="materials-menu" role="tablist" aria-label="Темы учебных материалов">
          {Object.keys(topics).map(topicId => (
            <button
              key={topicId}
              className={`materials-menu-item ${activeTopic === topicId ? 'active' : ''}`}
              onClick={() => setActiveTopic(topicId)}
              role="tab"
              aria-selected={activeTopic === topicId}
              aria-controls={`topic-${topicId}`}
            >
              {getTopicName(topicId)}
            </button>
          ))}
        </nav>

        <section
          className="materials-content"
          id="materials-content"
          tabIndex="0"
          role="tabpanel"
          aria-labelledby={`tab-${activeTopic}`}
          dangerouslySetInnerHTML={{ __html: topics[activeTopic] }}
        />
      </div>
    </main>
  );
};

const getTopicName = (topicId) => {
  const names = {
    'html-css': 'HTML & CSS',
    'javascript': 'JavaScript',
    'react': 'React',
    'webpack': 'Webpack & Бандлеры',
    'performance': 'Оптимизация и производительность'
  };
  return names[topicId] || topicId;
};

export default MaterialsPage;