import { Flower2, Music, Sparkles, Users } from 'lucide-react'
import { IMG } from './images'

// "option" must match the Programme dropdown in forms.js
export const PROGRAMMES = [
  {
    slug: 'yoga-training', title: 'Yoga Training', option: 'Yoga Training', icon: Flower2, image: IMG.hallFloor,
    summary: 'Yoga and meditation for inner calm.',
    intro: 'Yoga and meditation practice in a peaceful spiritual setting.',
    about: [
      'Yoga training at the Madalayam brings together simple postures, breathing and meditation in a calm, devotional setting.',
      'Share your name and number through the form and the Madam will tell you the current schedule and who can join.',
    ],
    points: ['Yoga and breathing practice', 'Meditation', 'Open to devotees and visitors'],
  },
  {
    slug: 'thiruvasagam-mutrothal', title: 'Thiruvasagam Mutrothal', option: 'Thiruvasagam Mutrothal', icon: Music, image: IMG.hallInner,
    summary: 'Recitation of Thiruvasagam together.',
    intro: 'A gathering of devotees to recite the Thiruvasagam in full.',
    about: [
      'Thiruvasagam is a Tamil devotional work in praise of Lord Shiva, composed by Manikkavasagar. Mutrothal means reciting it from beginning to end.',
      'Devotees who wish to take part can register their interest through the form. The Madam will share the date and timing.',
    ],
    points: ['Group recitation of Thiruvasagam', 'Open to all devotees', 'Dates shared by the Madam'],
  },
  {
    slug: 'special-poojas', title: 'Special Poojas', option: 'Special Pooja', icon: Sparkles, image: IMG.poojaLamp,
    summary: 'Traditional poojas on auspicious occasions.',
    intro: 'Poojas performed on auspicious days and on request.',
    about: [
      'The Madalayam conducts poojas on important days of the Hindu calendar. Devotees may also enquire about a pooja for a family occasion.',
      'Use the form to tell us which pooja you have in mind and your preferred date.',
    ],
    points: ['Poojas on auspicious days', 'Enquiry for family occasions', 'Confirmation by the Madam'],
  },
  {
    slug: 'spiritual-gatherings', title: 'Spiritual Gatherings', option: 'Spiritual Gathering', icon: Users,
    summary: 'Satsangs and community devotional meetings.',
    intro: 'Devotees meeting together for satsang, bhajan and spiritual discussion.',
    about: [
      'Spiritual gatherings give devotees a place to come together, sing, listen and learn from one another.',
      'Send an enquiry to join an upcoming gathering or to ask about hosting one.',
    ],
    points: ['Satsang and devotional singing', 'Community meetings', 'Enquire to join or host'],
  },
]
