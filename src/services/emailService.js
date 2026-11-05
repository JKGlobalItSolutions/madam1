import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const TEMPLATES = {
  room: import.meta.env.VITE_EMAILJS_ROOM_TEMPLATE,
  hall: import.meta.env.VITE_EMAILJS_HALL_TEMPLATE,
  spiritual: import.meta.env.VITE_EMAILJS_SPIRITUAL_TEMPLATE,
  annadhanam: import.meta.env.VITE_EMAILJS_ANNADHANAM_TEMPLATE,
  contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
}

export async function sendEnquiry(type, params) {
  const templateId = TEMPLATES[type]
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new Error('NOT_CONFIGURED')
  }
  return emailjs.send(SERVICE_ID, templateId, params, { publicKey: PUBLIC_KEY })
}
