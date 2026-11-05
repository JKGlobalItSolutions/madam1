import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import useBookingForm from '../hooks/useBookingForm'

const inputClass =
  'w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 focus:border-gold'

export default function BookingForm({ type, title, fields, initialValues, submitLabel = 'Send enquiry' }) {
  const { values, errors, status, errorMessage, handleChange, handleSubmit, reset } = useBookingForm({
    type, title, fields, initialValues,
  })
  const today = new Date().toISOString().split('T')[0]

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-forest/40 bg-white p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-forest mb-3" size={44} />
        <h3 className="text-2xl text-forest font-semibold">Enquiry sent</h3>
        <p className="mt-3 text-stone-700">
          Thank you. The Madam will contact you on the mobile number you gave. Availability is
          confirmed only after the Madam replies.
        </p>
        <button onClick={reset} className="mt-6 text-sm font-semibold text-royal underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-lg border border-gold/50 p-6 md:p-8">
      <h3 className="text-2xl text-maroon font-semibold mb-6">{title}</h3>

      <div className="grid md:grid-cols-2 gap-5">
        {fields.map((f) => {
          const id = `${type}-${f.name}`
          const err = errors[f.name]
          const common = {
            id, name: f.name, value: values[f.name], onChange: handleChange,
            className: `${inputClass} ${err ? 'border-red-600' : ''}`,
            'aria-invalid': !!err, 'aria-describedby': err ? `${id}-err` : undefined,
          }
          return (
            <div key={f.name} className={f.full || f.type === 'textarea' ? 'md:col-span-2' : ''}>
              <label htmlFor={id} className="block text-sm font-medium text-stone-800 mb-1.5">
                {f.label}{f.required && <span className="text-red-700"> *</span>}
              </label>
              {f.type === 'textarea' ? (
                <textarea {...common} rows={4} placeholder={f.placeholder} />
              ) : f.type === 'select' ? (
                <select {...common}>
                  <option value="">Select</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  {...common}
                  type={f.type}
                  placeholder={f.placeholder}
                  min={f.type === 'date' ? (f.after && values[f.after]) || today : f.type === 'number' ? f.min ?? 1 : undefined}
                  inputMode={f.type === 'tel' ? 'numeric' : undefined}
                />
              )}
              {err && <p id={`${id}-err`} className="mt-1 text-xs text-red-700">{err}</p>}
            </div>
          )
        })}
      </div>

      {/* Hidden spam trap: real visitors never see or fill this */}
      <div className="hidden" aria-hidden="true">
        <label>Website<input name="website" value={values.website} onChange={handleChange} tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex gap-3 rounded-md bg-red-50 border border-red-300 p-4 text-sm text-red-800" role="alert">
          <AlertCircle size={20} className="shrink-0" /> {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex items-center gap-2 bg-maroon text-cream font-semibold px-7 py-3 rounded-md hover:bg-maroon-dark disabled:opacity-60 transition-colors"
      >
        {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
        {status === 'sending' ? 'Sending' : submitLabel}
      </button>
    </form>
  )
}
