'use client';

import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input'; // Importa o novo componente Input

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui seria implementada a lógica de envio
    setShowSuccessModal(true);

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefone",
      content: "(11) 99999-9999",
      description: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-mail",
      content: "contato@bichaoferramentas.com.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 14h"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#060d14] via-[#c4bcbcfa] to-[#ff6600] text-primary-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Entre em <span className="text-[#ff9900]">Contato</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você a encontrar as melhores soluções em ferramentas.
            Entre em contato conosco através dos canais abaixo.
          </p>
        </div>
      </section>

      {/* Informações de Contato Centralizadas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-primary-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary-orange text-primary-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-black mb-2">
                  {info.title}
                </h3>
                <p className="text-secondary-orange font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-primary-graphite text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e WhatsApp */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div className="bg-primary-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                Envie sua <span className="text-secondary-orange">Mensagem</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-black mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-black mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-black mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-orange transition-colors text-gray-800"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="vendas">Vendas</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="parceria">Parcerias</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-black mb-2">
                    Mensagem *
                  </label>
                  <Input
                    isTextArea={true}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Descreva sua dúvida ou necessidade..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            {/* WhatsApp */}
            <div className="bg-primary-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                Atendimento via <span className="text-secondary-orange">WhatsApp</span>
              </h2>
              <div className="flex flex-col justify-center items-center text-center">
                <svg className="w-12 h-12 mb-4 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <p className="mb-6 text-center text-primary-graphite">
                  Precisa de ajuda rápida? Fale conosco pelo WhatsApp!
                  Nosso time está pronto para atender você.
                </p>
                <Button
                  variant="primary"
                  size="large"
                  href="https://api.whatsapp.com/send?phone=5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center font-bold"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Falar com a gente no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-primary-black mb-4">Mensagem Enviada!</h2>
            <p className="text-primary-graphite mb-6">Agradecemos o seu contato. Retornaremos em breve.</p>
            <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
              Fechar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}