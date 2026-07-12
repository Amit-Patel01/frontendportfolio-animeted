import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, MessageSquare, Check } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = [
  'Technology Partner',
  'AI Solutions Architect',
  'Full Stack Developer',
  'Cloud & DevOps Engineer',
  'Startup Consultant'
]

const FLOATING_PILLS = [
  { name: 'Artificial Intelligence', pos: 'top-20 left-[8%]' },
  { name: 'Next.js / React',       pos: 'top-32 right-[8%]' },
  { name: 'Cloud Serverless',      pos: 'bottom-28 left-[10%]' },
  { name: 'DevOps / AWS',          pos: 'bottom-20 right-[12%]' },
  { name: 'MongoDB',               pos: 'top-[45%] left-[5%]' },
  { name: 'Cyber Security',        pos: 'top-[48%] right-[5%]' },
  { name: 'Automation',            pos: 'bottom-36 right-[24%]' }
]

const TRUST_POINTS = [
  'Trusted by Startups',
  'Open to Global Partnerships',
  'Building Scalable Technology',
  'Long-Term Collaboration'
]

const STATS = [
  { value: '25+',  label: 'Projects Delivered', color: 'from-blue-500 to-indigo-600' },
  { value: '10+',  label: 'Business Clients',   color: 'from-indigo-500 to-violet-600' },
  { value: 'AI',   label: 'Solutions Deployed', color: 'from-emerald-500 to-teal-600' },
  { value: '24/7', label: 'Technical Support', color: 'from-amber-500 to-orange-600' }
]

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 100)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-transparent px-4 pb-20 pt-28 sm:pt-32"
    >
      {/* ── Background Data Grid Lines ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-mood-overlay absolute inset-0" />
        <div className="hero-data-grid absolute inset-0 opacity-40 dark:opacity-75" />
        <motion.div
          aria-hidden="true"
          className="hero-scanline absolute left-0 right-0 top-0 h-24"
          animate={{ y: ['-20%', '118%'] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ── Floating Tech Pills ── */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        {FLOATING_PILLS.map((pill, index) => (
          <motion.span
            key={pill.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ 
              opacity: [0.3, 0.65, 0.3], 
              y: [0, -12, 0] 
            }}
            transition={{ 
              duration: 5.5 + index, 
              repeat: Infinity, 
              delay: index * 0.4, 
              ease: 'easeInOut' 
            }}
            className={`absolute ${pill.pos} px-3 py-1.5 text-xs font-semibold rounded-full border border-indigo-200/60 dark:border-indigo-400/10 bg-white/40 dark:bg-white/[0.04] text-indigo-500/80 dark:text-indigo-300/70 shadow-[0_8px_30px_rgba(79,70,229,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-md`}
          >
            {pill.name}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ── Left Column: Company Value Proposition & Copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7 order-2 lg:order-1">
            
            {/* Top Partnership Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-outfit shadow-sm"
            >
              <Sparkles size={13} className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
              <span>🚀 Technology Partner for Startups & Businesses</span>
            </motion.div>

            {/* Title & Organization Subhead */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-outfit text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight"
              >
                AMIT PATEL
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl font-bold font-outfit bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent"
              >
                Founder & CEO • Amit Solution Hub
              </motion.p>

              {/* Animated Roles Typewriter */}
              <div className="min-h-9 text-base font-bold text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl font-mono pt-1">
                <span className="text-indigo-500 font-semibold mr-1">&lt;</span>
                {typedRole}
                <span className="animate-pulse text-violet-500 font-bold">_</span>
                <span className="text-indigo-500 font-semibold ml-1">&gt;</span>
              </div>
            </div>

            {/* B2B Agency Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-xl text-slate-500 dark:text-slate-400 text-sm sm:text-[15px] leading-relaxed font-medium space-y-3"
            >
              I founded Amit Solution Hub with a vision to help startups, businesses, and organizations transform ideas into scalable digital products.
              <br className="my-2 block" />
              We specialize in AI-powered applications, custom software, web platforms, cloud infrastructure, automation, and digital transformation. Our focus is on building long-term technology partnerships that drive innovation, efficiency, and business growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#contact"
                className="btn-primary px-6.5 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 group hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-6.5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <MessageSquare size={14} />
                <span>View Projects</span>
              </a>
            </motion.div>

            {/* Trust List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-4 font-outfit text-xs font-semibold text-slate-500 dark:text-slate-400"
            >
              {TRUST_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-violet-400 shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right Column: CEO Profile Image & Statistics Panel ── */}
          <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseMove={handleMouseMove}
              className="bento-card w-full max-w-[340px] lg:max-w-none rounded-3xl p-6 flex flex-col items-center justify-between bg-white/40 dark:bg-[#08080c]/85 relative overflow-hidden select-none group text-center"
            >
              {/* Profile Avatar with Halo Ring */}
              <div className="relative group my-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative h-28 w-28 md:h-32 md:w-32 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-600 shadow-[0_8px_30px_rgba(99,102,241,0.25)]"
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#050508] bg-[#050508]">
                    <img src={profileImg} alt="Amit Patel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </motion.div>
              </div>

              {/* Statistics Grid */}
              <div className="w-full grid grid-cols-2 gap-4 border-t border-slate-200/60 dark:border-white/10 pt-6 mt-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-left flex flex-col p-3 rounded-2xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 shadow-inner">
                    <span className={`text-xl md:text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-outfit`}>
                      {stat.value}
                    </span>
                    <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero