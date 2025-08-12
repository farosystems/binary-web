"use client"

import { useState, useEffect } from "react"
import { Globe, Zap, Leaf } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import Header from "@/src/components/Header"
import ScrollToTop from "@/src/components/ScrollToTop"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

// Import all section components
import HeroSection from "@/src/components/sections/HeroSection"
import ServicesSection from "@/src/components/sections/ServicesSection"
import ProductsSection from "@/src/components/sections/ProductsSection"
import TechnologiesSection from "@/src/components/sections/TechnologiesSection"
import SuccessStoriesSection from "@/src/components/sections/SuccessStoriesSection"
import TeamSection from "@/src/components/sections/TeamSection"
import ContactSection from "@/src/components/sections/ContactSection"
import FooterSection from "@/src/components/sections/FooterSection"

export default function BinaryLandingPage() {
  const [activeSection, setActiveSection] = useState("")

  const benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovación Inteligente para Empresas Locales y Globales",
      description:
        "Entendemos la problemática de las empresas nacionales y conocemos la exigencia de las empresas internacionales, lo que nos permite innovar inteligentemente los procesos y los sistemas",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eficiencia Inteligente: Más Enfoque, Menos Costos",
      description:
        "Desarrollamos soluciones que reducen al mínimo los tiempos de trabajo no significativo, contribuyendo a que los empleados se concentren en trabajos significativos, y eliminen los costos hundidos operativos",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Soluciones Sostenibles: Hacia un Futuro Libre de Papel",
      description:
        'Cuidamos el medio ambiente, nuestras soluciones priorizan el concepto "Libre de Papel" (Paper Less)',
    },
  ]

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="bg-dynamic-primary">
      {/* Header Componentizado */}
      <Header onNavigate={handleSmoothScroll} />


      {/* Hero Section */}
      <HeroSection onSmoothScroll={handleSmoothScroll} />

      {/* Services Section */}
      <ServicesSection />

      {/* International Activity Section - MEJORADO */}
        <section 
          id="actividad" 
          className={cn(
            STYLES.layout.sectionFullScreen,
            "bg-dynamic-primary"
          )}
        >
          <div className={STYLES.layout.container}>
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-dynamic-primary"
                {...textReveal}
                whileInView={textReveal.animate}
                viewport={getViewport()}
                transition={{ ...textReveal.transition, delay: 0.2 }}
              >
                Binary: Actividad internacional
              </motion.h2>
              <motion.p 
                className="text-xl text-dynamic-secondary"
                {...fadeInUp}
                whileInView={fadeInUp.animate}
                viewport={getViewport()}
                transition={{ ...fadeInUp.transition, delay: 0.4 }}
              >
                Soluciones ecológicas, inteligentes y ahorrativas
              </motion.p>
            </motion.div>
            <motion.div 
              className={cn(STYLES.layout.gridServices, "lg:grid-cols-3")}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={getViewport()}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={staggerItem} className="h-full">
                  <Card className="text-center group transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-dynamic-secondary border-dynamic hover:shadow-xl h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-dynamic-primary">
                        {benefit.title}
                      </h3>
                      <p className="leading-relaxed text-dynamic-secondary flex-1">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}