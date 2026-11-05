import { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import PlaceholderPage from './PlaceholderPage'
import { GALLERIES } from '../data/gallery'

export default function GalleryDetail() {
  const { slug } = useParams()
  const gallery = GALLERIES.find((g) => g.slug === slug)
  const [index, setIndex] = useState(null)
  const count = gallery ? gallery.items.length : 0

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % count)), [count])
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + count) % count)), [count])

  useEffect(() => {
    setIndex(null)
  }, [slug])

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, close, next, prev])

  if (!gallery) return <PlaceholderPage title="Gallery not found" />
  const current = index === null ? null : gallery.items[index]

  return (
    <>
      <PageHero
        title={gallery.heading}
        subtitle={gallery.description}
        crumbs={[{ label: 'Gallery', to: '/gallery' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Columns keep each photo at its own shape (tall portraits and wide scenes together) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {gallery.items.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setIndex(i)}
                className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg border border-gold/40 bg-maroon-dark"
                aria-label={`Open photo: ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto hover:scale-[1.03] transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl text-maroon font-semibold mb-4">More galleries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERIES.filter((g) => g.slug !== slug).map((g) => (
              <Link key={g.slug} to={`/gallery/${g.slug}`} className="px-5 py-2 rounded-full text-sm font-medium border border-gold/60 bg-white text-maroon hover:border-gold hover:bg-gold/10">
                {g.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {current && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={current.alt} onClick={close}>
          <button className="absolute top-5 right-5 text-white p-2" aria-label="Close photo" onClick={close}><X size={32} /></button>
          {count > 1 && (
            <>
              <button className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white p-2 bg-black/40 rounded-full" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev() }}>
                <ChevronLeft size={32} />
              </button>
              <button className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white p-2 bg-black/40 rounded-full" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next() }}>
                <ChevronRight size={32} />
              </button>
            </>
          )}
          <figure className="max-h-[90vh] max-w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="max-h-[82vh] max-w-full rounded-md object-contain" />
            <figcaption className="mt-3 text-sm text-white/85 text-center">{current.alt} ({index + 1} of {count})</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
