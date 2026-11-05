import { IMG } from './images'

// Details for the two swamigal shown on the Home page, the hero and the biography pages.
// TODO (client): confirm wording, dates and the connection with the Madalayam before launch.
export const GURUS = [
  {
    slug: 'maha-tiruchi-swamigal',
    biographyPath: '/biography/maha-tiruchi-swamigal',
    galleryPath: '/gallery/maha-tiruchi-swamigal',
    name: 'Sri Sri Sri Tiruchi Mahaswamigal',
    shortName: 'Maha Tiruchi Swamigal',
    role: 'Founder, Sri Kailash Ashrama Mahasamsthana',
    image: IMG.tiruchi,
    summary:
      'A revered spiritual master who dedicated his life to the preservation of Vedic traditions, spiritual knowledge and Hindu cultural heritage.',
    facts: [
      'Born on 29 March 1929.',
      'Established Sri Kailash Ashrama Mahasamsthana in 1960, with its headquarters in Bengaluru.',
      'Worked for Hindu education, the building of temples and the care of sacred heritage.',
      'Attained Mahasamadhi on 14 January 2005. His Samadhi is at Kailashashram, Bengaluru.',
    ],
    timeline: [
      { when: '29 March 1929', text: 'Born at Vikramasingapuram.' },
      { when: 'Early years', text: 'Spiritual journey and austerities at Tiruchirappalli.' },
      { when: 'Guidance', text: 'Received the guidance of Sri Shivapuri Baba.' },
      { when: '1960', text: 'Established Sri Kailash Ashrama Mahasamsthana, with its headquarters in Bengaluru.' },
      { when: 'A lifetime of service', text: 'Worked for Hindu education, the building of temples and the care of sacred heritage.' },
      { when: '11 December 2003', text: 'Appointed Sri Jayendra Puri Mahaswamiji as the next Peethadhipathi.' },
      { when: '14 January 2005', text: 'Attained Mahasamadhi. His Samadhi is at Kailashashram, Bengaluru.' },
    ],
  },
  {
    slug: 'jayendra-puri-swamigal',
    biographyPath: '/biography/jayendra-puri-swamigal',
    galleryPath: '/gallery/jayendra-puri-swamigal',
    name: 'Sri Jayendra Puri Mahaswamiji',
    shortName: 'Jayendra Puri Swamigal',
    role: 'Peethadhipathi, Sri Kailash Ashrama Mahasamsthana',
    image: IMG.jayendra,
    summary:
      'The present Peethadhipathi, who continues the spiritual work and traditions of his Guru.',
    facts: [
      'Born on 20 October 1960.',
      'Met Sri Tiruchi Mahaswamigal in 1987 and accepted him as his Guru.',
      'Trained for about seven and a half years in Haridwar and North India in Sanskrit, scriptures and spiritual practice.',
      'Received Sannyasa under the guidance of his Guru.',
      'Appointed the next Peethadhipathi by Sri Tiruchi Mahaswamigal on 11 December 2003.',
      'Mission: to spread Bharatiya culture, spiritual traditions, dharma and humanity across the world.',
    ],
    timeline: [
      { when: '20 October 1960', text: 'Born.' },
      { when: '1987', text: 'Met Sri Tiruchi Mahaswamigal and accepted him as his Guru.' },
      { when: 'Years of training', text: 'Trained for about seven and a half years in Haridwar and North India in Sanskrit, scriptures and spiritual practice.' },
      { when: 'Sannyasa', text: 'Received Sannyasa under the guidance of his Guru.' },
      { when: '11 December 2003', text: 'Appointed the next Peethadhipathi by Sri Tiruchi Mahaswamigal.' },
      { when: 'Today', text: 'Peethadhipathi of Sri Kailash Ashrama Mahasamsthana, continuing his Guru\'s spiritual work. His mission is to spread Bharatiya culture, spiritual traditions, dharma and humanity across the world.' },
    ],
  },
]
