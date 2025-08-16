"use client"

import { useState, useEffect } from "react"
import { FileText, Sparkles, Star, ArrowLeft, CheckCircle, Users, Zap, Shield, Database, Heart, BarChart3, FolderOpen } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

// 📦 DATOS DE PRODUCTOS - Lista plana para grid compacto
const products = [
  {
    name: "B-Contracts",
    subtitle: "Gestor Inteligente de Documentación Contractual",
    description: "Repositorio único de documentos legales, impositivos y de gestión, exigibles entre contratistas y contratantes",
    icon: Shield,
    category: "Gestión",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "B-Documents", 
    subtitle: "Gestor Inteligente de Documentos Digitalizados",
    description: "Repositorio único de cualquier tipo de documento digital de una organización. Buscador por etiqueta electrónica de documentos digitales",
    icon: FolderOpen,
    category: "Gestión",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "B-Report",
    subtitle: "Generador instantáneo de Reportes", 
    description: "Genera Reportes instantáneamente con fotos e ingreso de datos básicos, y templates parametrizables. Recepciona, Deriva, y efectúa Seguimiento de Reportes en línea",
    icon: BarChart3,
    category: "Gestión", 
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "CIS",
    subtitle: "Credencial Inteligente de Salud",
    description: "Reducción de costos y tiempos en Recepción de Pacientes. Visualización inmediata, por personal Asistencial Autorizado, de Factores de Riesgo, Pre-existencias, Datos clínicos sensibles para atención en Urgencias",
    icon: Heart,
    category: "Salud",
    color: "from-green-500 to-green-700"
  },
  {
    name: "LEV",
    subtitle: "Libreta Electrónica de Vacunación",
    description: "Seguimiento al Calendario Nacional de Vacunación a lo largo de la vida. Genera censos nominales de vacunación, proporciona información a nivel municipal, provincial y nacional con datos que se capturan una sola vez",
    icon: Zap,
    category: "Salud",
    color: "from-emerald-500 to-emerald-700"
  },
  {
    name: "SIRHBIAP",
    subtitle: "Sistema Integrado de Recursos Humanos + Business Intelligence para Administración Pública",
    description: "Consolida y explota la información de los liquidadores de haberes locales para presupuesto de gastos en personal, simulación salarial, detección de empleo múltiple, análisis salarial y ocupacional, y estadísticas salariales y ocupacionales",
    icon: Users,
    category: "RRHH",
    color: "from-purple-500 to-purple-700"
  }
]

// Componente compacto de producto
function CompactProductCard({ product, index }: { product: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = product.icon

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card className="bg-dynamic-secondary border-dynamic shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-4 flex flex-col h-full">
        {/* Header compacto */}
        <div className="flex items-start space-x-3 mb-3">
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br flex-shrink-0", product.color)}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-dynamic-primary truncate">
                {product.name}
              </h3>
              <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                {product.category}
              </Badge>
            </div>
            <p className="text-xs text-blue-400 font-medium leading-tight line-clamp-2">
              {product.subtitle}
            </p>
          </div>
        </div>

        {/* Contenido expandible */}
        <motion.div
          initial={false}
          animate={{ 
            maxHeight: isExpanded ? "200px" : "0px",
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? "8px" : "0px",
            marginBottom: isExpanded ? "12px" : "0px"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-xs leading-relaxed text-dynamic-secondary">
            {product.description}
          </p>
        </motion.div>

        {/* Botón toggle - siempre al final */}
        <button
          onClick={toggleExpanded}
          className="w-full mt-auto text-dynamic-primary px-3 py-2 rounded-md font-medium transition-all duration-200 text-xs flex items-center justify-center space-x-2 hover:text-blue-500"
        >
          <span>{isExpanded ? "Menos" : "Más"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </CardContent>
    </Card>
  )
}

export default function ProductsSection() {
  return (
    <section 
      id="productos" 
      className={cn(
        STYLES.layout.sectionFullScreen
      )}
    >
      {/* Contenedor principal */}
      <div className={STYLES.layout.container}>
        {/* Título de la sección */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-dynamic-primary mb-8 relative text-center"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={getViewport()}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            Nuestra Suite de Productos
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.h2>
          <motion.p 
            className="text-dynamic-secondary mb-2"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            6 soluciones tecnológicas especializadas para diferentes sectores
          </motion.p>
          <motion.p 
            className="text-sm text-dynamic-secondary/70"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
          >
            Haz clic en "Más" para conocer los detalles de cada producto
          </motion.p>
        </motion.div>

        {/* Grid compacto 2x3 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={getViewport()}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <CompactProductCard product={product} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}