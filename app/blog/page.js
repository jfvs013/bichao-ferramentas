'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import SearchBar from '@/components/atoms/SearchBar';
import { mockBlogPosts } from '@/lib/mockData';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Todas as Categorias' },
    { value: 'Guias de Compra', label: 'Guias de Compra' },
    { value: 'Segurança', label: 'Segurança' },
    { value: 'Manutenção', label: 'Manutenção' },
    { value: 'Dicas', label: 'Dicas e Tutoriais' }
  ];

  useEffect(() => {
    // Simular carregamento de posts
    setTimeout(() => {
      setPosts(mockBlogPosts);
      setFilteredPosts(mockBlogPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterPosts(term, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (searchTerm, category) => {
    let filtered = [...posts];

    // Filtro por categoria
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }

    // Filtro por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-orange to-accent-green text-primary-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Blog <span className="text-secondary-gold">Bichão Ferramentas</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Dicas, tutoriais e novidades do mundo das ferramentas. 
            Aprenda com nossos especialistas e aprimore seus projetos.
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="bg-primary-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Busca */}
            <div className="flex-1 max-w-md">
              <SearchBar 
                placeholder="Buscar posts..."
                onSearch={handleSearch}
                size="medium"
              />
            </div>

            {/* Filtro por Categoria */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-secondary-orange text-primary-white'
                      : 'bg-gray-100 text-primary-graphite hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-orange mx-auto mb-4"></div>
            <p className="text-primary-graphite">Carregando posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-primary-black mb-2">Nenhum post encontrado</h3>
            <p className="text-primary-graphite">
              {searchTerm 
                ? `Nenhum resultado para "${searchTerm}"`
                : "Nenhum post encontrado com os filtros aplicados"
              }
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Post em Destaque */}
            {featuredPost && (
              <div className="bg-primary-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-square bg-gray-200">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-orange to-accent-green text-primary-white">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-secondary-orange text-primary-white px-3 py-1 rounded-full text-sm font-medium">
                        Destaque
                      </span>
                      <span className="text-primary-graphite text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary-black mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-primary-graphite mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-primary-graphite">
                        <span>Por {featuredPost.author}</span>
                        <span>•</span>
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button variant="primary">
                          Ler Mais
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Lista de Posts */}
            {regularPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary-black mb-8">
                  Mais <span className="text-secondary-orange">Artigos</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-primary-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gray-200">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-orange to-accent-green text-primary-white">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-gray-100 text-primary-graphite px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-primary-graphite text-xs">
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-primary-black mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-primary-graphite text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary-graphite">
                            Por {post.author}
                          </span>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="small">
                              Ler Mais
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-primary-black text-primary-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não perca nenhuma <span className="text-secondary-orange">novidade</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e receba os melhores conteúdos sobre ferramentas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-primary-black focus:outline-none focus:ring-2 focus:ring-secondary-orange"
            />
            <Button variant="primary" size="medium">
              Cadastrar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

