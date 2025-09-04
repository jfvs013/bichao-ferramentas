// app/catalogo/page.js
import CatalogoContent from './CatalogoContent';
import { client } from '@/lib/sanity';
import { allProductsQuery, allCategoriesQuery, allBrandsQuery } from '@/lib/queries';

export const metadata = {
  title: 'Catálogo de Produtos',
  description: 'Explore nosso catálogo completo de ferramentas e equipamentos profissionais.',
};

export default async function CatalogoPage() {
  // 1. Busque os dados no servidor, antes de renderizar
  const [productsData, categoriesData, brandsData] = await Promise.all([
    client.fetch(allProductsQuery),
    client.fetch(allCategoriesQuery),
    client.fetch(allBrandsQuery),
  ]);

  // 2. Passe os dados para o Client Component
  return (
    <CatalogoContent
      initialProducts={productsData || []}
      initialCategories={categoriesData || []}
      initialBrands={brandsData || []}
    />
  );
}