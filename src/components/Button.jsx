import { Link } from 'react-router-dom'

const styles = {
  gold: 'bg-gold text-maroon-dark hover:bg-gold-light font-semibold',
  maroon: 'bg-maroon text-cream hover:bg-maroon-dark font-semibold',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-maroon-dark font-semibold',
  outlineDark: 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream font-semibold',
}

export default function Button({ to, href, variant = 'gold', children, className = '', ...rest }) {
  const base = `inline-flex items-center justify-center rounded-md px-6 py-3 text-sm transition-colors ${styles[variant]} ${className}`
  if (href) return <a href={href} className={base} {...rest}>{children}</a>
  return <Link to={to} className={base} {...rest}>{children}</Link>
}
