import { motion } from 'framer-motion'
import Reveal from './Reveal'

/**
 * Consistent animated section heading: an entrance badge, a big title,
 * an optional gradient word, a self-drawing underline and a subtitle.
 */
const SectionHeading = ({
  badge,
  badgeClass = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none shadow-[0_3px_12px_rgba(6,182,212,0.3)]',
  title,
  highlight,
  highlightClass = 'from-cyan-400 to-violet-500',
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} mb-12 sm:mb-16 space-y-4`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8, y: -8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase ${badgeClass}`}
        >
          {badge}
        </motion.span>
      )}

      <Reveal direction={isCenter ? 'up' : 'left'} duration={0.6}>
        <h2 className="font-black text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight font-outfit">
          {title}{' '}
          {highlight && (
            <span className={`bg-gradient-to-r ${highlightClass} bg-clip-text text-transparent`}>
              {highlight}
            </span>
          )}
        </h2>
      </Reveal>

      {/* Self-drawing gradient underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: isCenter ? 0.5 : 0 }}
        className={`h-[3px] w-24 rounded-full bg-gradient-to-r ${highlightClass} ${
          isCenter ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p className={`max-w-xl ${isCenter ? 'mx-auto' : ''} text-[15px] text-slate-500 dark:text-slate-400`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
