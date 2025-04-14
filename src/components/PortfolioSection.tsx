
const portfolioProjects = [
  {
    id: 1,
    title: "Clínica Odontológica Sorriso Perfeito",
    description: "Landing page com galeria de doutores e agendamento online",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Centro de Implantes Dr. Marcos",
    description: "Sistema completo com prontuário digital",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Clínica Odonto Life",
    description: "Solução personalizada com CRM integrado",
    image: "/placeholder.svg"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfólio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos projetos para clínicas odontológicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5511951338478?text=Olá,%20gostaria%20de%20ver%20mais%20projetos%20do%20portfólio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dentronix-blue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Ver mais projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
