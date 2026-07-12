import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Settings, 
  Film, 
  Sparkles, 
  Zap, 
  Laptop2, 
  Video, 
  ArrowRight,
  Monitor,
  Heart,
  Palette
} from 'lucide-react'

// Sub-component for individual tech icons inside marquee
const TechIcon = ({ tech }) => {
  return (
    <img 
      src={tech.iconUrl} 
      alt={tech.name} 
      className={`w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.needInvert ? 'dark:invert' : ''}`}
      loading="lazy"
    />
  )
}

// ── TECH STACK DATA ──
const TECH_STACK = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org', needInvert: true },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com' },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com' },
    ]
  },
  {
    category: 'Backend & DB',
    technologies: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
      { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', url: 'https://expressjs.com', needInvert: true },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', url: 'https://www.php.net' },
    ]
  },
  {
    category: 'Creative & Tech',
    technologies: [
      { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg', url: 'https://www.adobe.com' },
      { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', url: 'https://www.adobe.com' },
      { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', url: 'https://www.adobe.com' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', url: 'https://www.figma.com' },
      { name: 'PC Repair', iconUrl: 'https://api.iconify.design/lucide:cpu.svg?color=%236366f1', url: '#' },
      { name: 'AI Integration', iconUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2310b981', url: '#' },
    ]
  },
  {
    category: 'OS & Systems',
    technologies: [
      { name: 'Kali Linux', iconUrl: 'https://api.iconify.design/simple-icons:kalilinux.svg?color=%23557C94', url: '#' },
      { name: 'Zorin OS', iconUrl: 'https://api.iconify.design/simple-icons:zorinos.svg?color=%230CC0DF', url: '#' },
      { name: 'Arch Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg', url: '#' },
      { name: 'Hyprland', iconUrl: 'https://api.iconify.design/simple-icons:hyprland.svg?color=%238aadf4', url: '#' },
      { name: 'Chrome OS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', url: '#' },
      { name: 'PrimeOS', iconUrl: 'https://api.iconify.design/simple-icons:android.svg?color=%233DDC84', url: '#' },
    ]
  }
]

// ── PROCESS STEPS DATA ──
const PROCESS = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'Understand requirements, business goals, and map system architecture.',
    icon: Sparkles,
  },
  {
    step: 2,
    title: 'Design & Mockups',
    description: 'Create responsive wireframes, design systems, and visual Figma mockups.',
    icon: Palette,
  },
  {
    step: 3,
    title: 'Frontend Development',
    description: 'Build polished user interfaces with clean React & Tailwind CSS structures.',
    icon: Code2,
  },
  {
    step: 4,
    title: 'Backend Development',
    description: 'Create secure APIs, database models, and server logic with Node.js & MongoDB.',
    icon: Settings,
  },
  {
    step: 5,
    title: 'Integration & Testing',
    description: 'Connect frontend layers with backend services and execute end-to-end testing.',
    icon: Zap,
  },
  {
    step: 6,
    title: 'Deployment & Support',
    description: 'Deploy to scalable cloud containers with CI/CD and secure system audits.',
    icon: Laptop2,
  },
]

// ── PROFICIENCY GROUPS DATA ──
const GROUPS = [
  {
    icon:  Code2,
    title: 'Development',
    desc:  'Engineering robust backend logic, database layers, and responsive user interfaces.',
    color: 'from-blue-500 to-indigo-600',
    glow:  'rgba(99,102,241,0.35)',
    tags: [
      { name: 'HTML',            level: 95 },
      { name: 'CSS',             level: 90 },
      { name: 'JavaScript',      level: 85 },
      { name: 'React',           level: 82 },
      { name: 'Bootstrap',       level: 88 },
      { name: 'PHP',             level: 70 },
      { name: 'MERN Stack',      level: 78 },
    ],
  },
  {
    icon:  Film,
    title: 'Creative',
    desc:  'Designing branding content, mockups, and high-impact cinematic video edits.',
    color: 'from-violet-500 to-pink-600',
    glow:  'rgba(236,72,153,0.35)',
    tags: [
      { name: 'Premiere Pro', level: 85 },
      { name: 'After Effects', level: 75 },
      { name: 'Photoshop',    level: 78 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Figma',        level: 72 },
      { name: 'Canva',        level: 80 },
      { name: 'CapCut',       level: 75 },
    ],
  },
  {
    icon:  Settings,
    title: 'Technical',
    desc:  'Performing hardware troubleshooting, OS installations, networking, and data storage.',
    color: 'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.35)',
    tags: [
      { name: 'PC Repair',          level: 92 },
      { name: 'Windows Install',    level: 95 },
      { name: 'BIOS / Driver Fix',  level: 88 },
      { name: 'SSD / RAM Upgrade',  level: 90 },
      { name: 'Network Setup',      level: 80 },
      { name: 'MongoDB',            level: 72 },
      { name: 'MySQL',              level: 75 },
    ],
  },
]

// ── TECH STACK MARQUEE ROWS (Separated by Category) ──
const row1 = TECH_STACK[0].technologies
const row2 = TECH_STACK[1].technologies
const row3 = TECH_STACK[2].technologies
const row4 = TECH_STACK[3].technologies

const MarqueeRow = ({ items, direction = 'left', speed = '35s' }) => {
  const duplicatedItems = [...items, ...items]
  
  return (
    <div className="relative flex overflow-x-hidden w-full select-none py-1 mask-fade">
      <div 
        className={`flex gap-4 shrink-0 min-w-full animate-marquee-${direction}`}
        style={{ '--marquee-speed': speed }}
      >
        {duplicatedItems.map((tech, idx) => (
          <a
            key={`${tech.name}-${idx}`}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-card group flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,182,212,0.12)] shrink-0"
          >
            <TechIcon tech={tech} />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

// ── MINI MARQUEE ROW FOR PROFICIENCY CARDS ──
const MiniMarqueeRow = ({ items, direction = 'left', speed = '20s', barColor }) => {
  const duplicated = [...items, ...items]
  return (
    <div className="relative flex overflow-x-hidden w-full select-none py-1 mask-fade pointer-events-none">
      <div 
        className={`flex gap-3 shrink-0 min-w-full animate-marquee-${direction}`}
        style={{ '--marquee-speed': speed }}
      >
        {duplicated.map((tag, idx) => (
          <div
            key={`${tag.name}-${idx}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 shadow-inner shrink-0"
          >
            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-300">{tag.name}</span>
            <span 
              className="text-[9.5px] font-black px-2 py-0.5 rounded-lg text-white font-mono"
              style={{ background: barColor }}
            >
              {tag.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id="skills" className="section-container space-y-24 lg:space-y-28">

      {/* ── Section 1: Tech Stack ── */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase
                       bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none shadow-[0_3px_12px_rgba(6,182,212,0.3)]">
            Tech Stack
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}>
            Technologies I{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Use
            </span>
          </h2>
        </motion.div>

        {/* Infinite Horizontal Marquee Rows */}
        <div className="flex flex-col gap-5 py-6 overflow-hidden relative w-full">
          <MarqueeRow items={row1} direction="left" speed="35s" />
          <MarqueeRow items={row2} direction="right" speed="40s" />
          <MarqueeRow items={row3} direction="left" speed="38s" />
          <MarqueeRow items={row4} direction="right" speed="42s" />
        </div>
      </div>

      {/* ── Section 2: Development Process ── */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase
                       bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none shadow-[0_3px_12px_rgba(168,85,247,0.3)]">
            Process
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}>
            My Development{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </motion.div>

        {/* Responsive Roadmap Timeline Widget (No scroll on desktop, vertical scroll on mobile) */}
        <div className="relative w-full py-10 px-4">
          <div className="relative flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-0 w-full">
            
            {/* Horizontal Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-slate-200 dark:bg-white/10 z-0" />
            
            {/* Vertical Connection Line (Mobile) */}
            <div className="block md:hidden absolute top-[40px] bottom-[40px] left-[48px] w-[2px] bg-slate-200 dark:bg-white/10 z-0" />
            
            {/* Roadmap Steps */}
            {PROCESS.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.step} 
                  className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:w-[15%] relative z-10 px-1 gap-4 md:gap-0 group"
                >
                  
                  {/* Circular Icon Node */}
                  <div className="relative shrink-0 md:mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-indigo-500 dark:border-indigo-400 bg-white dark:bg-[#09090f] flex items-center justify-center text-indigo-500 dark:text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400 dark:group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] shadow-md">
                      <Icon size={20} />
                    </div>
                    {/* Number Badge at Top-Right */}
                    <span className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[9px] font-bold flex items-center justify-center font-mono shadow-sm">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col items-start md:items-center">
                    {/* Purple Step Label */}
                    <span className="text-[10px] font-extrabold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
                      Step {item.step}
                    </span>
                    
                    {/* Step Title */}
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white mt-1.5 font-outfit">
                      {item.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 mt-2 max-w-[240px] md:max-w-[150px] md:mx-auto font-medium">
                      {item.description}
                    </p>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Section 3: What I Know (Proficiency) ── */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase
                       bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-none shadow-[0_3px_12px_rgba(16,185,129,0.3)]">
            Proficiency
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}>
            What I{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Know
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((group, gi) => {
            const Icon = group.icon
            
            // Split skills tags into 2 balanced rows for the mini-marquees
            const mid = Math.ceil(group.tags.length / 2)
            const stackRow1 = group.tags.slice(0, mid)
            const stackRow2 = group.tags.slice(mid)
            
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.15 }}
                whileHover={{ y: -6 }}
                onMouseMove={handleMouseMove}
                className="bento-card group cursor-default p-7 rounded-2xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-[330px]"
                style={{ '--glow': group.glow }}
              >
                <div className="space-y-4">
                  {/* Card Title */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                                     bg-gradient-to-br ${group.color}
                                     shadow-[0_4px_16px_var(--glow)]`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white font-outfit">
                      {group.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {group.desc}
                  </p>
                </div>

                {/* Alternating Mini-Marquee Skill Loops */}
                <div 
                  className="space-y-3 mt-6 relative z-10 w-full overflow-hidden"
                  style={{ '--bar-color': `linear-gradient(90deg, ${group.color.includes('blue') ? '#6366f1,#818cf8' : group.color.includes('violet') ? '#8b5cf6,#ec4899' : '#10b981,#14b8a6'})` }}
                >
                  <MiniMarqueeRow items={stackRow1} direction="left" speed="26s" barColor={`linear-gradient(90deg, ${group.color.includes('blue') ? '#3b82f6,#6366f1' : group.color.includes('violet') ? '#8b5cf6,#d946ef' : '#10b981,#06b6d4'})`} />
                  <MiniMarqueeRow items={stackRow2} direction="right" speed="28s" barColor={`linear-gradient(90deg, ${group.color.includes('blue') ? '#3b82f6,#6366f1' : group.color.includes('violet') ? '#8b5cf6,#d946ef' : '#10b981,#06b6d4'})`} />
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
