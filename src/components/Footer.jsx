import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react'
import { SITE } from '../data/site'

const socials = [
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'youtube', label: 'YouTube', icon: Youtube },
  { key: 'facebook', label: 'Facebook', icon: Facebook },
]

const quick = [
  { label: 'About Us', to: '/about' },
  { label: 'Annadhanam', to: '/annadhanam' },
  { label: 'Go Mata Seva Nilayam', to: '/go-mata-seva-nilayam' },
  { label: 'Jeeva Samadhi', to: '/jeeva-samadhi' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]
const services = [
  { label: 'Room Booking', to: '/room-booking' },
  { label: 'Hall Booking', to: '/hall-booking' },
  { label: 'Yoga Training', to: '/yoga-training' },
  { label: 'Thiruvasagam Mutrothal', to: '/thiruvasagam-mutrothal' },
]

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream/90 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={SITE.logo} alt="" className="w-16 h-16 rounded-full object-cover" />
            <div className="leading-tight">
              <p className="font-heading text-cream">{SITE.name}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/75">
            A place for devotion, daily Annadhanam, spiritual learning and a peaceful stay for devotees.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ key, label, icon: Icon }) => {
              const url = SITE.social[key]
              // No link yet: the icon shows but does nothing until a URL is added in site.js
              const linkProps = url
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { onClick: (e) => e.preventDefault() }
              return (
                <a
                  key={key}
                  href={url || '#'}
                  aria-label={label}
                  {...linkProps}
                  className="w-10 h-10 rounded-full border border-gold/60 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-gold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quick.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0 mt-0.5" />{SITE.address}</li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0 mt-0.5" />
              <a href={`tel:+91${SITE.phone}`} className="hover:text-gold-light">{SITE.phone}</a>
              <span className="text-cream/40"> | </span>
              <a href={`tel:+91${SITE.phone2}`} className="hover:text-gold-light">{SITE.phone2}</a>
            </li>
            {SITE.email && (
              <li className="flex gap-3">
                <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-light break-all">{SITE.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  )
}
