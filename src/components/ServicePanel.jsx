import ServiceList from './ServiceList'
import ClickHint from './ClickHint'

// Highlighted, centred block that holds the clickable list of nithya and periodical services.
export default function ServicePanel({ showHeading = true }) {
  return (
    <div
      className="rounded-xl border-2 border-gold p-6 md:p-10 text-cream shadow-xl"
      style={{ background: 'linear-gradient(160deg, #6d251b 0%, #4a1711 100%)' }}
    >
      {showHeading && (
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gold-light">Our Nithya and Periodical Services</h2>
      )}
      <div className={`flex justify-center ${showHeading ? 'mt-4' : ''}`}>
        <ClickHint>Click any service to know more</ClickHint>
      </div>
      <ServiceList className="mt-6" />
    </div>
  )
}
