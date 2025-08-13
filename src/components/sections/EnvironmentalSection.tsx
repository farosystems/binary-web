"use client"

import { Leaf, FileText, Truck } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
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
          <motion.div
            className="flex items-center justify-center mb-4"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
          >
            <Leaf className="h-8 w-8 text-green-600 mr-3" />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-dynamic-primary"
              {...textReveal}
              whileInView={textReveal.animate}
              viewport={getViewport()}
              transition={{ ...textReveal.transition, delay: 0.2 }}
            >
              Cuidado del Medio Ambiente
            </motion.h2>
          </motion.div>
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

        {/* Solutions Cards */}
        <motion.div 
          className={cn(STYLES.layout.gridServices, "lg:grid-cols-2 gap-8 mb-12")}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={getViewport()}
        >
          {environmentalSolutions.map((solution, index) => (
            <motion.div key={index} variants={staggerItem} className="h-full">
              <Card className="group transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-dynamic-secondary border-dynamic hover:shadow-xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <solution.icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold mb-2 text-dynamic-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={getViewport()}
                    transition={{ delay: 0.2 }}
                  >
                    {solution.title}
                  </motion.h3>

                  {/* Subtitle */}
                  <motion.h4
                    className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={getViewport()}
                    transition={{ delay: 0.3 }}
                  >
                    {solution.subtitle}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="text-dynamic-secondary mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={getViewport()}
                    transition={{ delay: 0.4 }}
                  >
                    {solution.description}
                  </motion.p>

                  {/* Benefits */}
                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={getViewport()}
                    transition={{ delay: 0.5 }}
                  >
                    <h5 className="font-semibold mb-3 text-dynamic-primary">Beneficios clave:</h5>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-dynamic-secondary flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="text-center"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4 text-dynamic-primary"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={getViewport()}
            transition={{ ...textReveal.transition, delay: 0.7 }}
          >
            Resultado de Prueba - Transitabilidad de Caminos
          </motion.h3>
          
          <motion.div
            className="max-w-4xl mx-auto"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-dynamic-secondary border border-dynamic">
              <video
                controls
                className="w-full h-full aspect-video"
                preload="metadata"
              >
                <source src="/ba/Resultado BA (1).mp4" type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            </div>
            
            <motion.p 
              className="mt-4 text-dynamic-secondary italic"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.9 }}
            >
              Resultado de Prueba realizada en una calle (100 metros) de la localidad de 9 de Julio, Provincia de Buenos Aires
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}