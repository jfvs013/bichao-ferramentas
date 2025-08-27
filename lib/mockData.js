// Dados mock para demonstração do projeto

export const mockProducts = [
  {
    id: 1,
    name: "Furadeira de Impacto Bosch GSB 550 RE",
    price: 299.90,
    originalPrice: 349.90,
    image: "/images/products/furadeira-bosch.jpg",
    category: "Ferramentas Elétricas",
    brand: "Bosch",
    inStock: true,
    discount: 14,
    description: "Furadeira de impacto profissional com 550W de potência, ideal para furos em alvenaria, madeira e metal.",
    specifications: {
      "Potência": "550W",
      "Velocidade": "0-3000 rpm",
      "Mandril": "13mm",
      "Peso": "1.8kg",
      "Garantia": "12 meses"
    }
  },
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
    id: 3,
    name: "Parafusadeira Makita DF333DWYE",
    price: 189.90,
    originalPrice: 229.90,
    image: "/images/products/parafusadeira-makita.jpg",
    category: "Ferramentas Elétricas",
    brand: "Makita",
    inStock: true,
    discount: 17,
    description: "Parafusadeira sem fio 12V com bateria de lítio, compacta e leve para trabalhos de precisão.",
    specifications: {
      "Voltagem": "12V",
      "Bateria": "Lítio 2.0Ah",
      "Torque": "30 N.m",
      "Peso": "1.1kg",
      "Garantia": "12 meses"
    }
  },
  {
    id: 4,
    name: "Capacete de Segurança Branco",
    price: 25.90,
    originalPrice: null,
    image: "/images/products/capacete-seguranca.jpg",
    category: "Equipamentos de Segurança",
    brand: "Vonder",
    inStock: true,
    discount: null,
    description: "Capacete de segurança classe A, proteção contra impactos e choques elétricos até 2200V.",
    specifications: {
      "Classe": "Classe A",
      "Material": "Polietileno",
      "Proteção Elétrica": "Até 2200V",
      "Peso": "350g",
      "Certificação": "CA 31469"
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
  {
    id: 6,
    name: "Serra Circular Skil 5402",
    price: 159.90,
    originalPrice: 199.90,
    image: "/images/products/serra-circular-skil.jpg",
    category: "Ferramentas Elétricas",
    brand: "Skil",
    inStock: true,
    discount: 20,
    description: "Serra circular 1400W com disco de 185mm, ideal para cortes precisos em madeira.",
    specifications: {
      "Potência": "1400W",
      "Disco": "185mm",
      "Profundidade de Corte": "65mm",
      "Peso": "4.2kg",
      "Garantia": "12 meses"
    }
  }
];

export const mockCategories = [
  {
    id: 1,
    name: "Ferramentas Manuais",
    slug: "ferramentas-manuais",
    image: "/images/categories/ferramentas-manuais.jpg",
    description: "Martelos, chaves, alicates e muito mais"
  },
  {
    id: 2,
    name: "Ferramentas Elétricas",
    slug: "ferramentas-eletricas",
    image: "/images/categories/ferramentas-eletricas.jpg",
    description: "Furadeiras, serras, parafusadeiras e equipamentos elétricos"
  },
  {
    id: 3,
    name: "Equipamentos de Segurança",
    slug: "equipamentos-seguranca",
    image: "/images/categories/equipamentos-seguranca.jpg",
    description: "Capacetes, óculos, luvas e EPIs em geral"
  },
  {
    id: 4,
    name: "Materiais de Construção",
    slug: "materiais-construcao",
    image: "/images/categories/materiais-construcao.jpg",
    description: "Cimentos, tijolos, telhas e materiais básicos"
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Como Escolher a Furadeira Ideal para Seu Projeto",
    slug: "como-escolher-furadeira-ideal",
    excerpt: "Descubra os principais fatores a considerar na hora de comprar uma furadeira, desde a potência até os acessórios necessários.",
    content: "Conteúdo completo do post sobre furadeiras...",
    image: "/images/blog/furadeira-guia.jpg",
    author: "João Silva",
    publishedAt: "2024-01-15",
    category: "Guias de Compra"
  },
  {
    id: 2,
    title: "5 Dicas de Segurança Essenciais na Construção",
    slug: "dicas-seguranca-construcao",
    excerpt: "A segurança deve ser sempre prioridade. Confira nossas dicas fundamentais para manter seu canteiro de obras seguro.",
    content: "Conteúdo completo do post sobre segurança...",
    image: "/images/blog/seguranca-construcao.jpg",
    author: "Maria Santos",
    publishedAt: "2024-01-10",
    category: "Segurança"
  },
  {
    id: 3,
    title: "Manutenção de Ferramentas: Prolongue a Vida Útil",
    slug: "manutencao-ferramentas",
    excerpt: "Aprenda como cuidar adequadamente de suas ferramentas para garantir durabilidade e performance máxima.",
    content: "Conteúdo completo do post sobre manutenção...",
    image: "/images/blog/manutencao-ferramentas.jpg",
    author: "Carlos Oliveira",
    publishedAt: "2024-01-05",
    category: "Manutenção"
  }
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
  {
    type: "gradient",
    title: "Promoção Especial",
    description: "Até 30% OFF em ferramentas elétricas selecionadas",
    button: {
      text: "Aproveitar Oferta",
      variant: "secondary",
      onClick: () => console.log("Navegar para promoções")
    }
  },
  {
    type: "image",
    src: "/images/banners/banner-seguranca.jpg",
    alt: "Equipamentos de Segurança",
    title: "Sua Segurança em Primeiro Lugar",
    description: "Equipamentos de proteção individual com certificação",
    button: {
      text: "Ver EPIs",
      variant: "primary",
      onClick: () => console.log("Navegar para EPIs")
    }
  }
];

