import PageHero from '../components/PageHero'
import BookingForm from '../components/BookingForm'
import { ROOM_FIELDS } from '../data/forms'

export default function RoomBooking() {
  return (
    <>
      <PageHero
        title="Room Booking"
        subtitle="Send your dates and the Madam will confirm availability."
        crumbs={[{ label: 'Divine Stay', to: '/divine-stay' }]}
      />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <BookingForm type="room" title="Room booking enquiry" fields={ROOM_FIELDS} />
        </div>
      </section>
    </>
  )
}
