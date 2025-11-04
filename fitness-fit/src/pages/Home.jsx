import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Programs } from '../components/Programs'
import { Plans } from '../components/Plans'
import { ClassSchedule } from '../components/ClassSchedule'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Plans />
      <ClassSchedule />
      <Testimonials />
      <Contact />
    </main>
  )
}
