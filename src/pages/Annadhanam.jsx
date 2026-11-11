import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import BookingForm from '../components/BookingForm'
import { ANNADHANAM_FIELDS } from '../data/forms'
import { SITE } from '../data/site'
import { IMG } from '../data/images'
import VideoPlayer from '../components/VideoPlayer'
import { MAHESHWARA_POOJA_VIDEOS } from '../data/videos'

const sponsorship = [
  { title: 'Sponsor one day Annadhanam', text: 'Support the food service for a day, in your name or in memory of a loved one.' },
  { title: 'Monthly sponsorship', text: 'Contribute regularly so that Annadhanam continues through the month.' },
  { title: 'General contribution', text: 'Give any amount towards Annadhanam and devotional services.' },
]

const ANNADHANAM_PHOTOS = [
  { src: IMG.maheshwaraAnnadhanam, alt: 'Devotees being served Annadhanam on banana leaves', pos: 'center 50%' },
  { src: IMG.santasAnnadhanam1, alt: 'Santas seated with banana leaf meals in the Annadhanam hall', pos: 'center 55%' },
  { src: IMG.santasAnnadhanam2, alt: 'Santas and devotees during Annadhanam', pos: 'center 50%' },
  { src: IMG.swamijiMealPrayer, alt: 'Swamiji offering prayer before the meal', pos: 'center 50%' },
  { src: IMG.santasAnnadhanam3, alt: 'Santas and devotees being served in the Annadhanam hall', pos: 'center 50%' },
  { src: IMG.santasAnnadhanam4, alt: 'Santas seated with banana leaf meals, ready for Annadhanam', pos: 'center 50%' },
]

export default function Annadhanam() {
  // Do not add bank details or a payment QR until the Madam approves them.
  return (
    <>
      <PageHero
        title="Daily Annadhanam"
        subtitle="Nithya Maheshwara Pooja and food service for devotees."
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Maheshwara Pooja and Annadhanam" />
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Maheshwara Pooja is a sacred devotional practice associated with serving and honouring
              Shiva devotees. Annadhanam, the offering of food, is a meaningful expression of
              compassion, devotion and selfless service.
            </p>
            <p>
              {SITE.name} continues this spirit by serving devotees and those in need. Call us to
              know the current serving time.
            </p>
          </div>
          <img src={IMG.annadhanamHall} alt="Annadhanam hall at the Madalayam" className="gold-frame mt-12 w-full rounded-lg" />

          {/* Photos: same ones as the Annadhanam section on the Home page, plus new ones */}
          <div className="mt-14">
            <h3 className="text-2xl md:text-3xl text-maroon font-semibold text-center mb-8">Annadhanam at the Madalayam</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ANNADHANAM_PHOTOS.map((p) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  style={{ objectPosition: p.pos }}
                  className="gold-frame rounded-lg w-full aspect-[4/3] object-cover"
                />
              ))}
            </div>
          </div>

          {MAHESHWARA_POOJA_VIDEOS.length > 0 && (
            <div className="mt-14">
              <h3 className="text-2xl md:text-3xl text-maroon font-semibold text-center mb-8">Maheshwara Pooja Videos</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {MAHESHWARA_POOJA_VIDEOS.map((v) => (
                  <VideoPlayer key={v.title + (v.youtube || v.src)} {...v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle title="Ways to Sponsor" />
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorship.map((s) => (
              <div key={s.title} className="rounded-lg border border-gold/50 bg-white p-7">
                <h3 className="text-xl text-maroon font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24" id="sponsor">
        <div className="max-w-3xl mx-auto px-4">
          <BookingForm
            type="annadhanam"
            title="Annadhanam sponsorship enquiry"
            fields={ANNADHANAM_FIELDS}
            submitLabel="Send sponsorship enquiry"
          />
          <p className="mt-4 text-sm text-stone-600 text-center">
            Bank details for contributions are on the <Link to="/contact#bank" className="text-royal font-semibold underline underline-offset-4">Contact page</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
