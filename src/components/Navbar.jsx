import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import logoImg from '../assets/logo.png'

const NAV_LINKS = [
  { name: 'Home',     href: 'hero' },
  { name: 'About',    href: 'about' },
  { name: 'Skills',   href: 'skills' },
  { name: 'Journey',  href: 'journey' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact',  href: 'contact' },
]

const SOCIAL_LINKS = [
  { icon: Github,  url: 'https://github.com/amit-patel01', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/amit-patel01/', label: 'LinkedIn' },
  { icon: Mail,    url: 'mailto:amitpatel07029@gmail.com', label: 'Email' },
]

const RESUME_URL = 'https://drive.google.com/file/d/1JrO16wfcc1qUyRbJzVv6jEWlDPYvTO5W/view?usp=sharing'

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [active,   setActive]   = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [hidden,   setHidden]   = useState(false)
  const lastScroll = useRef(0)
  const { darkMode } = useTheme()
  
  const surfaceClass = darkMode
    ? scrolled
      ? 'bg-[#050505]/90 border-[#ffffff1a] shadow-[0_12px_50px_rgba(6,182,212,0.15)]'
      : 'bg-[#050505]/[0.45] border-[#ffffff1a] shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
    : scrolled
      ? 'bg-sky-100/[0.78] border-cyan-300/60 shadow-[0_12px_46px_rgba(8,47,73,0.14)]'
      : 'bg-sky-100/[0.58] border-cyan-200/60 shadow-[0_8px_36px_rgba(8,47,73,0.11)]'
  
  const textPrimary = darkMode ? 'text-white' : 'text-slate-950'
  const textMuted = darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
  const controlClass = darkMode
    ? 'bg-[#ffffff1a] border-[#ffffff1a] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10'
    : 'bg-sky-100/70 border-cyan-200/80 text-slate-700 hover:text-cyan-700 hover:border-cyan-300/80 hover:bg-cyan-100/75'

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY

      setHidden(currentScroll > 140 && currentScroll > lastScroll.current)
      setScrolled(currentScroll > 50)
      lastScroll.current = currentScroll
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-35% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div
      className={`
        fixed z-50 top-4 left-0 right-0
        flex justify-center
        px-3 sm:px-4
        transition-all duration-300
        ${scrolled ? 'top-2' : 'top-4'}
      `}
    >
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ 
          y: hidden ? -120 : 0, 
          opacity: hidden ? 0 : 1 
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.05 }}
        className={`
          w-full max-w-[96%] sm:max-w-[92%] lg:max-w-[88%] xl:max-w-[78%] 2xl:max-w-[68%]
          rounded-lg
          backdrop-blur-2xl
          border
          transition-all duration-300
          ${surfaceClass}
        `}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => { setActive('hero'); setIsOpen(false) }}
            className="flex shrink-0 items-center group"
          >
            <motion.img
              src={logoImg}
              alt="Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 w-auto object-contain sm:h-10 transition-transform duration-300"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href} className="relative">
                <a
                  href={`#${link.href}`}
                  onClick={() => setActive(link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                    ${active === link.href
                      ? 'text-cyan-400'
                      : textMuted
                    }`}
                >
                  {link.name}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-cyan-500/15 -z-10 border border-cyan-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls (Social + Resume + Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Social Links (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 ${controlClass}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>

            {/* Resume Download Button (Desktop only) */}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-lg
                         bg-gradient-to-r from-cyan-500 to-blue-600
                         text-white text-xs sm:text-sm font-semibold
                         hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
                         transition-all duration-300 shrink-0"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className={`lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg border transition-colors duration-200 ${controlClass}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: -80, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  80, opacity: 0 }}
                  transition={{ duration: 0.17 }}
                >
                  {isOpen ? <X size={17} /> : <Menu size={17} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{    opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-[#ffffff0a]"
            >
              <ul className="flex flex-col gap-1 px-2 py-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={`#${link.href}`}
                      onClick={() => { setActive(link.href); setIsOpen(false) }}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
                                  transition-all duration-200
                        ${active === link.href
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                          : darkMode
                            ? 'text-slate-300 hover:bg-[#ffffff0a] hover:text-white'
                            : 'text-slate-700 hover:bg-cyan-50/80 hover:text-slate-950'
                        }`}
                    >
                      {active === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      )}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social & Resume */}
              <div className="px-2 py-3 border-t border-[#ffffff0a] space-y-2">
                {/* Social Links */}
                <div className="flex items-center gap-2 justify-center">
                  {SOCIAL_LINKS.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 ${controlClass}`}
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>

                {/* Resume Button */}
                <motion.a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg
                             bg-gradient-to-r from-cyan-500 to-blue-600
                             text-white text-sm font-semibold
                             hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
                             transition-all duration-300"
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Navbar;
