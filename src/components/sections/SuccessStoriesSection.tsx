"use client"

import { useState } from "react"
import { Globe, Building, Shield, Calculator, Users, Heart, Zap, Server } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, scaleIn, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

const argentinaCases = [
  {
    company: "Grupo SOLNIK",
    location: "Buenos Aires, Argentina",
    logo: "/clientes/solnik.svg",
    project: "PM y QA en Implementación ERP Itris + Desarrollo e Implementación BI",
    description: "Project Management y Quality Assurance en la implementación del ERP Itris, complementado con el desarrollo e implementación de Business Intelligence para optimizar la gestión empresarial del grupo.",
    icon: Server,
    country: "🇦🇷"
  },
  {
    company: "Hospital Británico de Buenos Aires",
    location: "Buenos Aires, Argentina",
    logo: "/clientes/britanico.svg",
    project: "Cambio de Modelo Operativo e Implementación SAP IS-H para el rubro salud",
    description: "Transformación completa del modelo operativo e implementación de la solución SAP IS-H especializada para el sector salud, optimizando la gestión hospitalaria integral.",
    icon: Heart,
    country: "🇦🇷"
  },
  {
    company: "Ministerio de Economía de la República Argentina",
    location: "Buenos Aires, Argentina", 
    logo: "/clientes/ministerio.png",
    project: "Diseño, desarrollo e implementación del Sistema Integrado de Recursos Humanos - SIRHU en Oracle",
    description: "Desarrollo completo del sistema SIRHU en plataforma Oracle para la gestión integral de recursos humanos del sector público nacional, incluyendo mejora continua.",
    icon: Users,
    country: "🇦🇷"
  },
  {
    company: "ENARSA - Energía Argentina S.A.",
    location: "Buenos Aires, Argentina",
    logo: "/clientes/enarsa.png", 
    project: "Definición del Plan de Sistemas y Departamento de Organización y Métodos",
    description: "Definición integral del Plan de Sistemas, esquema de planificación y metodología de implementación, junto con la creación y estructuración del Departamento de Organización y Métodos.",
    icon: Zap,
    country: "🇦🇷"
  },
  {
    company: "Hanseatica Compañía de Seguros",
    location: "Buenos Aires, Argentina",
    logo: "/clientes/Hanseatica.webp",
    project: "Programa de fortalecimiento organizacional y tercerización IT",
    description: "Diseño y liderazgo del programa de fortalecimiento incluyendo estrategia organizacional, modelo operativo y tercerización completa del gerenciamiento de tecnología e informática.",
    icon: Building,
    country: "🇦🇷"
  },
  {
    company: "Diversos Clientes",
    location: "Argentina",
    logo: null,
    project: "Desarrollo de soluciones Open Source basadas en la nube",
    description: "Desarrollo y puesta en marcha de múltiples soluciones de negocios basadas en la nube y plataformas de código abierto, adaptadas a las necesidades específicas de cada cliente.",
    icon: Shield,
    country: "🇦🇷",
    multipleClients: true,
    clientLogos: [
      "/clientes/edesur.png",
      "/clientes/enel.png", 
      "/clientes/fuerzaaerea.png"
    ],
    totalClients: 6
  }
]

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
              className={cn(STYLES.layout.gridServices, "lg:grid-cols-2 gap-8")}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={getViewport()}
            >
              {argentinaCases.map((case_item, index) => (
                <motion.div key={index} variants={staggerItem} className="h-full">
                  <Card className="group transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-dynamic-secondary border-dynamic hover:shadow-xl h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Header with logo and country */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          {case_item.logo && (
                            <img 
                              src={case_item.logo} 
                              alt={case_item.company}
                              className="h-12 w-12 object-contain mr-4"
                            />
                          )}
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


                      {/* Project Title */}
                      <h4 className="text-lg font-semibold mb-3 text-dynamic-primary leading-tight">
                        Proyecto: {case_item.project}
                      </h4>

                      {/* Description */}
                      <p className="text-dynamic-secondary leading-relaxed flex-1">
                        {case_item.description}
                      </p>

                      {/* Multiple Clients Bubbles */}
                      {case_item.multipleClients && (
                        <div className="mt-4 pt-3 border-t border-dynamic/30">
                          <p className="text-xs text-dynamic-secondary mb-3 font-medium">
                            👥 Clientes destacados:
                          </p>
                          <div className="flex items-center space-x-2">
                            {case_item.clientLogos?.slice(0, 3).map((logoUrl, index) => (
                              <div 
                                key={index}
                                className="w-8 h-8 rounded-full bg-gray-600 dark:bg-gray-600 shadow-md border border-gray-500 dark:border-gray-500 flex items-center justify-center overflow-hidden"
                              >
                                <img 
                                  src={logoUrl} 
                                  alt={`Cliente ${index + 1}`}
                                  className="w-6 h-6 object-contain"
                                />
                              </div>
                            ))}
                            {case_item.totalClients && case_item.totalClients > 3 && (
                              <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs font-medium flex items-center justify-center shadow-md">
                                +{case_item.totalClients - 3}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Footer with emphasis */}
                      <div className="mt-6 pt-4 border-t border-dynamic">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Proyecto Nacional
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12 px-8 py-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-dynamic-primary mb-4">
                  Experiencia Comprobada en Argentina
                </h3>
                <p className="text-lg leading-relaxed text-dynamic-primary font-medium">
                  Nuestros proyectos en Argentina abarcan desde <span className="text-blue-600 dark:text-blue-400 font-semibold">implementaciones ERP y sistemas de salud</span> hasta desarrollos 
                  para el <span className="text-purple-600 dark:text-purple-400 font-semibold">sector público y transformaciones organizacionales completas</span>. Cada caso demuestra nuestra 
                  capacidad para entregar <span className="text-green-600 dark:text-green-400 font-semibold">soluciones tecnológicas de alto impacto</span> que optimizan procesos críticos 
                  en organizaciones líderes del país.
                </p>
              </div>
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
                          {case_item.logo && (
                            <img 
                              src={case_item.logo} 
                              alt={case_item.company}
                              className="h-12 w-12 object-contain mr-4"
                            />
                          )}
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