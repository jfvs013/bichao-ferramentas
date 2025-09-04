// app/catalogo/page.js
import { Suspense } from 'react';
import CatalogoContent from './CatalogoContent';

// Exportações de metadata e viewport corrigidas
export const metadata = {
  title: 'Catálogo de Produtos',
  description: 'Explore nosso catálogo completo de ferramentas e equipamentos profissionais.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div>Carregando catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  );
}