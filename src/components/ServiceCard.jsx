import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, text, to, cta }) {
  return (
    <div className="bg-white rounded-lg border border-gold/40 p-7 flex flex-col h-full shadow-sm hover:border-gold transition-colors">
      <div className="w-12 h-12 rounded-full bg-maroon text-gold flex items-center justify-center mb-5">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-maroon mb-2">{title}</h3>
      <p className="text-stone-700 text-sm leading-relaxed flex-1">{text}</p>
      {to && cta && (
        <Link to={to} className="mt-5 text-sm font-semibold text-royal hover:text-maroon underline underline-offset-4">
          {cta}
        </Link>
      )}
    </div>
  )
}
