// components/products/ProductClient.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

export default function ProductClient({ product, formatPrice }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleAddToList = () => {
        console.log('Adicionar à lista:', product, 'Quantidade:', quantity);
        // Implementar lógica de adicionar à lista
    };

    const handleBuyNow = () => {
        console.log('Comprar agora:', product, 'Quantidade:', quantity);
        // Implementar lógica de compra
    };

    // Usa imageUrl da query (fallback para evitar undefined)
    const productImages = [
        product.imageUrl,
        product.imageUrl,
        product.imageUrl
    ].filter(Boolean);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Galeria de Imagens */}
                <div>
                    {/* Imagem Principal */}
                    <div className="aspect-square bg-primary-white rounded-lg shadow-md mb-4 overflow-hidden">
                        {productImages[selectedImage] ? (
                            <Image
                                src={productImages[selectedImage]}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Miniaturas */}
                    <div className="flex space-x-2">
                        {productImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-secondary-orange' : 'border-gray-200'}`}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} - Imagem ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Informações do Produto */}
                <div>
                    {/* Categoria e Marca */}
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-gray-100 text-primary-graphite px-3 py-1 rounded-full text-sm">
                            {product.categoryTitle || 'Sem categoria'}
                        </span>
                        {product.brand && (
                            <span className="text-secondary-gold font-semibold">
                                {product.brand}
                            </span>
                        )}
                    </div>

                    {/* Nome do Produto */}
                    <h1 className="text-3xl font-bold text-primary-black mb-4">
                        {product.name}
                    </h1>

                    {/* Preços */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-4 mb-2">
                            <span className="text-4xl font-bold text-secondary-orange">
                                {formatPrice(product.price || 0)}
                            </span>
                            {product.originalPrice && product.originalPrice > product.price && (
                                <span className="text-xl text-gray-500 line-through">
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                        </div>
                        {product.discount && (
                            <div className="inline-flex items-center bg-secondary-orange text-primary-white px-3 py-1 rounded-full text-sm font-semibold">
                                Economize {product.discount}%
                            </div>
                        )}
                    </div>

                    {/* Status de Estoque */}
                    <div className="mb-6">
                        {product.inStock ? (
                            <div className="flex items-center text-accent-green">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-medium">Em estoque</span>
                            </div>
                        ) : (
                            <div className="flex items-center text-red-500">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="font-medium">Fora de estoque</span>
                            </div>
                        )}
                    </div>

                    {/* Descrição */}
                    {product.description && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary-black mb-2">Descrição</h3>
                            <p className="text-primary-graphite leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    )}

                    {/* Controles de Compra */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <label className="text-sm font-medium text-primary-black">Quantidade:</label>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-primary-graphite hover:text-primary-black"
                                    disabled={!product.inStock}
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-primary-graphite hover:text-primary-black"
                                    disabled={!product.inStock}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                size="large"
                                onClick={handleAddToList}
                                disabled={!product.inStock}
                                className="flex-1"
                            >
                                Adicionar à Lista
                            </Button>
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                                className="flex-1"
                            >
                                Comprar Agora
                            </Button>
                        </div>
                    </div>

                    {/* Informações Adicionais */}
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-accent-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Frete grátis acima de R$ 200</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-accent-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Garantia do fabricante</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-accent-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span>Parcelamento em até 12x</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-accent-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>Troca em 30 dias</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Especificações Técnicas */}
            {product.specifications && (
                <div className="bg-primary-white rounded-lg shadow-md p-6 mb-16">
                    <h2 className="text-2xl font-bold text-primary-black mb-6">Especificações Técnicas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                <span className="font-medium text-primary-graphite">{key}:</span>
                                <span className="text-primary-black">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
