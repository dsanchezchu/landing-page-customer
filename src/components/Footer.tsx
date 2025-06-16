import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold font-mogra">HOGARVERDE</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-inter">
              Sistema tecnológico para huertos urbanos domésticos que permite a las 
              familias trujillanas cultivar alimentos frescos y saludables en casa, 
              con tecnología inteligente adaptada a espacios reducidos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Enlaces Rápidos</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tu Huerto en Casa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kits Familiares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Familias Felices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quiero mi Huerto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte Familiar</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contacto</h3>
            <div className="space-y-3 font-inter">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-green-400 mr-3" />
                <span className="text-gray-400">+51 944 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-green-400 mr-3" />
                <span className="text-gray-400">contacto@hogarverde.pe</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-green-400 mr-3" />
                <span className="text-gray-400">Trujillo, La Libertad, Perú</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 font-poppins">Horario de Atención</h4>
              <p className="text-gray-400 text-sm font-inter">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-inter">
              © 2025 HOGARVERDE. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
