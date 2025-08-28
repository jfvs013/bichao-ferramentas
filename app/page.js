// (Home page) /app/page.js
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

// Importa as novas funções para buscar os dados do Sanity.io
import { getFeaturedProducts, getLatestBlogPosts } from '../lib/sanity.client';

export const revalidate = 60; // Revalida a página a cada 60 segundos

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const latestBlogPosts = await getLatestBlogPosts();

  return (
    <div className="bg-white text-[#2C2C2C] font-sans">
      <Header />

      {/* -------------------- Hero -------------------- */}
      <main className="bg-[#F5F5F5] pt-16 pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2C2C2C] tracking-wide leading-tight">
            Ferramentas que <span className="text-[#F7931E]">Constroem Ideias</span>.
          </h1>
          <p className="mt-6 text-lg text-[#555555] max-w-3xl mx-auto">
            Descubra a coleção de ferramentas da Bichão Ferramentas, onde a qualidade
            e a inovação se unem para transformar seus projetos em realidade.
          </p>
          <Link href="/catalogo" className="mt-8 inline-block bg-[#F7931E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#DAA520] transition-all duration-300 transform hover:scale-105">
            Explorar Catálogo
          </Link>
        </div>
      </main>

      {/* -------------------- Seção de Destaques -------------------- */}
      <section className="bg-white py-16 px-4 transition-colors duration-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C2C2C]">Por que escolher a <span className="text-[#DAA520]">Bichão Ferramentas</span>?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-xl shadow-lg bg-[#F5F5F5] hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-[#F7931E] text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Qualidade Garantida</h3>
              <p className="mt-2 text-[#555555]">Trabalhamos apenas com as melhores marcas do mercado.</p>
            </div>
            <div className="p-8 rounded-xl shadow-lg bg-[#F5F5F5] hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-[#00B894] text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Melhor Preço</h3>
              <p className="mt-2 text-[#555555]">Preços competitivos para profissionais e entusiastas.</p>
            </div>
            <div className="p-8 rounded-xl shadow-lg bg-[#F5F5F5] hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-[#DAA520] text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Entrega Rápida</h3>
              <p className="mt-2 text-[#555555]">Receba seus produtos com agilidade em todo o país.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Produtos em Destaque -------------------- */}
      <section className="bg-[#F5F5F5] py-16 px-4 transition-colors duration-500">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#2C2C2C] text-center">Produtos em <span className="text-[#F7931E]">Destaque</span></h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link href={`/produtos/${product.slug}`} key={product._id} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={product.imagemUrl}
                  alt={product.nome}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#2C2C2C]">{product.nome}</h3>
                <p className="text-[#777777] mt-2">R$ {product.preco.toFixed(2).replace('.', ',')}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/catalogo" className="inline-block bg-[#2C2C2C] text-white font-bold py-3 px-8 rounded-full hover:bg-[#00B894] transition-all duration-300 transform hover:scale-105">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- Call to Action -------------------- */}
      <section className="bg-white py-16 px-4 text-center text-[#2C2C2C] transition-colors duration-500">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Pronto para <span className="text-[#F7931E]">Construir</span>?</h2>
          <p className="mt-4 max-w-xl mx-auto">
            Explore nossa coleção e encontre as ferramentas certas para o seu próximo grande projeto.
          </p>
          <Link href="/catalogo" className="mt-6 inline-block bg-[#F7931E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#DAA520] transition-all duration-300 transform hover:scale-105">
            Visitar Catálogo
          </Link>
        </div>
      </section>

      {/* -------------------- Artigos de Blog (Dicas de Ferramentas) -------------------- */}
      <section className="bg-[#F5F5F5] py-16 px-4 transition-colors duration-500">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#2C2C2C] text-center">Dicas de Ferramentas</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogPosts.map((post) => (
              <div key={post._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={post.mainImageUrl}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-[#2C2C2C]">{post.title}</h3>
                <p className="text-[#777777] mt-2">
                  Publicado em: {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="px-8 py-3 bg-[#2C2C2C] text-white rounded-full font-bold hover:bg-[#00B894] transition-all duration-300">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
