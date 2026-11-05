import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PlaceholderPage from './PlaceholderPage'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { GURUS } from '../data/gurus'
import { GALLERIES } from '../data/gallery'

// TODO (client): verify every date and sentence with the official Sri Kailash Ashrama sources.
export default function Biography() {
  const { slug } = useParams()
  const guru = GURUS.find((g) => g.slug === slug)
  if (!guru) return <PlaceholderPage title="Biography not found" />
  const other = GURUS.find((g) => g.slug !== slug)
  const photos = (GALLERIES.find((g) => g.slug === slug) || { items: [] }).items

  return (
    <>
      <PageHero
        title={guru.name}
        subtitle={guru.role}
        crumbs={[{ label: 'Spiritual Heritage', to: '/guru-parampara' }]}
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <img
            src={guru.image}
            alt={guru.name}
            className="gold-frame rounded-lg w-full max-w-xs mx-auto aspect-[4/5] object-cover object-top bg-maroon-dark"
          />
          <div>
            <h2 className="text-3xl text-maroon font-semibold">{guru.shortName}</h2>
            <p className="mt-1 text-royal font-medium">{guru.role}</p>
            <div className="h-0.5 w-20 bg-gold mt-4" />
            <p className="mt-6 text-stone-700 leading-relaxed">{guru.summary}</p>
            <ul className="mt-6 space-y-3 text-stone-700 list-disc pl-5">
              {guru.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle title="Life and History" />
          <ol className="border-l-2 border-gold pl-8 space-y-8">
            {guru.timeline.map((t) => (
              <li key={t.when} className="relative">
                <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gold border-2 border-white" />
                <p className="font-heading text-lg text-maroon font-semibold">{t.when}</p>
                <p className="text-stone-700 mt-1 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {photos.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Photographs" />
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
              {photos.map((p) => (
                <figure key={p.src} className="mb-5 break-inside-avoid">
                  <img src={p.src} alt={p.alt} loading="lazy" className="gold-frame w-full rounded-lg" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          <Button to={other.biographyPath} variant="maroon">Read about {other.shortName}</Button>
        </div>
      </section>
    </>
  )
}
