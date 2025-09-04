'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '../atoms/SearchBar';
import Button from '../atoms/Button';
import { searchProducts } from '../utils/searchProducts';
import { getCategories } from '../utils/getCategories'; // Importe a nova função

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [categories, setCategories] = useState([]); // Novo estado para as categorias

  // Busca as categorias quando o componente é carregado
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    fetchCategories();
  }, []); // Array de dependências vazio para rodar apenas uma vez

  const navigationLinks = [
    { href: '/', label: 'Início' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' }
  ];

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const results = await searchProducts(searchTerm);
    setSearchResults(results);
    setShowResults(true);
  };

  const handleLinkClick = () => {
    setShowResults(false);
    setIsMenuOpen(false);
  };

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  return (
    <header className="bg-primary-white shadow-md sticky top-0 z-40">
      <div className="bg-primary-black text-primary-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 (11) 99999-9999</span>
              <span>✉️ contato@bichaoferramentas.com.br</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Frete grátis acima de R$ 200</span>
              <span>|</span>
              <span>Entrega em todo Brasil</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image
              src="/images/logoBichaoFerramentasBG.png"
              alt="Logo Bichão Ferramentas"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-primary-black">
                Bichão <span className="text-secondary-orange">Ferramentas</span>
              </h1>
              <p className="text-xs text-primary-graphite">Sua loja de ferramentas</p>
            </div>
          </Link>

          <div className="hidden lg:block flex-1 max-w-2xl mx-8 relative">
            <SearchBar
              placeholder="Buscar ferramentas, equipamentos..."
              onSearch={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {showResults && searchResults.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
                {searchResults.map((product) => (
                  <li key={product._id} className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link href={`/produtos/${product.slug.current}`} onClick={handleLinkClick}>
                      <div className="flex items-center space-x-3">
                        {product.mainImage?.asset?.url && (
                          <Image
                            src={product.mainImage.asset.url}
                            alt={product.title}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                        )}
                        <span>{product.title}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center space-x-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm">Lista</span>
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg className="w-6 h-6 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:hidden mt-4 relative">
          <SearchBar
            placeholder="Buscar ferramentas..."
            onSearch={handleSearch}
            size="small"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showResults && searchResults.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
              {searchResults.map((product) => (
                <li key={product._id} className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={`/produtos/${product.slug.current}`} onClick={handleLinkClick}>
                    <div className="flex items-center space-x-3">
                      {product.mainImage?.asset?.url && (
                        <Image
                          src={product.mainImage.asset.url}
                          alt={product.title}
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                      )}
                      <span>{product.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <nav className="hidden lg:block bg-primary-graphite">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-white hover:text-secondary-orange transition-colors font-medium"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            {/* Dropdown de categorias */}
            <div className="relative group">
              <button className="text-primary-white hover:text-secondary-orange transition-colors font-medium flex items-center">
                Categorias
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 bg-primary-white shadow-lg rounded-md py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/catalogo?categoria=${category.slug.current}`}
                    className="block px-4 py-2 text-primary-graphite hover:bg-gray-100 hover:text-secondary-orange"
                    onClick={handleLinkClick}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden bg-primary-white border-t">
        {isMenuOpen && (
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-graphite hover:text-secondary-orange transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
              {/* Dropdown de categorias no mobile */}
              <div className="pt-4 border-t space-y-2">
                <h4 className="font-semibold text-primary-graphite mb-2">Categorias</h4>
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/catalogo?categoria=${category.slug.current}`}
                    className="block px-4 py-2 text-primary-graphite hover:bg-gray-100 hover:text-secondary-orange"
                    onClick={handleLinkClick}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Minha Lista
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
