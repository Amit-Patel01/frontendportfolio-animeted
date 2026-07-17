import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Settings,
  Film,
  Sparkles,
  Zap,
  Laptop2,
  Palette,
  Star,
} from 'lucide-react'

const TechIcon = ({ tech }) => (
  <img
    src={tech.iconUrl}
    alt={tech.name}
    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
    loading="lazy"
    onError={e => { e.target.style.display = 'none' }}
  />
)

const TECH_STACK = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React',        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          url: 'https://react.dev' },
      { name: 'Next.js',      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',        url: 'https://nextjs.org' },
      { name: 'HTML5',        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',          url: 'https://developer.mozilla.org' },
      { name: 'CSS3',         iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',            url: 'https://developer.mozilla.org' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com' },
      { name: 'Bootstrap',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',  url: 'https://getbootstrap.com' },
    ],
  },
  {
    category: 'Backend & DB',
    technologies: [
      { name: 'Node.js',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',   url: 'https://nodejs.org' },
      { name: 'Express',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', url: 'https://expressjs.com' },
      { name: 'MongoDB',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },
      { name: 'MySQL',    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',     url: 'https://www.mysql.com' },
      { name: 'PHP',      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',         url: 'https://www.php.net' },
    ],
  },
  {
    category: 'Creative & Tools',
    technologies: [
      { name: 'Premiere Pro',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg',   url: 'https://www.adobe.com' },
      { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', url: 'https://www.adobe.com' },
      { name: 'Photoshop',     iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',       url: 'https://www.adobe.com' },
      { name: 'Figma',         iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',              url: 'https://www.figma.com' },
      { name: 'PC Repair',     iconUrl: 'https://api.iconify.design/lucide:cpu.svg?color=%236366f1',                                url: '#' },
      { name: 'AI Tools',      iconUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2310b981',                       url: '#' },
    ],
  },
  {
    category: 'OS & Systems',
    technologies: [
      { name: 'Kali Linux', iconUrl: 'https://api.iconify.design/simple-icons:kalilinux.svg?color=%23557C94',       url: '#' },
      { name: 'Zorin OS',   iconUrl: 'https://api.iconify.design/simple-icons:zorinos.svg?color=%230CC0DF',         url: '#' },
      { name: 'Arch Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg', url: '#' },
      { name: 'Hyprland',   iconUrl: 'https://api.iconify.design/simple-icons:hyprland.svg?color=%238aadf4',        url: '#' },
      { name: 'Chrome OS',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', url: '#' },
      { name: 'PrimeOS',    iconUrl: 'https://api.iconify.design/simple-icons:android.svg?color=%233DDC84',         url: '#' },
    ],
  },
]

const PROCESS = [
  { step: 1, title: 'Discovery & Planning',    description: 'Understand requirements, business goals, and system architecture.', icon: Sparkles },
  { step: 2, title: 'Design & Mockups',        description: 'Create wireframes, design systems, and Figma mockups.',             icon: Palette },
  { step: 3, title: 'Frontend Development',    description: 'Build polished UIs with React, Tailwind CSS, and clean code.',      icon: Code2 },
  { step: 4, title: 'Backend Development',     description: 'Secure APIs, database models, and server logic with Node & MongoDB.', icon: Settings },
  { step: 5, title: 'Integration & Testing',   description: 'Connect all layers and run end-to-end quality checks.',            icon: Zap },
  { step: 6, title: 'Deployment & Support',    description: 'Deploy to cloud with CI/CD pipelines and ongoing maintenance.',    icon: Laptop2 },
]

const GROUPS = [
  {
    icon:  Code2,
    title: 'Development',
    desc:  'Engineering robust backend logic, database layers, and responsive user interfaces.',
    color: 'from-cyan-500 to-blue-600',
    glow:  'rgba(6,182,212,0.15)',
    bg:    'bg-cyan-50',
    border: 'border-cyan-200',
    barColor: '#3b82f6,#06b6d4',
    tags: [
      { name: 'HTML',       level: 95 },
      { name: 'CSS',        level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React',      level: 82 },
      { name: 'Bootstrap',  level: 88 },
      { name: 'PHP',        level: 70 },
      { name: 'MERN Stack', level: 78 },
    ],
  },
  {
    icon:  Film,
    title: 'Creative',
    desc:  'Designing branding content, mockups, and high-impact cinematic video edits.',
    color: 'from-violet-500 to-fuchsia-600',
    glow:  'rgba(139,92,246,0.15)',
    bg:    'bg-violet-50',
    border: 'border-violet-200',
    barColor: '#8b5cf6,#d946ef',
    tags: [
      { name: 'Premiere Pro',  level: 85 },
      { name: 'After Effects', level: 75 },
      { name: 'Photoshop',     level: 78 },
      { name: 'UI/UX Design',  level: 80 },
      { name: 'Figma',         level: 72 },
      { name: 'Canva',         level: 80 },
      { name: 'CapCut',        level: 75 },
    ],
  },
  {
    icon:  Settings,
    title: 'Technical',
    desc:  'Hardware troubleshooting, OS installations, networking, and data storage.',
    color: 'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.15)',
    bg:    'bg-emerald-50',
    border: 'border-emerald-200',
    barColor: '#10b981,#06b6d4',
    tags: [
      { name: 'PC Repair',       level: 92 },
      { name: 'Windows Install', level: 95 },
      { name: 'BIOS/Driver Fix', level: 88 },
      { name: 'SSD/RAM Upgrade', level: 90 },
      { name: 'Network Setup',   level: 80 },
      { name: 'MongoDB',         level: 72 },
      { name: 'MySQL',           level: 75 },
    ],
  },
]

/* ── Marquee Row ── */
const MarqueeRow = ({ items, direction = 'left', speed = '35s' }) => {
  const duplicated = [...items, ...items]
  return (
    <div className="relative flex overflow-x-hidden w-full select-none py-1 mask-fade">
      <div
        className={`flex gap-4 shrink-0 min-w-full animate-marquee-${direction}`}
        style={{ '--marquee-speed': speed }}
      >
        {duplicated.map((tech, idx) => (
          <motion.a
            key={`${tech.name}-${idx}`}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-card group flex items-center gap-3 px-5 py-3 rounded-xl border shrink-0 cursor-pointer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon tech={tech} />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

/* ── Mini Marquee (inside proficiency cards) ── */
const MiniMarqueeRow = ({ items, direction = 'left', speed = '22s', barColor }) => {
  const duplicated = [...items, ...items]
  return (
    <div className="relative flex overflow-x-hidden w-full select-none py-0.5 mask-fade pointer-events-none">
      <div
        className={`flex gap-2.5 shrink-0 min-w-full animate-marquee-${direction}`}
        style={{ '--marquee-speed': speed }}
      >
        {duplicated.map((tag, idx) => (
          <div
            key={`${tag.name}-${idx}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-white/60 shadow-sm shrink-0"
          >
            <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">{tag.name}</span>
            <span
              className="text-[9px] font-black px-1.5 py-0.5 rounded-md text-white font-mono"
              style={{ background: `linear-gradient(90deg, ${barColor})` }}
            >
              {tag.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main Skills Component ── */
const Skills = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  const row1 = TECH_STACK[0].technologies
  const row2 = TECH_STACK[1].technologies
  const row3 = TECH_STACK[2].technologies
  const row4 = TECH_STACK[3].technologies

  return (
    <section id="skills" className="section-container space-y-28">

      {/* ── Tech Stack ── */}
      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan"
          >
            Tech Stack
          </motion.span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight">
            Technologies I{' '}
            <span className="gradient-text-static">Use</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-[15px]">
            A constantly growing toolkit for building modern digital products.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 py-6 overflow-hidden w-full relative">
          <MarqueeRow items={row1} direction="left"  speed="35s" />
          <MarqueeRow items={row2} direction="right" speed="40s" />
          <MarqueeRow items={row3} direction="left"  speed="38s" />
          <MarqueeRow items={row4} direction="right" speed="42s" />
        </div>
      </div>

      {/* ── Process ── */}
      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-glow-violet"
          >
            Process
          </motion.span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight">
            My Development{' '}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </motion.div>

        <div className="relative w-full py-8 px-2">
          <div className="relative flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-0 w-full">
            {/* Horizontal track (desktop) */}
            <div className="hidden md:block absolute top-[30px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 z-0" />
            {/* Vertical track (mobile) */}
            <div className="block md:hidden absolute top-[40px] bottom-[40px] left-[40px] w-[2px] bg-gradient-to-b from-cyan-200 via-violet-200 to-fuchsia-200 z-0" />

            {PROCESS.map((item, i) => {
              const Icon = item.icon
              const colors = [
                'from-cyan-500 to-blue-600',
                'from-violet-500 to-purple-600',
                'from-fuchsia-500 to-pink-600',
                'from-emerald-500 to-teal-600',
                'from-amber-500 to-orange-600',
                'from-blue-500 to-indigo-600',
              ]
              const glows = [
                'rgba(6,182,212,0.4)',
                'rgba(139,92,246,0.4)',
                'rgba(217,70,239,0.4)',
                'rgba(16,185,129,0.4)',
                'rgba(245,158,11,0.4)',
                'rgba(99,102,241,0.4)',
              ]
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:w-[15%] relative z-10 px-1 gap-4 md:gap-0 group"
                >
                  <motion.div
                    className="relative shrink-0 md:mb-5"
                    whileHover={{ scale: 1.18, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 10 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${colors[i]}`}
                      style={{ boxShadow: `0 4px 18px ${glows[i]}` }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <motion.span
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-200 text-slate-700 text-[9px] font-black flex items-center justify-center font-mono shadow-md"
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.step}
                    </motion.span>
                  </motion.div>

                  <div className="flex flex-col items-start md:items-center">
                    <motion.span
                      className="text-[9px] font-extrabold text-cyan-600 uppercase tracking-widest"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      Step {item.step}
                    </motion.span>
                    <motion.h3
                      className="font-extrabold text-xs sm:text-sm text-slate-900 mt-1 font-outfit"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.28 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-[11px] leading-relaxed text-slate-500 mt-1.5 max-w-[220px] md:max-w-[140px] md:mx-auto"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.36 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Proficiency ── */}
      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-glow-cyan"
          >
            <Star size={11} />
            Proficiency
          </motion.span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight">
            What I{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              Know
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((group, gi) => {
            const Icon = group.icon
            const mid = Math.ceil(group.tags.length / 2)
            const stackRow1 = group.tags.slice(0, mid)
            const stackRow2 = group.tags.slice(mid)

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.14 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseMove={handleMouseMove}
                className="glass-card group cursor-default p-7 rounded-2xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[320px] card-shine"
              >
                {/* Top color accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${group.color}`} />

                {/* Background tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${group.glow}, transparent 60%)` }}
                />

                <div className="space-y-4 relative z-10">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${group.color} shadow-md`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 font-outfit">{group.title}</h3>
                  </motion.div>

                  <p className="text-xs leading-relaxed text-slate-500">{group.desc}</p>
                </div>

                <div className="space-y-2.5 mt-5 relative z-10 w-full overflow-hidden">
                  <MiniMarqueeRow items={stackRow1} direction="left"  speed="24s" barColor={group.barColor} />
                  <MiniMarqueeRow items={stackRow2} direction="right" speed="26s" barColor={group.barColor} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
