export const ColorPaletteSection = () => {
  const colors = [
    { name: "Verde Huerto", hex: "#16a34a", tailwind: "green-600", description: "Representa crecimiento y naturaleza" },
    { name: "Verde Fresco", hex: "#22c55e", tailwind: "green-500", description: "Frescura de verduras" },
    { name: "Azul Tecnología", hex: "#2563eb", tailwind: "blue-600", description: "Innovación e inteligencia" },
    { name: "Azul Confianza", hex: "#3b82f6", tailwind: "blue-500", description: "Confianza y estabilidad" },
    { name: "Verde Agua", hex: "#06b6d4", tailwind: "cyan-500", description: "Sistema hidropónico" },
    { name: "Gris Profesional", hex: "#1f2937", tailwind: "gray-800", description: "Profesionalismo" },
    { name: "Gris Equilibrio", hex: "#6b7280", tailwind: "gray-500", description: "Textos secundarios" },
    { name: "Blanco Puro", hex: "#ffffff", tailwind: "white", description: "Limpieza y claridad" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Paleta de Colores GreenGrassValley
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Colores inspirados en la naturaleza y tecnología que transmiten frescura, 
            crecimiento y confianza para tu huerto familiar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="text-center group">
              <div 
                className="w-20 h-20 mx-auto rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="mt-3">
                <h3 className="font-semibold text-gray-900 font-poppins text-sm">{color.name}</h3>
                <p className="text-xs text-gray-600 font-inter mt-1">{color.hex}</p>
                <p className="text-xs text-gray-500 font-inter">{color.tailwind}</p>
                <p className="text-xs text-gray-400 font-inter mt-2 leading-tight">{color.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins text-center">
            Uso Estratégico de Colores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-inter">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Verdes - Naturaleza y Crecimiento</h4>
              <p className="text-gray-600">Utilizados para elementos relacionados con plantas, crecimiento, beneficios naturales y botones de acción positiva.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Azules - Tecnología y Confianza</h4>
              <p className="text-gray-600">Para aspectos tecnológicos, app móvil, sistemas inteligentes y elementos que transmiten confianza.</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-500 mb-2">Azul Agua - Sistema Hidropónico</h4>
              <p className="text-gray-600">Específico para representar el agua, sistema hidropónico y aspectos relacionados con la eficiencia hídrica.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-600 mb-2">Grises - Balance y Elegancia</h4>
              <p className="text-gray-600">Para textos, fondos neutros y elementos que necesitan equilibrio visual sin competir con colores principales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
