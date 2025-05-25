import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'Почему FrontTest - лучший выбор для проверки знаний?',
      answer: 'FrontTest предлагает актуальные тесты, которые помогают оценить свои навыки и подготовиться к реальным задачам в IT-сфере.'
    },
    {
      question: 'Как FrontTest помогает развивайся?',
      answer: 'Наш ресурс позволяет решать тесты снова и снова, запоминая прошлый результат, можно усовершенствовать свои уже имеющиеся навыки.'
    },
    {
      question: 'Какие преимущества наших материалов?',
      answer: 'На FrontTest собраны знания из лучших источников, больше не придется искать информацию по разным сайтам часами.'
    },
    {
      question: 'Что делает FrontTest уникальным?',
      answer: 'Уникальная комбинация тестов, учебных материалов и советов, а также удобный интерфейс делают FrontTest эффективным инструментом для развития и оценки навыков.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {faqItems.map((item, index) => (
        <div key={index} className={`accordion ${activeIndex === index ? 'active' : ''}`}>
          <button 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </button>
          <div className="accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;