import { Navbar } from "@/components/Navbar";

export default function Problema() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold font-poppins text-green-700 mb-6">¿Cuál es el problema?</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-400">
          <p className="text-lg font-inter text-gray-700 mb-4">
            Los agricultores que gestionan sembríos en chacras enfrentan dificultades para monitorear el crecimiento de los cultivos y asegurar condiciones óptimas, lo que puede afectar la productividad y calidad de los alimentos producidos.
          </p>
          <ul className="list-disc pl-6 text-gray-700 font-inter space-y-2">
            <li>Dificultad para supervisar grandes extensiones de terreno.</li>
            <li>Falta de acceso a información en tiempo real sobre humedad, temperatura y plagas.</li>
            <li>Limitaciones en la toma de decisiones rápidas ante cambios climáticos o problemas en el cultivo.</li>
            <li>Reducción en el rendimiento y calidad de los alimentos cosechados.</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cSp6Thn1hWNHHS1UctA7LErjd4bDJhXehQ&s"
            alt="Monitoreo de sembríos en chacras"
            className="rounded-xl mx-auto shadow-md max-h-72 object-cover"
          />
        </div>
      </main>
    </div>
  );
}