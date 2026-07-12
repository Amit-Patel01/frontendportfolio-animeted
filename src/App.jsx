import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { AnimatePresence } from 'framer-motion'

import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import BentoGrid   from './components/BentoGrid'
import Journey     from './components/Journey'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Contact     from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
// Preloader removed

const CODE_STREAMS = [
  'const app = createPortfolio();',
  'npm run build -- --production',
  '<motion.div animate={{ y: [0, -16, 0] }} />',
  'git commit -m "ship polished ui"',
  'function solve(problem) { return cleanCode; }',
  'await deploy({ target: "web" });',
  'useEffect(() => syncExperience(), []);',
  'db.projects.find({ featured: true })',
]

const LiquidAuroraBackground = ({ mode }) => (
  <div className="site-video-backdrop fixed inset-0 z-0 overflow-hidden pointer-events-none" data-mode={mode} aria-hidden="true">
    {/* Liquid Morphing Blobs */}
    <div className="blob-container absolute inset-0 overflow-hidden">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>

    {/* SVG Gooey filter for blending the blobs organically */}
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="liquid-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <div className="site-video-backdrop__veil" />
    <div className="site-video-backdrop__grid" />
    <div className="site-video-backdrop__scan" />
    <div className="site-video-backdrop__glow" />
  </div>
)

/* ── Portfolio (main site) ── */
const Portfolio = () => {
  const [loading, setLoading] = useState(false)
  const { darkMode } = useTheme()
  const mode = darkMode ? 'dark' : 'light'

  useEffect(() => {
    document.title = 'Amit Patel | Full Stack Developer'
  }, [])

  return (
    <>
      <div className="site-shell relative min-h-screen overflow-x-hidden bg-[#050505] text-white transition-colors duration-500">
        
        <LiquidAuroraBackground mode={mode} />

        <div className="site-content relative z-10">
          <Navbar />
          <Hero />
          <BentoGrid />
          <Journey />
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>

        {/* Floating code orbit overlay on top of all boxes */}
        <div className="code-orbit fixed inset-0 z-20 pointer-events-none" data-mode={mode}>
          {CODE_STREAMS.map((line, index) => (
            <span key={line} style={{ '--i': index }}>
              {line}
            </span>
          ))}
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
