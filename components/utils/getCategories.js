// app/components/utils/getCategories.js
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity';

export const getCategories = async () => {
    // Consulta GROQ para buscar todas as categorias
    // Retorna o título e o slug de cada categoria
    const query = groq`
      *[_type == "category"] {
        _id,
        title,
        "slug": slug.current
      }
    `;
    const categories = await client.fetch(query);
    return categories;
}; 