// app/blog/page.js
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { client } from '@/lib/sanity';

// Importe a função urlForImage para lidar com URLs de imagens do Sanity
import { urlForImage } from '@/lib/sanity';

// Query GROQ para buscar posts de blog
const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "excerpt": excerpt,
    "categoryTitle": categories[0]->title,
    publishedAt
  }
`;

// Função para buscar os posts no Sanity
async function fetchBlogPosts() {
  const posts = await client.fetch(postsQuery);
  return posts;
}

// Formatar a data para exibição
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Exportações de metadata e viewport corrigidas
export const metadata = {
  title: 'Blog Bichão Ferramentas',
  description: 'Leia os últimos artigos sobre ferramentas, projetos e dicas profissionais no blog Bichão Ferramentas.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da Página de Blog */}
      <section className="w-full bg-primary-white py-12 text-primary-black border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="text-secondary-orange">Blog</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Últimas notícias, guias e dicas para seus projetos e ferramentas.
          </p>
        </div>
      </section>

      {/* Grid de Posts do Blog */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.imageUrl ? (
                      <div className="aspect-video">
                        <Image
                          src={urlForImage(post.imageUrl).url()}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-video bg-gradient-to-br from-secondary-orange to-accent-green flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-gray-200 text-primary-graphite px-2 py-1 rounded text-xs font-medium">
                          {post.categoryTitle}
                        </span>
                        <span className="text-primary-graphite text-xs">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-primary-black mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-primary-graphite text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" size="small" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Ler Artigo
                        </Link>
                      </Button>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20">
                <p className="text-lg text-primary-graphite">Nenhum post de blog encontrado.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}