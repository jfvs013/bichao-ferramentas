// app/page.js

import { client } from '@/lib/sanity'; // Importa o cliente Sanity
import HomeUI from './HomeUI'; // Componente de UI que será criado

// Query GROQ para buscar produtos
const productsQuery = `
  *[_type == "product"] | order(publishedAt desc) {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    price,
    "categoryTitle": category->title
  }
`;

// Query GROQ para buscar categorias
const categoriesQuery = `
  *[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

async function fetchHomeData() {
    const allProducts = await client.fetch(productsQuery);
    const categories = await client.fetch(categoriesQuery);

    const featuredProducts = allProducts.slice(0, 4); // Exemplo de seleção de 4 produtos
    const bestSellers = allProducts.slice(4, 8);      // Exemplo de seleção de 4 mais vendidos

    const adaptedCategories = categories.map(cat => ({
        id: cat._id,
        name: cat.title,
        slug: cat.slug,
        description: cat.description,
    }));

    return { featuredProducts, bestSellers, categories: adaptedCategories };
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