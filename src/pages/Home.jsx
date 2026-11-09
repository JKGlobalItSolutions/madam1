import {
  Utensils, HandHeart, Heart, BedDouble, Building2, Flower2, Music, Landmark,
  Sparkles, Users, CalendarDays, Camera,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import EventsBand from '../components/EventsBand'
import ThapovanamSection from '../components/ThapovanamSection'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import ServicePanel from '../components/ServicePanel'
import CardPhotos from '../components/CardPhotos'
import { SITE } from '../data/site'
import { IMG } from '../data/images'
import { GALLERIES } from '../data/gallery'

const services = [
  { icon: BedDouble, title: 'Room Booking', text: 'Peaceful accommodation for visitors.', to: '/room-booking', cta: 'Book Room' },
  { icon: Building2, title: 'Hall Booking', text: 'Space for spiritual and community functions.', to: '/hall-booking', cta: 'Book Hall' },
  { icon: Flower2, title: 'Yoga Training', text: 'Yoga and meditation activities.', to: '/yoga-training', cta: 'Enquire Now' },
  { icon: Music, title: 'Thiruvasagam Mutrothal', text: 'Collective devotional recitation.', to: '/thiruvasagam-mutrothal', cta: 'Register Interest' },
]

const activities = [
  { icon: Flower2, title: 'Yoga Training', text: 'Yoga and meditation for inner calm.', to: '/yoga-training', cta: 'Learn more' },
  { icon: Music, title: 'Thiruvasagam Mutrothal', text: 'Recitation of Thiruvasagam together.', to: '/thiruvasagam-mutrothal', cta: 'Learn more' },
  { icon: Sparkles, title: 'Special Poojas', text: 'Traditional poojas on auspicious occasions.', to: '/special-poojas', cta: 'Learn more' },
  { icon: Users, title: 'Spiritual Gatherings', text: 'Satsangs and community devotional meetings.', to: '/spiritual-gatherings', cta: 'Learn more' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <EventsBand />

      {/* Full-width Madam photo, Jeeva Samadhi photos below it, then the services */}
      <section className="pb-20 bg-cream">
        <img
          src={IMG.aboutMadam}
          alt={`Front of ${SITE.name} with the hills of Tiruvannamalai behind`}
          className="block w-full aspect-[4/3] md:aspect-[2.2/1] object-cover border-b-4 border-gold"
        />

        <div className="max-w-6xl mx-auto px-4">
          <div className="pt-16">
            <SectionTitle
              title="Jeeva Samadhi"
              text="A sacred space within the Madalayam for silent prayer and meditation. Devotees visit to offer their respects and sit quietly before the shrine."
            />
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { src: IMG.samadhiEntrance, alt: 'Entrance to the Jeeva Samadhi sanctum', pos: 'center 45%' },
                { src: IMG.samadhiHall, alt: 'Inner hall and sanctum of the Jeeva Samadhi', pos: 'center' },
                { src: IMG.samadhiShrine, alt: 'Jeeva Samadhi shrine with the hills behind', pos: 'center 55%' },
              ].map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} style={{ objectPosition: p.pos }} className="gold-frame rounded-lg w-full aspect-[4/3] sm:aspect-[3/4] object-cover" />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button to="/jeeva-samadhi" variant="maroon">Visit Jeeva Samadhi</Button>
            </div>
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <ServicePanel />
          </div>
        </div>
      </section>

      {/* Nithya Maheshwara Pooja and Annadhanam: client's main highlight, so it gets the strongest colour block */}
      <section className="py-20 bg-maroon text-cream">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            light
            title="Nithya Maheshwara Pooja and Annadhanam"
            text="A sacred tradition of honouring the devotees of Lord Shiva and serving food with devotion."
          />

          {/* What it is: photo left, text right */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <figure>
              <img src={IMG.maheshwaraAnnadhanam} alt="Devotees being served Annadhanam on banana leaves" className="gold-frame rounded-lg w-full" />
              <figcaption className="mt-4 text-center text-sm text-cream/80">Devotees being served Annadhanam</figcaption>
            </figure>
            <div>
              <h3 className="text-2xl md:text-3xl text-gold-light">What is Nithya Maheshwara Pooja?</h3>
              <p className="mt-4 leading-relaxed text-cream/90">
                Maheshwara Pooja is the worship of the devotees of Lord Shiva, who are honoured as Maheshwaras,
                the living forms of the Lord. At the Madalayam this pooja is offered every day (Nithya) to the
                Santas who visit.
              </p>
              <p className="mt-4 leading-relaxed text-cream/90">
                After the pooja, the Santas are served a meal. Offering food to a devotee of Shiva is held to be
                the same as offering it to Shiva himself.
              </p>
            </div>
          </div>

          {/* How it is served: text left, photo right */}
          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl text-gold-light">Annadhanam: the offering of food</h3>
              <p className="mt-4 leading-relaxed text-cream/90">
                Annadhanam is a meaningful expression of compassion, devotion and selfless service. Food is
                served to devotees and to those in need, seated together and served on banana leaves.
              </p>
              <p className="mt-4 leading-relaxed text-cream/90">
                Devotees who wish to take part can sponsor Annadhanam for a day, sponsor it every month, or
                make a general contribution.
              </p>
            </div>
            <figure className="order-1 lg:order-2">
              <img src={IMG.padapooja} alt="Pooja with lotus flowers and golden padukas" className="gold-frame rounded-lg w-full" />
              <figcaption className="mt-4 text-center text-sm text-cream/80">Pooja with lotus flowers and golden padukas</figcaption>
            </figure>
          </div>

          {/* Santas being served */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl text-gold-light text-center mb-8">Santas being served at the Madalayam</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: IMG.santasAnnadhanam1, alt: 'Santas seated with banana leaf meals in the Annadhanam hall', pos: 'center 55%' },
                { src: IMG.santasAnnadhanam2, alt: 'Santas and devotees during Annadhanam', pos: 'center 50%' },
                { src: IMG.swamijiMealPrayer, alt: 'Swamiji offering prayer before the meal', pos: 'center 50%' },
              ].map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} style={{ objectPosition: p.pos }} className="gold-frame rounded-lg w-full aspect-[4/3] object-cover" />
              ))}
            </div>
          </div>

                    <figure className="mt-12">
            <img src={IMG.annadhanamHall} alt="The Annadhanam hall at the Madalayam" className="gold-frame rounded-lg w-full aspect-[16/7] object-cover" />
            <figcaption className="mt-4 text-center text-sm text-cream/80">The Annadhanam hall</figcaption>
          </figure>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/annadhanam" variant="gold">Know More</Button>
            <Button to="/annadhanam#sponsor" variant="outline">Sponsor Annadhanam</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Go Mata Seva Nilayam */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-maroon">Go Mata Seva Nilayam</h2>
            <div className="h-0.5 w-20 bg-gold mt-4" />
            <p className="mt-6 text-stone-700 leading-relaxed">
              Serving the cow is one of the oldest forms of devotional service. The Madalayam carries this
              tradition forward through its Gosala, where cows are given shelter, fodder and clean water.
            </p>
            <ul className="mt-5 space-y-2 text-stone-700 text-sm list-disc pl-5">
              <li>A covered shed for the cows</li>
              <li>Fodder and clean drinking water</li>
              <li>Devotees who wish to support the cows can contact the Madam</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/go-mata-seva-nilayam" variant="maroon">Know More</Button>
              <Button to="/contact" variant="outlineDark">Support Go Mata Seva</Button>
            </div>
          </div>
          <div className="grid gap-4">
            <img src={IMG.gosala} alt="Cows resting in the Gosala shed" className="gold-frame rounded-lg w-full aspect-[2.1/1] object-cover" />
            <img src={IMG.cowShed} alt="A cow at the Madalayam with the hills behind" className="gold-frame rounded-lg w-full aspect-[2.1/1] object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Our Services and Facilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Divine Stay preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="A Divine Stay for Devotees"
            text="We welcome devotees and visitors with accommodation facilities designed to provide a peaceful and comfortable stay."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Rooms', imgs: [{ src: IMG.roomCard, alt: 'Carved wooden doorway into a room' }, { src: IMG.roomDoor, alt: 'Wooden double door in the corridor' }], points: ['Clean, simple rooms', 'Rooms for families and groups', 'Booking enquiry by form'], to: '/room-booking', cta: 'Enquire for a room' },
              { title: 'Function Hall', imgs: [{ src: IMG.hall, alt: 'Devotees being served Annadhanam in the hall' }], points: ['Space for functions and gatherings', 'Seating for your group', 'Booking enquiry by form'], to: '/hall-booking', cta: 'Enquire for the hall' },
            ].map((c) => (
              <div key={c.title} className="rounded-lg overflow-hidden border border-gold/50 bg-cream flex flex-col">
                <CardPhotos images={c.imgs} />
                <div className="p-7">
                  <h3 className="text-2xl text-maroon font-semibold">{c.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-stone-700 list-disc pl-5">
                    {c.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Button to={c.to} variant="outlineDark" className="mt-6">{c.cta}</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/divine-stay" variant="maroon">Explore Divine Stay</Button>
          </div>
        </div>
      </section>

      {/* Spiritual activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Spiritual Activities and Programmes"
            text="Experience spiritual learning, traditional devotional practices and activities that encourage inner peace, devotion and cultural awareness."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => <ServiceCard key={a.title} {...a} />)}
          </div>
          <div className="text-center mt-10">
            <Button to="/spiritual-activities" variant="maroon">Explore All Programmes</Button>
          </div>
        </div>
      </section>

      <ThapovanamSection />

      {/* Gallery: five separate galleries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Glimpses of Our Spiritual Journey" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {GALLERIES.map((g, i) => (
              <Link
                key={g.slug}
                to={`/gallery/${g.slug}`}
                className={`group relative aspect-[4/3] rounded-lg overflow-hidden bg-maroon-dark flex items-end ${i < 3 ? 'md:col-span-2' : 'md:col-span-3'} ${i === 4 ? 'col-span-2 md:col-span-3' : ''}`}
                style={{ backgroundImage: `url('${g.cover}')`, backgroundSize: 'cover', backgroundPosition: g.coverPosition }}
              >
                <span className="w-full bg-linear-to-t from-maroon-dark/95 to-transparent p-4 text-cream font-heading text-lg group-hover:text-gold-light">
                  {g.navLabel}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/gallery" variant="maroon">View All Photos</Button>
          </div>
        </div>
      </section>

      {/* Donation / support: no payment details until the Madam approves */}
      <section className="py-20 bg-maroon-dark text-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Landmark className="mx-auto text-gold mb-4" size={36} />
          <h2 className="text-3xl md:text-4xl font-semibold">Be a Part of Our Seva</h2>
          <p className="mt-5 leading-relaxed text-cream/90">
            Your support helps continue devotional activities, Annadhanam and spiritual services.
            Join us in preserving the spirit of compassion and selfless service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/annadhanam" variant="gold">Support Annadhanam</Button>
            <Button to="/contact" variant="outline">Contact for Contributions</Button>
          </div>
        </div>
      </section>
    </>
  )
}
