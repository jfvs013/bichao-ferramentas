import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

// Query GROQ para buscar um post de blog por slug
const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "authorName": author->name,
    "categoryTitle": categories[0]->title,
    "imageUrl": mainImage.asset->url
  }
`;

// Query GROQ para buscar posts relacionados por categoria, excluindo o post atual
const relatedPostsQuery = `
  *[_type == "post" && slug.current != $slug && $categoryTitle in categories[]->title] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "excerpt": excerpt,
    "categoryTitle": categories[0]->title,
    publishedAt
  }
`;

// Função para buscar um post por slug no Sanity
async function fetchBlogPostBySlug(slug) {
  const post = await client.fetch(postQuery, { slug });
  return post;
}

// Função para buscar posts relacionados no Sanity
async function fetchRelatedPosts(categoryTitle, currentSlug) {
  if (!categoryTitle) return [];
  const related = await client.fetch(relatedPostsQuery, { categoryTitle, slug: currentSlug });
  return related;
}

// Formatar a data
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Componente para renderizar o conteúdo portátil
const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={value.asset.url}
        alt={value.alt || 'Imagem do post'}
        width={800}
        height={450}
        className="my-8 rounded-lg"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-4 leading-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-3 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-2 leading-tight">{children}</h3>,
    normal: ({ children }) => <p className="text-primary-graphite leading-relaxed mb-4 text-base md:text-lg">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-secondary-orange pl-4 italic my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 pl-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-4 pl-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-primary-graphite">{children}</li>,
    number: ({ children }) => <li className="text-primary-graphite">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-secondary-orange hover:underline transition-colors">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

export default async function BlogPostPage({ params }) {
  const post = await fetchBlogPostBySlug(params.slug);

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

  const relatedPosts = await fetchRelatedPosts(post.categoryTitle, post.slug.current);

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
                {post.categoryTitle}
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
                  {post.authorName?.split(' ').map(n => n[0]).join('')}
                </div>
                <span>Por <strong>{post.authorName}</strong></span>
              </div>
              <span>•</span>
              <span>{Math.ceil((post.body.length || 0) / 1000) || 5} min de leitura</span>
            </div>
          </header>

          {/* Imagem Principal */}
          {post.imageUrl && (
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-12">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Conteúdo do Post */}
          <div className="prose prose-lg max-w-none mb-12">
            <PortableText
              value={post.body}
              components={PortableTextComponent}
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
                <article key={relatedPost._id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="aspect-video bg-gray-200">
                      {relatedPost.imageUrl ? (
                        <Image
                          src={relatedPost.imageUrl}
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
                          {relatedPost.categoryTitle}
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
