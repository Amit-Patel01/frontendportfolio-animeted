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
import Preloader   from './components/Preloader'

const VIDEO_SOURCES = [
  'https://videos.pexels.com/video-files/29582476/29582476-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/8438893/8438893-hd_1920_1080_24fps.mp4',
]

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

const SiteVideoBackground = ({ mode }) => (
  <div className="site-video-backdrop fixed inset-0 z-0 overflow-hidden pointer-events-none" data-mode={mode} aria-hidden="true">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="site-video-backdrop__media absolute inset-0 h-full w-full object-cover"
    >
      {VIDEO_SOURCES.map(src => (
        <source key={src} src={src} type="video/mp4" />
      ))}
    </video>
    <div className="site-video-backdrop__veil" />
    <div className="site-video-backdrop__grid" />
    <div className="site-video-backdrop__scan" />
    <div className="site-video-backdrop__glow" />
    <div className="code-orbit">
      {CODE_STREAMS.map((line, index) => (
        <span key={line} style={{ '--i': index }}>
          {line}
        </span>
      ))}
    </div>
  </div>
)

/* ── Portfolio (main site) ── */
const Portfolio = () => {
  const [loading, setLoading] = useState(true)
  const { darkMode } = useTheme()
  const mode = darkMode ? 'dark' : 'light'

  useEffect(() => {
    document.title = 'Amit Patel | Full Stack Developer'
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`site-shell relative min-h-screen overflow-x-hidden
                      bg-[#050505] text-white transition-colors duration-500
                      ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        <SiteVideoBackground mode={mode} />

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
