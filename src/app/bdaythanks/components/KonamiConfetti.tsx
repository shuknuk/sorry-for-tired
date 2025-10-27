'use client';

import { motion, Variants } from 'framer-motion';
import { Heart } from 'lucide-react';

const confettiVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.02,
      duration: Math.random() * 0.5 + 0.5,
      ease: 'easeOut',
    },
  }),
  exit: {
    y: 1000,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

export default function KonamiConfetti() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -50}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
        >
          <Heart
            className="w-6 h-6 text-red-500 fill-current"
            style={{
              color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
