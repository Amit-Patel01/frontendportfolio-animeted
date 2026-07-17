import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
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
  { icon: FaGithub,       url: 'https://github.com/amit-patel01',             label: 'GitHub',   color: 'hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300' },
  { icon: FaLinkedinIn,   url: 'https://www.linkedin.com/in/amit-patel01/',   label: 'LinkedIn', color: 'hover:text-[#0077B5] hover:bg-blue-50 hover:border-blue-200' },
  { icon: MdOutlineEmail, url: 'mailto:amitpatel07029@gmail.com',             label: 'Email',    color: 'hover:text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300' },
]

const RESUME_URL = 'https://drive.google.com/file/d/1JrO16wfcc1qUyRbJzVv6jEWlDPYvTO5W/view?usp=sharing'

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [active,   setActive]   = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [hidden,   setHidden]   = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY
      setHidden(currentScroll > 150 && currentScroll > lastScroll.current)
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
        fixed z-50 left-0 right-0 flex justify-center
        px-4 sm:px-6 transition-all duration-500 ease-out
        ${scrolled ? 'top-3' : 'top-5'}
      `}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -130 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 26 }}
        className="w-full max-w-6xl glass-nav rounded-2xl transition-all duration-500"
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-5 sm:px-8">

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => { setActive('hero'); setIsOpen(false) }}
            className="flex shrink-0 items-center group"
          >
            <motion.img
              src={logoImg}
              alt="Amit Patel Logo"
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="h-10 w-auto object-contain sm:h-12 transition-transform duration-300"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <li key={link.href} className="relative">
                <a
                  href={`#${link.href}`}
                  onClick={() => setActive(link.href)}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                    ${active === link.href
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-800'
                    }
                  `}
                >
                  {link.name}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.1))',
                        border: '1px solid rgba(6,182,212,0.25)',
                      }}
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            <div className="hidden lg:flex items-center gap-1.5">
              {SOCIAL_LINKS.map(social => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-500 transition-all duration-300 ${social.color}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>

            {/* Resume button (desktop) */}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl
                         bg-gradient-to-r from-cyan-500 to-violet-600
                         text-white text-sm font-bold shadow-glow-cyan
                         hover:shadow-[0_6px_28px_rgba(6,182,212,0.5)]
                         transition-all duration-300 shrink-0"
            >
              <Download size={15} />
              <span>Resume</span>
            </motion.a>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-slate-600 hover:text-cyan-700 hover:bg-cyan-100 transition-all duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
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
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-cyan-100"
            >
              <ul className="flex flex-col gap-1 px-3 py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={`#${link.href}`}
                      onClick={() => { setActive(link.href); setIsOpen(false) }}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                        transition-all duration-250
                        ${active === link.href
                          ? 'text-cyan-700 border border-cyan-200'
                          : 'text-slate-600 hover:bg-cyan-50 hover:text-slate-900'
                        }
                      `}
                      style={active === link.href ? {
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08))',
                      } : {}}
                    >
                      {active === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                      )}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile socials & resume */}
              <div className="px-3 py-4 border-t border-cyan-100 space-y-3">
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.18 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-slate-600 hover:text-cyan-700 hover:bg-cyan-100 transition-all duration-300"
                      >
                        <Icon size={17} />
                      </motion.a>
                    )
                  })}
                </div>
                <motion.a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl
                             bg-gradient-to-r from-cyan-500 to-violet-600
                             text-white text-sm font-bold shadow-glow-cyan
                             transition-all duration-300"
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar
