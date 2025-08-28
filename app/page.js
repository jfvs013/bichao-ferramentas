'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from '@/components/blocks/Carousel';
import ProductGrid from '@/components/blocks/ProductGrid';
import Button from '@/components/atoms/Button';
import { mockProducts, mockCategories, mockBanners } from '@/lib/mockData';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setFeaturedProducts(mockProducts.slice(0, 4));
    setBestSellers(mockProducts.filter(product => product.discount).slice(0, 6));
  }, []);

  const handleAddToList = (product) => {
    console.log('Adicionar à lista:', product);
  };

  const handleViewDetails = (product) => {
    console.log('Ver detalhes:', product);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white transition-colors duration-500">
      {/* Banner Principal com Carousel */}
      <section className="mb-12">
        <Carousel
          items={mockBanners}
          autoPlay={true}
          interval={5000}
          showDots={true}
          showArrows={true}
        />
      </section>

      {/* Seção de Categorias Principais */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Explore Nossas <span className="text-[#00B894]">Categorias</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Encontre exatamente o que precisa para seus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogo?categoria=${category.slug}`}
              className="group"
            >
              <div className="bg-[#2C2C2C] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform group-hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-[#CFAF5F] to-[#8C7A3E] p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#B3B3B3] text-sm text-center group-hover:text-[#CFAF5F] transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seção de Produtos Mais Vendidos */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Mais <span className="text-[#00B894]">Vendidos</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Os produtos preferidos dos nossos clientes
          </p>
        </div>

        <ProductGrid
          products={bestSellers}
          onAddToList={handleAddToList}
          onViewDetails={handleViewDetails}
          emptyMessage="Carregando produtos..."
        />

        <div className="text-center mt-8">
          <Link href="/catalogo">
            <Button className="bg-[#00B894] text-white px-6 py-3 rounded-lg hover:bg-[#009e7f] transition-colors">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="bg-[#2C2C2C] py-16 mb-16 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Por que escolher a <span className="text-[#00B894]">Bichão Ferramentas</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B894] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Qualidade Garantida</h3>
                    <p className="text-[#B3B3B3]">Trabalhamos apenas com marcas reconhecidas e produtos certificados.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#CFAF5F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Melhor Preço</h3>
                    <p className="text-[#B3B3B3]">Preços competitivos e condições especiais para profissionais.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#121212] rounded-lg flex items-center justify-center flex-shrink-0 border border-[#CFAF5F]">
                    <svg className="w-6 h-6 text-[#CFAF5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Entrega Rápida</h3>
                    <p className="text-[#B3B3B3]">Entregamos em todo o Brasil com agilidade e segurança.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Produtos em <span className="text-[#00B894]">Destaque</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Selecionamos especialmente para você
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          onAddToList={handleAddToList}
          onViewDetails={handleViewDetails}
          emptyMessage="Carregando produtos em destaque..."
        />
      </section>

      {/* Call to Action Final */}
      <section className="bg-[#2C2C2C] text-white py-16 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar seu <span className="text-[#00B894]">projeto</span>?
          </h2>
          <p className="text-xl text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            Encontre todas as ferramentas que precisa em um só lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button className="bg-[#00B894] text-white px-6 py-3 rounded-lg hover:bg-[#009e7f] transition-colors">
                Ver Catálogo Completo
              </Button>
            </Link>
            <Link href="/contato">
              <Button className="border border-[#CFAF5F] text-[#CFAF5F] hover:bg-[#CFAF5F] hover:text-[#121212] px-6 py-3 rounded-lg transition-colors">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
