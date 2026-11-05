import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Utensils, Music, BookOpen, Flower2, CalendarDays } from 'lucide-react'
import { EVENTS } from '../data/events'
import { SITE } from '../data/site'
import Button from './Button'

// Regular programmes: shown while no dated event has been added in src/data/events.js
const REGULAR = [
  { icon: Utensils, label: 'Nithya Maheshwara Pooja', to: '/annadhanam' },
  { icon: Music, label: 'Thiruvasagam Mutrothal', to: '/thiruvasagam-mutrothal' },
  { icon: BookOpen, label: 'Periya Puranam Mutrothal', to: '/spiritual-activities' },
  { icon: Flower2, label: 'Yoga and Kriya Trainings', to: '/yoga-training' },
]

function DateBadge({ date }) {
  const d = new Date(`${date}T00:00:00`)
  return (
    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-gold leading-none text-maroon-dark">
      <span className="font-heading text-3xl font-semibold">{d.getDate()}</span>
      <span className="mt-1 text-xs font-semibold">{d.toLocaleString('en-IN', { month: 'short' })}</span>
    </div>
  )
}

export default function EventsBand() {
  // Only today's and future events are shown, the nearest one first
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = EVENTS.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))
  const featured = upcoming[0]
  const others = upcoming.slice(1)
  const fmtDate = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <section className="relative overflow-hidden border-b-4 border-gold bg-maroon-dark py-16 text-cream md:py-20">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(227,183,101,0.28) 0%, rgba(74,23,17,0) 60%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <CalendarDays className="mx-auto mb-3 text-gold-light" size={34} aria-hidden="true" />
          <h2 className="text-3xl font-semibold md:text-4xl">Upcoming Spiritual Events</h2>
          <div className="mx-auto mt-4 h-0.5 w-24 bg-gold" />
        </div>

        {featured ? (
          <>
            <article className="grid overflow-hidden rounded-xl border-2 border-gold bg-maroon md:grid-cols-[1.1fr_1fr]">
              {featured.image ? (
                <img src={featured.image} alt={featured.title} className="h-full min-h-56 w-full object-cover" />
              ) : (
                <div className="flex min-h-56 items-center justify-center bg-maroon-dark">
                  <CalendarDays size={64} className="text-gold/60" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-col justify-center p-7 md:p-9">
                <p className="text-sm font-medium text-gold-light">Next programme</p>
                <div className="mt-3 flex items-center gap-5">
                  <DateBadge date={featured.date} />
                  <div>
                    <h3 className="text-2xl font-semibold md:text-3xl">{featured.title}</h3>
                    <p className="mt-1 text-sm text-cream/85">
                      {fmtDate(featured.date)}{featured.time ? `, ${featured.time}` : ''}
                    </p>
                  </div>
                </div>
                {featured.description && <p className="mt-5 leading-relaxed text-cream/90">{featured.description}</p>}
                <Button to={featured.link || '/contact'} variant="gold" className="mt-6 self-start">Register</Button>
              </div>
            </article>

            {others.length > 0 && (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((e) => (
                  <article key={e.title + e.date} className="flex gap-4 rounded-lg border border-gold/60 bg-maroon/70 p-5">
                    <DateBadge date={e.date} />
                    <div>
                      <h3 className="text-lg font-semibold text-gold-light">{e.title}</h3>
                      {e.time && <p className="text-sm text-cream/80">{e.time}</p>}
                      <Link to={e.link || '/contact'} className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 hover:text-gold-light">Register</Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <p className="mx-auto mb-8 max-w-2xl text-center leading-relaxed text-cream/90">
              These programmes take place at the Madalayam. Dates are announced here, so call or message us to know the next one.
            </p>
            <ul className="flex flex-wrap justify-center gap-4">
              {REGULAR.map(({ icon: Icon, label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="inline-flex items-center gap-3 rounded-full border-2 border-gold/70 bg-maroon px-6 py-3 font-medium transition-colors hover:bg-gold hover:text-maroon-dark"
                  >
                    <Icon size={20} className="text-gold-light" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={`tel:+91${SITE.phone}`} variant="gold">
            <Phone size={18} className="mr-2" aria-hidden="true" /> Call {SITE.phone}
          </Button>
          <Button href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" variant="outline">
            <MessageCircle size={18} className="mr-2" aria-hidden="true" /> WhatsApp us
          </Button>
          <Button to="/events" variant="outline">All events</Button>
        </div>
      </div>
    </section>
  )
}
