// Dados mock para demonstração do projeto

export const mockProducts = [
  {
    id: 2,
    name: "Martelo de Unha Stanley 16oz",
    price: 45.90,
    originalPrice: null,
    image: "/images/products/martelo-stanley.jpg",
    category: "Ferramentas Manuais",
    brand: "Stanley",
    inStock: true,
    discount: null,
    description: "Martelo de unha com cabo de fibra de vidro, oferece maior durabilidade e absorção de impacto.",
    specifications: {
      "Peso da Cabeça": "16oz (450g)",
      "Material do Cabo": "Fibra de vidro",
      "Comprimento": "33cm",
      "Garantia": "Vitalícia"
    }
  },

  {
    id: 5,
    name: "Chave de Fenda Tramontina 6\"",
    price: 12.90,
    originalPrice: null,
    image: "/images/products/chave-fenda-tramontina.jpg",
    category: "Ferramentas Manuais",
    brand: "Tramontina",
    inStock: false,
    discount: null,
    description: "Chave de fenda com cabo ergonômico e ponta magnética, ideal para trabalhos de precisão.",
    specifications: {
      "Tamanho": "6 polegadas",
      "Material da Lâmina": "Aço carbono",
      "Cabo": "Polipropileno",
      "Ponta": "Magnética",
      "Garantia": "12 meses"
    }
  },
];

export const mockCategories = [
  {
    id: 1,
    name: "Ferramentas Manuais",
    slug: "ferramentas-manuais",
    image: "/images/categories/ferramentas-manuais.jpg",
    description: "Martelos, chaves, alicates e muito mais"
  },
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Como Escolher a Furadeira Ideal para Seu Projeto",
    slug: "como-escolher-furadeira-ideal",
    excerpt: "Descubra os principais fatores a considerar na hora de comprar uma furadeira, desde a potência até os acessórios necessários.",
    content: "Conteúdo completo do post sobre furadeiras...",
    image: "/images/blog/furadeira-guia.jpg",
    author: "João Paulo do Gravatá",
    publishedAt: "2024-01-15",
    category: "Guias de Compra"
  },
];

export const mockBanners = [
  {
    type: "image",
    src: "/images/banners/banner-principal.jpg",
    alt: "Banner Principal",
    title: "Ferramentas Profissionais",
    description: "Encontre tudo que precisa para seus projetos com os melhores preços",
    button: {
      text: "Ver Catálogo",
      variant: "primary",
      onClick: () => console.log("Navegar para catálogo")
    }
  },
  //   {
  //     type: "gradient",
  //     title: "Promoção Especial",
  //     description: "Até 30% OFF em ferramentas elétricas selecionadas",
  //     button: {
  //       text: "Aproveitar Oferta",
  //       variant: "secondary",
  //       onClick: () => console.log("Navegar para promoções")
  //     }
  //   },
  //   {
  //     type: "image",
  //     src: "/images/banners/banner-seguranca.jpg",
  //     alt: "Equipamentos de Segurança",
  //     title: "Sua Segurança em Primeiro Lugar",
  //     description: "Equipamentos de proteção individual com certificação",
  //     button: {
  //       text: "Ver EPIs",
  //       variant: "primary",
  //       onClick: () => console.log("Navegar para EPIs")
  //     }
  //   }
];

