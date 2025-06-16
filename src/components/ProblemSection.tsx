import { AlertTriangle, Home, Clock, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Home,
      title: "Falta de Supervisión en el Campo",
      description: "Muchos agricultores no pueden monitorear constantemente sus chacras, lo que dificulta detectar problemas a tiempo."
    },
    {
      icon: Clock,
      title: "Poco Tiempo y Recursos",
      description: "El trabajo agrícola demanda mucho tiempo y esfuerzo, y no siempre hay suficiente personal para vigilar el crecimiento de los cultivos."
    },
    {
      icon: TrendingDown,
      title: "Pérdidas por Plagas y Clima",
      description: "Sin monitoreo adecuado, las plagas o cambios climáticos afectan los sembríos, generando pérdidas económicas y menor producción."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            ¿Por qué es Difícil Monitorear los Sembríos en las Chacras?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Los agricultores buscan optimizar el crecimiento de sus cultivos, pero enfrentan obstáculos para monitorear de manera eficiente sus sembríos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center font-poppins">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed font-inter">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700 font-inter">
                <strong>Realidad:</strong> En muchas zonas agrícolas, menos del 20% de los sembríos cuentan con monitoreo constante, lo que reduce la productividad y aumenta el riesgo de pérdidas por factores no detectados a tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
