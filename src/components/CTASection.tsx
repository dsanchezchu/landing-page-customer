import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hectares: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de cotización:", formData);
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Cotización */}
            <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Cotiza tu Instalación</CardTitle>
              <CardDescription>
                Recibe una propuesta personalizada para tu terreno en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hectáreas a Cultivar
                  </label>
                  <Input
                    type="number"
                    placeholder="Ej: 2.5"
                    value={formData.hectares}
                    onChange={(e) => setFormData({...formData, hectares: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ubicación (Distrito, Provincia)
                  </label>
                  <Input
                    type="text"
                    placeholder="Ej: Huancayo, Junín"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                >
                  Solicitar Cotización Gratuita
                </Button>
              </form>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                ✅ Sin compromiso • ✅ Respuesta en 24h • ✅ Visita técnica gratuita
              </div>
            </CardContent>
          </Card>

            {/* Descarga de App para Windows y Android */}
            <div className="space-y-8">
            {/* Opción Windows */}
            <Card className="shadow-xl">
              <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                <Download className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Descarga la App para Windows</CardTitle>
              <CardDescription>
                Controla y monitorea tu sistema GreenGrassValley desde tu PC Windows
              </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Funcionalidades incluidas:</h3>
                <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Monitoreo en tiempo real de temperatura y humedad
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Alertas automáticas ante condiciones críticas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Reportes detallados de rendimiento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Control remoto de sistemas de riego y climatización
                </li>
                </ul>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Descargar para Windows
              </Button>
              <div className="text-center text-xs text-gray-500">
                Versión 2.1.4 • Compatible con Windows 10 y Windows 11
              </div>
              </CardContent>
            </Card>

            {/* Opción Android */}
            <Card className="shadow-xl">
              <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                <Download className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Descarga la App para Android</CardTitle>
              <CardDescription>
                Lleva el control de tu sistema GreenGrassValley en tu dispositivo móvil Android
              </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Funcionalidades incluidas:</h3>
                <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Monitoreo en tiempo real de temperatura y humedad
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Notificaciones push ante condiciones críticas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Reportes y gráficos desde tu móvil
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Control remoto desde cualquier lugar
                </li>
                </ul>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Descargar para Android
              </Button>
              <div className="text-center text-xs text-gray-500">
                Versión 1.8.0 • Compatible con Android 8.0 o superior
              </div>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <Card>
              <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                ¿Necesitas ayuda?
              </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-green-600" />
                <span>+51 987 654 321</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-green-600" />
                <span>Lima, Perú</span>
              </div>
              <p className="text-sm text-gray-600">
                Nuestro equipo técnico está disponible de lunes a viernes de 8 AM a 6 PM
              </p>
              </CardContent>
            </Card>
            </div>
        </div>
      </div>
    </section>
  );
};
