import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import BookingForm from '../components/BookingForm'
import { CONTACT_FIELDS } from '../data/forms'
import { IMG } from '../data/images'

export default function GoSeva() {
  // TODO (client): add the number of cows, daily routine and ways to contribute once confirmed.
  return (
    <>
      <PageHero title="Go Mata Seva Nilayam" subtitle="Shelter and care for cows, as a form of devotional service." />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Serving the Cow" />
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Serving the cow is one of the oldest forms of devotional service. The Madalayam carries this
              tradition forward through its Gosala, where cows are given shelter, fodder and clean water.
            </p>
            <p>
              Devotees who wish to support the care of the cows are welcome to contact the Madam. Details of
              how to contribute are shared by the Madam directly.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <img src={IMG.gosala} alt="Cows resting in the Gosala shed" className="gold-frame rounded-lg w-full" />
            <img src={IMG.cowShed} alt="A cow at the Madalayam with the hills behind" className="gold-frame rounded-lg w-full" />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <BookingForm type="contact" title="Go Mata Seva enquiry" fields={CONTACT_FIELDS} submitLabel="Send enquiry" />
        </div>
      </section>
    </>
  )
}
