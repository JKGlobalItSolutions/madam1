import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import BookingForm from '../components/BookingForm'
import { PROGRAMMES } from '../data/programmes'
import { PROGRAMME_FIELDS } from '../data/forms'

export default function ProgrammeBooking({ slug }) {
  const p = PROGRAMMES.find((x) => x.slug === slug)
  if (!p) return null
  return (
    <>
      <PageHero
        title={p.title}
        subtitle={p.intro}
        crumbs={[{ label: 'Spiritual Activities', to: '/spiritual-activities' }]}
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl text-maroon font-semibold">About {p.title}</h2>
            <div className="h-0.5 w-20 bg-gold mt-4" />
            {p.about.map((t) => <p key={t} className="mt-5 text-stone-700 leading-relaxed">{t}</p>)}
            {p.image && <img src={p.image} alt={p.title} className="gold-frame mt-8 w-full rounded-lg" />}
            <ul className="mt-6 space-y-2">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-stone-700 text-sm">
                  <Check size={18} className="text-forest shrink-0 mt-0.5" /> {pt}
                </li>
              ))}
            </ul>
          </div>
          {/* key makes the form reset to the right programme when you move between pages */}
          <BookingForm
            key={slug}
            type="spiritual"
            title={`${p.title} registration`}
            fields={PROGRAMME_FIELDS}
            initialValues={{ programme: p.option }}
            submitLabel="Send registration"
          />
        </div>
      </section>
    </>
  )
}
