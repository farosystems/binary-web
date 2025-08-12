"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import ClientCarousel from "@/src/components/carrusel"
import { textReveal, fadeInUp, scaleIn, getViewport } from "@/src/lib/animations"

export default function SuccessStoriesSection() {
  return (
    <section 
      id="casos-exito-argentina" 
      className={cn(
        STYLES.layout.sectionFullScreen,
        "bg-dynamic-primary"
      )}
    >
      <div className={STYLES.layout.container}>
        {/* Header con animaciones mejoradas */}
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
            Casos de Éxito - Argentina
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            Nuestros clientes de confianza en el mercado argentino
          </motion.p>
        </motion.div>

        {/* Carrusel con animación mejorada */}
        <motion.div
          {...scaleIn}
          whileInView={scaleIn.animate}
          viewport={getViewport()}
          transition={{ ...scaleIn.transition, delay: 0.3 }}
        >
          <ClientCarousel />
        </motion.div>

        {/* Descripción inferior con animación mejorada */}
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
      </div>
    </section>
  )
}