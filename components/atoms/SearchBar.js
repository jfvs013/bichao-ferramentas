// components/atoms/SearchBar.js
'use client';

import { useState } from 'react';
import Input from './Input';

export default function SearchBar({
  placeholder = 'Buscar ferramentas...',
  onSearch,
  className = '',
  onFocus, // Novo prop
  onBlur // Novo prop
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  // Funções para lidar com o foco e o desfoque
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative w-full ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus} // Repassando o onFocus
        onBlur={handleBlur} // Repassando o onBlur
        className="pr-12" // Adiciona espaço para o ícone
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-secondary-orange transition-colors"
      >
        <svg
          className="w-5 h-5"
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
      </button>
    </form>
  );
}