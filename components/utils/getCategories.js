// app/components/utils/getCategories.js

import { groq } from 'next-sanity';
import { client } from '../../lib/sanity';

export const getCategories = async () => {
  const query = groq`
    *[_type == "category"] {
      _id,
      name,
      "slug": slug.current,
      description
    }
  `;
  const categories = await client.fetch(query);
  return categories;
};