// components/utils/searchProducts.js
import { groq } from 'next-sanity';
import { client } from '/lib/sanity.js'; // Ajuste o caminho conforme necessário

export const searchProducts = async (searchTerm) => {
    if (!searchTerm) {
        return [];
    }

    // A consulta GROQ busca por título, slug e descrição, ignorando maiúsculas e minúsculas
    const query = groq`
    *[_type == "product" && (
      title match $searchTerm + "*" ||
      slug.current match $searchTerm + "*" ||
      description match $searchTerm + "*"
    )] {
      _id,
      title,
      "slug": slug.current,
      mainImage {
        asset->{
          url
        }
      }
    }
  `;

    // Use a função client.fetch para executar a consulta
    const results = await client.fetch(query, { searchTerm });
    return results;
};