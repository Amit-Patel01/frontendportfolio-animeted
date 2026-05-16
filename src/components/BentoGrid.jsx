import { motion } from 'framer-motion'
import { Code, Palette, Laptop2, Video, MapPin, Layers, Sparkles, Terminal, Database, Server } from 'lucide-react'

const BentoGrid = () => {
  return (
    <section id="about" className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[600px]">
        
        {/* About Me - Large Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-outfit text-white">About Me</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              I&apos;m Amit Patel, a passionate IT student, developer, and problem-solver. I specialize in building responsive websites, intuitive user interfaces, and reliable technical solutions. I bring a combination of technical expertise and creative design to every project.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="pill bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20">B.Tech IT</span>
            <span className="pill bg-violet-500/10 text-violet-400 border-violet-500/20">Founder @ AmitSolutionHub</span>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <MapPin className="text-cyan-400" size={24} />
          </div>
          <p className="text-white font-semibold text-sm">Gujarat, India</p>
          <p className="text-slate-500 text-xs mt-1">Available Globally</p>
        </motion.div>

        {/* Tech Stack / Skills Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bento-card md:col-span-1 md:row-span-2 p-6 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-[40px]" />
          <h3 className="text-lg font-bold font-outfit text-white mb-6">Tech Stack</h3>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Code size={18} className="text-cyan-400" />
              <span className="text-sm font-medium">React, Next.js</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Terminal size={18} className="text-fuchsia-400" />
              <span className="text-sm font-medium">Node.js, Express</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Database size={18} className="text-violet-400" />
              <span className="text-sm font-medium">MongoDB, MySQL</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Layers size={18} className="text-emerald-400" />
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Services / What I do */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bento-card md:col-span-2 md:row-span-1 p-6 flex items-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Code size={18} />
              </div>
              <span className="text-xs font-semibold text-slate-300">Web Dev</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
                <Palette size={18} />
              </div>
              <span className="text-xs font-semibold text-slate-300">UI Design</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Laptop2 size={18} />
              </div>
              <span className="text-xs font-semibold text-slate-300">PC Repair</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Video size={18} />
              </div>
              <span className="text-xs font-semibold text-slate-300">Video Edit</span>
            </div>
          </div>
        </motion.div>

        {/* Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bento-card md:col-span-1 md:row-span-1 p-6 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-cyan-500/20 flex flex-col justify-center items-center text-center group"
        >
          <Sparkles className="text-cyan-400 mb-2 group-hover:rotate-12 transition-transform" size={24} />
          <h3 className="text-2xl font-black text-white font-outfit">10+</h3>
          <p className="text-xs text-cyan-200 mt-1 uppercase tracking-wider">Projects Built</p>
        </motion.div>

      </div>
    </section>
  )
}

export default BentoGrid
