import { Shield, Cpu, Leaf, Zap } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
        <div className="p-4 bg-green-100 rounded-full">
          <Shield className="h-12 w-12 text-green-600" />
        </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
        Monitoreo Inteligente de Chacras GreenGrassValley
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
        Plataforma avanzada para supervisar y optimizar el crecimiento de cultivos en chacras. Tecnología que automatiza el riego, la nutrición y el monitoreo de condiciones para maximizar la producción de alimentos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Cpu className="h-6 w-6 text-blue-600" />
          </div>
          </div>
          <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
            Supervisión Automática
          </h3>
          <p className="text-gray-600 font-inter">
            Sensores inteligentes monitorean humedad, temperatura y nutrientes, activando sistemas de riego y fertilización según las necesidades del cultivo.
          </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="p-3 bg-green-100 rounded-lg">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          </div>
          <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
            Producción Sostenible y Eficiente
          </h3>
          <p className="text-gray-600 font-inter">
            Optimiza el uso de recursos y mejora la salud del suelo, promoviendo una agricultura más sostenible y aumentando el rendimiento de los alimentos en tu chacra.
          </p>
          </div>
        </div>
        </div>

        <div className="relative">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 font-poppins">Beneficios para tu Chacra</h3>
          
          <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="font-inter">Ahorro de agua y recursos</span>
            <span className="text-2xl font-bold font-playfair">30%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-3/5"></div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-inter">Producción anual optimizada</span>
            <span className="text-2xl font-bold font-playfair">+20%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-4/5"></div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-inter">Tiempo de supervisión diaria</span>
            <span className="text-2xl font-bold font-playfair">10min</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-1/5"></div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};
