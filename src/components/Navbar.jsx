import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home',     href: 'hero' },
  { name: 'About',    href: 'about' },
  { name: 'Journey',  href: 'journey' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact',  href: 'contact' },
]

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [active,   setActive]   = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
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
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
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
        animate={{ y: 0,   opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.05 }}
        className={`
          w-full max-w-[94%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[68%]
          rounded-2xl
          backdrop-blur-2xl
          border border-[#ffffff1a]
          transition-all duration-300
          ${scrolled
            ? 'bg-[#050505]/90 shadow-[0_12px_50px_rgba(6,182,212,0.15)]'
            : 'bg-[#ffffff05] shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
          }
        `}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => { setActive('hero'); setIsOpen(false) }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600
                         flex items-center justify-center
                         shadow-[0_4px_14px_rgba(6,182,212,0.4)] border border-white/20"
            >
              <span className="text-white font-black text-xs sm:text-sm font-outfit">AP</span>
            </motion.div>
            <span
              className="font-bold text-base sm:text-[17px] text-white
                         group-hover:text-cyan-400
                         transition-colors duration-200 font-outfit"
            >
              Amit Patel
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href} className="relative">
                <a
                  href={`#${link.href}`}
                  onClick={() => setActive(link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                    ${active === link.href
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
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

          {/* Right controls (Mobile Menu Toggle) */}
          <div className="flex items-center gap-2 shrink-0 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl
                         bg-[#ffffff1a] border border-[#ffffff1a] text-white
                         transition-colors duration-200"
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
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-1 px-2 pb-4 pt-1">
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
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                                  transition-all duration-200
                        ${active === link.href
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                          : 'text-slate-400 hover:bg-[#ffffff0a] hover:text-white'
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Navbar
