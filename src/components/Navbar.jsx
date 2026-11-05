import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SITE, NAV_LINKS } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-cream hover:text-gold-light'}`

  return (
    <header className="sticky top-0 z-50 bg-maroon-dark border-b-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={SITE.logo} alt={`${SITE.name} logo`} className="w-14 h-14 rounded-full object-cover shrink-0" />
          <span className="hidden sm:block leading-tight min-w-0">
            <span className="block font-heading text-cream text-base truncate">{SITE.name}</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <NavLink to={item.to} className={linkClass}>
                  <span className="inline-flex items-center gap-1">
                    {item.label} <ChevronDown size={14} />
                  </span>
                </NavLink>
                <div className="absolute left-0 top-full pt-4 hidden group-hover:block group-focus-within:block">
                  <div className="bg-cream rounded-md border border-gold shadow-lg min-w-60 py-2">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to} className="block px-4 py-2 text-sm text-maroon hover:bg-gold/20">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/room-booking" className="bg-gold text-maroon-dark font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors">
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-maroon-dark border-t border-gold/40 max-h-[calc(100vh-5rem)] overflow-y-auto" aria-label="Mobile">
          <ul className="px-4 py-3">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="border-b border-cream/10">
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-cream"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${expanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-2 pl-4">
                        <li><Link to={item.to} className="block py-2 text-gold-light text-sm">All {item.label}</Link></li>
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link to={child.to} className="block py-2 text-cream/90 text-sm">{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.to} className="block py-3 text-cream">{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="px-4 pb-5 pt-2">
            <Link to="/room-booking" className="block text-center bg-gold text-maroon-dark font-semibold py-3 rounded-md">
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
