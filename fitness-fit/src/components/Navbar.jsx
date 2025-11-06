import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation } from 'react-router-dom'
import { FiMoon, FiSun } from 'react-icons/fi'

export function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { to: 'about', label: 'About', isRoute: false },
    { to: 'programs', label: 'Programs', isRoute: false },
    { to: 'gallery', label: 'Gallery', isRoute: true },
    { to: 'plans', label: 'Plans', isRoute: false },
    { to: 'schedule', label: 'Schedule', isRoute: false },
    { to: 'testimonials', label: 'Testimonials', isRoute: false }
    
  ]

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-gray-900/60 shadow-sm' : ''}`}>
      <nav className="container-section flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="VIRIBUS Home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white font-bold">  <img
    src="uploads/images/logo.jpg"
    alt="VIRIBUS Gym Logo"
    className="h-10 w-10 object-contain rounded-full"
  /></span>
          <span className="text-lg font-semibold">Fitness</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.to}
                  to={`/${item.to}`}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 dark:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            } else {
              // For scroll links, navigate to home first if on another page
              const handleClick = (e) => {
                if (location.pathname !== '/') {
                  e.preventDefault()
                  window.location.href = `/#${item.to}`
                }
              }
              return (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  spy
                  offset={-80}
                  className="cursor-pointer text-sm font-medium text-gray-700 hover:text-red-600 dark:text-gray-300"
                  onClick={handleClick}
                >
                  {item.label}
                </ScrollLink>
              )
            }
          })}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={onToggleTheme} className="rounded-full border border-gray-300 p-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          {location.pathname === '/' ? (
            <a href="#contact" className="btn-primary hidden md:inline-flex" aria-label="Join FitnessZone now">Join Now</a>
          ) : (
            <Link to="/#contact" className="btn-primary hidden md:inline-flex" aria-label="Join FitnessZone now">Join Now</Link>
          )}
          <button className="md:hidden rounded-md border border-gray-300 p-2 dark:border-gray-700" onClick={() => setIsOpen((o) => !o)} aria-label="Toggle Menu">
            <span className="block h-0.5 w-5 bg-current mb-1"></span>
            <span className="block h-0.5 w-5 bg-current mb-1"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container-section py-3 flex flex-col gap-3">
            {navItems.map((item) => {
              if (item.isRoute) {
                return (
                  <Link
                    key={item.to}
                    to={`/${item.to}`}
                    className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              } else {
                const handleClick = (e) => {
                  setIsOpen(false)
                  if (location.pathname !== '/') {
                    e.preventDefault()
                    window.location.href = `/#${item.to}`
                  }
                }
                return (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth
                    spy
                    offset={-80}
                    className="cursor-pointer py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300"
                    onClick={handleClick}
                  >
                    {item.label}
                  </ScrollLink>
                )
              }
            })}
          </div>
        </div>
      )}
    </header>
  )
}


