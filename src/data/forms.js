// Field definitions for every enquiry form. "name" becomes the EmailJS variable.
const PROGRAMME_OPTIONS = [
  'Yoga Training', 'Thiruvasagam Mutrothal', 'Meditation',
  'Special Pooja', 'Spiritual Gathering', 'Other',
]

export const ROOM_FIELDS = [
  { name: 'name', label: 'Devotee name', type: 'text', required: true },
  { name: 'phone', label: 'Mobile number', type: 'tel', required: true, placeholder: '10-digit number' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'rooms', label: 'Number of rooms', type: 'number', required: true, min: 1 },
  { name: 'checkIn', label: 'Check-in date', type: 'date', required: true },
  { name: 'checkOut', label: 'Check-out date', type: 'date', required: true, after: 'checkIn' },
  { name: 'guests', label: 'Number of guests', type: 'number', required: true, min: 1 },
  { name: 'message', label: 'Special requests', type: 'textarea' },
]

export const HALL_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'phone', label: 'Mobile number', type: 'tel', required: true, placeholder: '10-digit number' },
  { name: 'email', label: 'Email', type: 'email' },
  {
    name: 'eventType', label: 'Event type', type: 'select', required: true,
    options: ['Spiritual function', 'Pooja or homam', 'Family function', 'Community gathering', 'Other'],
  },
  { name: 'bookingDate', label: 'Booking date', type: 'date', required: true },
  { name: 'participants', label: 'Number of participants', type: 'number', required: true, min: 1 },
  { name: 'startTime', label: 'Start time', type: 'time', required: true },
  { name: 'endTime', label: 'End time', type: 'time', required: true, after: 'startTime' },
  { name: 'message', label: 'Requirements', type: 'textarea' },
]

export const PROGRAMME_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'phone', label: 'Mobile number', type: 'tel', required: true, placeholder: '10-digit number' },
  { name: 'programme', label: 'Programme', type: 'select', required: true, options: PROGRAMME_OPTIONS },
  { name: 'preferredDate', label: 'Preferred date', type: 'date' },
  { name: 'participants', label: 'Number of participants', type: 'number', required: true, min: 1 },
  { name: 'message', label: 'Message', type: 'textarea' },
]

export const ANNADHANAM_FIELDS = [
  { name: 'name', label: 'Donor name', type: 'text', required: true },
  { name: 'phone', label: 'Mobile number', type: 'tel', required: true, placeholder: '10-digit number' },
  { name: 'email', label: 'Email', type: 'email' },
  {
    name: 'sponsorshipType', label: 'Sponsorship type', type: 'select', required: true,
    options: ['Sponsor one day Annadhanam', 'Monthly sponsorship', 'General contribution'],
  },
  { name: 'preferredDate', label: 'Preferred date', type: 'date' },
  { name: 'message', label: 'Message', type: 'textarea' },
]

export const CONTACT_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'phone', label: 'Mobile number', type: 'tel', required: true, placeholder: '10-digit number' },
  { name: 'email', label: 'Email', type: 'email', full: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]
