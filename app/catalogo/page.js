import { Suspense } from 'react';
import CatalogoContent from './CatalogoContent';
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';

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