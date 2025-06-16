import { AlertTriangle, Home, Clock, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Home,
      title: "Sin Espacio para Huerto",
      description: "Las familias trujillanas viven en espacios reducidos sin lugar para cultivar sus propios alimentos frescos."
    },
    {
      icon: Clock,
      title: "No Tengo Tiempo ni Conocimiento",
      description: "Entre trabajo y familia, no queda tiempo para aprender sobre huertos tradicionales que requieren mucho cuidado."
    },
    {
      icon: TrendingDown,
      title: "Verduras Caras en el Mercado",
      description: "El costo de verduras frescas sube cada mes y la familia depende completamente de comprar todo en el mercado."
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
            ¿Por qué las Familias no Tienen su Propio Huerto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Las familias trujillanas quieren alimentos frescos y saludables para sus hijos, 
            pero enfrentan obstáculos para tener su huerto familiar.
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
                <strong>Realidad:</strong> En Trujillo, solo el 12% de las familias urbanas 
                tienen algún tipo de huerto en casa, perdiendo la oportunidad de tener alimentos 
                frescos y ahorrar hasta S/250 mensuales en verduras para la familia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
