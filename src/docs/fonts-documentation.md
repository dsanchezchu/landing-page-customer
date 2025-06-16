
# Documentación de Fuentes - UrbanGrow Trujillo

## Fuentes Configuradas

### 1. Mogra
- **Uso**: Títulos principales y nombre de la marca
- **Características**: Fuente decorativa con estilo redondeado y llamativo
- **Implementación**: `font-mogra`
- **Ejemplo**: Usado en "UrbanGrow" del hero

### 2. Sriracha
- **Uso**: Subtítulos creativos y elementos destacados
- **Características**: Fuente manuscrita casual y amigable
- **Implementación**: `font-sriracha`
- **Ejemplo**: Usado en "Trujillo" del hero

### 3. Inter
- **Uso**: Texto base, párrafos y contenido general
- **Características**: Fuente sans-serif moderna y legible
- **Implementación**: `font-inter` o `font-sans`
- **Pesos**: 300, 400, 500, 600, 700

### 4. Poppins
- **Uso**: Botones, elementos de interfaz y textos de acción
- **Características**: Fuente sans-serif geométrica y moderna
- **Implementación**: `font-poppins` o `font-display`
- **Pesos**: 300, 400, 500, 600, 700, 800

### 5. Playfair Display
- **Uso**: Números destacados, estadísticas y elementos elegantes
- **Características**: Fuente serif clásica y elegante
- **Implementación**: `font-playfair` o `font-heading`
- **Pesos**: 400, 500, 600, 700

## Jerarquía Tipográfica para UrbanGrow Trujillo

```css
/* Títulos principales de marca */
.brand-title { font-family: Mogra; }

/* Subtítulos creativos */
.creative-subtitle { font-family: Sriracha; }

/* Títulos de sección */
.section-title { font-family: Poppins; font-weight: 600-700; }

/* Texto base */
.body-text { font-family: Inter; font-weight: 400; }

/* Botones y CTAs */
.cta-text { font-family: Poppins; font-weight: 500-600; }

/* Números y estadísticas */
.stats-number { font-family: Playfair Display; font-weight: 600-700; }
```

## Configuración en Tailwind

Las fuentes están configuradas en `tailwind.config.ts` con las siguientes clases:

- `font-mogra` - Mogra
- `font-sriracha` - Sriracha  
- `font-inter` - Inter
- `font-poppins` - Poppins
- `font-playfair` - Playfair Display
- `font-sans` - Inter (por defecto)
- `font-display` - Poppins
- `font-heading` - Playfair Display

## Optimización

- Se utiliza `preconnect` para optimizar la carga de Google Fonts
- `display=swap` para evitar el bloqueo de renderizado
- Todas las fuentes están configuradas con fallbacks apropiados

## Uso Recomendado por Componente de Viveros Urbanos

- **Hero**: Mogra + Sriracha + Inter
- **Títulos de sección**: Poppins
- **Texto descriptivo**: Inter
- **Botones**: Poppins
- **Estadísticas**: Playfair Display
- **Formularios**: Inter

## Paleta de Colores del Sistema

### Colores Principales
- **Verde Primario**: #16a34a (green-600) - Representa crecimiento y naturaleza
- **Azul Secundario**: #2563eb (blue-600) - Tecnología e innovación
- **Gris Oscuro**: #1f2937 (gray-800) - Profesionalismo
- **Blanco**: #ffffff - Limpieza y claridad

### Colores de Apoyo
- **Verde Claro**: #22c55e (green-500) - Frescura
- **Azul Claro**: #3b82f6 (blue-500) - Confianza
- **Gris Medio**: #6b7280 (gray-500) - Equilibrio
- **Verde Agua**: #06b6d4 (cyan-500) - Hidroponia

## Enlaces y Recursos

### Fuentes
- [Google Fonts](https://fonts.google.com) - Fuente de todas las tipografías
- [Mogra](https://fonts.google.com/specimen/Mogra) - Fuente de títulos principales
- [Sriracha](https://fonts.google.com/specimen/Sriracha) - Fuente de subtítulos
- [Inter](https://fonts.google.com/specimen/Inter) - Fuente de texto base
- [Poppins](https://fonts.google.com/specimen/Poppins) - Fuente de UI
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Fuente de números

### Herramientas de Diseño
- [Tailwind CSS](https://tailwindcss.com) - Framework de CSS
- [shadcn/ui](https://ui.shadcn.com) - Componentes de UI
- [Lucide Icons](https://lucide.dev) - Iconografía
- [Radix UI](https://www.radix-ui.com) - Primitivos de UI

### Inspiración de Colores
- [Coolors.co](https://coolors.co) - Generador de paletas
- [Adobe Color](https://color.adobe.com) - Rueda de colores
- [Material Design Colors](https://material.io/resources/color) - Guía de colores

Esta documentación asegura la consistencia visual y tipográfica del sistema de viveros urbanos UrbanGrow Trujillo.