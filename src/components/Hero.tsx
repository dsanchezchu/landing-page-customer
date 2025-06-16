import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

// Inline SVG Leaf icon as a React component
const Leaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 22s16-4 20-20C6 2 2 22 2 22z" />
  </svg>
);



export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Background pattern and logo */}
      <div className="absolute inset-0 opacity-20 flex flex-col items-center pt-8">
        <Leaf className="h-8 w-8 md:h-10 md:w-10 text-green-600 drop-shadow-lg" />
        <span className="font-mogra text-2xl md:text-3xl font-extrabold text-emerald-700 tracking-tight drop-shadow-lg">
          HOGAR
          <span className="text-lime-500">VERDE</span>
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-mogra">
            <span className="block">GreenGrassValley</span>
            <span className="block text-green-200 font-sriracha">
              Monitorea tus cultivos de chacra
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 font-inter">
            Plataforma tecnológica para monitorizar el crecimiento de alimentos en tus sembríos de chacra.
            Supervisa el estado de tus cultivos en Trujillo usando tecnología inteligente y toma decisiones informadas para mejorar tu producción agrícola.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 font-poppins"
            >
              Quiero monitorear mi chacra
              <Quote className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 font-poppins"
            >
              Descargar App de Monitoreo
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-200 font-playfair">
                24/7
              </div>
              <div className="text-sm opacity-90 font-inter">
                Monitoreo automático
              </div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-200 font-playfair">
                100%
              </div>
              <div className="text-sm opacity-90 font-inter">
                Control de crecimiento de alimentos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-white rotate-90" />
      </div>
    </section>
  );
};
