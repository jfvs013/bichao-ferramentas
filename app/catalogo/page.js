import { Suspense } from 'react';
import CatalogoContent from './catalogo/CatalogoContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Carregando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
      <Footer />
    </>
  );
}