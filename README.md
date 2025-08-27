# Bichão Ferramentas - Frontend

Uma aplicação frontend completa para loja de ferramentas online, desenvolvida com Next.js 14, JavaScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **JavaScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - useState, useEffect para gerenciamento de estado
- **Next.js Image** - Otimização de imagens
- **Next.js Link** - Navegação otimizada

## 🎨 Design System

### Paleta de Cores

#### Cores Principais
- **Preto**: `#000000` - Força, sofisticação, fundo elegante
- **Cinza Grafite**: `#2C2C2C` - Alternativa ao preto em áreas menos pesadas
- **Branco**: `#FFFFFF` - Espaço, contraste e equilíbrio

#### Cores Secundárias
- **Laranja Vibrante**: `#F7931E` - Energia, inovação, chamada para ação
- **Dourado Metálico**: `#DAA520` - Toque premium, destaque em títulos e ícones

#### Cor de Destaque
- **Verde do Olho do Camaleão**: `#00B894` - Exclusiva da marca, botões, hover, detalhes sutis

## 📁 Estrutura do Projeto

```
bichao-ferramentas/
├── app/                          # App Router do Next.js 14
│   ├── layout.js                 # Layout principal
│   ├── page.js                   # Página inicial
│   ├── globals.css               # Estilos globais e configuração do Tailwind
│   ├── blog/
│   │   ├── page.js               # Listagem de posts do blog
│   │   └── [slug]/
│   │       └── page.js           # Página individual do post
│   ├── catalogo/
│   │   └── page.js               # Catálogo de produtos com filtros
│   ├── contato/
│   │   └── page.js               # Página de contato
│   ├── produtos/
│   │   └── [slug]/
│   │       └── page.js           # Página individual do produto
│   └── sobre/
│       └── page.js               # Página sobre a empresa
├── components/                   # Componentes reutilizáveis
│   ├── atoms/                    # Componentes atômicos
│   │   ├── Button.js             # Botão estilizado
│   │   ├── SearchBar.js          # Barra de busca
│   │   └── WhatsAppButton.js     # Botão flutuante do WhatsApp
│   ├── blocks/                   # Componentes de bloco
│   │   ├── Carousel.js           # Carrossel genérico
│   │   ├── FilterSidebar.js      # Sidebar de filtros
│   │   ├── ProductCard.js        # Card de produto
│   │   └── ProductGrid.js        # Grade de produtos
│   └── layout/                   # Componentes de layout
│       ├── Header.js             # Cabeçalho com navegação
│       └── Footer.js             # Rodapé completo
├── lib/
│   └── mockData.js               # Dados mock para demonstração
├── public/                       # Arquivos estáticos
└── package.json                  # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Entre no diretório
cd bichao-ferramentas

# Instale as dependências (já instaladas)
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📱 Páginas Implementadas

### ✅ Home Page (`/`)
- Carousel de banners principais
- Seções de categorias visuais
- Produtos mais vendidos
- Produtos em destaque
- Seções informativas sobre a empresa

### ✅ Catálogo (`/catalogo`)
- Barra de busca avançada
- Filtros laterais (categoria, marca, preço, estoque)
- Grade de produtos com paginação
- Ordenação por diferentes critérios

### ✅ Produto Individual (`/produtos/[slug]`)
- Galeria de imagens
- Informações detalhadas do produto
- Especificações técnicas
- Controles de quantidade
- Produtos relacionados

### ✅ Sobre Nós (`/sobre`)
- História da empresa
- Valores e missão
- Timeline de marcos importantes
- Equipe
- Estatísticas da empresa

### ✅ Contato (`/contato`)
- Formulário de contato
- Informações de contato
- Departamentos específicos
- Integração com WhatsApp
- Mapa de localização

### ✅ Blog (`/blog`)
- Listagem de posts
- Filtros por categoria
- Busca de conteúdo
- Post em destaque
- Newsletter

### ✅ Post do Blog (`/blog/[slug]`)
- Conteúdo completo do post
- Compartilhamento social
- Posts relacionados
- Navegação entre posts

## 🧩 Componentes Implementados

### Componentes Atômicos
- ✅ **Button** - Múltiplas variantes (primary, secondary, outline, ghost, gold)
- ✅ **SearchBar** - Barra de busca com funcionalidade
- ✅ **WhatsAppButton** - Botão flutuante para contato

### Componentes de Bloco
- ✅ **ProductCard** - Card completo de produto
- ✅ **ProductGrid** - Grade responsiva de produtos
- ✅ **Carousel** - Carrossel com navegação e autoplay
- ✅ **FilterSidebar** - Filtros avançados para catálogo

### Componentes de Layout
- ✅ **Header** - Cabeçalho completo com navegação responsiva
- ✅ **Footer** - Rodapé abrangente com links e newsletter

## 🎯 Funcionalidades

### ✅ Responsividade
- Design mobile-first
- Breakpoints otimizados
- Menu mobile com hamburger
- Componentes adaptáveis

### ✅ Interatividade
- Carrossel automático com controles
- Filtros dinâmicos
- Estados de hover e focus
- Formulários funcionais

### ✅ Performance
- Otimização de imagens com Next.js Image
- CSS otimizado com Tailwind
- Estrutura de componentes eficiente
- App Router do Next.js 14

### ✅ Acessibilidade
- Navegação por teclado
- Labels apropriados
- Contraste adequado de cores
- Estrutura semântica HTML

## 📊 Dados Mock

O projeto inclui dados simulados completos:
- ✅ Produtos com especificações
- ✅ Categorias organizadas
- ✅ Posts do blog
- ✅ Banners para carousel

## 🎨 Paleta de Cores Implementada

Todas as cores da marca foram implementadas no Tailwind CSS:
- ✅ Preto (#000000)
- ✅ Cinza Grafite (#2C2C2C)
- ✅ Branco (#FFFFFF)
- ✅ Laranja Vibrante (#F7931E)
- ✅ Dourado Metálico (#DAA520)
- ✅ Verde do Olho do Camaleão (#00B894)

## ✅ Status do Projeto

**PROJETO COMPLETO E FUNCIONAL**

- ✅ Estrutura Next.js 14 configurada
- ✅ Tailwind CSS configurado com paleta personalizada
- ✅ Todos os componentes implementados
- ✅ Todas as páginas criadas
- ✅ Design responsivo
- ✅ Navegação funcional
- ✅ Dados mock implementados
- ✅ Testado localmente

## 🚀 Próximos Passos (Backend)

Para implementação completa:
1. **API Integration** - Conectar com backend real
2. **Authentication** - Sistema de login/registro
3. **Shopping Cart** - Carrinho persistente
4. **Payment** - Integração com gateway de pagamento
5. **Admin Panel** - Painel administrativo

---

**✅ Frontend 100% Completo - Pronto para integração com backend**
