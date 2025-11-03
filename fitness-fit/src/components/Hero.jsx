import { motion } from 'framer-motion'
import { useState } from 'react'

export function Hero() {
  const [imgError, setImgError] = useState(false)
  const [mediaError, setMediaError] = useState(false);
    
    return (
    <section
  id="home"
  className="relative flex items-center justify-center min-h-[88vh] overflow-hidden text-white bg-transparent"
  aria-label="FitnessZone Gym Home Section"
>
  {!mediaError ? (
    <video
      className="absolute inset-0 w-full h-full object-cover brightness-[1.4] contrast-125"
      autoPlay
      loop
      muted
      playsInline
      onError={() => setMediaError(true)}
    >     <source src="/uploads/fitness.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      ) : (
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Professional fitness trainers at FitnessZone gym demonstrating workout techniques"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>
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


