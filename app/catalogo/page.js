// app/catalogo/page.js
import { Suspense } from 'react';
import CatalogoContent from './CatalogoContent';

export default function CatalogoPage() {
  return (
    <>
      <Suspense fallback={<div>Carregando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
    </>
  );
}