export default function SectionTitle({ title, text, light = false, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl mb-12 ${alignment}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold leading-tight ${light ? 'text-cream' : 'text-maroon'}`}>
        {title}
      </h2>
      <div className={`h-0.5 w-20 bg-gold mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {text && (
        <p className={`mt-5 leading-relaxed ${light ? 'text-cream/85' : 'text-stone-700'}`}>{text}</p>
      )}
    </div>
  )
}
