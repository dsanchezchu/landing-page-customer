import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Settings, Award } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "App Familiar Gratuita",
      description: "Controla tu huerto desde el celular. Recibe fotos de tus plantas y notificaciones cuando estén listas para cosechar.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Settings,
      title: "Crece con tu Familia",
      description: "Empieza con un huerto básico y agrega más módulos cuando quieras más variedad de verduras para tu familia.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "Garantía Total",
      description: "2 años de garantía con soporte técnico en Trujillo. Si algo se malogra, lo cambiamos gratis.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            ¿Por qué Elegir HOGARVERDE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Tu huerto familiar inteligente con todo lo que necesitas para tener 
            verduras frescas y saludables en casa, sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-poppins">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-inter">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins">¿Lista tu familia para su primer huerto?</h3>
          <p className="text-xl opacity-90 mb-6 font-inter">
            Únete a más de 180 familias trujillanas que ya disfrutan verduras frescas en casa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              🌱 Kit Básico S/245
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              📱 App Gratuita para Toda la Familia
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              🚚 Instalado en tu Casa en 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
