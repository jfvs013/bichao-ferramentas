'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductGrid from '@/components/blocks/ProductGrid';
import Button from '@/components/atoms/Button';

// Nota: Este componente agora espera receber os dados (produtos e categorias)
// como props, em vez de usar dados mockados ou buscar internamente.
// Isso torna o componente mais flexível e reutilizável.
export default function Home({
  featuredProducts = [],
  bestSellers = [],
  categories = []
}) {

  // As funções de manipulação de eventos podem ser mantidas, mas aqui
  // apenas servem como placeholders. Em uma aplicação real, elas
  // executariam lógicas como adicionar ao carrinho ou redirecionar.
  const handleAddToList = (product) => {
    // Lógica para adicionar o produto à lista (ex: carrinho de compras)
    console.log('Adicionar à lista:', product.name);
  };

  const handleViewDetails = (product) => {
    // Lógica para visualizar os detalhes do produto
    console.log('Ver detalhes:', product.name);
  };

  return (
    <div className="min-h-screen bg-primary-black text-white transition-colors duration-500">
      {/* Seção da Logo e Título - Fundo branco e largura total */}
      <section className="w-full bg-primary-white py-12 flex flex-col items-center justify-center">
        <div className="text-center w-full">
          <div className="flex justify-center w-full">
            <Image
              src="/images/logoBichaoFerramentasBG.png"
              alt="Logo Bichão Ferramentas"
              width={300}
              height={150}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-primary-black">
            Ferramentas <span className="text-secondary-orange">Profissionais</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Encontre tudo que precisa para seus projetos com os melhores preços
          </p>
          <Link href="/catalogo">
            <Button className="bg-secondary-orange text-white px-8 py-4 rounded-lg hover:bg-secondary-orange transition-colors">
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </section>

      {/* Seção de Categorias Principais - Fundo cinza escuro */}
      <section className="w-full bg-primary-graphite py-20 text-white transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore Nossas <span className="text-secondary-orange">Categorias</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Encontre exatamente o que precisa para seus projetos
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogo?categoria=${category.slug}`}
              className="group"
            >
              <div className="bg-primary-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform group-hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-[#CFAF5F] to-[#8C7A3E] p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary-orange rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#CFAF5F]">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-primary-black text-sm text-center group-hover:text-[#CFAF5F] transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seção de Produtos Mais Vendidos - Fundo branco */}
      <section className="w-full bg-primary-white py-20 text-primary-black">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Mais <span className="text-secondary-orange">Vendidos</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Seção de Destaques - Fundo cinza escuro */}
      <section className="w-full bg-primary-graphite py-20 transition-colors duration-500 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Por que escolher a <span className="text-secondary-orange">Bichão Ferramentas</span>?
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-secondary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#CFAF5F] mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-300">Trabalhamos apenas com marcas reconhecidas e produtos certificados.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-secondary-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#CFAF5F] mb-2">Melhor Preço</h3>
                  <p className="text-gray-300">Preços competitivos e condições especiais para profissionais.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 bg-secondary-orange rounded-lg flex items-center justify-center flex-shrink-0 border border-[#CFAF5F]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#CFAF5F] mb-2">Entrega Rápida</h3>
                  <p className="text-gray-300">Entregamos em todo o Brasil com agilidade e segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque - Fundo Branco */}
      <section className="w-full bg-primary-white py-20 text-primary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Produtos em <span className="text-[#CFAF5F]">Destaque</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Selecionamos especialmente para você
            </p>
          </div>
          <ProductGrid
            products={featuredProducts}
            onAddToList={handleAddToList}
            onViewDetails={handleViewDetails}
            emptyMessage="Carregando produtos em destaque..."
          />
        </div>
      </section>

      {/* Call to Action Final - Fundo preto, com botões atualizados */}
      <section className="w-full bg-black text-white py-20 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Pronto para começar seu <span className="text-secondary-orange">projeto</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Encontre todas as ferramentas que precisa em um só lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button variant="primary" size="large" className="bg-secondary-orange">
                Ver Catálogo Completo
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="large" className="border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
