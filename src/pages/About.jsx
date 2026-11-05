import { Link } from 'react-router-dom'
import { HandHeart, BookOpen, Landmark, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { SITE } from '../data/site'
import { IMG } from '../data/images'
import ServicePanel from '../components/ServicePanel'
import { MADAM_STATEMENT } from '../data/services'

const values = [
  { icon: HandHeart, title: 'Seva', text: 'Selfless service to society.' },
  { icon: BookOpen, title: 'Devotion', text: 'Faith and dedication to spiritual practices.' },
  { icon: Landmark, title: 'Tradition', text: 'Preserving sacred knowledge and heritage.' },
  { icon: Users, title: 'Community', text: 'Bringing devotees together through service.' },
]

export default function About() {
  // TODO: add a "Our History" section here once the client confirms the established
  // year, founder, lineage and milestones. Do not publish unverified facts.
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Preserving spiritual traditions, devotion and sacred heritage."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <img
            src={IMG.aboutMadam}
            alt={`Front of ${SITE.name} with the hills of Tiruvannamalai behind`}
            className="gold-frame w-full rounded-lg aspect-[16/10] md:aspect-[2.8/1] object-cover"
          />
          <div className="mt-14 max-w-3xl mx-auto">
            <SectionTitle title={`Welcome to ${SITE.name}`} text={MADAM_STATEMENT} />
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                {SITE.name} is a spiritual centre in Tiruvannamalai, the sacred town of Arunachala. It
                is a place of devotion, silence and selfless service, open to devotees who come to pray,
                to learn and to serve.
              </p>
              <p>
                Here, the divine blessings of Sri Sri Sri Jayendra Puri Mahaswamiji, Peethadhipathi of
                Sri Kailash Ashrama Mahasamsthana, continue to inspire all who visit. Let us walk on the
                path of dharma, devotion and service.
              </p>
              <p>
                Each day, Maheshwara Pooja and Annadhanam are offered to devotees. The Madalayam also
                cares for cows at its <Link to="/go-mata-seva-nilayam" className="text-royal underline underline-offset-4">Go Mata Seva Nilayam</Link> and
                has a <Link to="/jeeva-samadhi" className="text-royal underline underline-offset-4">Jeeva Samadhi</Link> for silent prayer.
              </p>
              <p>
                Devotees can join yoga, meditation and Thiruvasagam Mutrothal in the Madalayam's halls,
                attend special poojas and spiritual gatherings, or stay in its rooms for a peaceful visit
                to Tiruvannamalai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle title="Our Nithya and Periodical Services" />
          <ServicePanel showHeading={false} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-gold/50 bg-cream p-8">
            <h2 className="text-2xl text-maroon font-semibold mb-3">Our Vision</h2>
            <p className="text-stone-700 leading-relaxed">
              To preserve spiritual heritage, promote devotion and inspire future generations
              through traditional values.
            </p>
          </div>
          <div className="rounded-lg border border-gold/50 bg-cream p-8">
            <h2 className="text-2xl text-maroon font-semibold mb-3">Our Mission</h2>
            <p className="text-stone-700 leading-relaxed">
              To encourage selfless service, spiritual learning, devotional practices and community welfare.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center rounded-lg border border-gold/40 bg-white p-7">
                <div className="w-14 h-14 mx-auto rounded-full bg-maroon text-gold flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl text-maroon font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maroon text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">A Tradition of Selfless Service</h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mt-4" />
          <p className="mt-6 leading-relaxed text-cream/90">
            Annadhanam is regarded as a sacred act of charity and compassion. Through food service,
            the Madam seeks to uphold generosity, humanity and devotion. Devotees can take part by
            serving, or by sponsoring a day of Annadhanam.
          </p>
          <Button to="/annadhanam" variant="gold" className="mt-8">Explore Annadhanam</Button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-gold/50 bg-white p-8">
            <h2 className="text-2xl text-maroon font-semibold mb-3">Spiritual Activities</h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              Yoga and meditation, Thiruvasagam Mutrothal, spiritual gatherings, special poojas and
              traditional religious programmes.
            </p>
            <Link to="/spiritual-activities" className="inline-block mt-4 text-sm font-semibold text-royal underline underline-offset-4">Explore activities</Link>
          </div>
          <div className="rounded-lg border border-gold/50 bg-white p-8">
            <h2 className="text-2xl text-maroon font-semibold mb-3">Divine Stay and Facilities</h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              The Madam offers rooms and a function hall for devotees and visitors, subject to availability.
            </p>
            <Link to="/divine-stay" className="inline-block mt-4 text-sm font-semibold text-royal underline underline-offset-4">Book your stay</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Be a Part of Our Spiritual Community</h2>
          <p className="mt-5 text-cream/90 leading-relaxed">
            Whether you wish to take part in Annadhanam, attend spiritual programmes or visit the
            Madam, we welcome you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/spiritual-activities" variant="gold">Explore Our Activities</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
