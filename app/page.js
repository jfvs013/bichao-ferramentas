// app/page.js

import { client } from '@/lib/sanity';
import HomeUI from './HomeUI';

// Query GROQ para buscar produtos.
// A query foi corrigida para usar os campos 'images' e 'name'.
const productsQuery = `
  *[_type == "product"] | order(publishedAt desc) {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url, // Busca a URL da primeira imagem no array 'images'.
    price,
    "categoryName": category->name // Busca o campo 'name' da categoria referenciada.
  }
`;

// Query GROQ para buscar categorias.
// A query foi corrigida para usar o campo 'name'.
const categoriesQuery = `
  *[_type == "category"] {
    _id,
    name,
    "slug": slug.current,
    description
  }
`;

async function fetchHomeData() {
  try {
    const allProducts = await client.fetch(productsQuery);
    const categories = await client.fetch(categoriesQuery);

    const featuredProducts = allProducts.slice(0, 4);
    const bestSellers = allProducts.slice(4, 8);

    // O componente HomeUI já espera o campo 'name'.
    const adaptedCategories = categories.map(cat => ({
      id: cat._id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
    }));

    return { featuredProducts, bestSellers, categories: adaptedCategories };
  } catch (error) {
    console.error('Erro ao buscar dados da página inicial:', error);
    return { featuredProducts: [], bestSellers: [], categories: [] };
  }
}

export default async function HomePageServer() {
  const { featuredProducts, bestSellers, categories } = await fetchHomeData();

  return (
    <HomeUI
      featuredProducts={featuredProducts}
      bestSellers={bestSellers}
      categories={categories}
    />
  );
}