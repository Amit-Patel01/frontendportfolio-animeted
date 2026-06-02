import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true

  const saved = localStorage.getItem('darkMode')
  if (saved === null) return true

  try {
    return JSON.parse(saved)
  } catch {
    return true
  }
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.classList.toggle('light', !darkMode)
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const toggleTheme = () => setDarkMode(current => !current)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
