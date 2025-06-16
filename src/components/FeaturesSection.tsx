import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Settings, Award } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Monitoreo Remoto",
      description: "Supervisa tus sembríos desde cualquier lugar con nuestra app. Recibe alertas y reportes sobre el estado de tus cultivos en tiempo real.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Settings,
      title: "Escalabilidad para Chacras",
      description: "Integra sensores y módulos adicionales a medida que tu chacra crece, adaptándose a diferentes tipos y extensiones de cultivos.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "Soporte y Garantía",
      description: "2 años de garantía y soporte técnico local. Si algún equipo falla, lo reemplazamos sin costo para asegurar tu producción.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            ¿Por qué Elegir GreenGrassValley para tu Chacra?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Solución inteligente para monitorear y optimizar el crecimiento de tus cultivos, mejorando el rendimiento y reduciendo riesgos en tu chacra.
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
          <h3 className="text-2xl font-bold mb-4 font-poppins">¿Listo para optimizar tus sembríos?</h3>
          <p className="text-xl opacity-90 mb-6 font-inter">
            Únete a productores que ya mejoran el crecimiento y la salud de sus cultivos con monitoreo inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              🌱 Kit de Monitoreo
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              📱 App Gratuita para Productores
            </span>
            <span className="px-6 py-3 bg-white/20 rounded-lg font-semibold font-poppins">
              🚚 Instalación y Soporte en tu Chacra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
