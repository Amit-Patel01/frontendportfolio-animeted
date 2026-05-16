import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = ['Full Stack Developer', 'UI/UX Designer', 'Creative Thinker', 'Tech Enthusiast']

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 100)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 space-y-8 px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        
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
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-[4px] border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-500">
            <img src={profileImg} alt="Amit Patel" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-outfit font-black text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter text-white">
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
          className="text-xl md:text-3xl font-medium text-slate-300 mt-4"
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-10 h-14 border-2 border-slate-700 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
