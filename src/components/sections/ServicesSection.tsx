"use client"

import { Code, Factory } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, staggerContainer, staggerItem, cardReveal, getViewport } from "@/src/lib/animations"

// 📋 SERVICIOS PRINCIPALES - Basados en PDF institucional
const services = [
  {
    title: "Consultoría de Software",
    subtitle: "Software Factory",
    description:
      "Desarrollamos API's, o Interfaz de Programación de Aplicaciones, que permiten integrar distintos componentes: aplicaciones existentes entre sí, aplicaciones existentes con nuevas aplicaciones, o aplicaciones existentes con nuevos módulos. Creamos las soluciones que requieran nuestros clientes para optimizar la gestión y eliminar procesos manuales.",
    icon: Code,
    process: [
      "Estrategia",
      "Planificación", 
      "Diseño",
      "Desarrollo",
      "Prueba",
      "Lanzamiento"
    ]
  },
  {
    title: "Industrias 4.0",
    subtitle: "Sistemas de Proximidad / NFC / Controles de Accesos",
    description:
      "En el sector de Industria y Producción, la eficiencia y la seguridad son pilares fundamentales. Nuestra consultora de IT potencia su operación con soluciones tecnológicas de vanguardia. Implementamos tecnología NFC para una trazabilidad impecable de sus productos y activos, optimizando la gestión de inventario y garantizando la autenticidad. Fortalecemos su seguridad con controles de acceso inteligentes y automatizados, protegiendo sus instalaciones y personal.",
    icon: Factory,
    benefits: [
      "Trazabilidad impecable de productos y activos",
      "Optimización de gestión de inventario",
      "Controles de acceso inteligentes y automatizados",
      "Automatización de procesos clave",
      "Reducción de costos y minimización de errores"
    ]
  }
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
        {/* Título de la sección - MEJORADO */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={{ once: true }}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            Servicios Principales:
          </motion.h2>
        </motion.div>

        {/* Grid de servicios - MEJORADO */}
        <motion.div 
          className={STYLES.layout.gridServices}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardReveal}
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

                    {/* Subtítulo - ANIMADO */}
                    <motion.h4 
                      className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {service.subtitle}
                    </motion.h4>

                    {/* Descripción del servicio - ANIMADO */}
                    <motion.p 
                      className="text-dynamic-secondary mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Proceso o Beneficios - ANIMADO */}
                    {service.process && (
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <h5 className="font-semibold mb-2 text-dynamic-primary">Proceso de Software Factory:</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, idx) => (
                            <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                              {step}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {service.benefits && (
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <h5 className="font-semibold mb-2 text-dynamic-primary">Beneficios clave:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-dynamic-secondary flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
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