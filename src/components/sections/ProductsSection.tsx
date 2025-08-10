"use client"

import { useState, useEffect } from "react"
import { FileText, Sparkles, Star, ArrowLeft, CheckCircle, Users, Zap, Shield, Database, Heart, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"

// 📦 DATOS DE PRODUCTOS - Parametrizados para fácil modificación
const products = [
  {
    name: "B-Contracts",
    subtitle: "Gestor Inteligente de Documentación Contractual",
    description:
      "Repositorio único de documentos legales, impositivos y de gestión, exigibles entre contratistas y contratantes",
    icon: FileText,
  },
  {
    name: "B-Documents",
    subtitle: "Gestor Inteligente de Documentos Digitalizados",
    description:
      "Repositorio único de cualquier tipo de documento digital de una organización. Buscador por etiqueta electrónica de documentos digitales",
    icon: FileText,
  },
  {
    name: "B-Report",
    subtitle: "Generador instantáneo de Reportes",
    description:
      "Genera Reportes instantáneamente con fotos e ingreso de datos básicos, y templates parametrizables. Recepciona, Deriva, y efectúa Seguimiento de Reportes en línea",
    icon: FileText,
  },
  {
    name: "CIS",
    subtitle: "Credencial Inteligente de Salud",
    description:
      "Reducción de costos y tiempos en Recepción de Pacientes. Visualización inmediata, por personal Asistencial Autorizado, de Factores de Riesgo, Pre-existencias, Datos clínicos sensibles para atención en Urgencias",
    icon: FileText,
  },
  {
    name: "LEV",
    subtitle: "Libreta Electrónica de Vacunación",
    description:
      "Seguimiento al Calendario Nacional de Vacunación a lo largo de la vida. Genera censos nominales de vacunación, proporciona información a nivel municipal, provincial y nacional con datos que se capturan una sola vez",
    icon: FileText,
  },
  {
    name: "SIRHBIAP",
    subtitle: "Sistema Integrado de Recursos Humanos + Business Intelligence para Administración Pública",
    description:
      "Consolida y explota la información de los liquidadores de haberes locales para presupuesto de gastos en personal, simulación salarial, detección de empleo múltiple, análisis salarial y ocupacional, y estadísticas salariales y ocupacionales",
    icon: FileText,
  },
]

// Componente individual FlipCard
function FlipCard({ product, index }: { product: typeof products[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const IconComponent = product.icon

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleFlip = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false)
    }
  }

  return (
    <div 
      className="h-80 perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Cara frontal */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-dynamic-secondary border-dynamic shadow-lg hover:shadow-xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 flex flex-col h-full justify-center items-center text-center">
            {/* Icono del producto */}
            <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            {/* Nombre del producto */}
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-dynamic-primary break-words max-w-full">
              {product.name}
            </h3>

            {/* Botón de acción */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm flex-shrink-0"
              onClick={handleFlip}
            >
              Ver detalles
            </button>
          </CardContent>
        </Card>

        {/* Cara posterior */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-dynamic-secondary border-dynamic shadow-lg overflow-hidden">
          <CardContent className="p-4 sm:p-6 flex flex-col h-full overflow-y-auto">
            {/* Botón volver - solo visible en mobile */}
            <button
              onClick={handleFlip}
              className="md:hidden self-start mb-3 p-2 rounded-full hover:bg-dynamic-muted transition-colors duration-200 flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-dynamic-secondary" />
            </button>

            {/* Icono del producto */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Nombre del producto */}
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-dynamic-primary break-words">
              {product.name}
            </h3>

            {/* Subtítulo */}
            <p className="text-xs sm:text-sm text-dynamic-secondary mb-3 sm:mb-4 font-medium break-words">
              {product.subtitle}
            </p>

            {/* Descripción del producto */}
            <p className="text-xs sm:text-sm leading-relaxed text-dynamic-secondary flex-1 break-words overflow-hidden">
              {product.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section 
      id="productos" 
      className={cn(
        STYLES.layout.sectionLarge
      )}
    >
      {/* Contenedor principal */}
      <div className={STYLES.layout.container}>
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4">
            Suite de productos
          </h2>
          <p className="text-dynamic-secondary mb-2">
            Soluciones tecnológicas especializadas para tu empresa
          </p>
          <p className="text-sm text-dynamic-secondary/70">
            {/* Instrucción responsive */}
            <span className="hidden md:inline">Pasa el mouse sobre las cards para ver los detalles</span>
            <span className="md:hidden">Toca "Ver detalles" para más información</span>
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <FlipCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}