import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { GALLERIES } from '../data/gallery'

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Choose a gallery to see its photographs." />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERIES.map((g) => (
            <Link
              key={g.slug}
              to={`/gallery/${g.slug}`}
              className="group rounded-lg overflow-hidden border border-gold/50 bg-white flex flex-col hover:border-gold transition-colors"
            >
              <div
                className="aspect-[4/3] bg-maroon-dark"
                style={{ backgroundImage: `url('${g.cover}')`, backgroundSize: 'cover', backgroundPosition: g.coverPosition }}
                role="img"
                aria-label={g.heading}
              />
              <div className="p-6">
                <h2 className="text-xl text-maroon font-semibold group-hover:text-royal transition-colors">{g.heading}</h2>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{g.description}</p>
                <p className="mt-3 text-sm font-medium text-royal">
                  {g.items.length} {g.items.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
