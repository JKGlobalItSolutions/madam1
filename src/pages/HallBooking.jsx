import PageHero from '../components/PageHero'
import BookingForm from '../components/BookingForm'
import { HALL_FIELDS } from '../data/forms'

export default function HallBooking() {
  return (
    <>
      <PageHero
        title="Hall Booking"
        subtitle="Tell us about your event and the Madam will get back to you."
        crumbs={[{ label: 'Divine Stay', to: '/divine-stay' }]}
      />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <BookingForm type="hall" title="Hall booking enquiry" fields={HALL_FIELDS} />
        </div>
      </section>
    </>
  )
}
