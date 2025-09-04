// app/catalogo/page.js
import { Suspense } from 'react';
import { client } from '@/lib/sanity';
import { allProductsQuery, allCategoriesQuery, allBrandsQuery } from '@/lib/queries';
import ProductClient from './ProductClient';

export const metadata = {
  title: 'Catálogo de Produtos',
  description: 'Explore nosso catálogo completo de ferramentas e equipamentos profissionais.',
};

export default async function CatalogoPage() {
  const [productsData, categoriesData, brandsData] = await Promise.all([
    client.fetch(allProductsQuery),
    client.fetch(allCategoriesQuery),
    client.fetch(allBrandsQuery),
  ]);

  return (
    <Suspense fallback={<div>Carregando catálogo...</div>}>
      <ProductClient
        initialProducts={productsData || []}
        initialCategories={categoriesData || []}
        initialBrands={brandsData || []}
      />
    </Suspense>
  );
}