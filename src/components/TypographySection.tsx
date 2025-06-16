export const TypographySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Tipografía GreenGrassValley
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Sistema tipográfico cuidadosamente seleccionado para transmitir calidez familiar, 
            confianza tecnológica y claridad en la comunicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fuentes Principales */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
              Fuentes Principales
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-mogra text-2xl text-gray-900 mb-2">GreenGrassValley - Mogra</h4>
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Uso:</strong> Nombre de la marca únicamente<br/>
                  <strong>Características:</strong> Fuente decorativa, amigable y memorable<br/>
                  <strong>Clase:</strong> <code>font-mogra</code>
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-sriracha text-xl text-gray-900 mb-2">Tu súper huerto en casa - Sriracha</h4>
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Uso:</strong> Eslogan y subtítulos creativos<br/>
                  <strong>Características:</strong> Manuscrita, cálida y familiar<br/>
                  <strong>Clase:</strong> <code>font-sriracha</code>
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-poppins text-lg font-semibold text-gray-900 mb-2">Títulos de Sección - Poppins</h4>
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Uso:</strong> Títulos H2, H3, botones y elementos UI<br/>
                  <strong>Características:</strong> Moderna, geométrica y profesional<br/>
                  <strong>Clase:</strong> <code>font-poppins</code>
                </p>
              </div>
            </div>
          </div>

          {/* Fuentes Secundarias */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
              Fuentes Secundarias
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gray-500 pl-4">
                <p className="font-inter text-base text-gray-900 mb-2">
                  Texto base y párrafos - Inter
                </p>
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Uso:</strong> Todo el texto de lectura, descripciones<br/>
                  <strong>Características:</strong> Altamente legible, neutral<br/>
                  <strong>Clase:</strong> <code>font-inter</code> o <code>font-sans</code>
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">S/185</div>
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Uso:</strong> Números, estadísticas y precios<br/>
                  <strong>Características:</strong> Elegante, serif clásica<br/>
                  <strong>Clase:</strong> <code>font-playfair</code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Jerarquía Tipográfica */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 font-poppins">
            Jerarquía Tipográfica para GreenGrassValley
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-mogra text-4xl text-green-600">GreenGrassValley</span>
              <span className="text-sm text-gray-500 font-inter">H1 Marca - Mogra Bold</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-sriracha text-2xl text-green-500">Tu súper huerto en casa</span>
              <span className="text-sm text-gray-500 font-inter">Eslogan - Sriracha</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-poppins text-xl font-bold text-gray-900">Título de Sección</span>
              <span className="text-sm text-gray-500 font-inter">H2 - Poppins Bold</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-poppins text-lg font-semibold text-gray-900">Subtítulo</span>
              <span className="text-sm text-gray-500 font-inter">H3 - Poppins Semibold</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-inter text-base text-gray-700">Texto base para párrafos y descripciones</span>
              <span className="text-sm text-gray-500 font-inter">Párrafo - Inter Regular</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-playfair text-2xl font-bold text-green-600">S/899</span>
              <span className="text-sm text-gray-500 font-inter">Números - Playfair Bold</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
