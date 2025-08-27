'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { mockBlogPosts } from '@/lib/mockData';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular busca do post pelo slug
    setTimeout(() => {
      // Para demonstração, vamos usar o primeiro post
      const foundPost = mockBlogPosts[0];
      setPost(foundPost);
      
      // Posts relacionados da mesma categoria
      const related = mockBlogPosts
        .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
      
      setLoading(false);
    }, 1000);
  }, [params.slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-orange mx-auto mb-4"></div>
          <p className="text-primary-graphite">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-black mb-4">Post não encontrado</h1>
          <Link href="/blog">
            <Button variant="primary">Voltar ao Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Conteúdo expandido do post para demonstração
  const fullContent = `
    <p>Este é um exemplo de conteúdo completo do post sobre ${post.title.toLowerCase()}. O conteúdo seria carregado dinamicamente do backend em uma implementação real.</p>
    
    <h2>Introdução</h2>
    <p>Neste artigo, vamos abordar os principais aspectos que você precisa conhecer sobre este tópico. Nossa equipe de especialistas preparou um guia completo para ajudar você a tomar as melhores decisões.</p>
    
    <h2>Principais Características</h2>
    <p>Quando se trata de escolher a ferramenta ideal, alguns fatores são fundamentais:</p>
    <ul>
      <li>Qualidade dos materiais utilizados</li>
      <li>Durabilidade e resistência</li>
      <li>Facilidade de uso e ergonomia</li>
      <li>Custo-benefício</li>
      <li>Disponibilidade de peças de reposição</li>
    </ul>
    
    <h2>Dicas Importantes</h2>
    <p>Nossa experiência de mais de 10 anos no mercado nos permite compartilhar algumas dicas valiosas:</p>
    <ol>
      <li>Sempre verifique a procedência do produto</li>
      <li>Leia atentamente o manual de instruções</li>
      <li>Mantenha suas ferramentas sempre limpas e organizadas</li>
      <li>Invista em equipamentos de proteção individual</li>
      <li>Faça manutenção preventiva regularmente</li>
    </ol>
    
    <h2>Conclusão</h2>
    <p>Esperamos que este artigo tenha sido útil para esclarecer suas dúvidas. Se você tiver alguma pergunta específica, não hesite em entrar em contato conosco através dos nossos canais de atendimento.</p>
    
    <p>Continue acompanhando nosso blog para mais dicas e novidades do mundo das ferramentas!</p>
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-primary-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-primary-graphite">
            <Link href="/" className="hover:text-secondary-orange">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-secondary-orange">Blog</Link>
            <span>/</span>
            <span className="text-primary-black font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header do Post */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-secondary-orange text-primary-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-primary-graphite text-sm">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-primary-graphite mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-primary-graphite">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary-orange rounded-full flex items-center justify-center text-primary-white font-semibold text-xs">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <span>Por <strong>{post.author}</strong></span>
              </div>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </header>

          {/* Imagem Principal */}
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-12">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-orange to-accent-green text-primary-white">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            )}
          </div>

          {/* Conteúdo do Post */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-primary-graphite leading-relaxed"
              dangerouslySetInnerHTML={{ __html: fullContent }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
          </div>

          {/* Compartilhamento */}
          <div className="bg-primary-white rounded-lg shadow-md p-6 mb-12">
            <h3 className="text-lg font-semibold text-primary-black mb-4">
              Compartilhe este artigo
            </h3>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span>Twitter</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Navegação entre Posts */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <Link href="/blog" className="flex items-center space-x-2 text-secondary-orange hover:text-accent-green transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Voltar ao Blog</span>
            </Link>
            
            <div className="flex space-x-4">
              <Button variant="outline" size="small">
                ← Post Anterior
              </Button>
              <Button variant="outline" size="small">
                Próximo Post →
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="bg-primary-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary-black mb-8 text-center">
              Artigos <span className="text-secondary-orange">Relacionados</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    {relatedPost.image ? (
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
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
                      <span className="bg-gray-200 text-primary-graphite px-2 py-1 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-primary-graphite text-xs">
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-black mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-primary-graphite text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button variant="ghost" size="small">
                        Ler Artigo
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

