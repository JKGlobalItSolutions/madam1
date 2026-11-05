import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { MADAM_SERVICES } from '../data/services'

// Each row is a button-like link with a moving arrow, so it is clear that it can be clicked.
export default function ServiceList({ className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {MADAM_SERVICES.map((s) => (
        <li key={s.label}>
          <Link
            to={s.to}
            className="group flex items-center gap-3 rounded-md border-2 border-gold/70 bg-cream px-4 py-3 text-maroon font-medium shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-maroon-dark hover:shadow-lg"
          >
            <span className="w-2.5 h-2.5 rotate-45 bg-gold group-hover:bg-maroon-dark shrink-0" aria-hidden="true" />
            <span className="flex-1">{s.label}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon text-gold group-hover:bg-maroon-dark">
              <ChevronRight size={18} className="nudge" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
