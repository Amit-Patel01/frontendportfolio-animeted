import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutGrid, Code2, Award, Loader2 } from 'lucide-react'
import PortfolioCard from './PortfolioCard'
import { usePortfolio } from '../hooks/usePortfolio'

const Projects = () => {
  const { items, loading, error } = usePortfolio()
  return (
    <section id="projects" className="section-container">

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 space-y-4"
      >
        <span className="pill bg-cyan-500/10 text-cyan-400 border-cyan-400/25 uppercase tracking-widest">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length > 0
            ? items.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} />
              ))
            : (
              <div className="col-span-full py-20 text-center text-slate-500">
                <Code2 size={40} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">No projects found.</p>
              </div>
            )
          }
        </div>
      )}
    </section>
  )
}

export default Projects
