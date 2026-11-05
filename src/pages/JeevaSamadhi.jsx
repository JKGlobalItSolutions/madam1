import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { IMG } from '../data/images'

const photos = [
  { src: IMG.samadhiEntrance, alt: 'Entrance to the Jeeva Samadhi sanctum' },
  { src: IMG.samadhiShrine, alt: 'Jeeva Samadhi shrine with the hills behind' },
  { src: IMG.samadhiHall, alt: 'Inner hall and sanctum of the Jeeva Samadhi' },
]

export default function JeevaSamadhi() {
  // TODO (client): add whose Jeeva Samadhi it is, its history and visiting hours once confirmed.
  return (
    <>
      <PageHero title="Jeeva Samadhi" subtitle="A sacred place for silent prayer and meditation." />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle title="A Place of Silence" />
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 leading-relaxed text-center">
            <p>
              The Jeeva Samadhi is a sacred space within the Madalayam. Devotees visit to offer their
              respects and to sit quietly before the shrine.
            </p>
            <p>Visiting hours and guidelines are shared by the Madam.</p>
          </div>

          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5">
            {photos.map((p) => (
              <img key={p.src} src={p.src} alt={p.alt} loading="lazy" className="gold-frame mb-6 w-full rounded-lg break-inside-avoid" />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button to="/contact" variant="maroon">Contact the Madam</Button>
          </div>
        </div>
      </section>
    </>
  )
}
