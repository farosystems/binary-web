"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import ClientCarousel from "@/src/components/carrusel"

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
        {/* Header con animaciones */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Casos de Éxito - Argentina
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nuestros clientes de confianza en el mercado argentino
          </motion.p>
        </motion.div>

        {/* Carrusel con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ClientCarousel />
        </motion.div>

        {/* Descripción inferior con animación */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
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