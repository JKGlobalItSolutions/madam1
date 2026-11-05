import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import BookingForm from '../components/BookingForm'
import { CONTACT_FIELDS } from '../data/forms'
import { SITE } from '../data/site'
import { IMG } from '../data/images'
import CopyButton from '../components/CopyButton'

export default function Contact() {
  const mapSrc = SITE.mapUrl
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.name + ' ' + SITE.address)}`
  return (
    <>
      <PageHero title="Contact Us" subtitle="Call, message us on WhatsApp or send an enquiry." />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl text-maroon font-semibold">Visit or reach us</h2>
            <div className="h-0.5 w-20 bg-gold mt-4" />
            <ul className="mt-8 space-y-5 text-stone-800">
              <li className="flex gap-4"><MapPin className="text-gold shrink-0" /><span>{SITE.name}<br />{SITE.address}</span></li>
              <li className="flex gap-4">
                <Phone className="text-gold shrink-0" />
                <span>
                  <a href={`tel:+91${SITE.phone}`} className="hover:text-maroon">{SITE.phone}</a>
                  <span className="mx-2 text-stone-400">|</span>
                  <a href={`tel:+91${SITE.phone2}`} className="hover:text-maroon">{SITE.phone2}</a>
                </span>
              </li>
              {SITE.email && (
                <li className="flex gap-4"><Mail className="text-gold shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-maroon break-all">{SITE.email}</a></li>
              )}
              <li className="flex gap-4">
                <MessageCircle className="text-gold shrink-0" />
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">Message on WhatsApp</a>
              </li>
            </ul>

            <div className="mt-8 rounded-lg overflow-hidden border border-gold/50 bg-white">
              {mapSrc ? (
                <iframe title="Madalayam location" src={mapSrc} className="w-full h-72 border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ) : (
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex h-40 items-center justify-center text-royal font-semibold underline underline-offset-4">
                  Open location in Google Maps
                </a>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <figure>
              <img
                src={IMG.contactOffice}
                alt="Madam office desk where enquiries are received"
                className="gold-frame w-full rounded-lg aspect-[16/10] object-cover object-top"
              />
              {SITE.contactPerson.name && (
                <figcaption className="mt-4 text-sm text-stone-700">
                  <span className="font-semibold text-maroon">{SITE.contactPerson.name}</span>
                  {SITE.contactPerson.role && `, ${SITE.contactPerson.role}`}
                </figcaption>
              )}
            </figure>
            <BookingForm type="contact" title="Send us a message" fields={CONTACT_FIELDS} submitLabel="Send message" />
          </div>
        </div>
      </section>

      <section id="bank" className="pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-xl border-2 border-gold bg-white p-6 md:p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-maroon">Bank Details for Contributions</h2>
            <div className="h-0.5 w-20 bg-gold mt-3" />
            <p className="mt-4 text-sm text-stone-700">For Annadhanam sponsorship and other contributions to the Madalayam.</p>
            <dl className="mt-6 divide-y divide-gold/30">
              {[
                { k: 'Bank', v: SITE.bank.bankName },
                { k: 'Account name', v: SITE.bank.accountName },
                { k: 'Branch', v: SITE.bank.branch },
                { k: 'Account number', v: SITE.bank.accountNumber.replace(/(.{4})/g, '$1 ').trim(), copy: SITE.bank.accountNumber },
                { k: 'IFSC code', v: SITE.bank.ifsc, copy: SITE.bank.ifsc },
              ].map((row) => (
                <div key={row.k} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-stone-600 w-36">{row.k}</dt>
                  <dd className="flex-1 font-medium text-stone-900 break-words">{row.v}</dd>
                  {row.copy && <CopyButton value={row.copy} label={row.k} />}
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-stone-700">
              After contributing, please call {SITE.phone} or {SITE.phone2} so the Madam can note your contribution.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
