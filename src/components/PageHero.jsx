import { Link } from 'react-router-dom'
import { IMG } from '../data/images'

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section
      className="bg-maroon-dark text-cream border-b-4 border-gold"
      style={{
        backgroundImage: `linear-gradient(rgba(74,23,17,0.88), rgba(74,23,17,0.88)), url('${IMG.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-cream/70 mb-4">
          <Link to="/" className="hover:text-gold-light">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              {' / '}
              {c.to ? <Link to={c.to} className="hover:text-gold-light">{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
          {' / '}<span className="text-gold-light">{title}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-cream/85 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
