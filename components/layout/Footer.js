'use client';

import Link from 'next/link';
import WhatsAppButton from '../atoms/WhatsAppButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: '/´catalogo', label: 'Catalogo' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  const supportLinks = [
    { href: '/ajuda', label: 'Central de Ajuda' },
    { href: '/frete-entrega', label: 'Frete e Entrega' },
    { href: '/garantia', label: 'Garantia' }
  ];

  const categoryLinks = [
    { href: '/catalogo?categoria=ferramentas-manuais', label: 'Ferramentas Manuais' },
    // { href: '/catalogo?categoria=ferramentas-eletricas', label: 'Ferramentas Elétricas' },
    // { href: '/catalogo?categoria=equipamentos-seguranca', label: 'Equipamentos de Segurança' },
  ];

  const socialLinks = [
    {
      href: 'https://instagram.com/bichaoferramentas',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.248 7.053 7.758 8.35 7.758s2.448.49 3.323 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.297 3.323c-.896.896-2.047 1.386-3.344 1.386zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.896-.896-1.386-2.047-1.386-3.344s.49-2.448 1.297-3.323c.896-.896 2.047-1.386 3.344-1.386s2.448.49 3.323 1.297c.896.896 1.386 2.047 1.386 3.344s-.49 2.448-1.297 3.323c-.896.896-2.047 1.386-3.344 1.386z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-primary-black text-primary-white">
      {/* { Newsletter }
      <div className="bg-primary-graphite py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">
              Receba nossas <span className="text-secondary-orange">ofertas exclusivas</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Cadastre-se e seja o primeiro a saber sobre promoções, novos produtos e dicas profissionais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-primary-black focus:outline-none focus:ring-2 focus:ring-secondary-orange"
              />
              <button className="bg-secondary-orange hover:bg-accent-green text-primary-white px-6 py-3 rounded-lg font-medium transition-colors">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Links Principais */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sobre a Empresa */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-secondary-orange rounded-lg flex items-center justify-center">
                  <span className="text-primary-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    Bichão <span className="text-secondary-orange">Ferramentas</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Oferecendo as melhores ferramentas e equipamentos para profissionais e entusiastas. Qualidade, variedade e atendimento excepcional.
              </p>

              {/* Informações de Contato */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@bichaoferramentas.com.br</span>
                </div>
                {/* <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-secondary-orange mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rua das Ferramentas, 123<br />São Paulo - SP, 01234-567</span>
                </div> */}
              </div>
            </div>

            {/* Links da Empresa */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary-orange transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links de Suporte */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary-orange transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorias */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary-orange transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociais e Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} Bichão Ferramentas. Todos os direitos reservados.</p>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary-orange transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selos e Certificações */}
      <div className="bg-primary-graphite py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-xs">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Site Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span>SSL Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Loja Verificada</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </footer>
  );
}

