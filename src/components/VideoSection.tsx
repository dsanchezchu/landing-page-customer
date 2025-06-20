import React from "react";
import '@justinribeiro/lite-youtube';

export const VideoSection = () => (
  <section className="relative py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-200 via-lime-300 to-green-400 min-h-[340px]">
    {/* Precarga de imágenes para evitar parpadeos */}
    <link rel="preload" as="image" href="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=180&q=80" />
    <link rel="preload" as="image" href="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=180&q=80" />
    <link rel="preload" as="image" href="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=180&q=80" />
    <link rel="preload" as="image" href="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=180&q=80" />
    {/* Fondo dinámico con imágenes reales de frutas y verduras con detalles tecnológicos */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute left-8 top-10 animate-float-slow">
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=180&q=80"
          alt="Manzana tecnológica"
          className="w-20 h-20 object-cover rounded-full border-4 border-green-400 shadow-xl"
          style={{ filter: "drop-shadow(0 0 16px #22c55e88)" }}
          loading="eager"
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="60" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="8 6" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute right-12 top-20 animate-float-medium">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwLJJrGKaaHzqzz2YwnZkbNK-JsBdoazv3g&s"
          alt="Zanahoria tecnológica"
          className="w-16 h-24 object-cover rounded-2xl border-4 border-yellow-300 shadow-xl"
          style={{ filter: "drop-shadow(0 0 12px #fde04788)" }}
          loading="eager"
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 164">
          <rect x="10" y="80" width="108" height="8" rx="4" fill="#22c55e" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute left-24 bottom-10 animate-float-fast">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=180&q=80"
          alt="Brócoli tecnológico"
          className="w-16 h-16 object-cover rounded-full border-4 border-lime-400 shadow-xl"
          style={{ filter: "drop-shadow(0 0 12px #4ade8088)" }}
          loading="eager"
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="none" stroke="#a3e635" strokeWidth="2" strokeDasharray="6 8" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute right-24 bottom-8 animate-float-slow">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTie6jAYhNbFlFzABmtF_dn7rC5iOTFhNFwyw&s"
          alt="Tomate tecnológico"
          className="w-14 h-14 object-cover rounded-full border-4 border-red-400 shadow-xl"
          style={{ filter: "drop-shadow(0 0 10px #ef444488)" }}
          loading="eager"
        />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 96 96">
          <rect x="20" y="80" width="56" height="6" rx="3" fill="#22c55e" opacity="0.5" />
        </svg>
      </div>
      {/* Luz suave central */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[180px] rounded-full bg-white/20 blur-3xl" />
      </div>
    </div>
    {/* Recuadro central con glassmorphism */}
    <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-5 md:p-8 flex flex-col items-center max-w-xl w-full border-4 border-green-300/60">
      <h2 className="text-2xl md:text-3xl font-extrabold font-poppins text-green-700 mb-4 text-center drop-shadow-lg">
        Mira nuestro huerto en acción
      </h2>
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-green-200/70 mb-2">
        <lite-youtube 
          videoid="_XZ8a0O_Uw4" 
          autoplay 
          params="autoplay=1&mute=1" 
        ></lite-youtube>
      </div>
      <p className="mt-1 text-green-800 font-inter text-base text-center font-medium drop-shadow-sm">
        Descubre cómo la tecnología transforma el cultivo de frutas y vegetales frescos.
      </p>
    </div>
    {/* Animaciones flotantes */}
    <style>{`
      .animate-float-slow {
        animation: floatY 9s ease-in-out infinite;
      }
      .animate-float-medium {
        animation: floatY 7s ease-in-out infinite;
      }
      .animate-float-fast {
        animation: floatY 5s ease-in-out infinite;
      }
      @keyframes floatY {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-18px); }
      }
    `}</style>
  </section>
);