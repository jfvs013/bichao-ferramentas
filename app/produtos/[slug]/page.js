// app/produtos/[slug]/page.js

import Link from 'next/link';
import ProductGrid from '@/components/blocks/ProductGrid';
import ProductClient from '@/components/products/ProductClient';
import Button from '@/components/atoms/Button';
import { client } from '@/lib/sanity';

// Query GROQ para buscar um produto por slug
const productQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    ...,
    "imageUrl": mainImage.asset->url,
    "categoryTitle": category->title
  }
`;

// Query GROQ para buscar produtos relacionados por categoria, excluindo o produto atual
const relatedProductsQuery = `
  *[_type == "product" && category->title == $categoryTitle && slug.current != $slug] | order(publishedAt desc) [0...4] {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    price,
    "categoryTitle": category->title
  }
`;

// Função para buscar um produto por slug no Sanity
async function fetchProductBySlug(slug) {
  const product = await client.fetch(productQuery, { slug });
  return product;
}

// Função para buscar produtos relacionados no Sanity
async function fetchRelatedProducts(categoryTitle, currentSlug) {
  if (!categoryTitle) return [];
  const related = await client.fetch(relatedProductsQuery, { categoryTitle, slug: currentSlug });
  return related;
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export default async function ProductPage({ params }) {
  const product = await fetchProductBySlug(params.slug);
  const relatedProducts = product ? await fetchRelatedProducts(product.categoryTitle, params.slug) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-primary-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-black mb-4">Produto não encontrado</h1>
          <Link href="/catalogo">
            <Button variant="primary">Voltar ao Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-primary-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-primary-graphite">
            <Link href="/" className="hover:text-secondary-orange">Início</Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-secondary-orange">Catálogo</Link>
            <span>/</span>
            <Link href={`/catalogo?categoria=${product.categoryTitle.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary-orange">
              {product.categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-primary-black font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal do Produto (Componente de Cliente) */}
      <ProductClient product={product} formatPrice={formatPrice} />

      {/* Seção de Produtos Relacionados */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-primary-black mb-6">
            Produtos <span className="text-secondary-orange">Relacionados</span>
          </h2>
          <ProductGrid
            products={relatedProducts}
            onAddToList={(p) => console.log('Adicionar à lista:', p)}
            onViewDetails={(p) => console.log('Ver detalhes:', p)}
          />
        </div>
      )}
    </div>
  );
}