import Image from 'next/image';
import Button from '../atoms/Button';

export default function ProductCard({ 
  product,
  onAddToList,
  onViewDetails,
  className = ''
}) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    brand,
    inStock = true,
    discount
  } = product;

  const handleAddToList = () => {
    if (onAddToList) {
      onAddToList(product);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className={`bg-primary-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 ${className}`}>
      {/* Imagem do Produto */}
      <div className="relative aspect-square bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Badge de Desconto */}
        {discount && (
          <div className="absolute top-2 left-2 bg-secondary-orange text-primary-white px-2 py-1 rounded-md text-sm font-semibold">
            -{discount}%
          </div>
        )}
        
        {/* Badge de Estoque */}
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-primary-white px-2 py-1 rounded-md text-sm font-semibold">
            Esgotado
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="p-4">
        {/* Categoria e Marca */}
        <div className="flex justify-between items-center mb-2">
          {category && (
            <span className="text-xs text-primary-graphite bg-gray-100 px-2 py-1 rounded">
              {category}
            </span>
          )}
          {brand && (
            <span className="text-xs text-secondary-gold font-semibold">
              {brand}
            </span>
          )}
        </div>

        {/* Nome do Produto */}
        <h3 className="font-semibold text-primary-black mb-2 line-clamp-2 hover:text-secondary-orange transition-colors cursor-pointer" onClick={handleViewDetails}>
          {name}
        </h3>

        {/* Preços */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-secondary-orange">
              {formatPrice(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="small"
            onClick={handleAddToList}
            disabled={!inStock}
            className="flex-1"
          >
            {inStock ? 'Adicionar à Lista' : 'Indisponível'}
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={handleViewDetails}
            className="px-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

