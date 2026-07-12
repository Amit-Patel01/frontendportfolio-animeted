import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

const getInitialTheme = () => {
  return false
}

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(false))
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    document.documentElement.dataset.theme = 'light'
  }, [])

  const toggleTheme = () => {
    // Toggling disabled as the app is permanently in light mode
  }

  return (
    <ThemeContext.Provider value={{ darkMode: false, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

