'use client';

import { useState } from 'react';
import Button from './Button';

export default function SearchBar({ 
  placeholder = 'Buscar ferramentas...', 
  onSearch, 
  className = '',
  size = 'medium'
}) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const sizeClasses = {
    small: 'h-8 text-sm',
    medium: 'h-10 text-base',
    large: 'h-12 text-lg'
  };
  
  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="flex-1 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full ${sizeClasses[size]} px-4 border-2 border-primary-graphite rounded-lg focus:outline-none focus:border-secondary-orange transition-colors`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg 
            className="w-5 h-5 text-primary-graphite" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>
      <Button 
        type="submit" 
        variant="primary" 
        size={size}
        className="px-6"
      >
        Buscar
      </Button>
    </form>
  );
}

