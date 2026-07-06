import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Film, Settings, ArrowRight, Monitor, GitBranch, Database, Send, Coffee, FileCode, FileText, Layout, Container, Zap, Figma, Cloud, Server, Package, Chrome, TerminalSquare, Cpu, Wrench, Leaf, Camera } from 'lucide-react'

// Helper Component for rendering brand icons with fallbacks
const TechIcon = ({ tech }) => {
  const [error, setError] = useState(false);
  
  if (error || !tech.iconUrl) {
    const FallbackIcon = tech.icon || Code2;
    return <FallbackIcon size={24} className="text-slate-300 group-hover:scale-125 transition-transform duration-300" />;
  }
  
  return (
    <img
      src={tech.iconUrl}
      alt={tech.name}
      onError={() => setError(true)}
      className="w-8 h-8 object-contain group-hover:scale-125 transition-transform duration-300"
    />
  );
};

const TECH_STACK = [
  {
    category: 'Development Tools',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/25',
    textColor: 'text-blue-400',
    technologies: [
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', icon: Monitor, url: 'https://code.visualstudio.com/' },
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', icon: GitBranch, url: 'https://git-scm.com/' },
      { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', icon: Chrome, url: 'https://github.com/' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', icon: Database, url: 'https://www.mongodb.com/' },
      { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', icon: Send, url: 'https://www.postman.com/' },
    ],
  },
  {
    category: 'Languages',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/25',
    textColor: 'text-yellow-400',
    technologies: [
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', icon: Code2, url: 'https://www.javascript.com/' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', icon: FileCode, url: 'https://www.typescriptlang.org/' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', icon: TerminalSquare, url: 'https://www.python.org/' },
      { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', icon: Coffee, url: 'https://www.java.com/' },
      { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', icon: FileText, url: 'https://cplusplus.com/' },
      { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', icon: FileCode, url: 'https://dotnet.microsoft.com/languages/csharp' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', icon: Layout, url: 'https://html.spec.whatwg.org/' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', icon: Wrench, url: 'https://www.w3.org/Style/CSS/' },
      { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', icon: FileText, url: 'https://www.php.net/' },
    ],
  },
  {
    category: 'Frontend Frameworks',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/25',
    textColor: 'text-green-400',
    technologies: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', icon: Code2, url: 'https://react.dev/' },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', icon: Layout, url: 'https://nextjs.org/' },
      { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', icon: Coffee, url: 'https://angular.io/' },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', icon: Container, url: 'https://getbootstrap.com/' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', icon: Wrench, url: 'https://tailwindcss.com/' },
      { name: 'Three.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', icon: Zap, url: 'https://threejs.org/' },
    ],
  },
  {
    category: 'Backend & Full-Stack',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/25',
    textColor: 'text-purple-400',
    technologies: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', icon: Server, url: 'https://nodejs.org/' },
      { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', icon: Zap, url: 'https://expressjs.com/' },
      { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', icon: TerminalSquare, url: 'https://www.djangoproject.com/' },
      { name: 'Flask', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', icon: Coffee, url: 'https://flask.palletsprojects.com/' },
      { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', icon: Zap, url: 'https://fastapi.tiangolo.com/' },
      { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', icon: Leaf, url: 'https://spring.io/projects/spring-boot' },
      { name: '.NET', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', icon: FileCode, url: 'https://dotnet.microsoft.com/' },
    ],
  },
  {
    category: 'Databases & Cloud',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/25',
    textColor: 'text-red-400',
    technologies: [
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', icon: Database, url: 'https://www.mongodb.com/' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', icon: Database, url: 'https://www.mysql.com/' },
      { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', icon: Cloud, url: 'https://firebase.google.com/' },
      { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', icon: Layout, url: 'https://vercel.com/' },
      { name: 'Netlify', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg', icon: Zap, url: 'https://www.netlify.com/' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/25',
    textColor: 'text-indigo-400',
    technologies: [
      { name: 'npm', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', icon: Package, url: 'https://www.npmjs.com/' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', icon: Container, url: 'https://www.docker.com/' },
      { name: 'Webpack', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg', icon: Package, url: 'https://webpack.js.org/' },
      { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', icon: Zap, url: 'https://vitejs.dev/' },
      { name: 'Socket.IO', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', icon: Zap, url: 'https://socket.io/' },
      { name: 'Thunder Client', icon: Zap, url: 'https://www.thunderclient.com/' },
    ],
  },
  {
    category: 'Creative Suite',
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/25',
    textColor: 'text-pink-400',
    technologies: [
      { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', icon: Wrench, url: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Lightroom', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lightroom/lightroom-original.svg', icon: Camera, url: 'https://www.adobe.com/products/photoshop-lightroom.html' },
      { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg', icon: Zap, url: 'https://www.adobe.com/products/premiere.html' },
      { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg', icon: Film, url: 'https://www.adobe.com/products/aftereffects.html' },
      { name: 'Adobe Express', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg', icon: Zap, url: 'https://www.adobe.com/express/' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', icon: Figma, url: 'https://www.figma.com/' },
    ],
  },
  {
    category: 'PC Technical Services',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/25',
    textColor: 'text-cyan-400',
    technologies: [
      { name: 'CPU-Z', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/CPU-Z_icon.png', icon: Cpu, url: 'https://www.cpuid.com/softwares/cpu-z.html' },
      { name: 'Rufus', iconUrl: 'https://raw.githubusercontent.com/pbatard/rufus/master/res/icons/rufus-256.png', icon: Zap, url: 'https://rufus.ie/' },
      { name: 'MiniTool', iconUrl: 'https://www.minitool.com/favicon.ico', icon: Wrench, url: 'https://www.minitool.com/' },
      { name: 'HDD Sentinel', iconUrl: 'https://www.hdsentinel.com/favicon.ico', icon: Database, url: 'https://www.hdsentinel.com/' },
      { name: 'Balena Etcher', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/balena.svg', icon: Zap, url: 'https://etcher.balena.io/' },
      { name: 'DriverPack', iconUrl: 'https://driverpack.io/favicon.ico', icon: Package, url: 'https://www.driverpack.io/' },
    ],
  },
  {
    category: 'Operating Systems',
    color: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/25',
    textColor: 'text-slate-300',
    technologies: [
      { name: 'Windows', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg', icon: Monitor, url: 'https://www.microsoft.com/windows' },
      { name: 'Windows 11', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', icon: Monitor, url: 'https://www.microsoft.com/windows/windows-11' },
      { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', icon: TerminalSquare, url: 'https://www.linux.org/' },
      { name: 'Chrome OS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg', icon: Chrome, url: 'https://www.google.com/chromebook/' },
      { name: 'Zorin OS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zorinos.svg', icon: Monitor, url: 'https://zorin.com/os/' },
      { name: 'Prime OS', iconUrl: 'https://primeos.in/favicon.ico', icon: Monitor, url: 'https://primeos.in/' },
      { name: 'Arch Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg', icon: TerminalSquare, url: 'https://archlinux.org/' },
    ],
  },
  {
    category: 'Competitive Coding',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/25',
    textColor: 'text-amber-400',
    technologies: [
      { name: 'LeetCode', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg', icon: Zap, url: 'https://leetcode.com/' },
      { name: 'GeeksforGeeks', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/geeksforgeeks.svg', icon: Code2, url: 'https://www.geeksforgeeks.org/' },
      { name: 'CodeChef', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg', icon: Coffee, url: 'https://www.codechef.com/' },
    ],
  },
]

const PROCESS = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'Understand requirements, research, and plan architecture',
    icon: Layout,
  },
  {
    step: 2,
    title: 'Design & Mockups',
    description: 'Create wireframes and UI designs in Figma',
    icon: Wrench,
  },
  {
    step: 3,
    title: 'Frontend Development',
    description: 'Build responsive UI with React and Tailwind CSS',
    icon: Code2,
  },
  {
    step: 4,
    title: 'Backend Development',
    description: 'Create APIs and database with Node.js and MongoDB',
    icon: Server,
  },
  {
    step: 5,
    title: 'Integration & Testing',
    description: 'Connect frontend with backend and test thoroughly',
    icon: Zap,
  },
  {
    step: 6,
    title: 'Deployment',
    description: 'Deploy to Vercel and Render with CI/CD pipelines',
    icon: Zap,
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
    <span className="text-[13px] font-medium text-slate-300 dark:text-slate-300">{name}</span>
    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-500">{level}%</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08] dark:bg-white/[0.08]">
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

    <div className="space-y-12">
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
      <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}>
        Technologies I{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
        Use
        </span>
      </h2>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {TECH_STACK.map((stack, stackIdx) => (
        <motion.div
          key={stack.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stackIdx * 0.1 }}
          whileHover={{ y: -5 }}
        className={`relative overflow-hidden rounded-lg border ${stack.borderColor} ${stack.bgColor} p-5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]`}>
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stack.color}`} />
        <h3 className={`mb-5 font-bold text-lg ${stack.textColor}`}
            style={{ fontFamily: 'Outfit, sans-serif' }}>
          {stack.category}
        </h3>

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
              <TechIcon tech={tech} />
              <span className="text-center text-[11px] font-semibold text-slate-300 line-clamp-2 dark:text-slate-300">
                {tech.name}
              </span>
            </motion.a>
          ))}
        </div>
        </motion.div>
      ))}
    </div>
    </div>

    <div className="space-y-12">
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
      <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}>
        My Development{' '}
        <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
        Process
        </span>
      </h2>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {PROCESS.map((item, idx) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            {idx < PROCESS.length - 1 && idx % 3 !== 2 && (
              <div className="hidden xl:flex absolute top-20 -right-3 text-slate-600 dark:text-slate-600">
                <ArrowRight size={24} />
              </div>
            )}

            <div className="glass h-full rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 
                       flex items-center justify-center mb-4 text-white font-bold text-lg
                       shadow-[0_4px_16px_rgba(167,139,250,0.35)]"
              >
                <Icon size={22} className="text-white" />
              </motion.div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-500">
                Step {item.step} of {PROCESS.length}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
    </div>

    <div className="space-y-12">
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
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center
                               bg-gradient-to-br ${group.color}
                               shadow-[0_4px_16px_var(--glow)]`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                {group.title}
              </h3>
            </div>

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

export default Skills;
