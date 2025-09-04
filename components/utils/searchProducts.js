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
      name,
      "slug": slug.current,
      "imageUrl": images[0].asset->url,
      price
    }
  `;

  const results = await client.fetch(query, { searchTerm });
  return results;
};