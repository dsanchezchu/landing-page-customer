
import { ExternalLink, Type, Code, Smartphone } from "lucide-react";

export const LinksSection = () => {
  const linkCategories = [
    {
      icon: Type,
      title: "Tipografía",
      description: "Fuentes de Google Fonts utilizadas",
      links: [
        { name: "Mogra", url: "https://fonts.google.com/specimen/Mogra", description: "Fuente de marca" },
        { name: "Sriracha", url: "https://fonts.google.com/specimen/Sriracha", description: "Eslogan creativo" },
        { name: "Inter", url: "https://fonts.google.com/specimen/Inter", description: "Texto base" }
      ]
    },
    {
      icon: Code,
      title: "Herramientas de Desarrollo",
      description: "Frameworks y librerías utilizadas",
      links: [
        { name: "Tailwind CSS", url: "https://tailwindcss.com", description: "Framework de CSS utility-first" },
        { name: "shadcn/ui", url: "https://ui.shadcn.com", description: "Componentes de UI reutilizables" },
        { name: "React", url: "https://react.dev", description: "Librería de JavaScript para UI" }
      ]
    },
    {
      icon: Smartphone,
      title: "Tecnología Móvil",
      description: "Recursos para desarrollo de apps",
      links: [
        { name: "React Native", url: "https://reactnative.dev", description: "Framework para apps móviles" },
        { name: "Firebase", url: "https://firebase.google.com", description: "Backend para aplicaciones" },
        { name: "IoT Platform", url: "https://aws.amazon.com/iot/", description: "Servicios IoT para sensores" }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            Enlaces y Recursos GreenGrassValley
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-inter">
            Recursos técnicos utilizados en el desarrollo del sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <category.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-poppins text-sm">{category.title}</h3>
                  <p className="text-xs text-gray-600 font-inter">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 bg-white rounded-lg hover:bg-green-50 transition-colors group"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900 font-poppins group-hover:text-green-600 text-sm">
                        {link.name}
                      </h4>
                      <p className="text-xs text-gray-600 font-inter">{link.description}</p>
                    </div>
                    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-green-600" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};