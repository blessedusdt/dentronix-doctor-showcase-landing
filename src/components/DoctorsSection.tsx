
const doctorPlaceholders = [
  {
    id: 1,
    name: "Dra. Ana Silva",
    specialty: "Ortodontia",
    registration: "CRO/SP 12345",
  },
  {
    id: 2,
    name: "Dr. Carlos Santos",
    specialty: "Implantodontia",
    registration: "CRO/SP 23456",
  },
  {
    id: 3,
    name: "Dra. Mariana Costa",
    specialty: "Endodontia",
    registration: "CRO/SP 34567",
  },
  {
    id: 4,
    name: "Dr. Roberto Almeida",
    specialty: "Odontopediatria",
    registration: "CRO/SP 45678",
  }
];

const DoctorsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fotos da Sua Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalize sua página com fotos profissionais dos seus dentistas e suas qualificações
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorPlaceholders.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="bg-gray-200 h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center font-medium">
                  Foto do Profissional
                </div>
              </div>
              <div className="doctor-card-info">
                <h3 className="font-bold text-lg">{doctor.name}</h3>
                <p className="text-dentronix-blue">{doctor.specialty} | {doctor.registration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto mb-8">
            *Envie-nos as fotos e dados da sua equipe e nós configuraremos sua página com esses detalhes profissionais
          </p>
          <a 
            href="#como-funciona" 
            className="inline-block bg-dentronix-green text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition"
          >
            Como funciona?
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
