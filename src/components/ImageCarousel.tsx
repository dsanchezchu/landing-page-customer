import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export const ImageCarousel = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      title: "Huerto en Casa",
      description: "Cultiva tus propias verduras frescas"
    },
    {
      url: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&h=600&fit=crop",
      title: "Agricultura Urbana",
      description: "Espacios verdes en tu hogar"
    },
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      title: "Verduras Frescas",
      description: "Alimentos saludables para tu familia"
    },
    {
      url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop",
      title: "Tecnología Verde",
      description: "Sistema automatizado de cultivo"
    },
    {
      url: "https://images.unsplash.com/photo-1574890762274-6f8f4d47b124?w=800&h=600&fit=crop",
      title: "Familia Saludable",
      description: "Nutrición natural desde casa"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Tu Huerto GreenGrassValley en Acción
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Descubre cómo las familias trujillanas están transformando sus hogares 
            con nuestro sistema de huertos urbanos inteligentes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-semibold text-lg font-poppins mb-1">
                              {image.title}
                            </h3>
                            <p className="text-sm opacity-90 font-inter">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600 font-playfair mb-2">500+</div>
              <div className="text-gray-600 font-inter">Familias satisfechas</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600 font-playfair mb-2">85%</div>
              <div className="text-gray-600 font-inter">Ahorro en verduras</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600 font-playfair mb-2">12 meses</div>
              <div className="text-gray-600 font-inter">Garantía completa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
