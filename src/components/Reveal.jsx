import { motion } from 'framer-motion'

const DEFAULT_VIEWPORT = { once: true, margin: '0px 0px -12% 0px' }

const directionMap = {
  up:    { y: 40,  x: 0 },
  down:  { y: -40, x: 0 },
  left:  { y: 0,   x: 48 },
  right: { y: 0,   x: -48 },
  none:  { y: 0,   x: 0 },
}

/**
 * Reusable scroll-reveal wrapper used across every section so the
 * entrance motion stays consistent site-wide.
 */
const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
}) => {
  const offset = directionMap[direction] ?? directionMap.up

  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
