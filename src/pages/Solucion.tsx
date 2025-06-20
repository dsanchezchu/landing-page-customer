import { Navbar } from "@/components/Navbar";
import { Leaf, Droplet, Thermometer } from "lucide-react";
import { ParallaxBackground } from "@/effects/ParallaxBackground";

export default function Solucion() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ParallaxBackground />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">Nuestra Solución</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-lime-400">
          <p className="text-lg font-inter text-gray-700 mb-4">
            Proponemos un vivero modular de 1 metro cuadrado, con soporte para macetas y sensores inteligentes (humedad, temperatura y detección básica de plagas) que envían alertas para el cuidado oportuno de las plantas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <Leaf className="h-10 w-10 text-green-500 mb-2" />
              <span className="font-bold font-poppins text-green-700">Diseño Modular</span>
              <span className="text-sm text-gray-600 font-inter text-center">Adaptable a espacios pequeños y fácil de instalar.</span>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="h-10 w-10 text-blue-400 mb-2" />
              <span className="font-bold font-poppins text-green-700">Sensores Inteligentes</span>
              <span className="text-sm text-gray-600 font-inter text-center">Monitorea humedad, temperatura y plagas en tiempo real.</span>
            </div>
            <div className="flex flex-col items-center">
              <Thermometer className="h-10 w-10 text-red-400 mb-2" />
              <span className="font-bold font-poppins text-green-700">Alertas y App</span>
              <span className="text-sm text-gray-600 font-inter text-center">Recibe notificaciones y consejos en tu celular.</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <img
            src="https://i.ytimg.com/vi/4OIOLouV9LY/maxresdefault.jpg"
            alt="Solución vivero modular"
            className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
          />
        </div>
      </main>
    </div>
  );
}