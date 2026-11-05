import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { PROGRAMMES } from '../data/programmes'
import { HALLS } from '../data/halls'

export default function SpiritualActivities() {
  return (
    <>
      <PageHero
        title="Spiritual Activities"
        subtitle="Spiritual learning, traditional devotional practices and programmes for inner peace."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Programmes at the Madalayam"
            text="Choose a programme to read about it and send a registration enquiry."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMMES.map((p) => (
              <ServiceCard key={p.slug} icon={p.icon} title={p.title} text={p.summary} to={`/${p.slug}`} cta="Read more and register" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Our Halls" text="Peaceful spaces for practice, recitation and prayer." />
          <div className="grid lg:grid-cols-2 gap-8">
            {HALLS.map((h) => (
              <article key={h.title} className="rounded-lg overflow-hidden border border-gold/50 bg-cream">
                <img src={h.images[0].src} alt={h.images[0].alt} className="w-full aspect-[16/9] object-cover" />
                {h.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    {h.images.slice(1).map((im) => (
                      <img key={im.src} src={im.src} alt={im.alt} className="w-full aspect-[16/7] object-cover col-span-2" />
                    ))}
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-2xl text-maroon font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
