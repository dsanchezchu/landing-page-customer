import { Navbar } from "@/components/Navbar";
import { CheckCircle } from "lucide-react";
import { ParallaxBackground } from "@/effects/ParallaxBackground";


export default function Caracteristicas() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ParallaxBackground />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">Características del Proyecto</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-400">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
              <div>
                <span className="font-bold font-poppins text-green-700">Vivero modular de 1m²</span>
                <div className="text-gray-700 font-inter text-sm">Estructura adaptable a espacios pequeños, fácil de ensamblar y transportar.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
              <div>
                <span className="font-bold font-poppins text-green-700">Sensores accesibles</span>
                <div className="text-gray-700 font-inter text-sm">Monitoreo de humedad, temperatura y detección básica de plagas.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
              <div>
                <span className="font-bold font-poppins text-green-700">App móvil y alertas</span>
                <div className="text-gray-700 font-inter text-sm">Notificaciones y consejos personalizados para el cuidado de tus plantas.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
              <div>
                <span className="font-bold font-poppins text-green-700">Energía renovable opcional</span>
                <div className="text-gray-700 font-inter text-sm">Panel solar portátil para funcionamiento autónomo.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
              <div>
                <span className="font-bold font-poppins text-green-700">Materiales locales y económicos</span>
                <div className="text-gray-700 font-inter text-sm">Uso de PVC, madera tratada y metal galvanizado para bajo costo y fácil acceso.</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="Características vivero"
            className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
          />
        </div>
      </main>
    </div>
  );
}