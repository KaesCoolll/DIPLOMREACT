import React, { useState, useEffect } from 'react';
import banner1 from '../assets/img/13264.jpg';
import banner2 from '../assets/img/6963.jpg';
import banner3 from '../assets/img/6943.jpg';

function BannerSlider() {
  const banners = [
    { id: 0, img: banner1, caption: 'Решай тесты' },
    { id: 1, img: banner2, caption: 'Развивайся' },
    { id: 2, img: banner3, caption: 'Читай материалы' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextBanner, 10000);
    return () => clearInterval(interval);
  }, [nextBanner]);

  return (
    <div className="banner-slider">
      <button className="arrow arrow-left" onClick={prevBanner}>&#9664;</button>
      
      {banners.map((banner, index) => (
        <div 
          key={banner.id} 
          className={`banner ${index === currentIndex ? '' : 'hidden'}`}
        >
          <img src={banner.img} alt={banner.caption} className="banner-img" />
          <div className="banner-caption">{banner.caption}</div>
        </div>
      ))}
      
      <button className="arrow arrow-right" onClick={nextBanner}>&#9654;</button>
    </div>
  );
}

export default BannerSlider;