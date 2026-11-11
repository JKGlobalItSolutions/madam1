import { Link } from 'react-router-dom'
import { IMG } from '../data/images'
import { GURUS } from '../data/gurus'

// The photo is a 16 : 9 picture (1600 x 900) so both swamigal stay fully seated and the
// image fills the whole width with no side gaps. The heading is centred between them and each
// swamiji's name sits under him (left = first in GURUS, right = second). Each name opens that biography.
// On phones and tablets (below 1024px) the photo is on top, then the text and the two names.
function NamePlate({ guru }) {
  return (
    <Link
      to={guru.biographyPath}
      className="group block rounded-md border-2 border-gold bg-maroon-dark/75 px-4 py-2 text-center transition-colors hover:bg-gold"
    >
      <span className="block font-heading text-gold-light group-hover:text-maroon-dark text-base leading-tight lg:[font-size:clamp(0.85rem,1.2vw,1.15rem)]">
        {guru.shortName}
      </span>
      <span className="block text-xs text-cream/80 group-hover:text-maroon-dark">View biography</span>
    </Link>
  )
}

export default function Hero() {
  return (
    <section className="bg-maroon-dark border-b-4 border-gold">
      <div
        className="relative lg:h-(--hero-h) lg:min-h-[440px]"
        style={{ '--hero-h': 'min(56.25vw, calc(100vh - 7.5rem))' }}
      >
        <img
          src={IMG.heroGurus}
          alt="Sri Tiruchi Mahaswamigal and Sri Jayendra Puri Mahaswamiji seated in front of the Arunachala hill"
          className="w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-[center_45%]"
        />
        {/* Soft dark centre so the heading stays readable over the hill */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 19% 56% at 50% 46%, rgba(40,15,10,0.72) 0%, rgba(40,15,10,0.45) 50%, rgba(40,15,10,0) 100%)' }}
          aria-hidden="true"
        />

        {/* Large screens: one name under each swamiji */}
        {GURUS.map((g, i) => (
          <div
            key={g.slug}
            className={`hidden lg:block absolute z-10 bottom-[5%] -translate-x-1/2 w-[min(24vw,21rem)] ${i === 0 ? 'left-[24%]' : 'left-[77%]'}`}
          >
            <NamePlate guru={g} />
          </div>
        ))}

        <div className="relative lg:absolute lg:inset-0 lg:pointer-events-none flex items-center justify-center px-4 py-12 lg:p-0 text-center">
          <div className="max-w-md lg:max-w-none lg:w-[min(30vw,32rem)] lg:pointer-events-auto">
            <h1 className="hero-rise font-heading font-semibold text-cream leading-snug text-2xl sm:text-3xl lg:[font-size:clamp(1.15rem,2.3vw,2.5rem)] lg:[text-shadow:0_2px_14px_rgba(0,0,0,0.75)]">
              <span className="block">DIVINE ENERGIA</span>
              <span className="block">DIVINE DYNAMIS</span>
              <span className="block">DIVINE EXOUSIA</span>
              <span className="block">DIVINE KARATOS</span>
            </h1>

            {/* Phones and tablets: the two names sit below the text */}
            <div className="lg:hidden mt-6 grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {GURUS.map((g) => <NamePlate key={g.slug} guru={g} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}