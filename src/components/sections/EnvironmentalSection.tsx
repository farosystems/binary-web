"use client"

import { useState } from "react"
import { Leaf, FileText, Truck, Play, X } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion, AnimatePresence } from "framer-motion"
import { textReveal, fadeInUp, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

const environmentalSolutions = [
  {
    title: "B-Contracts",
    subtitle: "Gestión Digital Paper-Less",
    description:
      "Esta solución permite gestionar la documentación de una organización en forma totalmente digital para optimizar su gestión, lo que permite eliminar todo tipo de soporte impreso de documentación (legajos, carpetas, emails, planillas, formularios, constancias, documentos, comprobantes, pólizas, otros) contribuyendo de esta manera al cuidado del medio ambiente bajo el concepto de \"paper less\".",
    icon: FileText,
    benefits: [
      "Eliminación total de documentos impresos",
      "Optimización de la gestión organizacional",
      "Contribución al cuidado del medio ambiente",
      "Gestión digital integral de legajos y documentos",
      "Reducción de costos operativos"
    ]
  },
  {
    title: "Transitabilidad de Caminos de Tierra",
    subtitle: "Solución Ecológica y Duradera",
    description:
      "Transformamos los desafíos del terreno en caminos rurales duraderos y accesibles. Nuestro innovador producto no contaminante petrifica los caminos de tierra, creando superficies firmes y transitables con una estabilidad que dura entre 8 y 10 años sin necesidad de mantenimiento constante. Utilizando nuestro producto se suprimen el polvo, el barro y los baches, y se asegura una conectividad rural eficiente y sostenible.",
    icon: Truck,
    benefits: [
      "Duración de 8 a 10 años sin mantenimiento",
      "Producto 100% no contaminante",
      "Eliminación de polvo, barro y baches",
      "Conectividad rural eficiente",
      "Solución sostenible y ecológica"
    ]
  }
]

export default function EnvironmentalSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section 
      id="medio-ambiente" 
      className={cn(
        STYLES.layout.sectionFullScreen,
        "bg-dynamic-primary"
      )}
    >
      <div className={STYLES.layout.container}>
        {/* Header */}
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
            Compromiso Ambiental
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary max-w-3xl mx-auto"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            Soluciones innovadoras y sostenibles que contribuyen al cuidado del planeta
          </motion.p>
        </motion.div>

        {/* Soluciones Ambientales con Layout Lado a Lado */}
        <div className="space-y-32 mb-16">
          
          {/* Solución 1: B-Contracts - Contenido Izq, Visual Der */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
          >
            {/* Contenido */}
            <motion.div 
              className="space-y-6 lg:w-full"
              variants={staggerItem}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary">B-Contracts</h3>
                  <p className="text-blue-400 font-medium">Gestión Digital Paper-Less</p>
                </div>
              </div>
              
              <p className="text-dynamic-secondary text-lg leading-relaxed">
                Gestión 100% digital de documentación organizacional, eliminando completamente el papel 
                y contribuyendo al cuidado ambiental bajo el concepto "paper-less".
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {environmentalSolutions[0].benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-dynamic-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ilustración B-Contracts */}
            <motion.div 
              className="relative lg:w-full"
              variants={staggerItem}
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/illustrations/bcontracts.svg" 
                  alt="Ilustración B-Contracts Paper-Less"
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Solución 2: Caminos - Visual Izq, Contenido Der */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport()}
          >
            {/* Contenido */}
            <motion.div 
              className="space-y-6 lg:order-2 lg:w-full"
              variants={staggerItem}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary">Transitabilidad de Caminos</h3>
                  <p className="text-blue-400 font-medium">Solución Ecológica y Duradera</p>
                </div>
              </div>
              
              <p className="text-dynamic-secondary text-lg leading-relaxed">
                Producto no contaminante que petrifica caminos de tierra, creando superficies duraderas 
                de 8-10 años sin mantenimiento, eliminando polvo, barro y baches.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {environmentalSolutions[1].benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-dynamic-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Botón Ver Demo */}
              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" fill="currentColor" />
                <span>Ver Demo</span>
              </motion.button>
            </motion.div>

            {/* Ilustración Transitabilidad */}
            <motion.div 
              className="relative lg:order-1 lg:w-full"
              variants={staggerItem}
            >
              <div className="flex items-center justify-center">
                <img 
                  src="/illustrations/transitabilidad.svg" 
                  alt="Ilustración Transitabilidad de Caminos"
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                className="relative bg-dynamic-secondary rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-dynamic">
                  <h4 className="text-lg font-bold text-dynamic-primary">
                    Resultado de Prueba - Transitabilidad de Caminos
                  </h4>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-dynamic-muted hover:bg-red-500 flex items-center justify-center transition-colors duration-200 text-dynamic-secondary hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Video Container */}
                <div className="aspect-video">
                  <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    preload="metadata"
                  >
                    <source src="/ba/Resultado BA (1).mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                </div>
                
                {/* Modal Footer */}
                <div className="p-4 bg-dynamic-muted">
                  <p className="text-dynamic-secondary text-sm text-center italic">
                    9 de Julio, Provincia de Buenos Aires - Prueba en 100 metros de calle
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}