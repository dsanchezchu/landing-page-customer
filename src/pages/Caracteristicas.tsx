import { Navbar } from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

export default function Caracteristicas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
      <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">Características del Proyecto</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-400">
        <ul className="space-y-6">
        <li className="flex items-start gap-3">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
          <div>
          <span className="font-bold font-poppins text-green-700">Monitoreo de chacras a gran escala</span>
          <div className="text-gray-700 font-inter text-sm">Supervisión de grandes extensiones de cultivo para optimizar el crecimiento de alimentos.</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
          <div>
          <span className="font-bold font-poppins text-green-700">Sensores robustos y distribuidos</span>
          <div className="text-gray-700 font-inter text-sm">Medición de humedad, temperatura y detección de plagas en diferentes zonas del sembrío.</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
          <div>
          <span className="font-bold font-poppins text-green-700">Plataforma web y alertas</span>
          <div className="text-gray-700 font-inter text-sm">Notificaciones y reportes en tiempo real para la gestión eficiente de los cultivos.</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
          <div>
          <span className="font-bold font-poppins text-green-700">Energía solar para zonas rurales</span>
          <div className="text-gray-700 font-inter text-sm">Paneles solares para alimentar sensores y equipos en áreas sin acceso a red eléctrica.</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1" />
          <div>
          <span className="font-bold font-poppins text-green-700">Materiales resistentes y accesibles</span>
          <div className="text-gray-700 font-inter text-sm">Uso de materiales duraderos y económicos para soportar condiciones de campo.</div>
          </div>
        </li>
        </ul>
      </div>
      <div className="text-center mt-8">
        <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Monitoreo de chacras"
        className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
        />
      </div>
      </main>
    </div>
  );
}