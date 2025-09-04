// lib/sanity.js
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2025-09-03', // Data corrigida
    useCdn: false,
});


// Helper function para gerar URLs de imagens do Sanity
const builder = imageUrlBuilder(client);

export function urlForImage(source) {
    return builder.image(source);
}