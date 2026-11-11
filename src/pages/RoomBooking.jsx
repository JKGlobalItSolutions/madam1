import PageHero from '../components/PageHero'
import BookingForm from '../components/BookingForm'
import { ROOM_FIELDS } from '../data/forms'
import { IMG } from '../data/images'

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
          {/* Same two room photos as the Rooms card on the Home page */}
          <div className="gold-frame grid grid-cols-5 gap-1 aspect-[2/1] overflow-hidden rounded-lg bg-maroon-dark mb-10">
            <img
              src={IMG.roomCard}
              alt="Carved wooden doorway into a room"
              className="col-span-3 h-full w-full object-cover"
            />
            <img
              src={IMG.roomDoor}
              alt="Wooden double door in the corridor"
              className="col-span-2 h-full w-full object-cover"
            />
          </div>
          <BookingForm type="room" title="Room booking enquiry" fields={ROOM_FIELDS} />
        </div>
      </section>
    </>
  )
}
