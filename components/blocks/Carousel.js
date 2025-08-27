'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';

export default function Carousel({ 
  items = [], 
  autoPlay = true, 
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  if (!items || items.length === 0) {
    return (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center h-64 ${className}`}>
        <p className="text-gray-500">Nenhum item para exibir</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {item.type === 'image' ? (
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt || `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay com conteúdo */}
                {(item.title || item.description || item.button) && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-primary-white p-6 max-w-2xl">
                      {item.title && (
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                          {item.title}
                        </h2>
                      )}
                      {item.description && (
                        <p className="text-lg md:text-xl mb-6">
                          {item.description}
                        </p>
                      )}
                      {item.button && (
                        <Button
                          variant={item.button.variant || 'primary'}
                          size="large"
                          onClick={item.button.onClick}
                        >
                          {item.button.text}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-r from-secondary-orange to-accent-green flex items-center justify-center">
                <div className="text-center text-primary-white p-6 max-w-2xl">
                  {item.title && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      {item.title}
                    </h2>
                  )}
                  {item.description && (
                    <p className="text-lg md:text-xl mb-6">
                      {item.description}
                    </p>
                  )}
                  {item.button && (
                    <Button
                      variant={item.button.variant || 'secondary'}
                      size="large"
                      onClick={item.button.onClick}
                    >
                      {item.button.text}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Setas de Navegação */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-white bg-opacity-80 hover:bg-opacity-100 text-primary-black p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-white bg-opacity-80 hover:bg-opacity-100 text-primary-black p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores (Dots) */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-secondary-orange' 
                  : 'bg-primary-white bg-opacity-50 hover:bg-opacity-80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

