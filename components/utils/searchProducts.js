// components/utils/searchProducts.js

import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.js';

export const searchProducts = async (searchTerm) => {
  if (!searchTerm) {
    return [];
  }

  const query = groq`
    *[_type == "product" && (
      name match $searchTerm + "*" ||
      slug.current match $searchTerm + "*" ||
      description match $searchTerm + "*"
    )] {
      _id,
      name, // <-- CORRIGIDO
      "slug": slug.current,
      "imageUrl": images[0].asset->url, // <-- Adicionado para consistência
      price
    }
  `;

  const results = await client.fetch(query, { searchTerm });
  return results;
};

// app/components/utils/getCategories.js

import { groq } from 'next-sanity';
import { client } from '../../lib/sanity';

export const getCategories = async () => {
  const query = groq`
      *[_type == "category"] {
        _id,
        name, // <-- CORRIGIDO
        "slug": slug.current,
        description
      }
    `;
  const categories = await client.fetch(query);
  return categories;
};