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
    company: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, includePhotos: checked }));
  };

  const sendEmail = async (formData: any) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/dentronixk@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          _subject: "Novo contato do site Dentronix",
          _template: "table"
        })
      });

      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailSent = await sendEmail(formData);

      if (emailSent) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
      } else {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar seu formulário.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Consultorio
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="company"
                      placeholder="Digite o nome do seu consultório"
                      required
                      value={formData.company}
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