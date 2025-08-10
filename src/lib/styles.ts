// 🎨 UTILIDADES DE ESTILOS PARA BINARY
// Este archivo contiene clases CSS reutilizables basadas en nuestro sistema de branding

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Función para combinar clases CSS de manera inteligente
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 🎨 CLASES DE ESTILOS REUTILIZABLES PARAMETRIZADAS

export const STYLES = {
  // 📄 CLASES PARA CONTENEDORES Y LAYOUT
  layout: {
    // Container principal de la aplicación
    container: "container mx-auto px-4",
    
    // Secciones de página con padding estándar
    section: "py-16 px-4",
    sectionLarge: "py-20 px-4",
    
    // 🖥️ LAYOUT FULL-SCREEN - Nuevas clases para vista completa
    sectionFullScreen: "min-h-screen flex flex-col justify-center py-16 px-4",
    sectionFullScreenCenter: "min-h-screen flex items-center justify-center px-4",
    
    // Grid layouts comunes
    gridCards: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
    gridServices: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto",
    gridTech: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
    
    // Flexbox layouts
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex items-center justify-between",
    flexCol: "flex flex-col",
    flexColCenter: "flex flex-col items-center justify-center"
  },

  // 🔤 CLASES PARA TIPOGRAFÍA
  typography: {
    // Headings con jerarquía clara
    h1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6",
    h2: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4",
    h3: "text-xl md:text-2xl font-bold text-gray-800 mb-3",
    h4: "text-lg md:text-xl font-bold text-gray-800 mb-2",
    
    // Texto del hero (más impactante)
    heroTitle: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl px-2",
    heroSubtitle: "text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4",
    
    // Párrafos y texto regular
    bodyLarge: "text-lg md:text-xl text-gray-600 mb-4 leading-relaxed",
    body: "text-gray-600 leading-relaxed",
    bodySmall: "text-sm text-gray-600",
    
    // Texto centrado
    textCenter: "text-center",
    textCenterMb: "text-center mb-12",
    
    // Colores de texto específicos
    textWhite: "text-white",
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-600",
    textMuted: "text-gray-400"
  },

  // 🎨 CLASES PARA COMPONENTES
  components: {
    // Cards reutilizables
    cardBase: "bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
    cardContent: "p-6 md:p-8",
    cardIcon: "w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-lg",
    
    // Cards para servicios (más oscuras)
    cardService: "bg-gradient-to-br from-gray-900 to-black text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1",
    
    // Cards para tecnologías
    cardTech: "group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
    
    // Botones principales
    buttonPrimary: "bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 text-white px-6 sm:px-8 py-3 shadow-2xl border border-gray-600 transition-all duration-300",
    buttonSecondary: "border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 backdrop-blur-sm bg-white/10 transition-all duration-300",
    
    // Badges y etiquetas
    badge: "px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full",
    badgeTeam: "px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full",
    
    // Iconos
    iconLarge: "w-16 h-16 sm:w-20 sm:h-20",
    iconMedium: "w-12 h-12 sm:w-16 sm:h-16",
    iconSmall: "w-6 h-6 sm:w-8 sm:h-8",
    iconContainer: "flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300"
  },

  // 🎨 CLASES PARA FONDOS Y EFECTOS
  backgrounds: {
    // Gradientes de fondo
    gradientPrimary: "bg-gradient-to-br from-gray-50 to-gray-100",
    gradientSecondary: "bg-gradient-to-br from-gray-100 to-gray-200",
    gradientDark: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
    gradientHero: "bg-gradient-to-r from-gray-900 to-black",
    
    // Fondos sólidos
    bgWhite: "bg-white",
    bgLight: "bg-gray-50",
    bgDark: "bg-gray-900",
    bgBlack: "bg-black",
    
    // Overlay para el hero
    overlay: "absolute inset-0 bg-black/30"
  },

  // ✨ CLASES PARA ANIMACIONES Y TRANSICIONES
  animations: {
    // Transiciones básicas
    transition: "transition-all duration-300",
    transitionSlow: "transition-all duration-500",
    
    // Hover effects
    hoverLift: "hover:transform hover:-translate-y-2",
    hoverScale: "hover:scale-105",
    hoverShadow: "hover:shadow-xl",
    
    // Efectos de grupo
    groupHover: "group-hover:scale-110 transition-all duration-300"
  },

  // 🎯 CLASES PARA SCROLL SNAP Y NAVEGACIÓN
  scrollSnap: {
    // Container principal con scroll snap
    container: "scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen",
    
    // Cada sección individual
    section: "snap-start",
    
    // Navegación lateral con dots
    dotsNavigation: "fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3",
    
    // Dot individual
    dot: "w-3 h-3 rounded-full border-2 border-white/50 cursor-pointer transition-all duration-300 hover:scale-125",
    dotActive: "bg-white border-white scale-125",
    dotInactive: "bg-transparent hover:bg-white/30"
  },

  // 📱 CLASES RESPONSIVAS ESPECÍFICAS
  responsive: {
    // Ocultar/mostrar en diferentes breakpoints
    hiddenMobile: "hidden lg:flex",
    showMobile: "lg:hidden",
    
    // Padding y margin responsivos
    paddingResponsive: "px-4 sm:px-6 lg:px-8",
    marginResponsive: "mx-4 sm:mx-6 lg:mx-8",
    
    // Grid responsivo
    gridResponsive: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }
} as const

// 🚀 HELPER FUNCTIONS PARA COMBINAR ESTILOS

// Función para crear estilos de card con variaciones
export const getCardStyles = (variant: 'default' | 'service' | 'tech' = 'default') => {
  const baseStyles = STYLES.components.cardBase
  
  switch (variant) {
    case 'service':
      return cn(STYLES.components.cardService)
    case 'tech':
      return cn(STYLES.components.cardTech)
    default:
      return cn(baseStyles)
  }
}

// Función para crear estilos de botón con variaciones
export const getButtonStyles = (variant: 'primary' | 'secondary' = 'primary', size: 'sm' | 'md' | 'lg' = 'md') => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300"
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const variantStyles = variant === 'primary' 
    ? STYLES.components.buttonPrimary 
    : STYLES.components.buttonSecondary
    
  return cn(baseStyles, sizeStyles[size], variantStyles)
}

// Función para crear estilos de heading con variaciones
export const getHeadingStyles = (level: 1 | 2 | 3 | 4, centered: boolean = false) => {
  const headingStyles = {
    1: STYLES.typography.h1,
    2: STYLES.typography.h2,
    3: STYLES.typography.h3,
    4: STYLES.typography.h4
  }
  
  return cn(
    headingStyles[level],
    centered && STYLES.typography.textCenter
  )
}

export default STYLES