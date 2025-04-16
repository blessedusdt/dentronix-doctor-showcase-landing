
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    includePhotos: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, includePhotos: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        includePhotos: false,
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende uma Consultoria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato para saber como podemos transformar sua clínica odontológica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Digite seu telefone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar sua clínica?"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="includePhotos" 
                      checked={formData.includePhotos}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label 
                      htmlFor="includePhotos" 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Quero incluir fotos da minha equipe no site
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-dentronix-blue hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-dentronix-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5511951338478" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-dentronix-whatsapp transition"
                    >
                      (11) 95133-8478
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-dentronix-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <a 
                      href="mailto:dentronixk@gmail.com" 
                      className="text-gray-600 hover:text-dentronix-blue transition"
                    >
                      dentronixk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-dentronix-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Atendimento</h4>
                    <p className="text-gray-600">
                      Atendemos todo o Brasil remotamente
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium mb-3">Horário de atendimento:</h3>
                <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
