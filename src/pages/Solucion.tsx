import { Navbar } from "@/components/Navbar";
import { Leaf, Droplet, Thermometer } from "lucide-react";

export default function Solucion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">Nuestra Solución</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-lime-400">
          <p className="text-lg font-inter text-gray-700 mb-4">
            Proponemos un sistema de monitoreo inteligente para sembríos en chacras, equipado con sensores de humedad, temperatura y detección básica de plagas. Estos sensores permiten supervisar el crecimiento de los cultivos y envían alertas para un manejo oportuno, optimizando la producción de alimentos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <Leaf className="h-10 w-10 text-green-500 mb-2" />
              <span className="font-bold font-poppins text-green-700">Implementación Escalable</span>
              <span className="text-sm text-gray-600 font-inter text-center">Adaptable a diferentes extensiones de terreno agrícola.</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="h-10 w-10 text-blue-400 mb-2" />
              <span className="font-bold font-poppins text-green-700">Sensores Inteligentes</span>
              <span className="text-sm text-gray-600 font-inter text-center">Monitorea humedad, temperatura y plagas en tiempo real en los cultivos.</span>
            </div>
            <div className="flex flex-col items-center">
              <Thermometer className="h-10 w-10 text-red-400 mb-2" />
              <span className="font-bold font-poppins text-green-700">Alertas y Plataforma</span>
              <span className="text-sm text-gray-600 font-inter text-center">Recibe notificaciones y recomendaciones para el manejo agrícola desde cualquier lugar.</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <img
            src="https://i.ytimg.com/vi/4OIOLouV9LY/maxresdefault.jpg"
            alt="Monitoreo de sembríos en chacras"
            className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
          />
        </div>
      </main>
    </div>
  );
}