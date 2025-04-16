import { CheckCircle, CodeIcon } from "lucide-react";
import ux from './img/ux.png'
import opt from './img/optimization.png'
import code from './img/coding.png'

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha a solução ideal para transformar sua clínica odontológica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution Card 1: Landing Page Básica */}
          <div className="service-card">
            <div className="h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <img 
                src={ux}
                alt="Landing Page Básica"
                className="h-36 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Landing Page Básica</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Página inicial com especialidades e convênios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Galeria de fotos dos doutores com descrição</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Agendamento simplificado (WhatsApp/formulário)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Área de "Valores e Promoções" (opcional)</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5511951338478?text=Olá,%20tenho%20interesse%20na%20Landing%20Page%20Básica" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-dentronix-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Saber mais
            </a>
          </div>

          {/* Solution Card 2: Sistema Completo */}
          <div className="service-card">
            <div className="h-48 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <img 
                src={opt}
                alt="Sistema Completo"
                className="h-36 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Sistema Completo</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Landing Page + Backoffice</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Agendamento automático</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Recepção virtual (triagem online)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prontuário digital com login do paciente</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Banco de Dados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Data Analytics de Pacientes</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5511951338478?text=Olá,%20tenho%20interesse%20no%20Sistema%20Completo" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-dentronix-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Saber mais
            </a>
          </div>

          {/* Solution Card 3: Solução Personalizada */}
          <div className="service-card">
            <div className="h-48 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <img 
                src={code}
                alt="Solução Personalizada"
                className="h-36 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Solução Personalizada</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sistema feito do zero para sua clínica</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Integração de pagamentos, CRM, etc.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Design exclusivo</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Integrações entre sistemas via API</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Implementação utilizando scrum</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dentronix-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fluxo de automação</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/5511951338478?text=Olá,%20tenho%20interesse%20em%20uma%20Solução%20Personalizada" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-dentronix-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
