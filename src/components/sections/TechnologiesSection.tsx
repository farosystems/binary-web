"use client"

import OpenSourceMarquee from "./OpenSourceMarquee"
import ProprietaryMarquee from "./ProprietaryMarquee"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, getViewport } from "@/src/lib/animations"

export default function TechnologiesSection() {
  return (
    <div id="tecnologias">
      {/* Header principal - MEJORADO */}
      <section className={cn(STYLES.layout.sectionLarge, "bg-dynamic-primary")}>
        <div className={STYLES.layout.container}>
          <motion.div 
            className="text-center mb-8"
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
              Tecnologías que usamos
            </motion.h2>
            <motion.p 
              className="text-xl text-dynamic-secondary"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              Arquitectura Web para aplicaciones basadas en la nube u &quot;on premise&quot;
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Marquees */}
      <OpenSourceMarquee />
      <ProprietaryMarquee />
      
      {/* Nota de plataforma - MEJORADO */}
      <section className={cn(STYLES.layout.sectionLarge, "bg-dynamic-primary")}>
        <div className={STYLES.layout.container}>
          <motion.div 
            className="text-center rounded-xl p-6 shadow-lg max-w-4xl mx-auto bg-dynamic-muted border border-dynamic"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
          >
            <motion.h4 
              className="text-xl font-bold mb-2 text-dynamic-primary"
              {...textReveal}
              whileInView={textReveal.animate}
              viewport={getViewport()}
              transition={{ ...textReveal.transition, delay: 0.2 }}
            >
              Plataforma
            </motion.h4>
            <motion.p 
              className="text-dynamic-secondary"
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              viewport={getViewport()}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              Linux - Arquitectura Web para aplicaciones basadas en la nube u &quot;on premise&quot;
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}