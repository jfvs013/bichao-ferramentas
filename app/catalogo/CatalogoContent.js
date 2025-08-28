'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/atoms/SearchBar';
import FilterSidebar from '@/components/blocks/FilterSidebar';
import ProductGrid from '@/components/blocks/ProductGrid';
import Button from '@/components/atoms/Button';
import { mockProducts } from '@/lib/mockData';

export default function CatalogoContent() {
    const searchParams = useSearchParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Simulação de carregamento inicial
    useEffect(() => {
        setTimeout(() => {
            setProducts(mockProducts);
            setFilteredProducts(mockProducts);
            setLoading(false);
        }, 1000);
    }, []);

    // Filtro por categoria via URL
    useEffect(() => {
        const categoria = searchParams.get('categoria');
        if (categoria && products.length > 0) {
            const filtered = products.filter(product =>
                product.category.toLowerCase().includes(categoria.replace('-', ' '))
            );
            setFilteredProducts(filtered);
        }
    }, [searchParams, products]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        filterProducts(term, null);
    };

    const handleFiltersChange = (filters) => {
        filterProducts(searchTerm, filters);
    };

    const filterProducts = (searchTerm, filters) => {
        let filtered = [...products];

        // Filtro por termo de busca
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Aplicar filtros
        if (filters) {
            if (filters.category?.length > 0) {
                filtered = filtered.filter(product =>
                    filters.category.includes(product.category)
                );
            }
            if (filters.brand?.length > 0) {
                filtered = filtered.filter(product =>
                    filters.brand.includes(product.brand)
                );
            }
            if (filters.priceRange) {
                const { min, max } = filters.priceRange;
                if (min) filtered = filtered.filter(p => p.price >= parseFloat(min));
                if (max) filtered = filtered.filter(p => p.price <= parseFloat(max));
            }
            if (filters.inStock) {
                filtered = filtered.filter(product => product.inStock);
            }
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        const sorted = [...filteredProducts].sort((a, b) => {
            switch (newSortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'brand':
                    return a.brand.localeCompare(b.brand);
                default:
                    return 0;
            }
        });
        setFilteredProducts(sorted);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddToList = (product) => {
        console.log('Adicionar à lista:', product);
    };

    const handleViewDetails = (product) => {
        console.log('Ver detalhes:', product);
    };

    // Paginação
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header do Catálogo */}
            <div className="bg-primary-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-primary-black mb-4">
                            Catálogo de <span className="text-secondary-orange">Produtos</span>
                        </h1>
                        <p className="text-lg text-primary-graphite max-w-2xl mx-auto">
                            Encontre as melhores ferramentas e equipamentos para seus projetos
                        </p>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4">
                        <FilterSidebar
                            onFiltersChange={handleFiltersChange}
                            onClearFilters={() => {
                                setFilteredProducts(products);
                                setSearchTerm('');
                                setCurrentPage(1);
                            }}
                        />
                    </aside>

                    {/* Produtos */}
                    <main className="lg:w-3/4">
                        <div className="bg-primary-white rounded-lg shadow-sm p-4 mb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="text-primary-graphite">
                                    <span className="font-medium">
                                        {loading
                                            ? 'Carregando...'
                                            : `${filteredProducts.length} produtos encontrados`}
                                    </span>
                                    {searchTerm && (
                                        <span className="ml-2 text-sm">
                                            para &quot;{searchTerm}&quot;
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label className="text-sm text-primary-graphite">
                                        Ordenar por:
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-secondary-orange text-gray-800"
                                    >
                                        <option value="name">Nome A-Z</option>
                                        <option value="price-asc">Menor Preço</option>
                                        <option value="price-desc">Maior Preço</option>
                                        <option value="brand">Marca</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <ProductGrid
                            products={currentProducts}
                            onAddToList={handleAddToList}
                            onViewDetails={handleViewDetails}
                            loading={loading}
                            emptyMessage={
                                searchTerm
                                    ? `Nenhum produto encontrado para "${searchTerm}"`
                                    : 'Nenhum produto encontrado com os filtros aplicados'
                            }
                        />

                        {/* Paginação */}
                        {totalPages > 1 && (
                            <div className="mt-8 flex justify-center">
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="small"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Anterior
                                    </Button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <Button
                                            key={page}
                                            variant={currentPage === page ? 'primary' : 'ghost'}
                                            size="small"
                                            onClick={() => handlePageChange(page)}
                                            className="min-w-[40px]"
                                        >
                                            {page}
                                        </Button>
                                    ))}

                                    <Button
                                        variant="outline"
                                        size="small"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Próxima
                                    </Button>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}