import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence } from 'framer-motion'

import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import BentoGrid   from './components/BentoGrid'
import Journey     from './components/Journey'
import Projects    from './components/Projects'
import Contact     from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Preloader   from './components/Preloader'
import CustomCursor from './components/CustomCursor'

/* ── Portfolio (main site) ── */
const Portfolio = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Amit Patel | Full Stack Developer'
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`relative min-h-screen overflow-x-hidden
                      bg-[#050505]
                      text-white transition-colors duration-500
                      ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        <CustomCursor />

        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <BentoGrid />
          <Journey />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>
      </div>
    </>
  )
}

/* ── Root App with Router ── */
const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path="/"      element={<Portfolio />} />
    </Routes>

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background:    'rgba(15,15,35,0.9)',
          backdropFilter: 'blur(20px)',
          border:        '1px solid rgba(255,255,255,0.1)',
          color:         '#e2e8f0',
          borderRadius:  '16px',
        },
      }}
    />
  </ThemeProvider>
)

export default App
