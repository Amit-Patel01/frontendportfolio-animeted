import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutGrid, Code2, Loader2, RefreshCw, WifiOff } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const CATEGORIES = ['All', 'Frontend', 'Backend & DB', 'Others']

const Projects = () => {
  const { items, loading, error, refetch } = usePortfolio()
  const [activeCategory, setActiveCategory] = useState('All')

  const filterItem = (item, category) => {
    if (category === 'All') return true
    const tags = (item.tags || []).map(t => t.toLowerCase())

    if (category === 'Frontend') {
      const frontendTech = ['react', 'next.js', 'html', 'css', 'bootstrap', 'tailwindcss', 'javascript', 'typescript', 'canvas api', 'three.js', 'angular', 'jquery', 'responsive']
      return tags.some(t => frontendTech.includes(t))
    }

    if (category === 'Backend & DB') {
      const backendTech = ['node.js', 'express', 'php', 'mysql', 'mongodb', 'firebase', 'python', 'java', 'django', 'flask', 'fastapi', 'spring boot', '.net', 'c#', 'database']
      return tags.some(t => backendTech.includes(t))
    }

    if (category === 'Others') {
      const frontendTech = ['react', 'next.js', 'html', 'css', 'bootstrap', 'tailwindcss', 'javascript', 'typescript', 'canvas api', 'three.js', 'angular', 'jquery', 'responsive']
      const backendTech = ['node.js', 'express', 'php', 'mysql', 'mongodb', 'firebase', 'python', 'java', 'django', 'flask', 'fastapi', 'spring boot', '.net', 'c#', 'database']
      return !tags.some(t => frontendTech.includes(t) || backendTech.includes(t))
    }

    return true
  }

  const filteredItems = items.filter(item => filterItem(item, activeCategory))

  return (
    <section id="projects" className="section-container section-accent-emerald">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-4"
      >
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan"
        >
          <LayoutGrid size={12} />
          Github Repositories
        </motion.span>
        <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight font-outfit">
          Open Source{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <motion.p
          className="max-w-xl mx-auto text-[15px] text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A live showcase of my public repositories pulled directly from GitHub.
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-2.5 mb-12 w-full"
        >
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className={`
                relative px-5 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300
                ${activeCategory === cat
                  ? 'text-white border-transparent shadow-glow-cyan'
                  : 'text-slate-600 border-slate-200 hover:text-slate-900 hover:border-cyan-400/40 bg-white/70 hover:bg-white/90'
                }
              `}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeTabBg"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Loading state */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="inline-block"
          >
            <Loader2 size={36} className="text-cyan-500" />
          </motion.div>
          <p className="text-sm text-slate-500 mt-4 font-medium">Fetching projects from GitHub…</p>
        </motion.div>
      )}

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 max-w-md mx-auto"
        >
          <div className="glass-card p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto">
              <WifiOff size={28} className="text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Using Cached Data</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Could not reach GitHub API. Showing static project data instead.
              </p>
            </div>
            <motion.button
              onClick={refetch}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold shadow-glow-cyan"
            >
              <RefreshCw size={15} />
              Try Again
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      {!loading && (
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0
              ? filteredItems.map((item, i) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <PortfolioCard item={item} index={i} />
                  </motion.div>
                ))
              : (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-20 text-center"
                >
                  <div className="inline-block p-8 glass-card max-w-sm mx-auto space-y-4">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Code2 size={44} className="mx-auto text-cyan-400 opacity-50" />
                    </motion.div>
                    <p className="text-sm text-slate-500">No projects found in this category.</p>
                  </div>
                </motion.div>
              )
            }
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
