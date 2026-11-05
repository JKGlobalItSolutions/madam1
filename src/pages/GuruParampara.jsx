import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { GURUS } from '../data/gurus'

// TODO (client): confirm each date and the connection with the Madalayam.
// Cross-check with the official Sri Kailash Ashrama biography before launch.
export default function GuruParampara() {
  return (
    <>
      <PageHero
        title="Spiritual Heritage"
        subtitle="The swamigal of Sri Kailash Ashrama Mahasamsthana and their divine legacy."
      />

      {GURUS.map((g, i) => (
        <section key={g.slug} className={`py-20 ${i % 2 ? 'bg-white' : ''}`}>
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <img
              src={g.image}
              alt={g.name}
              className="gold-frame rounded-lg w-full max-w-xs mx-auto aspect-[4/5] object-cover object-top bg-maroon-dark"
            />
            <div>
              <h2 className="text-3xl text-maroon font-semibold">{g.name}</h2>
              <p className="mt-1 text-royal font-medium">{g.role}</p>
              <div className="h-0.5 w-20 bg-gold mt-4" />
              <p className="mt-6 text-stone-700 leading-relaxed">{g.summary}</p>
              <ul className="mt-6 space-y-3 text-stone-700 list-disc pl-5">
                {g.facts.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Button to={g.biographyPath} variant="maroon" className="mt-8">Read Full Biography</Button>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 text-center">
        <SectionTitle title="Continuing the Legacy" text="The Peethadhipathi continues the spiritual work and traditions of the Ashrama that his Guru established." />
        <Button to="/about" variant="maroon">Back to About Us</Button>
      </section>
    </>
  )
}
