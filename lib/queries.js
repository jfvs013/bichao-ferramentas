// lib/queries.js
import { groq } from 'next-sanity';

// Query para buscar todos os produtos
// Popula as referências para ter acesso a nome da categoria e marca
export const allProductsQuery = groq`
  *[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    "category": category->{
      name,
      "slug": slug.current
    },
    "brand": brand->{
      name,
      "slug": slug.current
    },
    price,
    discountPrice,
    bestSeller,
    featured,
    images,
    description,
  }
`;

// Query para buscar todas as categorias
export const allCategoriesQuery = groq`
  *[_type == "category"] {
    _id,
    name,
    "slug": slug.current,
    icon
  }
`;

// Query para buscar todas as marcas
export const allBrandsQuery = groq`
  *[_type == "brand"] {
    _id,
    name,
    "slug": slug.current,
    logo
  }
`;