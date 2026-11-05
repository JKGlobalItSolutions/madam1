import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CardPhotos from '../components/CardPhotos'
import { IMG } from '../data/images'

const steps = [
  { title: 'Send an enquiry', text: 'Fill the room or hall form with your dates and number of guests.' },
  { title: 'The Madam contacts you', text: 'You get a call or message on the mobile number you gave.' },
  { title: 'Confirm your stay', text: 'Availability, charges and guidelines are confirmed by the Madam.' },
]

export default function DivineStay() {
  return (
    <>
      <PageHero
        title="Divine Stay"
        subtitle="A peaceful stay for devotees and visitors, subject to availability."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            { title: 'Rooms', imgs: [{ src: IMG.roomCard, alt: 'Carved wooden doorway into a room' }, { src: IMG.roomDoor, alt: 'Wooden double door in the corridor' }], text: 'Rooms for devotees and visitors. Tell us your dates and group size and we will confirm what is available.', to: '/room-booking', cta: 'Room booking enquiry' },
            { title: 'Function Hall', imgs: [{ src: IMG.hall, alt: 'Devotees being served Annadhanam in the hall' }], text: 'A hall for spiritual and community functions. Share your event type, date and number of participants.', to: '/hall-booking', cta: 'Hall booking enquiry' },
          ].map((c) => (
            <div key={c.title} className="rounded-lg overflow-hidden border border-gold/50 bg-white flex flex-col">
              <CardPhotos images={c.imgs} />
              <div className="p-7 flex-1 flex flex-col">
                <h2 className="text-2xl text-maroon font-semibold">{c.title}</h2>
                <p className="mt-3 text-sm text-stone-700 leading-relaxed flex-1">{c.text}</p>
                <Button to={c.to} variant="maroon" className="mt-6 self-start">{c.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="How booking works" text="Bookings are enquiry based. The website does not check live availability, so your stay is confirmed only when the Madam replies." />
          <ol className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-lg border border-gold/40 bg-cream p-6">
                <span className="font-heading text-3xl text-gold">{i + 1}</span>
                <h3 className="mt-2 text-lg text-maroon font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-700">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-stone-600">Visitor guidelines are shared by the Madam when your booking is confirmed.</p>
        </div>
      </section>
    </>
  )
}
