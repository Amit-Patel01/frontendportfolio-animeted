import { motion } from 'framer-motion'
import { Code2, Film, Settings, ArrowRight } from 'lucide-react'

// Tech Stack Categories with Logo Icons
const TECH_STACK = [
  {
    category: 'Development Tools',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/25',
    textColor: 'text-blue-400',
    technologies: [
      { name: 'VS Code', emoji: '💻', url: 'https://code.visualstudio.com/' },
      { name: 'Git', emoji: '🐙', url: 'https://git-scm.com/' },
      { name: 'GitHub', emoji: '🔗', url: 'https://github.com/' },
      { name: 'MongoDB', emoji: '🍃', url: 'https://www.mongodb.com/' },
      { name: 'Postman', emoji: '📮', url: 'https://www.postman.com/' },
    ],
  },
  {
    category: 'Languages',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/25',
    textColor: 'text-yellow-400',
    technologies: [
      { name: 'JavaScript', emoji: '🟨', url: 'https://www.javascript.com/' },
      { name: 'TypeScript', emoji: '🔵', url: 'https://www.typescriptlang.org/' },
      { name: 'Python', emoji: '🐍', url: 'https://www.python.org/' },
      { name: 'Java', emoji: '☕', url: 'https://www.java.com/' },
      { name: 'C++', emoji: '⭐', url: 'https://cplusplus.com/' },
      { name: 'C#', emoji: '🎵', url: 'https://dotnet.microsoft.com/languages/csharp' },
      { name: 'HTML5', emoji: '🏠', url: 'https://html.spec.whatwg.org/' },
      { name: 'CSS3', emoji: '🎨', url: 'https://www.w3.org/Style/CSS/' },
      { name: 'PHP', emoji: '🐘', url: 'https://www.php.net/' },
    ],
  },
  {
    category: 'Frontend Frameworks',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/25',
    textColor: 'text-green-400',
    technologies: [
      { name: 'React', emoji: '⚛️', url: 'https://react.dev/' },
      { name: 'Next.js', emoji: '▲', url: 'https://nextjs.org/' },
      { name: 'Angular', emoji: '🔴', url: 'https://angular.io/' },
      { name: 'Bootstrap', emoji: '🅱️', url: 'https://getbootstrap.com/' },
      { name: 'Tailwind CSS', emoji: '🎨', url: 'https://tailwindcss.com/' },
      { name: 'Three.js', emoji: '🎲', url: 'https://threejs.org/' },
    ],
  },
  {
    category: 'Backend & Full-Stack',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/25',
    textColor: 'text-purple-400',
    technologies: [
      { name: 'Node.js', emoji: '🟢', url: 'https://nodejs.org/' },
      { name: 'Express', emoji: '⚡', url: 'https://expressjs.com/' },
      { name: 'Django', emoji: '🐍', url: 'https://www.djangoproject.com/' },
      { name: 'Flask', emoji: '🍶', url: 'https://flask.palletsprojects.com/' },
      { name: 'FastAPI', emoji: '⚡', url: 'https://fastapi.tiangolo.com/' },
      { name: 'Spring Boot', emoji: '🍃', url: 'https://spring.io/projects/spring-boot' },
      { name: '.NET', emoji: '🔷', url: 'https://dotnet.microsoft.com/' },
    ],
  },
  {
    category: 'Databases & Cloud',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/25',
    textColor: 'text-red-400',
    technologies: [
      { name: 'MongoDB', emoji: '🍃', url: 'https://www.mongodb.com/' },
      { name: 'MySQL', emoji: '🐬', url: 'https://www.mysql.com/' },
      { name: 'Firebase', emoji: '🔥', url: 'https://firebase.google.com/' },
      { name: 'Vercel', emoji: '▲', url: 'https://vercel.com/' },
      { name: 'Netlify', emoji: '🚀', url: 'https://www.netlify.com/' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/25',
    textColor: 'text-indigo-400',
    technologies: [
      { name: 'npm', emoji: '📦', url: 'https://www.npmjs.com/' },
      { name: 'Docker', emoji: '🐳', url: 'https://www.docker.com/' },
      { name: 'Webpack', emoji: '📦', url: 'https://webpack.js.org/' },
      { name: 'Vite', emoji: '⚡', url: 'https://vitejs.dev/' },
      { name: 'Socket.IO', emoji: '🔌', url: 'https://socket.io/' },
      { name: 'Thunder Client', emoji: '⚡', url: 'https://www.thunderclient.com/' },
    ],
  },
  {
    category: 'Creative Suite',
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/25',
    textColor: 'text-pink-400',
    technologies: [
      { name: 'Photoshop', emoji: '🎨', url: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Lightroom', emoji: '📸', url: 'https://www.adobe.com/products/photoshop-lightroom.html' },
      { name: 'Premiere Pro', emoji: '🎬', url: 'https://www.adobe.com/products/premiere.html' },
      { name: 'After Effects', emoji: '✨', url: 'https://www.adobe.com/products/aftereffects.html' },
      { name: 'Adobe Express', emoji: '⚡', url: 'https://www.adobe.com/express/' },
      { name: 'Figma', emoji: '🎭', url: 'https://www.figma.com/' },
    ],
  },
  {
    category: 'PC Technical Services',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/25',
    textColor: 'text-cyan-400',
    technologies: [
      { name: 'CPU-Z', emoji: '⚙️', url: 'https://www.cpuid.com/softwares/cpu-z.html' },
      { name: 'Rufus', emoji: '💿', url: 'https://rufus.ie/' },
      { name: 'MiniTool', emoji: '🔧', url: 'https://www.minitool.com/' },
      { name: 'HDD Sentinel', emoji: '💾', url: 'https://www.hdsentinel.com/' },
      { name: 'Balena Etcher', emoji: '🔥', url: 'https://etcher.balena.io/' },
      { name: 'DriverPack', emoji: '📦', url: 'https://www.driverpack.io/' },
    ],
  },
  {
    category: 'Operating Systems',
    color: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/25',
    textColor: 'text-slate-300',
    technologies: [
      { name: 'Windows', emoji: '🪟', url: 'https://www.microsoft.com/windows' },
      { name: 'Windows 11', emoji: '💻', url: 'https://www.microsoft.com/windows/windows-11' },
      { name: 'Linux', emoji: '🐧', url: 'https://www.linux.org/' },
      { name: 'Chrome OS', emoji: '🌐', url: 'https://www.google.com/chromebook/' },
    ],
  },
  {
    category: 'Competitive Coding',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/25',
    textColor: 'text-amber-400',
    technologies: [
      { name: 'LeetCode', emoji: '💡', url: 'https://leetcode.com/' },
      { name: 'GeeksforGeeks', emoji: '🤓', url: 'https://www.geeksforgeeks.org/' },
      { name: 'CodeChef', emoji: '👨‍🍳', url: 'https://www.codechef.com/' },
    ],
  },
]

// Development Process
const PROCESS = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'Understand requirements, research, and plan architecture',
    icon: '📋',
  },
  {
    step: 2,
    title: 'Design & Mockups',
    description: 'Create wireframes and UI designs in Figma',
    icon: '🎨',
  },
  {
    step: 3,
    title: 'Frontend Development',
    description: 'Build responsive UI with React and Tailwind CSS',
    icon: '⚛️',
  },
  {
    step: 4,
    title: 'Backend Development',
    description: 'Create APIs and database with Node.js and MongoDB',
    icon: '🔧',
  },
  {
    step: 5,
    title: 'Integration & Testing',
    description: 'Connect frontend with backend and test thoroughly',
    icon: '🧪',
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Deploy to Vercel and Render with CI/CD pipelines',
    icon: '🚀',
  },
]

const GROUPS = [
  {
    icon:  Code2,
    title: 'Development',
    color: 'from-blue-500 to-indigo-600',
    glow:  'rgba(99,102,241,0.35)',
    tags: [
      { name: 'HTML',            level: 95 },
      { name: 'CSS',             level: 90 },
      { name: 'JavaScript',      level: 85 },
      { name: 'React',           level: 82 },
      { name: 'Bootstrap',       level: 88 },
      { name: 'PHP',             level: 70 },
      { name: 'MongoDB',         level: 72 },
      { name: 'MySQL',           level: 75 },
      { name: 'MERN Stack',      level: 78 },
    ],
  },
  {
    icon:  Film,
    title: 'Creative',
    color: 'from-violet-500 to-pink-600',
    glow:  'rgba(167,139,250,0.35)',
    tags: [
      { name: 'Premiere Pro', level: 85 },
      { name: 'After Effects', level: 75 },
      { name: 'Photoshop',    level: 78 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Figma',        level: 72 },
    ],
  },
  {
    icon:  Settings,
    title: 'Technical',
    color: 'from-emerald-500 to-teal-600',
    glow:  'rgba(16,185,129,0.35)',
    tags: [
      { name: 'PC Repair',          level: 92 },
      { name: 'Windows Install',    level: 95 },
      { name: 'BIOS / Driver Fix',  level: 88 },
      { name: 'SSD / RAM Upgrade',  level: 90 },
      { name: 'Network Setup',      level: 80 },
    ],
  },
]

const Tag = ({ name, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="space-y-1.5"
  >
    <div className="flex justify-between items-center">
      <span className="text-[13px] font-medium text-slate-300">{name}</span>
      <span className="text-[11px] font-semibold text-slate-500">{level}%</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-current to-current"
        style={{ background: 'var(--bar-color)' }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </motion.div>
)

const Skills = () => (
  <section id="skills" className="section-container space-y-24 lg:space-y-28">

    {/* ─────────────────────── TECH STACK WITH LOGOS ─────────────────────── */}
    <div className="space-y-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-cyan-500/10 text-cyan-400
                         border border-cyan-500/25">
          Tech Stack
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
          Technologies I{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Use
          </span>
        </h2>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {TECH_STACK.map((stack, stackIdx) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: stackIdx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative overflow-hidden rounded-lg border ${stack.borderColor} ${stack.bgColor} p-5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stack.color}`} />
            {/* Category Header */}
            <h3 className={`mb-5 font-bold text-lg ${stack.textColor}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}>
              {stack.category}
            </h3>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stack.technologies.map((tech, techIdx) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stackIdx * 0.1 + techIdx * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group relative flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.05] p-3 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09]"
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.emoji}</span>
                  <span className="text-center text-[11px] font-semibold text-slate-300 line-clamp-2">
                    {tech.name}
                  </span>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded bg-slate-900 px-2 py-1 
                                  text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 
                                  whitespace-nowrap pointer-events-none">
                    Click to learn more
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ─────────────────────── DEVELOPMENT PROCESS ─────────────────────── */}
    <div className="space-y-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-purple-500/10 text-purple-400
                         border border-purple-500/25">
          Process
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
          My Development{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Process
          </span>
        </h2>
      </motion.div>

      {/* Process Timeline */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROCESS.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Arrow Connector (hidden on mobile, shown on md) */}
            {idx < PROCESS.length - 1 && idx % 3 !== 2 && (
              <div className="hidden xl:flex absolute top-20 -right-3 text-slate-600">
                <ArrowRight size={24} />
              </div>
            )}

            {/* Card */}
            <div className="glass h-full rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg">
              {/* Step Badge */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 
                           flex items-center justify-center mb-4 text-white font-bold text-lg
                           shadow-[0_4px_16px_rgba(167,139,250,0.35)]"
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>

              {/* Content */}
              <h3 className="font-bold text-lg text-white mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Step Counter */}
              <div className="mt-4 text-xs font-semibold text-slate-500">
                Step {item.step} of {PROCESS.length}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ─────────────────────── SKILLS PROFICIENCY ─────────────────────── */}
    <div className="space-y-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                         bg-emerald-500/10 text-emerald-400
                         border border-emerald-500/25">
          Proficiency
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}>
          What I{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Know
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
    <div className="grid gap-6 md:grid-cols-3">
      {GROUPS.map((group, gi) => {
        const Icon = group.icon
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass group cursor-default space-y-6 rounded-lg p-7
                       hover:shadow-2xl transition-all duration-300"
            style={{ '--glow': group.glow }}
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center
                               bg-gradient-to-br ${group.color}
                               shadow-[0_4px_16px_var(--glow)]`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-white"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                {group.title}
              </h3>
            </div>

            {/* Progress bars */}
            <div
              className="space-y-4"
              style={{ '--bar-color': `linear-gradient(90deg, ${group.color.includes('blue') ? '#6366f1,#818cf8' : group.color.includes('violet') ? '#8b5cf6,#ec4899' : '#10b981,#14b8a6'})` }}
            >
              {group.tags.map((tag, ti) => (
                <Tag
                  key={tag.name}
                  name={tag.name}
                  level={tag.level}
                  delay={gi * 0.1 + ti * 0.06}
                />
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
    </div>
  </section>
)

export default Skills
