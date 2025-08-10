"use client"

import { FileText, Link, Smartphone, Building } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"

// 📋 DATOS DE SERVICIOS - Parametrizados para fácil modificación
const services = [
  {
    title: "Gestión Digital",
    description:
      "Plataforma para recibir, controlar, administrar, e historiar documentos digitales en legajos digitales que facilitan la gestión...",
    icon: FileText,
  },
  {
    title: "IoT - Internet de las Cosas",
    subtitle: "IoT para Equipos y Máquinas",
    description:
      "Reporte automático de desperfectos en el funcionamiento de máquinas y equipos conectados al sistema de gestión...",
    icon: Link,
  },
  {
    title: "NFC - Proximidad",
    subtitle: "Proximidad aplicada a la calidad de servicio",
    description:
      "Aplicaciones que permiten identificar personas; proveer datos vitales en momentos críticos; registrar suministros valiosos...",
    icon: Smartphone,
  },
  {
    title: "Smart City",
    subtitle: "Gestión inteligente de ciudades",
    description:
      "Aplicaciones que acercan a los ciudadanos a las administraciones de gobiernos, ciudades, municipios, organizaciones...",
    icon: Building,
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className={cn(
        STYLES.layout.sectionFullScreen,
        "relative overflow-hidden"
      )}
    >

      {/* Contenedor principal */}
      <div className={cn(STYLES.layout.container, "relative z-10")}>
        {/* Título de la sección - ANIMADO */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos especializamos en:
          </motion.h2>
        </motion.div>

        {/* Grid de servicios - ANIMADO con stagger */}
        <motion.div 
          className={STYLES.layout.gridServices}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-dynamic-muted border-dynamic hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full group">
                  <CardContent className="p-6 h-full flex flex-col">
                    
                    {/* Header del servicio con icono - ANIMADO */}
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold underline decoration-2 underline-offset-4 decoration-dynamic-soft text-dynamic-primary group-hover:decoration-blue-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Subtítulo opcional - ANIMADO */}
                    {service.subtitle && (
                      <motion.h4 
                        className="text-lg font-semibold mb-3 text-dynamic-secondary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {service.subtitle}
                      </motion.h4>
                    )}

                    {/* Descripción del servicio - ANIMADO */}
                    <motion.p 
                      className="text-dynamic-secondary mb-4 leading-relaxed flex-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Link para ver más - ANIMADO */}
                    <motion.button 
                      className="text-dynamic-muted hover:text-dynamic-primary font-medium transition-all duration-300 self-start"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        ver más
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}