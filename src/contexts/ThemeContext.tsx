"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

// 🌙 TIPOS PARA EL THEME CONTEXT
type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
  isLight: boolean
}

// 🎨 CONTEXTO DEL TEMA
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 🎯 PROVIDER DEL TEMA CON PERSISTENCIA
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // 💾 Cargar tema guardado al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('binary-theme') as Theme | null
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme)
    } else {
      // Detectar preferencia del sistema
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(systemPrefersDark ? 'dark' : 'light')
    }
    setMounted(true)
  }, [])

  // 🎯 Aplicar tema al documentElement
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      
      // Remover clases anteriores
      root.classList.remove('light', 'dark')
      
      // Agregar nueva clase
      root.classList.add(theme)
      
      // Guardar en localStorage
      localStorage.setItem('binary-theme', theme)
      
      // Agregar variables CSS dinámicas
      updateCSSVariables(theme)
    }
  }, [theme, mounted])

  // 🎨 Función para alternar tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // 📦 Valores del contexto
  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  }

  // 🚀 Evitar hydration mismatch
  if (!mounted) {
    return <div className="opacity-0">{children}</div>
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// 🎯 Hook para usar el tema
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// 🎨 Función para actualizar variables CSS
function updateCSSVariables(theme: Theme) {
  const root = document.documentElement
  
  if (theme === 'dark') {
    // Variables para modo oscuro
    root.style.setProperty('--bg-primary', '#0a0a0a')
    root.style.setProperty('--bg-secondary', '#171717')
    root.style.setProperty('--bg-muted', '#262626')
    root.style.setProperty('--text-primary', '#fafafa')
    root.style.setProperty('--text-secondary', '#d4d4d4')
    root.style.setProperty('--text-muted', '#a3a3a3')
    root.style.setProperty('--border-color', '#404040')
    root.style.setProperty('--border-soft', '#525252')
  } else {
    // Variables para modo claro
    root.style.setProperty('--bg-primary', '#ffffff')
    root.style.setProperty('--bg-secondary', '#fafafa')
    root.style.setProperty('--bg-muted', '#f5f5f5')
    root.style.setProperty('--text-primary', '#171717')
    root.style.setProperty('--text-secondary', '#404040')
    root.style.setProperty('--text-muted', '#737373')
    root.style.setProperty('--border-color', '#e5e5e5')
    root.style.setProperty('--border-soft', '#d4d4d4')
  }
}

// 🎯 Helper para obtener colores dinámicos
export function getThemeColor(colorKey: string, theme: Theme) {
  const colors = {
    bg: { light: '#ffffff', dark: '#0a0a0a' },
    bgSoft: { light: '#fafafa', dark: '#171717' },
    bgMuted: { light: '#f5f5f5', dark: '#262626' },
    text: { light: '#171717', dark: '#fafafa' },
    textSoft: { light: '#404040', dark: '#d4d4d4' },
    textMuted: { light: '#737373', dark: '#a3a3a3' },
    border: { light: '#e5e5e5', dark: '#404040' },
    borderSoft: { light: '#d4d4d4', dark: '#525252' }
  } as const
  
  return colors[colorKey as keyof typeof colors]?.[theme] || '#000000'
}

export default ThemeProvider