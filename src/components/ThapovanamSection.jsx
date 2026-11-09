import { Leaf, MapPin, Phone } from 'lucide-react'
import { THAPOVANAM } from '../data/thapovanam'
import { SITE } from '../data/site'
import VideoPlayer from './VideoPlayer'
import Button from './Button'

// Home page section. On large screens: the text and the three photos on the left, the (phone-shaped)
// video on the right, so the section is balanced. On phones: text, video, photos, one under the other.
export default function ThapovanamSection() {
  const { name, place, special, photos, video } = THAPOVANAM
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 20% 0%, rgba(227,183,101,0.22) 0%, rgba(51,74,54,0) 55%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-center lg:gap-14">
          {/* Text */}
          <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-maroon-dark lg:mx-0">
              <Leaf size={30} aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">{name}</h2>
            <p className="mt-4 inline-flex items-center gap-2 text-lg text-gold-light">
              <MapPin size={20} aria-hidden="true" /> {place}
            </p>
            <div className="mx-auto mt-5 h-0.5 w-24 bg-gold lg:mx-0" />

            <p className="mt-7 inline-block rounded-full border-2 border-gold bg-maroon-dark/60 px-7 py-3 font-heading text-xl text-gold-light md:text-2xl">
              {special}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href={`tel:+91${SITE.phone}`} variant="gold">
                <Phone size={18} className="mr-2" aria-hidden="true" /> Call to know more
              </Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>

          {/* Video: on the right, spanning both rows on large screens */}
          {video && (
            <div className="mx-auto w-full max-w-xs drop-shadow-2xl lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <VideoPlayer {...video} />
            </div>
          )}

          {/* Photos: three equal squares in one row */}
          {photos.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-start-1 lg:row-start-2">
              {photos.map((p) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  style={{ objectPosition: p.position }}
                  className="gold-frame aspect-square w-full rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}