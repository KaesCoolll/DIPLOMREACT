import React from 'react';
import itImage from '../assets/img/IT.png';
import mozgiImage from '../assets/img/Mozgi.png';
import tendendImage from '../assets/img/Tendend.png';

function MainContent() {
  const items = [
    {
      img: itImage,
      title: 'ІТ Специалистам',
      text: 'Выпускникам университетов, которые планируют работать в IT-сфере, создавая программное обеспечение, и хотят соответствовать уровню ведущих компаний.'
    },
    {
      img: mozgiImage,
      title: 'Образовательным учереждениям',
      text: 'При подготовке IT-специалистов FrontTest позволяет оценивать степень освоения студентами определённых технологий.'
    },
    {
      img: tendendImage,
      title: 'Компаниям',
      text: 'Тесты по ключевым технологиям, показывающие высокие результаты, - это основа для быстрого отбора лучших претендентов на позиции в IT-сфере, что делает работу рекрутеров более результативной.'
    }
  ];

  return (
    <main className="main">
      <div className="image-row">
        {items.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item.img} alt={item.title} />
            <p className="caption"><strong>{item.title}</strong></p>
            <p className="caption-text">{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;