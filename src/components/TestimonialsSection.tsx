import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana García",
      location: "Centro Histórico, Trujillo",
      rating: 5,
      text: "Ahora puedo monitorear el crecimiento de mis cultivos desde el celular. Sé cuándo regar y fertilizar, y mis cosechas han mejorado notablemente.",
      crops: "Maíz, papa, zanahoria",
      benefits: "Mejor producción y menos pérdidas"
    },
    {
      name: "Carlos Rodríguez",
      location: "La Esperanza, Trujillo",
      rating: 5,
      text: "La aplicación me avisa sobre el clima y el estado de mis chacras. Así evito enfermedades y aprovecho mejor el agua.",
      crops: "Culantro, cebolla, albahaca",
      benefits: "Ahorro de agua y cultivos más sanos"
    },
    {
      name: "María Vásquez",
      location: "El Porvenir, Trujillo",
      rating: 5,
      text: "Con la tecnología puedo ver el avance de mis sembríos y tomar decisiones rápidas. Ahora vendo productos de mejor calidad en el mercado.",
      crops: "Acelga, espinaca, lechuga",
      benefits: "Más ingresos y productos frescos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Agricultores Satisfechos con el Monitoreo de sus Chacras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Experiencias reales de agricultores trujillanos que optimizan el crecimiento de sus cultivos con monitoreo inteligente.
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
                      {testimonial.crops}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-inter">
                      {testimonial.benefits}
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
              Resultados Promedio de Nuestros Agricultores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">+20%</div>
                <div className="text-sm text-green-700 font-inter">Aumento en la producción</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">30%</div>
                <div className="text-sm text-green-700 font-inter">Menos uso de agua</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">10</div>
                <div className="text-sm text-green-700 font-inter">Tipos de cultivos monitoreados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-playfair">97%</div>
                <div className="text-sm text-green-700 font-inter">Agricultores satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
