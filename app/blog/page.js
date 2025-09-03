import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { client } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

// Função para buscar todos os posts do blog no Sanity
async function fetchBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category->{
      title
    }
  }`;
  const posts = await client.fetch(query);
  return posts;
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-black via-primary-graphite to-secondary-orange text-primary-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Nosso <span className="text-secondary-orange">Blog</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Artigos, dicas e novidades sobre o universo das ferramentas.
          </p>
        </div>
      </section>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="bg-primary-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="aspect-video w-full bg-gray-200 relative">
                      {post.mainImage ? (
                        <Image
                          src={urlForImage(post.mainImage).url()}
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
                    <div className="p-6">
                      <span className="bg-gray-200 text-primary-graphite px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                        {post.category?.title}
                      </span>
                      <h2 className="text-xl font-bold text-primary-black mb-2 line-clamp-2 hover:text-secondary-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-primary-graphite text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-primary-graphite">
                        <span>{formatDate(post.publishedAt)}</span>
                        <Button variant="ghost" size="small" asChild>
                          <Link href={`/blog/${post.slug.current}`}>
                            Ler Mais
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Link>
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