// catalogo/page.js
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Importe o componente que contém o useSearchParams de forma dinâmica
const CatalogoContent = dynamic(() => import('./CatalogoContent'), {
  ssr: false, // Isso desabilita a renderização no lado do servidor para este componente
});

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div>Carregando catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  );
}