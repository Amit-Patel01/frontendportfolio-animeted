import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, MessageSquare, Check, Code2, Cpu, Globe } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.jpeg'

const ROLES = [
  'Technology Partner',
  'AI Solutions Architect',
  'Full Stack Developer',
  'Cloud & DevOps Engineer',
  'Startup Consultant',
]

const TRUST_POINTS = [
  'Trusted by Startups',
  'Open to Global Partnerships',
  'Building Scalable Technology',
  'Long-Term Collaboration',
]

const STATS = [
  { value: '25+',  label: 'Projects',   color: 'from-cyan-500 to-blue-600',    bg: 'bg-cyan-50',    border: 'border-cyan-200' },
  { value: '10+',  label: 'Clients',    color: 'from-violet-500 to-fuchsia-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  { value: 'AI',   label: 'Solutions',  color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { value: '24/7', label: 'Support',    color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50',   border: 'border-amber-200' },
]

const SERVICES = [
  { icon: Code2,   label: 'Web Dev',  color: 'text-cyan-600',   bg: 'bg-cyan-100' },
  { icon: Cpu,     label: 'AI/ML',    color: 'text-violet-600', bg: 'bg-violet-100' },
  { icon: Globe,   label: 'Cloud',    color: 'text-emerald-600', bg: 'bg-emerald-100' },
]

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 100)
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 500], [0, 120])
  const opacity = useTransform(scrollY, [0, 380], [1, 0])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-20 px-4"
    >
      {/* Colorful hero background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 left-6 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-6 w-96 h-96 bg-violet-400/22 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-fuchsia-300/12 rounded-full blur-3xl" />
        <div className="absolute top-36 right-1/4 w-60 h-60 bg-emerald-400/18 rounded-full blur-3xl" />
        <div className="absolute bottom-36 left-1/4 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={14} className="text-cyan-600" />
              </motion.div>
              <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Technology Partner for Startups & Businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight">
                AMIT{' '}
                <span className="gradient-text">PATEL</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold font-outfit text-slate-600"
              >
                Founder & CEO &bull; Amit Solution Hub
              </motion.p>

              {/* Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 text-base sm:text-lg font-mono text-slate-500 pt-1"
              >
                <span className="text-cyan-500 font-bold">&lt;</span>
                <span className="text-violet-600 font-semibold">{typedRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-cyan-500 font-bold"
                >
                  _
                </motion.span>
                <span className="text-cyan-500 font-bold">&gt;</span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-xl text-slate-600 text-sm sm:text-[15px] leading-relaxed"
            >
              I founded Amit Solution Hub to help startups, businesses & organizations transform ideas into
              scalable digital products — AI apps, web platforms, cloud infrastructure, automation & digital transformation.
            </motion.p>

            {/* Service chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 flex-wrap"
            >
              {SERVICES.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${s.bg} border border-white/60 text-xs font-semibold ${s.color}`}
                  >
                    <Icon size={13} />
                    {s.label}
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <span>Partner With Us</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <MessageSquare size={16} />
                <span>View Projects</span>
              </motion.a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-x-8 gap-y-2.5 pt-2"
            >
              {TRUST_POINTS.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-xs font-semibold text-slate-600"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shrink-0">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </div>
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column — Profile Card ── */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotateY: -12 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[400px]"
            >
              <div className="glass-card p-8 flex flex-col items-center text-center space-y-6">

                {/* Avatar ring */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full p-[3px] shadow-glow-cyan"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef)',
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <img src={profileImg} alt="Amit Patel" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  {/* Sparkle badge */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
                  >
                    <Sparkles size={15} className="text-white" />
                  </motion.div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold text-slate-900 font-outfit">Amit Patel</h3>
                  <p className="text-sm text-slate-500 font-medium">Founder & CEO</p>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-xs text-emerald-600 font-semibold">Available for projects</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.65 + i * 0.08 }}
                      whileHover={{ scale: 1.06 }}
                      className={`p-3 rounded-xl ${stat.bg} border ${stat.border} text-center`}
                    >
                      <div className={`text-xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative outer glow */}
              <div
                className="absolute -inset-5 rounded-3xl blur-3xl -z-10 opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.18), rgba(217,70,239,0.15))',
                }}
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default Hero
