import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/site'

export default function WhatsAppButton() {
  const msg = encodeURIComponent(`Namaste, I would like to enquire about ${SITE.name}.`)
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={28} />
    </a>
  )
}
