// Content for the Thapovanam section on the Home page.
// TODO (client): confirm the spelling of the name and the place.
//
// PHOTOS: just put the photos in the folder  src/assets/images/thapovanam/
//         (any file names, .jpg .jpeg .png .webp). They appear on their own, in file-name order.
//
// VIDEO:  fill ONE of these two lines (and keep the other out):
//           video: { title: 'Sri Rajarajeshwari Thapovanam', youtube: 'https://youtu.be/AbC123xyz09' },
//           video: { title: 'Sri Rajarajeshwari Thapovanam', src: '/videos/thapovanam.mp4' },
//         (for src, put the .mp4 in the public/videos folder, ideally under 20 MB)
const files = import.meta.glob('../assets/images/thapovanam/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

// Description of each photo, in file-name order (used by screen readers).
const PHOTO_ALTS = [
  'An orange-robed swami speaking with a villager among the coconut trees at Thapovanam',
  'A swami seated on the grass, talking with a villager',
  'Banner at Kaveripattinam for MY Bharat Kendra Krishnagiri Seva Pakhwada 2026',
]

// Which part of each photo stays visible in its square frame ("x% y%"), in file-name order.
// Raise or lower the numbers if a face is cut: 0% = left or top edge, 100% = right or bottom edge.
const PHOTO_POSITIONS = ['38% 50%', '50% 55%', '50% 0%']

export const THAPOVANAM = {
  name: 'Sri Rajarajeshwari Thapovanam',
  place: 'Kaveripattinam',
  special: 'Ideal zone for Thapas people',
  photos: Object.keys(files)
    .sort()
    .map((k, i) => ({ src: files[k], alt: PHOTO_ALTS[i] || `Sri Rajarajeshwari Thapovanam, photo ${i + 1}`, position: PHOTO_POSITIONS[i] || 'center' })),
  video: {
    title: 'Sri Rajarajeshwari Thapovanam, Kaveripattinam',
    src: '/videos/thapovanam.mp4',
    poster: '/videos/thapovanam-poster.jpg',
    portrait: true, // the video is tall (phone shape)
  },
}