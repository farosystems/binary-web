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
            className="text-4xl md:text-5xl font-bold text-dynamic-primary mb-8 relative"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={{ once: true }}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            Nos especializamos en:
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.h2>
        </motion.div>

        {/* Servicios con Layout Lado a Lado */}
        <div className="space-y-32">
          
          {/* Servicio 1: Software Factory - Contenido Izq, Visual Der */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contenido */}
            <motion.div 
              className="space-y-6 lg:w-full"
              variants={cardReveal}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary">Consultoría de Software</h3>
                  <p className="text-blue-400 font-medium">Software Factory</p>
                </div>
              </div>
              
              <p className="text-dynamic-secondary text-lg leading-relaxed">
                Desarrollamos APIs e integraciones que conectan aplicaciones existentes con nuevas soluciones, 
                optimizando la gestión y eliminando procesos manuales.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {services[0].process.map((step, idx) => (
                  <span key={idx} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {step}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Ilustración Consultoría */}
            <motion.div 
              className="relative lg:w-full"
              variants={cardReveal}
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/illustrations/consultoria.svg" 
                  alt="Ilustración Consultoría de Software"
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Servicio 2: NFC/Industrias 4.0 - Visual Izq, Contenido Der */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contenido */}
            <motion.div 
              className="space-y-6 lg:order-2 lg:w-full"
              variants={cardReveal}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary">Industrias 4.0</h3>
                  <p className="text-blue-400 font-medium">Sistemas NFC / Controles de Acceso</p>
                </div>
              </div>
              
              <p className="text-dynamic-secondary text-lg leading-relaxed">
                Implementamos tecnología NFC para trazabilidad impecable y controles de acceso inteligentes, 
                fortaleciendo la seguridad y optimizando operaciones industriales.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services[1].benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-dynamic-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ilustración Industrias 4.0 */}
            <motion.div 
              className="relative lg:order-1 lg:w-full"
              variants={cardReveal}
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/illustrations/industrias4.svg" 
                  alt="Ilustración Industrias 4.0"
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}