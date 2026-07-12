import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutGrid, Code2, Award, Loader2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const CATEGORIES = ['All', 'Frontend', 'Backend & DB', 'Others']

const Projects = () => {
  const { items, loading, error } = usePortfolio()
  const [activeCategory, setActiveCategory] = useState('All')

  // Categorize projects dynamically by examining their tech tags
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
    <section id="projects" className="section-container">

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase
                       bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none shadow-[0_3px_12px_rgba(6,182,212,0.3)]">
          Github Repositories
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white leading-tight font-outfit">
          Open Source{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-[15px] text-slate-400">
          A live showcase of my public repositories pulled directly from GitHub.
        </p>
      </motion.div>

      {/* ── Category Filters ── */}
      {!loading && !error && (
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12 w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-filter-btn relative px-4.5 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white border-transparent'
                  : 'text-slate-400 border-white/10 hover:text-white hover:border-white/20 bg-white/[0.02]'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_4px_16px_rgba(6,182,212,0.3)] z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Loading ── */}
      {loading && (
        <div className="py-20 text-center">
          <Loader2 size={32} className="mx-auto animate-spin text-indigo-500 mb-3" />
          <p className="text-sm text-slate-500">Loading portfolio…</p>
        </div>
      )}

      {/* ── Error ── */}
      {error && (
        <div className="py-16 text-center">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      {/* ── Cards grid ── */}
      {!loading && !error && (
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0
              ? filteredItems.map((item, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                  >
                    <PortfolioCard item={item} index={i} />
                  </motion.div>
                ))
              : (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-20 text-center text-slate-500"
                >
                  <Code2 size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No projects found in this category.</p>
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
