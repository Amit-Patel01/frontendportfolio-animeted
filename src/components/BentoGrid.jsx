import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Sparkles, Terminal, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const BentoGrid = () => {
  // Cursor coordinate tracker hook for magnetic card glow
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  // Interactive Developer Terminal State
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Welcome to Amit\'s Portfolio OS v1.0!', type: 'welcome' },
    { text: 'Type "help" to see all available commands.', type: 'help' }
  ])
  const terminalEndRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalHistory])

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    let response = ''
    if (cmd === 'help') {
      response = 'Commands:\n  about    - Founder bio\n  skills   - Core skills list\n  services - Core services list\n  clear    - Clear screen'
    } else if (cmd === 'about') {
      response = 'Founder & CEO of Amit Solution Hub. Building AI-powered applications, modern web platforms, cloud infrastructure and digital products.'
    } else if (cmd === 'skills') {
      response = 'React • Next.js • Node.js • Express • MongoDB • AI • Cloud • DevOps • Cyber Security'
    } else if (cmd === 'services') {
      response = 'Web Development • AI Solutions • Cloud Services • UI/UX • Digital Marketing'
    } else if (cmd === 'clear') {
      setTerminalHistory([])
      setTerminalInput('')
      return
    } else {
      response = `Unknown command: "${cmd}". Type "help".`
    }

    setTerminalHistory(prev => [
      ...prev,
      { text: `amit@portfolio:~$ ${terminalInput}`, type: 'input' },
      { text: response, type: 'output' }
    ])
    setTerminalInput('')
  }

  return (
    <section id="about" className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:h-[550px]">
        
        {/* About Me - Large Card (Row 1-2, Col 1-2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onMouseMove={handleMouseMove}
          className="bento-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-outfit text-white">About Amit Patel</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              I&apos;m Amit Patel, Founder & CEO of Amit Solution Hub and a B.Tech IT student. I build AI-powered applications, scalable web platforms, cloud infrastructure, and custom software for startups, businesses, and organizations. My mission is to create innovative, secure, and scalable digital solutions that solve real-world problems.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="pill bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Founder & CEO</span>
            <span className="pill bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20">B.Tech Information Technology</span>
            <span className="pill bg-violet-500/10 text-violet-400 border-violet-500/20">Tech Agency</span>
          </div>
        </motion.div>

        {/* Location Card (Row 1, Col 3) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseMove={handleMouseMove}
          className="bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <MapPin className="text-cyan-400" size={24} />
          </div>
          <p className="text-white font-semibold text-sm">Gujarat, India</p>
          <p className="text-slate-500 text-xs mt-1">Serving Clients Worldwide</p>
        </motion.div>

        {/* Connect / Social Card (Row 2, Col 3) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          className="bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect</span>
            <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div className="flex justify-center items-center gap-3.5 my-auto">
            <a 
              href="https://github.com/amit-patel01" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/amit-patel01/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:amitpatel07029@gmail.com" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-fuchsia-500/10 hover:border-fuchsia-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <span className="text-[10px] text-slate-500 text-center font-medium">Let's Build Something Amazing Together.</span>
        </motion.div>

        {/* Interactive Developer Terminal (Row 3, Col 1-2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onMouseMove={handleMouseMove}
          className="bento-card md:col-span-2 md:row-span-1 p-5 flex flex-col justify-between font-mono text-[10px] bg-[#09090d]/90 border border-white/5 relative overflow-hidden select-text group text-slate-300"
        >
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 w-full z-10 shrink-0">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Bash</span>
          </div>

          {/* Terminal History */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1.5 scrollbar-thin select-text text-left max-h-[110px]">
            {terminalHistory.map((item, idx) => (
              <div 
                key={idx} 
                className={`whitespace-pre-wrap leading-relaxed ${
                  item.type === 'welcome' ? 'text-violet-400 font-bold' : 
                  item.type === 'help' ? 'text-amber-400' : 
                  item.type === 'input' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-white/5 pt-2 mt-2 w-full z-10 shrink-0">
            <span className="text-cyan-400 font-bold shrink-0">amit@portfolio:~$</span>
            <input 
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 p-0 text-white font-mono text-[10px] w-full"
              placeholder='Type "help"...'
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
        </motion.div>

        {/* Highlight Card with 4 Animated Stats (Row 3, Col 3) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseMove={handleMouseMove}
          className="bento-card md:col-span-1 md:row-span-1 p-5 flex flex-col justify-between overflow-hidden relative group text-left"
        >
          <div className="flex items-center justify-between w-full border-b border-white/5 pb-1.5 mb-2.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-sans">Metrics</span>
            <Sparkles className="text-cyan-400 group-hover:rotate-12 transition-transform" size={12} />
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1 justify-center items-center">
            <div className="flex flex-col">
              <span className="text-base font-black text-white font-outfit bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">25+</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-white font-outfit bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">10+</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-white font-outfit bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100%</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Commit</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-white font-outfit bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">24/7</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Support</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default BentoGrid
