"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { STYLES, getButtonStyles } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { heroTitle, fadeInUp, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

interface HeroSectionProps {
  onSmoothScroll: (targetId: string) => void
}

export default function HeroSection({ onSmoothScroll }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className={cn(
        // Layout full-screen con altura completa
        STYLES.layout.sectionFullScreenCenter,
        "relative overflow-hidden"
      )}
      style={{
        backgroundImage: 'url(/images/original-cityscape-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Contenedor principal del hero */}
      <div className={cn(STYLES.layout.container, "text-center relative z-10")}>
        <div className="max-w-4xl mx-auto py-8 sm:py-12 pt-12 sm:pt-16 px-6 sm:px-8">
          
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-white text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            +30 años transformando empresas
          </motion.div>

          {/* Título principal con animación mejorada */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            {...heroTitle}
          >
            Innovamos y transformamos tu negocio con{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              el conocimiento y la estrategia adecuada
            </motion.span>
          </motion.h1>

          {/* Subtítulo con entrada mejorada */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-white opacity-90 leading-relaxed max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.5 }}
          >
            Soluciones ecológicas, inteligentes y ahorrativas para empresas locales y globales
          </motion.p>

          {/* Botones con animaciones mejoradas */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Botón primario */}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                className="bg-dynamic-secondary hover:bg-dynamic-muted text-dynamic-primary border-2 border-dynamic-soft hover:border-dynamic-primary transition-all duration-300 text-sm sm:text-base font-semibold px-8 py-3 shadow-lg hover:shadow-xl"
                onClick={() => onSmoothScroll("productos")}
              >
                <motion.div className="flex items-center">
                  Conocer Productos
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                </motion.div>
              </Button>
            </motion.div>

            {/* Botón secundario */}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-dynamic-secondary text-dynamic-secondary hover:bg-dynamic-secondary hover:text-dynamic-primary transition-all duration-300 text-sm sm:text-base font-semibold px-8 py-3 backdrop-blur-sm shadow-lg hover:shadow-xl"
                onClick={() => onSmoothScroll("contacto")}
              >
                <motion.div className="flex items-center">
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Contactar Ahora
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Overlay dinámico adaptado al tema */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/10 to-black/15 dark:from-black/40 dark:via-black/25 dark:to-black/35" />
      
      {/* Overlay secundario para contraste óptimo */}
      <div className="absolute inset-0 pointer-events-none bg-black/5 dark:bg-black/15" />
    </section>
  )
}