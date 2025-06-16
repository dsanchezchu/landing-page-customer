import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana García",
      location: "Centro Histórico, Trujillo",
      rating: 5,
      text: "Mis hijos comen lechugas y tomates frescos todos los días. Ya no compro verduras en el mercado y mis niños hasta me ayudan a cosechar.",
      plants: "Lechugas, tomates cherry, espinacas",
      savings: "Más salud y tiempo en familia"
    },
    {
      name: "Carlos Rodríguez",
      location: "La Esperanza, Trujillo",
      rating: 5,
      text: "Mi esposa está feliz porque siempre tenemos culantro fresco para cocinar. La app me avisa todo y es súper fácil de usar.",
      plants: "Culantro, perejil, albahaca",
      savings: "Comidas más frescas y sabrosas"
    },
    {
      name: "María Vásquez",
      location: "El Porvenir, Trujillo",
      rating: 5,
      text: "En mi balcón pequeño tengo más verduras que antes en mi patio grande. Mis amigas no lo pueden creer cuando les muestro mi huerto.",
      plants: "Acelgas, espinacas, lechuga",
      savings: "Orgullo de cultivar mis propios alimentos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Familias Felices con su Huerto HOGARVERDE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Historias reales de familias trujillanas que transformaron su alimentación 
            con su propio huerto en casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-green-100">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic font-inter">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900 font-poppins">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2 font-inter">{testimonial.location}</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-inter">
                      {testimonial.plants}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-inter">
                      Ahorra {testimonial.savings}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-green-800 mb-4 font-poppins">
              Resultados Promedio de Nuestras Familias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">S/185</div>
                <div className="text-sm text-green-700 font-inter">Ahorro mensual familiar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">95%</div>
                <div className="text-sm text-green-700 font-inter">Menos compras de verduras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">8</div>
                <div className="text-sm text-green-700 font-inter">Variedades en el huerto</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">98%</div>
                <div className="text-sm text-green-700 font-inter">Familias satisfechas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
