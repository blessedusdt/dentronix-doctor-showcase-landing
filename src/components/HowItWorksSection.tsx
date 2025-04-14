
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça o processo simples para criar sua Landing Page com a galeria de fotos dos doutores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            <div className="h-20 w-20 rounded-full bg-dentronix-blue flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Envie os dados e fotos</h3>
            <p className="text-gray-600 text-center">
              Envie-nos as fotos dos profissionais e seus dados (nome, especialidade, CRO).
            </p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="text-dentronix-blue w-8 h-8" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            <div className="h-20 w-20 rounded-full bg-dentronix-blue flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Design profissional</h3>
            <p className="text-gray-600 text-center">
              Nossa equipe cria um design moderno e profissional para sua landing page odontológica.
            </p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="text-dentronix-blue w-8 h-8" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="h-20 w-20 rounded-full bg-dentronix-blue flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Site publicado</h3>
            <p className="text-gray-600 text-center">
              Seu site vai ao ar em até 7 dias, pronto para aumentar a captação de novos pacientes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5511951338478?text=Olá,%20quero%20saber%20mais%20sobre%20como%20funciona%20a%20Landing%20Page%20com%20fotos%20dos%20doutores" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dentronix-whatsapp text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
          >
            <span className="mr-2">Tirar dúvidas pelo WhatsApp</span>
            <svg className="inline-block w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
