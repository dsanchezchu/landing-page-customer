import { Navbar } from "@/components/Navbar";
import { ParallaxBackground } from "@/effects/ParallaxBackground";

export default function Problema() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ParallaxBackground />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">¿Cuál es el problema?</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-400">
          <p className="text-lg font-inter text-gray-700 mb-4">
            Las personas que desean cultivar en casa enfrentan limitaciones por espacio, falta de conocimiento para el cuidado adecuado de las plantas y dificultad para monitorear condiciones óptimas, lo que reduce la efectividad y sostenibilidad de sus cultivos.
          </p>
          <ul className="list-disc pl-6 text-gray-700 font-inter space-y-2">
            <li>Espacios pequeños en viviendas urbanas.</li>
            <li>Falta de experiencia en agricultura urbana.</li>
            <li>Dificultad para monitorear humedad, temperatura y plagas.</li>
            <li>Baja motivación por resultados poco visibles.</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <img
            src="https://www.serpar.gob.pe/wp-content/uploads/2022/09/Vivero_web.jpg"
            alt="Problema viveros urbanos"
            className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
          />
        </div>
      </main>
    </div>
  );
}