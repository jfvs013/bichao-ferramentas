'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Componentes mock para tornar o código autônomo e funcional
const Carousel = ({ items, autoPlay, interval, showDots, showArrows }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-center">
              <div className="max-w-3xl text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg md:text-xl">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${current === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}
      {showArrows && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + items.length) % items.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % items.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

const ProductGrid = ({ products, onAddToList, onViewDetails, emptyMessage }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-400">{emptyMessage}</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            {product.discount && (
              <span className="absolute top-2 right-2 bg-[#FF8C00] text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            )}
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{product.category}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-white text-xl font-bold">R${product.price.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={() => onAddToList(product)} variant="primary" size="small">
                Adicionar à Lista
              </Button>
              <Button onClick={() => onViewDetails(product)} variant="outline" size="small">
                Ver Detalhes
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Button = ({ children, onClick, variant, size, className = '' }) => {
  const baseClasses = 'font-bold rounded-full transition-colors duration-300';
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  const variantClasses = {
    primary: 'bg-[#D4AF37] text-white hover:bg-[#FF8C00]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Dados mock para tornar o código autônomo e funcional
const mockProducts = [
  { id: 1, name: "Martelo de Garra", description: "Ideal para carpintaria.", price: 49.90, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Martelo", category: "Ferramentas Manuais", discount: 10 },
  { id: 2, name: "Chave de Fenda Philips", description: "Para parafusos de cabeça cruzada.", price: 15.50, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Chave+de+Fenda", category: "Ferramentas Manuais" },
  { id: 3, name: "Furadeira de Impacto", description: "Potência e precisão para qualquer material.", price: 299.90, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Furadeira", category: "Ferramentas Elétricas", discount: 15 },
  { id: 4, name: "Serra Circular", description: "Cortes rápidos e precisos.", price: 549.90, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Serra", category: "Ferramentas Elétricas" },
  { id: 5, name: "Conjunto de Chaves Allen", description: "Conjunto completo para montagem de móveis.", price: 79.90, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Chaves+Allen", category: "Ferramentas Manuais", discount: 5 },
  { id: 6, name: "Esmerilhadeira Angular", description: "Para cortes e desbastes em metal.", price: 349.00, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Esmerilhadeira", category: "Ferramentas Elétricas" },
  { id: 7, name: "Nível a Laser", description: "Projeção de linha horizontal e vertical.", price: 189.90, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Nível+a+Laser", category: "Medição", discount: 20 },
  { id: 8, name: "Trena Digital", description: "Medições precisas com apenas um clique.", price: 120.00, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Trena+Digital", category: "Medição" },
  { id: 9, name: "Kit de Brocas", description: "Brocas para madeira, metal e concreto.", price: 65.00, imageUrl: "https://placehold.co/400x300/1B263B/E0E1DD?text=Kit+de+Brocas", category: "Acessórios" },
];

const mockCategories = [
  { id: 1, name: "Ferramentas Manuais", slug: "ferramentas-manuais", description: "Tudo para o seu trabalho manual.", icon: "wrench" },
  { id: 2, name: "Ferramentas Elétricas", slug: "ferramentas-eletricas", description: "Potência e tecnologia para a sua obra.", icon: "bolt" },
  { id: 3, name: "Medição", slug: "medicao", description: "Precisão para cada milímetro.", icon: "ruler" },
  { id: 4, name: "Organização", slug: "organizacao", description: "Mantenha tudo no seu devido lugar.", icon: "box" },
];

const mockBanners = [
  { id: 1, title: "Super Promoção de Ferramentas", description: "Até 50% de desconto em itens selecionados!", imageUrl: "https://placehold.co/1200x600/1B263B/E0E1DD?text=Banner+1" },
  { id: 2, title: "Frete Grátis acima de R$199", description: "Aproveite para renovar seu kit de ferramentas sem pagar nada pelo frete.", imageUrl: "https://placehold.co/1200x600/1B263B/E0E1DD?text=Banner+2" },
  { id: 3, title: "Novidades da Semana", description: "Confira os últimos lançamentos de grandes marcas.", imageUrl: "https://placehold.co/1200x600/1B263B/E0E1DD?text=Banner+3" },
];

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
    <div className="min-h-screen bg-[#1A1A1A] text-white">
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
                <div className="aspect-square bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-8 flex items-center justify-center">
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
                  <p className="text-gray-300 text-sm text-center group-hover:text-[#D4AF37] transition-colors">
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            <Button variant="outline" size="large">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="bg-[#2C2C2C] py-16 mb-16">
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
                    <p className="text-gray-300">Trabalhamos apenas com marcas reconhecidas e produtos certificados.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Melhor Preço</h3>
                    <p className="text-gray-300">Preços competitivos e condições especiais para profissionais.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Entrega Rápida</h3>
                    <p className="text-gray-300">Entregamos em todo o Brasil com agilidade e segurança.</p>
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
      <section className="bg-[#2C2C2C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar seu <span className="text-[#00B894]">projeto</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Encontre todas as ferramentas que precisa em um só lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button variant="primary" size="large">
                Ver Catálogo Completo
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="large" className="border-[#00B894] text-[#00B894] hover:bg-[#00B894] hover:text-[#1A1A1A]">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}