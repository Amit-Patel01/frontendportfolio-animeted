import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Sparkles, Github, Linkedin, Mail, ArrowUpRight, Terminal, Zap } from 'lucide-react'

const BentoGrid = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  const [terminalInput, setTerminalInput]   = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { text: "Welcome to Amit's Portfolio OS v2.0!", type: 'welcome' },
    { text: 'Type "help" to see all commands.', type: 'hint' },
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
      response = 'Commands:\n  about    – Founder bio\n  skills   – Core skills list\n  services – Service offerings\n  contact  – Get in touch\n  clear    – Clear screen'
    } else if (cmd === 'about') {
      response = 'Founder & CEO of Amit Solution Hub. Building AI-powered apps, modern web platforms, cloud infra, and digital products.'
    } else if (cmd === 'skills') {
      response = 'React • Next.js • Node.js • MongoDB • Express • PHP • Tailwind • Figma • AI Integration'
    } else if (cmd === 'services') {
      response = 'Web Development • AI Solutions • Cloud Services • UI/UX Design • PC Repair • Video Editing'
    } else if (cmd === 'contact') {
      response = 'Email: amitpatel07029@gmail.com\nPhone: +91 78742 48481\nLinkedIn: linkedin.com/in/amit-patel01/'
    } else if (cmd === 'clear') {
      setTerminalHistory([])
      setTerminalInput('')
      return
    } else {
      response = `Unknown command: "${cmd}". Type "help" for a list.`
    }

    setTerminalHistory(prev => [
      ...prev,
      { text: `amit@portfolio:~$ ${terminalInput}`, type: 'input' },
      { text: response, type: 'output' },
    ])
    setTerminalInput('')
  }

  return (
    <section id="about" className="section-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:h-[620px]">

        {/* ── About Me — Large Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          className="glass-card bento-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between card-shine"
        >
          {/* Color accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500" />

          <div className="space-y-5 relative z-10 mt-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-violet-600 text-white mb-3">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                About <span className="gradient-text-static">Amit Patel</span>
              </h2>
            </motion.div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">
              I'm Amit Patel, Founder & CEO of <strong className="text-slate-800">Amit Solution Hub</strong> and a
              B.Tech IT student at Parul University. I build AI-powered applications, scalable web platforms,
              cloud infrastructure, and custom software for startups, businesses, and organizations.
              My mission is to create innovative, secure, and high-performance digital solutions that
              create real business impact.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Web Development', color: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', border: 'border-cyan-200', dot: 'bg-cyan-500' },
                { label: 'AI Integration', color: 'from-violet-500 to-fuchsia-600', bg: 'bg-violet-50', border: 'border-violet-200', dot: 'bg-violet-500' },
                { label: 'Cloud & DevOps', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: 'bg-emerald-500' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl ${item.bg} border ${item.border}`}
                >
                  <span className={`w-2 h-2 rounded-full ${item.dot} shrink-0`} />
                  <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-6 relative z-10">
            {['Founder & CEO', 'B.Tech Information Technology', 'Tech Agency Owner'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="px-4 py-2 text-xs font-semibold rounded-full border border-cyan-200 bg-white/80 text-cyan-700 shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Location Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseMove={handleMouseMove}
          className="glass-card bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col items-center justify-center text-center card-shine"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-400 to-teal-500" />
          <motion.div
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ scale: 1.12, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          >
            <MapPin className="text-white" size={22} />
          </motion.div>
          <p className="text-slate-900 font-bold text-sm">Gujarat, India</p>
          <p className="text-slate-500 text-xs mt-1">Serving Clients Worldwide 🌍</p>
          <div className="flex items-center gap-1.5 mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[11px] text-emerald-600 font-semibold">Open to Remote Work</span>
          </div>
        </motion.div>

        {/* ── Connect Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          className="glass-card bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between card-shine"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-500 to-fuchsia-600" />
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Connect</span>
            <motion.div
              animate={{ rotate: [0, 18, -18, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUpRight size={15} className="text-violet-500" />
            </motion.div>
          </div>
          <div className="flex justify-center items-center gap-4 my-auto py-2">
            {[
              { Icon: Github,   href: 'https://github.com/amit-patel01',            bg: 'bg-slate-900', hover: 'hover:bg-slate-700', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/amit-patel01/', bg: 'bg-blue-600',  hover: 'hover:bg-blue-700',  label: 'LinkedIn' },
              { Icon: Mail,     href: 'mailto:amitpatel07029@gmail.com',           bg: 'bg-gradient-to-br from-cyan-500 to-violet-600', hover: '', label: 'Email' },
            ].map(({ Icon, href, bg, hover, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                whileHover={{ scale: 1.18, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 rounded-xl ${bg} ${hover} flex items-center justify-center text-white transition-all duration-300 shadow-md`}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
          <span className="text-[10px] text-slate-500 text-center font-medium">
            Let&apos;s Build Something Amazing Together!
          </span>
        </motion.div>

        {/* ── Terminal Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card md:col-span-2 md:row-span-1 p-5 flex flex-col justify-between font-mono text-[10.5px] sm:text-xs relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400" />

          {/* Terminal title bar */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2 w-full shrink-0 mt-1">
            <div className="flex gap-1.5">
              {[
                { bg: 'bg-red-400',   shadow: 'shadow-[0_0_6px_rgba(239,68,68,0.6)]' },
                { bg: 'bg-amber-400', shadow: 'shadow-[0_0_6px_rgba(245,158,11,0.6)]' },
                { bg: 'bg-emerald-400', shadow: 'shadow-[0_0_6px_rgba(52,211,153,0.6)]' },
              ].map(({ bg, shadow }, i) => (
                <motion.span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${bg} ${shadow}`}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal size={10} className="text-slate-400" />
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-sans font-bold">Bash Terminal</span>
            </div>
          </div>

          {/* Output */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-2 select-text text-left max-h-[110px]">
            {terminalHistory.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
                className={`whitespace-pre-wrap leading-relaxed ${
                  item.type === 'welcome' ? 'text-violet-600 font-bold' :
                  item.type === 'hint'    ? 'text-amber-600' :
                  item.type === 'input'   ? 'text-cyan-600 font-semibold' :
                                           'text-slate-600'
                }`}
              >
                {item.text}
              </motion.div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 border-t border-slate-200 pt-2 mt-2 w-full shrink-0">
            <span className="text-cyan-600 font-bold shrink-0">amit@portfolio:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={e => setTerminalInput(e.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none p-0 text-slate-900 font-mono text-[10.5px] sm:text-xs w-full"
              placeholder='Type "help"…'
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
        </motion.div>

        {/* ── Metrics Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseMove={handleMouseMove}
          className="glass-card bento-card md:col-span-1 md:row-span-1 p-5 flex flex-col justify-between overflow-hidden relative card-shine"
        >
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-fuchsia-500 to-pink-600" />

          <div className="flex items-center justify-between w-full border-b border-slate-100 pb-2 mb-3 mt-1">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Metrics</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            >
              <Zap size={12} className="text-fuchsia-500" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '25+',  label: 'Projects', color: 'from-cyan-500 to-blue-600',    bg: 'bg-cyan-50',    border: 'border-cyan-100' },
              { value: '10+',  label: 'Clients',  color: 'from-violet-500 to-fuchsia-600', bg: 'bg-violet-50', border: 'border-violet-100' },
              { value: '100%', label: 'Commit',   color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
              { value: '24/7', label: 'Support',  color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50',   border: 'border-amber-100' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`flex flex-col p-2 rounded-xl ${stat.bg} border ${stat.border}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08 }}
              >
                <span className={`text-base font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default BentoGrid
