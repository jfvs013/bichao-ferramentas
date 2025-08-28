'use client';

import { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input'; // Importação do componente Input

export default function FilterSidebar({
  filters = {},
  onFiltersChange,
  onClearFilters,
  className = ''
}) {
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    brand: [],
    priceRange: { min: '', max: '' },
    inStock: false
  });

  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    'Ferramentas Manuais',
  ];

  const brands = [
    'Bosch',
    'Makita',
    'DeWalt',
    'Black & Decker',
    'Stanley',
    'Vonder',
    'Tramontina',
    'Irwin'
  ];

  const handleCategoryChange = (category) => {
    const newCategories = activeFilters.category.includes(category)
      ? activeFilters.category.filter(c => c !== category)
      : [...activeFilters.category, category];

    const newFilters = { ...activeFilters, category: newCategories };
    setActiveFilters(newFilters);

    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleBrandChange = (brand) => {
    const newBrands = activeFilters.brand.includes(brand)
      ? activeFilters.brand.filter(b => b !== brand)
      : [...activeFilters.brand, brand];

    const newFilters = { ...activeFilters, brand: newBrands };
    setActiveFilters(newFilters);

    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handlePriceChange = (field, value) => {
    const newPriceRange = { ...activeFilters.priceRange, [field]: value };
    const newFilters = { ...activeFilters, priceRange: newPriceRange };
    setActiveFilters(newFilters);

    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleStockChange = () => {
    const newFilters = { ...activeFilters, inStock: !activeFilters.inStock };
    setActiveFilters(newFilters);

    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: [],
      brand: [],
      priceRange: { min: '', max: '' },
      inStock: false
    };
    setActiveFilters(clearedFilters);

    if (onClearFilters) {
      onClearFilters();
    }
    if (onFiltersChange) {
      onFiltersChange(clearedFilters);
    }
  };

  const hasActiveFilters =
    activeFilters.category.length > 0 ||
    activeFilters.brand.length > 0 ||
    activeFilters.priceRange.min ||
    activeFilters.priceRange.max ||
    activeFilters.inStock;

  return (
    <>
      {/* Botão Mobile para abrir filtros */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          Filtros {hasActiveFilters && `(${activeFilters.category.length + activeFilters.brand.length + (activeFilters.inStock ? 1 : 0)})`}
        </Button>
      </div>

      {/* Sidebar de Filtros */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-primary-white rounded-lg shadow-md p-6 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-primary-black">Filtros</h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="small"
              onClick={clearAllFilters}
            >
              Limpar
            </Button>
          )}
        </div>

        {/* Filtro por Categoria */}
        <div className="mb-6">
          <h4 className="font-medium text-primary-black mb-3">Categoria</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2 text-secondary-orange focus:ring-secondary-orange"
                />
                <span className="text-sm text-primary-graphite hover:text-primary-black">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por Marca */}
        <div className="mb-6">
          <h4 className="font-medium text-primary-black mb-3">Marca</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.brand.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2 text-secondary-orange focus:ring-secondary-orange"
                />
                <span className="text-sm text-primary-graphite hover:text-primary-black">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por Preço */}
        <div className="mb-6">
          <h4 className="font-medium text-primary-black mb-3">Faixa de Preço</h4>
          <div className="flex gap-2">
            {/* Uso do componente Input para o campo de preço mínimo */}
            <Input
              type="number"
              placeholder="Min"
              value={activeFilters.priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="flex-1"
            />
            {/* Uso do componente Input para o campo de preço máximo */}
            <Input
              type="number"
              placeholder="Max"
              value={activeFilters.priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="flex-1"
            />
          </div>
        </div>

        {/* Filtro por Disponibilidade */}
        <div className="mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={activeFilters.inStock}
              onChange={handleStockChange}
              className="mr-2 text-secondary-orange focus:ring-secondary-orange"
            />
            <span className="text-sm text-primary-graphite">
              Apenas produtos em estoque
            </span>
          </label>
        </div>

        {/* Botão Mobile para fechar */}
        <div className="lg:hidden">
          <Button
            variant="primary"
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            Aplicar Filtros
          </Button>
        </div>
      </div>
    </>
  );
}
