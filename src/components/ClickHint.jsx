import { MousePointerClick } from 'lucide-react'

// A small gold pill that tells visitors that something below can be clicked.
export default function ClickHint({ children, className = '' }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-maroon-dark ${className}`}>
      <MousePointerClick size={16} aria-hidden="true" />
      {children}
    </p>
  )
}
