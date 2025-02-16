import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <StaticImage
          src="../images/hero.jpg"  // Path to your local image in the src/images folder
          alt="Hero image"
          placeholder="blurred"  // Optional: This gives a blurred placeholder before the image loads
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full absolute top-0 z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">Transforme sua Beleza com Segurança</h1>
            <p className="text-lg mb-6">Com mais de 10 anos de experiência, o Dr. João Silva é especializado em procedimentos estéticos e cirúrgicos para realçar sua beleza natural.</p>
            <a
              href="#contato"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Agende uma consulta
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100" id="sobre">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-8">Sobre o Dr. João Silva</h2>
          <div className="flex justify-center mb-8">
            <StaticImage
              src="../images/dr-joao.jpg"
              alt="Dr. João Silva"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-600"
            />
          </div>
          <p className="text-lg max-w-3xl mx-auto mb-4">
            O Dr. João Silva é um cirurgião plástico com mais de 10 anos de experiência, dedicado a oferecer resultados excepcionais e cuidados personalizados para cada paciente. Ele é especializado em uma ampla gama de procedimentos estéticos, incluindo lifting facial, mamoplastia, rinoplastia, e muito mais.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Seu compromisso com a segurança e bem-estar dos pacientes, aliado à sua técnica refinada, garante resultados naturais e de alta qualidade.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testemunhos">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-8">O Que Nossos Pacientes Dizem</h2>
          <div className="flex justify-center space-x-8 flex-wrap">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md w-72 mb-6">
              <p className="italic text-gray-600 mb-4">
                "Estou extremamente feliz com os resultados! O Dr. João Silva me ajudou a recuperar minha confiança."
              </p>
              <h3 className="font-semibold text-lg text-gray-800">Ana Costa</h3>
              <p className="text-gray-500">Paciente de Mamoplastia</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md w-72 mb-6">
              <p className="italic text-gray-600 mb-4">
                "O procedimento foi muito tranquilo e os resultados são incríveis. Recomendo a todos!"
              </p>
              <h3 className="font-semibold text-lg text-gray-800">Ricardo Alves</h3>
              <p className="text-gray-500">Paciente de Lifting Facial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-blue-600 text-white" id="contato">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-8">Entre em Contato</h2>
          <p className="text-lg mb-6">
            Tem dúvidas ou deseja agendar uma consulta? Entre em contato diretamente por e-mail.
          </p>
          <p className="text-lg font-semibold mb-6">
            <a href="mailto:dr.joao@clinica.com" className="text-white underline">
              dr.joao@clinica.com
            </a>
          </p>
          <p className="text-lg">
            Nosso time entrará em contato o mais breve possível para agendar sua consulta.
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
