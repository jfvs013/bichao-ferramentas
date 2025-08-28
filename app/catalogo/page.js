import { Suspense } from 'react';
import CatalogoContent from './CatalogoContent';
import Header from '@/components/layout/Header';

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Carregando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
    </>
  );
}