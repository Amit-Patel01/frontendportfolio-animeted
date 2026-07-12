import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Code, Hammer, Video, GraduationCap, Rocket } from 'lucide-react'

const MILESTONES = [
  {
    icon:  Code,
    year:  '2018',
    title: 'Started Learning',
    desc:  'Began web development journey through YouTube tutorials and self-study.  I began learning web development with basic tools and a strong desire to create something meaningful. Step by step, I evolved from building simple static pages to developing dynamic, full-stack applications.',
    color: 'from-blue-500 to-indigo-600',
    glow:  'rgba(99,102,241,0.4)',
  },
  {
    icon:  Hammer,
    year:  '2020',
    title: 'PC Repair',
    desc:  'I began my journey in PC & Laptop Repair, gaining extensive hands-on experience in hardware diagnostics, troubleshooting, and system maintenance. Today, I am an experienced technician capable of delivering reliable technical solutions for both individuals and businesses.',
    color: 'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.4)',
  },
  {
    icon:  Video,
    year:  '2021',
    title: 'Video Editing Journey',
    desc:  'I started my video editing journey, mastering Premiere Pro and After Effects to design engaging visual content, commercials, promos, and high-impact cinematic edits.',
    color: 'from-orange-500 to-pink-500',
    glow:  'rgba(249,115,22,0.4)',
  },
  {
    icon:  GraduationCap,
    year:  '2023',
    title: 'B.Tech IT',
    desc:  'Enrolled in Information Technology at Parul University — deepening Information Technology fundamentals.',
    color: 'from-violet-500 to-purple-600',
    glow:  'rgba(139,92,246,0.4)',
  },
  {
    icon:  Rocket,
    year:  '2026',
    title: 'AmitSolutionHub',
    desc:  'Amit Solution Hub was founded with a simple vision—to make technology more accessible and practical for everyone. What started as providing PC & Laptop repair services gradually evolved into offering web development, AI solutions, cloud services, digital marketing, and custom software development. Today, Amit Solution Hub helps startups, businesses, and individuals transform their ideas into innovative digital products through reliable technology and modern solutions.',
    color: 'from-orange-500 to-red-500',
    glow:  'rgba(249,115,22,0.4)',
  },
]

const Journey = () => {
  const containerRef = useRef(null)
  
  // Hook up scroll tracking relative to the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  })

  return (
    <section id="journey" ref={containerRef} className="section-container">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase
                       bg-gradient-to-r from-violet-500 to-indigo-500 text-white border-none shadow-[0_3px_12px_rgba(139,92,246,0.3)]">
          Journey
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight font-outfit">
          My{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-500 bg-clip-text text-transparent">
            Timeline
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line background track */}
        <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-slate-200/50 dark:bg-white/[0.08] hidden sm:block" />

        {/* Scroll-linked glowing progress line overlay */}
        <motion.div 
          className="absolute left-[23px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 hidden sm:block origin-top shadow-[0_0_12px_rgba(6,182,212,0.7)]"
          style={{ 
            scaleY,
            height: '100%'
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
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative sm:pl-20"
              >
                {/* Icon bubble on line */}
                <div
                  className={`hidden sm:flex absolute left-0 top-4 w-12 h-12 rounded-2xl
                               items-center justify-center shrink-0
                               bg-gradient-to-br ${m.color}
                               shadow-[0_4px_18px_var(--glow)]`}
                  style={{ '--glow': m.glow }}
                >
                  <Icon size={20} className="text-white" />
                </div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="bento-card p-6 flex items-center gap-5 group
                             hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  {/* Mobile icon */}
                  <div
                    className={`sm:hidden flex items-center justify-center w-11 h-11 rounded-2xl shrink-0
                                 bg-gradient-to-br ${m.color}`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full text-white
                                        bg-gradient-to-r ${m.color}`}>
                        {m.year}
                      </span>
                      <h3 className="font-bold text-base text-white font-outfit">
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
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
