import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import BentoGrid     from './components/BentoGrid'
import Journey       from './components/Journey'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Contact       from './components/Contact'
import { ScrollToTop, ScrollProgress } from './components/ScrollToTop'

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

/* ──── Liquid Aurora Background ──── */
const LiquidAuroraBackground = () => (
  <div
    className="site-video-backdrop"
    aria-hidden="true"
  >
    {/* SVG filter for goo effect */}
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="liquid-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 36 -12" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    {/* Animated blobs */}
    <div className="blob-container">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>

    {/* Overlay layers */}
    <div className="site-video-backdrop__veil" />
    <div className="site-video-backdrop__grid" />
    <div className="site-video-backdrop__scan" />
    <div className="site-video-backdrop__glow" />
  </div>
)

/* ──── Main Portfolio Page ──── */
const Portfolio = () => {
  useEffect(() => {
    document.title = 'Amit Patel | Full Stack Developer'

    // Always start at top on page load / reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f4fd 20%, #f3f0ff 45%, #fdf4ff 70%, #f0fdf4 100%)' }}
    >
      {/* Background system */}
      <LiquidAuroraBackground />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </div>

      {/* Floating code lines */}
      <div className="code-orbit" data-mode="light" aria-hidden="true">
        {CODE_STREAMS.map((line, index) => (
          <span key={line} style={{ '--i': index }}>
            {line}
          </span>
        ))}
      </div>

      {/* Scroll progress bar */}
      <ScrollProgress />
    </motion.div>
  )
}

/* ──── App Root ──── */
const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background:    'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          border:        '1px solid rgba(6,182,212,0.2)',
          color:         '#0f172a',
          borderRadius:  '16px',
          boxShadow:     '0 8px 32px rgba(6,182,212,0.12)',
          fontFamily:    'Inter, sans-serif',
        },
        success: {
          iconTheme: { primary: '#06b6d4', secondary: '#fff' },
        },
        error: {
          iconTheme: { primary: '#f43f5e', secondary: '#fff' },
        },
      }}
    />
  </ThemeProvider>
)

export default App
