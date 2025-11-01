import { motion } from 'framer-motion'
import { useState } from 'react'

export function Hero() {
  const [imgError, setImgError] = useState(false)
  
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden" id="home">
      <img 
        src={imgError 
          ? "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          : "https://images.pexels.com/photos/3764036/pexels-photo-3764036.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        alt="Professional male and female fitness trainers at FitnessZone gym demonstrating workout techniques"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-section relative z-10 grid gap-6 py-24">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1 w-10 bg-red-600" />
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-200">VIRIBUS</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Train Smarter. Get Stronger. Feel Better.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-lg text-gray-200"
        >
          Gym, Yoga, Zumba and Personal Training — all in one place. Join the movement today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="btn-primary" aria-label="Join FitnessZone now">Join Now</a>
          <a href="#plans" className="btn-secondary" aria-label="Explore membership plans">Explore Plans</a>
        </motion.div>
      </div>
    </section>
  )
}


