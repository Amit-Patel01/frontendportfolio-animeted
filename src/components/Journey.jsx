import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Code, Hammer, Video, GraduationCap, Rocket } from 'lucide-react'

const MILESTONES = [
  {
    icon:  Code,
    year:  '2018',
    title: 'Started Learning',
    desc:  'Began web development journey through YouTube tutorials and passionate self-study.',
    color: 'from-cyan-500 to-blue-600',
    glow:  'rgba(6,182,212,0.35)',
    bg:    'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    icon:  Hammer,
    year:  '2020',
    title: 'PC Repair',
    desc:  'Began PC & Laptop Repair, gaining extensive hands-on hardware experience.',
    color: 'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.35)',
    bg:    'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon:  Video,
    year:  '2021',
    title: 'Video Editing Journey',
    desc:  'Mastered Premiere Pro and After Effects, creating cinematic content.',
    color: 'from-violet-500 to-fuchsia-600',
    glow:  'rgba(139,92,246,0.35)',
    bg:    'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    icon:  GraduationCap,
    year:  '2023',
    title: 'B.Tech IT',
    desc:  'Enrolled in Information Technology at Parul University, Vadodara.',
    color: 'from-amber-500 to-orange-600',
    glow:  'rgba(245,158,11,0.35)',
    bg:    'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    icon:  Rocket,
    year:  '2026',
    title: 'AmitSolutionHub',
    desc:  'Founded Amit Solution Hub to make technology accessible and practical for everyone.',
    color: 'from-fuchsia-500 to-pink-600',
    glow:  'rgba(217,70,239,0.35)',
    bg:    'bg-fuchsia-50',
    border: 'border-fuchsia-200',
  },
]

const Journey = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001,
  })

  return (
    <section id="journey" ref={containerRef} className="section-container section-accent-violet">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 space-y-4"
      >
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-glow-violet"
        >
          Journey
        </motion.span>
        <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight font-outfit">
          My{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
            Timeline
          </span>
        </h2>
        <p className="max-w-lg mx-auto text-[15px] text-slate-500">
          A journey of continuous learning, building, and creating impact.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Static track */}
        <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-slate-200 hidden sm:block" />

        {/* Animated progress */}
        <motion.div
          className="absolute left-[23px] top-0 w-[2px] hidden sm:block origin-top shadow-[0_0_14px_rgba(6,182,212,0.6)]"
          style={{
            scaleY,
            height: '100%',
            background: 'linear-gradient(180deg, #06b6d4, #8b5cf6, #d946ef)',
          }}
        />

        <div className="space-y-8">
          {MILESTONES.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Icon bubble (desktop) */}
                <motion.div
                  className="hidden sm:flex absolute left-0 top-4 w-12 h-12 rounded-2xl items-center justify-center shrink-0 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${
                      m.color.includes('cyan') ? '#06b6d4, #3b82f6' :
                      m.color.includes('emerald') ? '#10b981, #14b8a6' :
                      m.color.includes('violet') ? '#8b5cf6, #d946ef' :
                      m.color.includes('amber') ? '#f59e0b, #ef4444' :
                      '#ec4899, #f43f5e'
                    })`,
                    boxShadow: `0 4px 18px ${m.glow}`,
                  }}
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 12 }}
                >
                  <Icon size={20} className="text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-6 flex items-center gap-5 group card-shine"
                >
                  {/* Icon (mobile) */}
                  <motion.div
                    className={`sm:hidden flex items-center justify-center w-11 h-11 rounded-2xl shrink-0 bg-gradient-to-br ${m.color} shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <motion.span
                        className={`text-xs font-extrabold px-3 py-1 rounded-full text-white bg-gradient-to-r ${m.color} shadow-sm`}
                        whileHover={{ scale: 1.06 }}
                      >
                        {m.year}
                      </motion.span>
                      <h3 className="font-bold text-base text-slate-900 font-outfit">{m.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Journey
