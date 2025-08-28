// app/blog/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/atoms/SearchBar';
import Button from '@/components/atoms/Button';
import { mockBlogPosts } from '@/lib/mockData';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-black mb-4">
              Nosso <span className="text-secondary-orange">Blog</span>
            </h1>
            <p className="text-lg text-primary-graphite max-w-2xl mx-auto">
              Artigos, dicas e novidades sobre o universo das ferramentas.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <SearchBar
              placeholder="Buscar artigos..."
              onSearch={setSearchTerm}
            />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-primary-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video w-full bg-gray-200 relative">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-orange to-accent-green text-primary-white">
                          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="bg-gray-200 text-primary-graphite px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-primary-black mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-secondary-orange transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-primary-graphite text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-primary-graphite">
                      <span>{formatDate(post.publishedAt)}</span>
                      <Button variant="ghost" size="small">
                        <Link href={`/blog/${post.slug}`}>
                          Ler Mais
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-primary-graphite py-16">
              <p>Nenhum artigo encontrado.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}