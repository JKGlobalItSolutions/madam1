// Central place for details that must be confirmed with the client.
// Change here once and it updates across the whole website.
import { IMG } from './images'
import { GALLERIES } from './gallery'

export const SITE = {
  name: 'Sri Pavalakundru Madalayam', // spelling as on logo: confirm with client
  tagline: 'Tiruvannamalai Divya Kshetram, Tamil Nadu',
  // Blinking "200 Years" strip at the top of every page (TopBar.jsx).
  // TODO (client): an earlier note said "more than 15 decades" (150 years). Confirm 200 before launch.
  yearsOfService: 200,
  phone: '6379280613',
  phone2: '9443733320',
  whatsapp: '916379280613', // country code + number, no + sign
  email: '', // TODO: client email
  address: 'Tiruvannamalai, Tamil Nadu', // TODO: exact address
  mapUrl: '', // TODO: Google Maps embed URL
  // Bank details for contributions (supplied by the client). Verify against the passbook before launch.
  bank: {
    bankName: 'Karur Vysya Bank',
    accountName: 'President Mr. Jayendra Puri Swami',
    branch: 'Sannathi Street, Tiruvannamalai, Tamil Nadu',
    accountNumber: '1198155000067212',
    // The note said "kvpl0001198". Karur Vysya Bank codes start with KVBL, so KVBL is used here: please confirm.
    ifsc: 'KVBL0001198',
  },
  // TODO: name and role of the person in the contact photo (shown under the photo when filled)
  contactPerson: { name: 'Ravi', role: 'Head, Pavalakundru Madalayam' },
  // TODO: paste the full page links here when ready, e.g. 'https://www.instagram.com/yourpage'
  social: { instagram: '', youtube: '', facebook: '' },
  logo: IMG.logo,
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Annadhanam', to: '/annadhanam' },
  {
    label: 'Divine Stay',
    to: '/divine-stay',
    children: [
      { label: 'Room Booking', to: '/room-booking' },
      { label: 'Hall Booking', to: '/hall-booking' },
    ],
  },
  {
    label: 'Spiritual Activities',
    to: '/spiritual-activities',
    children: [
      { label: 'Yoga Training', to: '/yoga-training' },
      { label: 'Thiruvasagam Mutrothal', to: '/thiruvasagam-mutrothal' },
      { label: 'Special Poojas', to: '/special-poojas' },
      { label: 'Spiritual Gatherings', to: '/spiritual-gatherings' },
    ],
  },
  {
    label: 'Gallery',
    to: '/gallery',
    children: GALLERIES.map((g) => ({ label: g.navLabel, to: `/gallery/${g.slug}` })),
  },
  { label: 'Contact Us', to: '/contact' },
]
