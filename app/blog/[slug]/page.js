// app/blog/[slug]/page.js

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { mockBlogPosts } from '@/lib/mockData';

// Funções de busca de dados assíncronas
async function fetchBlogPostBySlug(slug) {
  // Simulação de busca no banco de dados
  const post = mockBlogPosts.find(p => p.slug === slug) || null;
  return post;
}

async function fetchRelatedPosts(category, currentPostId) {
  // Simulação de busca por posts relacionados
  const related = mockBlogPosts
    .filter(p => p.id !== currentPostId && p.category === category)
    .slice(0, 3);
  return related;
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default async function BlogPostPage({ params }) {
  const post = await fetchBlogPostBySlug(params.slug);
  const relatedPosts = post ? await fetchRelatedPosts(post.category, post.id) : [];

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

          {/* Navegação entre Posts */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <Link href="/blog" className="flex items-center space-x-2 text-secondary-orange hover:text-accent-green transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Voltar ao Blog</span>
            </Link>
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
                  <Link href={`/blog/${relatedPost.slug}`}>
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
                      <Button variant="ghost" size="small" asChild>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Ler Artigo
                        </Link>
                      </Button>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}