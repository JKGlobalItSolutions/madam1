import { CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { EVENTS } from '../data/events'

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Events() {
  return (
    <>
      <PageHero title="Events" subtitle="Upcoming spiritual programmes and announcements." />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {EVENTS.length === 0 ? (
            <div className="max-w-xl mx-auto text-center rounded-lg border border-gold/50 bg-white p-10">
              <CalendarDays className="mx-auto text-gold mb-4" size={36} />
              <h2 className="text-2xl text-maroon font-semibold">No events announced yet</h2>
              <p className="mt-3 text-stone-700">New programme dates will appear here. Contact us to ask about the next programme.</p>
              <Button to="/contact" variant="maroon" className="mt-6">Contact Us</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENTS.map((e) => (
                <article key={e.title + e.date} className="rounded-lg overflow-hidden border border-gold/50 bg-white flex flex-col">
                  <div className="h-44 bg-maroon-dark" style={{ backgroundImage: e.image ? `url('${e.image}')` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl text-maroon font-semibold">{e.title}</h2>
                    <p className="mt-1 text-sm text-royal font-medium">{fmt(e.date)}{e.time ? `, ${e.time}` : ''}</p>
                    <p className="mt-3 text-sm text-stone-700 flex-1">{e.description}</p>
                    <Button to={e.link || '/contact'} variant="maroon" className="mt-5 self-start">Register</Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
