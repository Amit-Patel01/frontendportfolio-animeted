import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 150)

    return () => {
      clearInterval(timer)
    }
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08091a]"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Logo / Initial */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-24 h-24 mb-8 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30"></div>
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-3xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            AP
          </span>
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-pulse"></div>
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
        
        {/* Loading Text */}
        <motion.div 
          className="mt-4 text-slate-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading <span className="w-[30px] text-left">{Math.floor(progress)}%</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader
