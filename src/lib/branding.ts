// 🎨 SISTEMA DE BRANDING PREMIUM PARA BINARY CON DARK MODE
// Este archivo centraliza todos los colores, tipografías y estilos
// para mantener coherencia visual en toda la aplicación

export const BRANDING = {
  // 🎨 PALETA PREMIUM NEUTRA CON SOPORTE DARK/LIGHT MODE
  colors: {
    // Sistema de grises premium - Base neutra sofisticada
    neutral: {
      0: '#ffffff',     // Blanco puro
      50: '#fafafa',    // Blanco suave
      100: '#f5f5f5',   // Gris muy claro
      200: '#e5e5e5',   // Gris claro
      300: '#d4d4d4',   // Gris claro medio
      400: '#a3a3a3',   // Gris medio
      500: '#737373',   // Gris
      600: '#525252',   // Gris oscuro
      700: '#404040',   // Gris muy oscuro
      800: '#262626',   // Casi negro
      900: '#171717',   // Negro suave
      950: '#0a0a0a'    // Negro profundo
    },

    // Colores dinámicos que cambian según el theme
    dynamic: {
      // Fondos principales
      bg: {
        light: '#ffffff',
        dark: '#0a0a0a'
      },
      bgSoft: {
        light: '#fafafa', 
        dark: '#171717'
      },
      bgMuted: {
        light: '#f5f5f5',
        dark: '#262626'
      },
      
      // Texto dinámico
      text: {
        light: '#171717',
        dark: '#fafafa'
      },
      textSoft: {
        light: '#404040',
        dark: '#d4d4d4'  
      },
      textMuted: {
        light: '#737373',
        dark: '#a3a3a3'
      },
      
      // Bordes y divisores
      border: {
        light: '#e5e5e5',
        dark: '#404040'
      },
      borderSoft: {
        light: '#d4d4d4',
        dark: '#525252'
      }
    },

    // Colores de acento premium (mantener los existentes pero mejorados)
    accent: {
      primary: '#3b82f6',      // Azul profesional (mantener)
      success: '#10b981',      // Verde éxito (mantener)
      warning: '#f59e0b',      // Ámbar premium
      danger: '#ef4444',       // Rojo error (mantener)
      info: '#8b5cf6',         // Violeta info
      
      // Gradientes premium
      gradient: {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        neutral: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        dark: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
      }
    }
  },

  // 🔤 TIPOGRAFÍAS Y TAMAÑOS
  typography: {
    // Familias de fuentes
    fonts: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      heading: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Consolas, monospace'
    },

    // Tamaños de fuente (siguiendo escala de Tailwind)
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem'   // 60px
    },

    // Pesos de fuente
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    }
  },

  // 📐 ESPACIADOS Y DIMENSIONES
  spacing: {
    // Espaciados estándar (basados en Tailwind)
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px

    // Tamaños específicos para componentes
    header: '5rem',     // Altura del header
    section: '4rem',    // Padding vertical de secciones
    container: '1280px' // Ancho máximo del contenedor
  },

  // 🌟 EFECTOS VISUALES
  effects: {
    // Sombras parametrizadas
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
    },

    // Gradientes de marca
    gradients: {
      primary: 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)',
      hero: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
      dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
    },

    // Radio de bordes
    radius: {
      sm: '0.375rem',   // 6px
      md: '0.5rem',     // 8px
      lg: '0.75rem',    // 12px
      xl: '1rem',       // 16px
      '2xl': '1.5rem',  // 24px
      full: '9999px'    // Completamente redondeado
    },

    // Transiciones premium con easing sofisticado
    transitions: {
      fast: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
      theme: '200ms cubic-bezier(0.4, 0, 0.2, 1)', // Para cambio de tema
      premium: '400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Easing premium
    },

    // Animaciones premium para framer-motion
    animations: {
      // Entrada desde abajo (más común)
      fadeInUp: {
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      },
      
      // Entrada con escala premium
      scaleIn: {
        initial: { opacity: 0, scale: 0.8, y: 20 },
        animate: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
        }
      },
      
      // Stagger para múltiples elementos
      stagger: {
        animate: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
      }
    },

    // Micro-interactions premium
    microInteractions: {
      buttonHover: { scale: 1.05, transition: { duration: 0.2 } },
      cardHover: { 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      },
      tapEffect: { scale: 0.95, transition: { duration: 0.1 } }
    }
  },

  // 🎯 CONFIGURACIONES ESPECÍFICAS DE COMPONENTES
  components: {
    // Configuración para botones
    button: {
      primary: {
        bg: 'linear-gradient(to right, #475569, #1e293b)',
        hover: 'linear-gradient(to right, #1e293b, #334155)',
        text: '#ffffff',
        shadow: '0 4px 14px 0 rgb(0 0 0 / 0.2)'
      },
      secondary: {
        bg: 'transparent',
        border: '2px solid #ffffff',
        text: '#ffffff',
        hover: '#ffffff'
      }
    },

    // Configuración para cards
    card: {
      bg: '#ffffff',
      shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      hoverShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      borderRadius: '1rem'
    },

    // Configuración para el header/navegación
    navigation: {
      bg: 'transparent',
      textColor: '#ffffff',
      hoverColor: '#cbd5e1',
      mobileMenuBg: '#000000'
    }
  }
} as const

// 🚀 HELPER FUNCTIONS PARA USAR LOS COLORES MÁS FÁCILMENTE
export const getBrandColor = (path: string) => {
  const keys = path.split('.')
  let value: any = BRANDING.colors
  
  for (const key of keys) {
    value = value[key]
    if (!value) return undefined
  }
  
  return value
}

// Ejemplo de uso: getBrandColor('primary.500') retorna '#64748b'

export default BRANDING