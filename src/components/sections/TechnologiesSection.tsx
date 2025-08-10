"use client"

import OpenSourceMarquee from "./OpenSourceMarquee"
import ProprietaryMarquee from "./ProprietaryMarquee"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"

export default function TechnologiesSection() {
  return (
    <div id="tecnologias">
      {/* Header principal */}
      <section className={cn(STYLES.layout.sectionLarge, "bg-dynamic-primary")}>
        <div className={STYLES.layout.container}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4">
              Tecnologías que usamos
            </h2>
            <p className="text-xl text-dynamic-secondary">
              Arquitectura Web para aplicaciones basadas en la nube u &quot;on premise&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Marquees */}
      <OpenSourceMarquee />
      <ProprietaryMarquee />
      
      {/* Nota de plataforma */}
      <section className={cn(STYLES.layout.sectionLarge, "bg-dynamic-primary")}>
        <div className={STYLES.layout.container}>
          <div className="text-center rounded-xl p-6 shadow-lg max-w-4xl mx-auto bg-dynamic-muted border border-dynamic">
            <h4 className="text-xl font-bold mb-2 text-dynamic-primary">
              Plataforma
            </h4>
            <p className="text-dynamic-secondary">
              Linux - Arquitectura Web para aplicaciones basadas en la nube u &quot;on premise&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}