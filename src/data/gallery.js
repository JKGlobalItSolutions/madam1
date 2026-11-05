import { IMG } from './images'

// Five separate galleries. To add a photo: import it in images.js, then add it to "items" below.
// "cover" is the picture shown on the gallery card; "coverPosition" keeps faces in view.
export const GALLERIES = [
  {
    slug: 'maha-tiruchi-swamigal',
    navLabel: 'Maha Tiruchi Swamigal',
    heading: 'Maha Tiruchi Swamigal Photo Gallery',
    description: 'Photographs of Sri Sri Sri Tiruchi Mahaswamigal.',
    cover: IMG.tiruchiPortrait,
    coverPosition: 'center 25%',
    items: [
      { src: IMG.tiruchiPortrait, alt: 'Portrait of Sri Sri Sri Tiruchi Mahaswamigal' },
      { src: IMG.tiruchiGreen, alt: 'Portrait of Sri Sri Sri Thiruchi Swamigal' },
      { src: IMG.tiruchiOldPhoto, alt: 'An old photograph of Maha Swamigal seated in a chair' },
      { src: IMG.mahaSwamigalAshram, alt: 'Maha Swamigal walking in the Ashram grounds' },
      { src: IMG.swamigalWalking, alt: 'The two swamigal walking together' },
    ],
  },
  {
    slug: 'jayendra-puri-swamigal',
    navLabel: 'Jayendra Puri Swamigal',
    heading: 'Jayendra Puri Swamigal Photo Gallery',
    description: 'Photographs of Sri Jayendra Puri Mahaswamiji, Peethadhipathi of Sri Kailash Ashrama Mahasamsthana.',
    cover: IMG.jayendraPortrait,
    coverPosition: 'center 22%',
    items: [
      { src: IMG.jayendraPortrait, alt: 'Portrait of Sri Jayendra Puri Mahaswamiji' },
      { src: IMG.jayendraFrameGold, alt: 'Framed portrait of Sri Sri Sri Jayendra Puri Maha Swamigal, Peetadhipathi' },
      { src: IMG.jayendraFrameGarland, alt: 'Portrait of Sri Sri Sri Jayendra Puri Maha Swamiji with garlands' },
      { src: IMG.jayendraSeated, alt: 'Swamiji seated in an orange robe' },
      { src: IMG.thiruvasagamReading, alt: 'Swamiji reading the Thiruvasagam' },
      { src: IMG.swamigalWalking, alt: 'The two swamigal walking together' },
    ],
  },
  {
    slug: 'maheshwara-pooja',
    navLabel: 'Maheshwara Pooja',
    heading: 'Maheshwara Pooja Gallery',
    description: 'Moments from the Maheshwara Pooja and Annadhanam.',
    cover: IMG.maheshwaraAnnadhanam,
    coverPosition: 'center',
    items: [
      { src: IMG.maheshwaraAnnadhanam, alt: 'Devotees being served Annadhanam on banana leaves' },
      { src: IMG.padapooja, alt: 'Padapooja with lotus flowers and golden padukas' },
      { src: IMG.annadhanamHall, alt: 'Annadhanam hall' },
      { src: IMG.santasAnnadhanam1, alt: 'Santas seated with banana leaf meals in the Annadhanam hall' },
      { src: IMG.santasAnnadhanam2, alt: 'Santas and devotees during Annadhanam' },
      { src: IMG.swamijiMealPrayer, alt: 'Swamiji offering prayer before the meal' },
    ],
  },
  {
    slug: 'ambal-pooja',
    navLabel: 'Ambal Pooja',
    heading: 'Ambal Pooja Gallery',
    description: 'Moments from the Ambal Pooja.',
    cover: IMG.deviMandapam,
    coverPosition: 'center',
    items: [
      { src: IMG.deviMandapam, alt: 'Devi Mandapam prayer hall' },
    ],
  },
  {
    slug: 'pavalakundru-madalayam',
    navLabel: 'Pavalakundru Madalayam',
    heading: 'Pavalakundru Madalayam Gallery',
    description: 'Views of the Madalayam and its surroundings in Tiruvannamalai.',
    cover: IMG.front,
    coverPosition: 'center',
    items: [
      { src: IMG.madamArch, alt: 'Entrance arch of the Madalayam with the shrine and Arunachala hill behind' },
      { src: IMG.front, alt: 'Front view of the Madalayam' },
      { src: IMG.entranceArch, alt: 'Entrance arch of the Madalayam' },
      { src: IMG.shrine, alt: 'Shrine hall inside the Madalayam' },
      { src: IMG.nightCollage, alt: 'Arunachala hill and the temple at night with the swamigal' },
      { src: IMG.abhishekam, alt: 'Abhishekam of a white marble deity' },
      { src: IMG.yogaHall, alt: 'Yoga and meditation hall' },
      { src: IMG.poojaLamp, alt: 'Pooja lamp during aarti' },
    ],
  },
]
