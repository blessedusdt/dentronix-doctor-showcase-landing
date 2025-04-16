
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/dentist-1.jpg",
    alt: "Consultório odontológico moderno",
    fallback: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=2574&auto=format&fit=crop"
  },
  {
    src: "/dentist-2.jpg",
    alt: "Dentista tratando paciente",
    fallback: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2574&auto=format&fit=crop"
  },
  {
    src: "/dentist-3.jpg",
    alt: "Equipamento odontológico de alta tecnologia",
    fallback: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2568&auto=format&fit=crop"
  },
  {
    src: "/dentist-4.jpg",
    alt: "Sorriso perfeito após tratamento",
    fallback: "https://images.unsplash.com/photo-1607706189160-ecb490bcbcc2?q=80&w=2576&auto=format&fit=crop"
  }
];

const ImageCarousel = () => {
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  // Auto-avanço do carrossel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Avança a cada 5 segundos
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                <img
                  src={image.fallback}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollNext()}
              className="w-2.5 h-2.5 rounded-full bg-white/70 hover:bg-white transition-colors"
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="left-4 bg-white/70 hover:bg-white/90" />
        <CarouselNext className="right-4 bg-white/70 hover:bg-white/90" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
