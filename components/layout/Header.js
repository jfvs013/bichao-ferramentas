'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '../atoms/SearchBar';
import Button from '../atoms/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Início' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' }
  ];

  const handleSearch = (searchTerm) => {
    // Lógica de busca. Em uma aplicação real, você redirecionaria para a página de busca.
    console.log('Buscar por:', searchTerm);
  };

  return (
    <header className="bg-primary-white shadow-md sticky top-0 z-40">
      {/* Barra Superior */}
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

      {/* Header Principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Substituindo o B por um componente Image */}
            <Image
              src="/images/logoBichaoFerramentasBG.png" // Verifique se o caminho da imagem está correto
              alt="Logo Bichão Ferramentas"
              width={50} // Ajuste o tamanho da logo conforme necessário
              height={50}
              className="rounded-lg" // Mantenha a borda arredondada se desejar
            />
            <div>
              <h1 className="text-xl font-bold text-primary-black">
                Bichão <span className="text-secondary-orange">Ferramentas</span>
              </h1>
              <p className="text-xs text-primary-graphite">Sua loja de ferramentas</p>
            </div>
          </Link>

          {/* Barra de Busca - Desktop */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <SearchBar
              placeholder="Buscar ferramentas, equipamentos..."
              onSearch={handleSearch}
            />
          </div>

          {/* Ações do Header */}
          <div className="flex items-center space-x-4">
            {/* Lista de Desejos */}
            <Button variant="ghost" className="hidden md:flex items-center space-x-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm">Lista</span>
            </Button>

            {/* Menu Mobile */}
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

        {/* Barra de Busca - Mobile */}
        <div className="lg:hidden mt-4">
          <SearchBar
            placeholder="Buscar ferramentas..."
            onSearch={handleSearch}
            size="small"
          />
        </div>
      </div>

      {/* Navegação Principal - Desktop */}
      <nav className="hidden lg:block bg-primary-graphite">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-white hover:text-secondary-orange transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Categorias Dropdown */}
            <div className="relative group">
              <button className="text-primary-white hover:text-secondary-orange transition-colors font-medium flex items-center">
                Categorias
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 bg-primary-white shadow-lg rounded-md py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/catalogo?categoria=ferramentas-manuais" className="block px-4 py-2 text-primary-graphite hover:bg-gray-100 hover:text-secondary-orange">
                  Ferramentas Manuais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-graphite hover:text-secondary-orange transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Ações Mobile */}
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
        </div>
      )}
    </header>
  );
}
