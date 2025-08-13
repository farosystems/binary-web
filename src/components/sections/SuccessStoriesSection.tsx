"use client"

import { useState } from "react"
import { Globe, Building, Shield, Calculator } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import ClientCarousel from "@/src/components/carrusel"
import { textReveal, fadeInUp, scaleIn, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

const internationalCases = [
  {
    company: "RMI Solutions",
    location: "Orlando, USA",
    logo: "/logos/rmi.png",
    project: "Tercerización del Gerenciamiento de la gestión de Tecnología e Informática",
    description: "Gerenciamiento completo de la infraestructura tecnológica e informática para RMI Solutions en Estados Unidos.",
    icon: Building,
    country: "🇺🇸"
  },
  {
    company: "FEMSA",
    location: "San Pablo, Brasil",
    logo: "/logos/femsa.png",
    project: "Implementación y mejora continua del equipamiento y aplicaciones del Sistema de Control de Acceso",
    description: "Desarrollo e implementación de sistemas avanzados de control de acceso para las instalaciones de FEMSA en Brasil.",
    icon: Shield,
    country: "🇧🇷"
  },
  {
    company: "Solistica",
    location: "San Pablo, Brasil", 
    logo: "/logos/solistica.png",
    project: "Desarrollo e implementación de Soluciones para Seguridad Patrimonial *Open Source",
    description: "Implementación de soluciones de seguridad patrimonial utilizando tecnologías Open Source para Solistica.",
    icon: Shield,
    country: "🇧🇷"
  },
  {
    company: "CMS Energy",
    location: "Seneca - Isla Margarita, Venezuela",
    logo: "/clientes/cms.png",
    project: "Diseño, desarrollo, implementación, del Sistema de Facturación *Oracle",
    description: "Desarrollo completo de sistema de facturación basado en Oracle Database para CMS Energy USA en Venezuela.",
    icon: Calculator,
    country: "🇻🇪"
  }
]

export default function SuccessStoriesSection() {
  const [activeTab, setActiveTab] = useState("argentina")

  return (
    <section 
      id="casos-exito" 
      className={cn(
        STYLES.layout.sectionFullScreen,
        "bg-dynamic-primary"
      )}
    >
      <div className={STYLES.layout.container}>
        {/* Header principal */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={getViewport()}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            Casos de Éxito
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            Proyectos exitosos en Argentina y el mundo
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-8"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
        >
          <div className="flex bg-dynamic-secondary rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("argentina")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-300",
                activeTab === "argentina"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-dynamic-secondary hover:text-dynamic-primary"
              )}
            >
              🇦🇷 Argentina
            </button>
            <button
              onClick={() => setActiveTab("internacional")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-300",
                activeTab === "internacional"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-dynamic-secondary hover:text-dynamic-primary"
              )}
            >
              🌍 Internacional
            </button>
          </div>
        </motion.div>

        {/* Contenido Argentina */}
        {activeTab === "argentina" && (
          <motion.div
            key="argentina"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              {...scaleIn}
              whileInView={scaleIn.animate}
              viewport={getViewport()}
              transition={{ ...scaleIn.transition, delay: 0.3 }}
            >
              <ClientCarousel />
            </motion.div>

            <motion.div 
              className="text-center mt-8"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
            >
              <p className="max-w-3xl mx-auto leading-relaxed text-dynamic-secondary">
                Trabajamos con empresas líderes en diversos sectores: energía, salud, servicios públicos,
                industria y defensa. Cada proyecto representa nuestro compromiso con la excelencia tecnológica
                y la innovación adaptada a las necesidades específicas del mercado argentino.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Contenido Internacional */}
        {activeTab === "internacional" && (
          <motion.div
            key="internacional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={cn(STYLES.layout.gridServices, "lg:grid-cols-2 gap-8")}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={getViewport()}
            >
              {internationalCases.map((case_item, index) => (
                <motion.div key={index} variants={staggerItem} className="h-full">
                  <Card className="group transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-dynamic-secondary border-dynamic hover:shadow-xl h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Header with logo and country */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <img 
                            src={case_item.logo} 
                            alt={case_item.company}
                            className="h-12 w-12 object-contain mr-4"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-dynamic-primary">
                              {case_item.company}
                            </h3>
                            <p className="text-sm text-dynamic-secondary">
                              {case_item.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-2xl">
                          {case_item.country}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <case_item.icon className="h-6 w-6" />
                      </div>

                      {/* Project Title */}
                      <h4 className="text-lg font-semibold mb-3 text-dynamic-primary leading-tight">
                        Proyecto: {case_item.project}
                      </h4>

                      {/* Description */}
                      <p className="text-dynamic-secondary leading-relaxed flex-1">
                        {case_item.description}
                      </p>

                      {/* Footer with emphasis */}
                      <div className="mt-6 pt-4 border-t border-dynamic">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Proyecto Internacional
                          </span>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
            >
              <p className="max-w-4xl mx-auto leading-relaxed text-dynamic-secondary">
                Nuestra experiencia internacional abarca proyectos de alta complejidad en Estados Unidos, Brasil y Venezuela, 
                demostrando nuestra capacidad para adaptarnos a diferentes mercados y regulaciones internacionales. 
                Cada proyecto representa un éxito en la implementación de soluciones tecnológicas de vanguardia 
                que optimizan procesos empresariales a nivel global.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}