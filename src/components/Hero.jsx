import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = ['Full Stack Developer', 'UI/UX Designer', 'Creative Thinker', 'Tech Enthusiast']
const HERO_CHIPS = ['React', 'Node.js', 'Clean UI', 'Deploy']

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 100)

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 pb-24 pt-28 text-center sm:pt-32"
    >
      {/* Hero-specific animated overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-mood-overlay absolute inset-0" />
        <div className="hero-data-grid absolute inset-0 opacity-70" />
        <motion.div
          aria-hidden="true"
          className="hero-scanline absolute left-0 right-0 top-0 h-24"
          animate={{ y: ['-20%', '118%'] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="absolute inset-x-4 top-24 z-0 mx-auto hidden max-w-6xl justify-between gap-4 pointer-events-none sm:flex">
        {HERO_CHIPS.map((chip, index) => (
          <motion.span
            key={chip}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: [0.22, 0.6, 0.22], y: [0, -14, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, delay: index * 0.45, ease: 'easeInOut' }}
            className="hero-chip rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
          >
            {chip}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center space-y-7">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pill"
        >
          <Sparkles size={14} className="text-cyan-400" />
          <span className="text-sm font-medium tracking-widest text-cyan-400">Available for freelance</span>
        </motion.div>

        {/* Main Name & Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center gap-6 md:flex-row md:gap-10"
        >
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-[0_22px_80px_rgba(6,182,212,0.22)] transition-transform duration-500 hover:scale-105 md:h-40 md:w-40">
            <img src={profileImg} alt="Amit Patel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
          </div>
          <h1 className="font-outfit text-5xl font-black leading-[0.9] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            AMIT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
              PATEL
            </span>
          </h1>
        </motion.div>

        {/* Typewriter Role */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 min-h-9 text-lg font-medium text-slate-300 sm:text-xl md:text-3xl"
        >
          <span className="text-cyan-400">&lt;</span>
          {typedRole}
          <span className="animate-pulse text-cyan-400">_</span>
          <span className="text-cyan-400">&gt;</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-xl text-slate-400 text-lg leading-relaxed mx-auto"
        >
          Crafting immersive digital experiences, sleek interfaces, and robust backend architectures. Based in the digital realm.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      
    </section>
  )
}

export default Hero
