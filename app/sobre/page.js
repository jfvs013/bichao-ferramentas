import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Link from 'next/link';

export default function SobrePage() {
  const teamMembers = [
    {
      name: "João Do Gravatá",
      role: "Fundador & CEO",
      description: "Anos de experiência no setor de ferramentas.",
      image: "/images/team/Joaodogravata.png"
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Qualidade",
      description: "Trabalhamos apenas com produtos de alta qualidade e marcas reconhecidas no mercado."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Atendimento",
      description: "Nossa equipe está sempre pronta para ajudar você a encontrar a ferramenta ideal."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Agilidade",
      description: "Entrega rápida e eficiente para que seus projetos não parem."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Preço Justo",
      description: "Os melhores preços do mercado sem comprometer a qualidade."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Fundação da Empresa",
      description: "Início das atividades com foco em ferramentas manuais."
    },
    {
      year: "2016",
      title: "Expansão do Catálogo",
      description: "Adição de ferramentas elétricas e equipamentos de segurança."
    },
    {
      year: "2018",
      title: "Loja Online",
      description: "Lançamento da plataforma de e-commerce."
    },
    {
      year: "2020",
      title: "Crescimento Nacional",
      description: "Expansão para todo o território brasileiro."
    },
    {
      year: "2024",
      title: "Nova Plataforma",
      description: "Renovação completa da experiência digital."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#060d14] via-[#c4bcbcfa] to-[#ff6600] text-primary-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sobre a <span className="text-secondary-gold">Bichão Ferramentas</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em fornecer as melhores ferramentas e equipamentos para profissionais e entusiastas da construção e marcenaria.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-6">
                Nossa <span className="text-secondary-orange">História</span>
              </h2>
              <div className="space-y-4 text-primary-graphite leading-relaxed">
                <p>
                  A Bichão Ferramentas nasceu com um objetivo simples: simplificar o acesso
                  a ferramentas de qualidade profissional. Começamos atendendo principalmente profissionais da construção civil.
                </p>
                <p>
                  Com o passar do tempo, percebemos a necessidade de expandir nosso alcance e,
                  lançamos nossa plataforma online. Isso nos permite atender clientes em todo o Brasil,
                  mantendo sempre nosso compromisso com a qualidade e o atendimento personalizado.
                </p>
                <p>
                  Hoje, oferecemos diversos produtos de marcas
                  reconhecidas mundialmente. Nossa missão continua a mesma: fornecer as melhores
                  ferramentas para que nossos clientes realizem seus projetos com excelência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="bg-primary-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-black mb-4">
              Nossos <span className="text-secondary-orange">Valores</span>
            </h2>
            <p className="text-lg text-primary-graphite max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e nosso relacionamento com os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-orange text-primary-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-graphite">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-black mb-4">
              Nossa <span className="text-secondary-orange">Trajetória</span>
            </h2>
            <p className="text-lg text-primary-graphite max-w-2xl mx-auto">
              Os principais marcos da nossa jornada
            </p>
          </div> */}

      {/* <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Linha do tempo */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary-orange"></div> */}

      {/* {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}> */}
      {/* Ponto na linha */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-orange rounded-full border-4 border-primary-white shadow-lg z-10"></div> */}

      {/* Conteúdo */}
      {/* <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-primary-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-secondary-orange mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-primary-black mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-graphite">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      {/* </section> */}

      {/* Equipe */}
      < section className="bg-primary-white py-16" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-black mb-4">
              Nossa <span className="text-secondary-orange">Equipe</span>
            </h2>
            <p className="text-lg text-primary-graphite max-w-2xl mx-auto">
              Conheça as pessoas que fazem a diferença na Bichão Ferramentas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary-orange text-primary-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary-black mb-1">
                  {member.name}
                </h3>
                <div className="text-secondary-orange font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-primary-graphite text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-black text-primary-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para fazer parte da nossa <span className="text-secondary-orange">história</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra por que milhares de profissionais confiam na Bichão Ferramentas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button variant="primary" size="large">
                Explorar Produtos
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="large" className="border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

