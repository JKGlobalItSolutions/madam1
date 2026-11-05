import { useState } from 'react'
import { sendEnquiry } from '../services/emailService'

const PHONE = /^(\+91|91|0)?[6-9]\d{9}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const todayStr = () => new Date().toISOString().split('T')[0]

function validate(fields, values) {
  const errors = {}
  const today = todayStr()
  for (const f of fields) {
    const v = String(values[f.name] ?? '').trim()
    if (!v) {
      if (f.required) errors[f.name] = `${f.label} is required.`
      continue
    }
    if (f.type === 'tel' && !PHONE.test(v.replace(/[\s-]/g, ''))) {
      errors[f.name] = 'Enter a valid 10-digit mobile number.'
    } else if (f.type === 'email' && !EMAIL.test(v)) {
      errors[f.name] = 'Enter a valid email address.'
    } else if (f.type === 'number' && Number(v) < (f.min ?? 1)) {
      errors[f.name] = `${f.label} must be at least ${f.min ?? 1}.`
    } else if (f.type === 'date') {
      const other = f.after ? fields.find((x) => x.name === f.after) : null
      if (v < today) errors[f.name] = 'Choose today or a later date.'
      else if (other && values[f.after] && v <= values[f.after])
        errors[f.name] = `${f.label} must be after ${other.label}.`
    } else if (f.type === 'time' && f.after && values[f.after] && v <= values[f.after]) {
      const other = fields.find((x) => x.name === f.after)
      errors[f.name] = `${f.label} must be after ${other.label}.`
    }
  }
  return errors
}

export default function useBookingForm({ type, title, fields, initialValues = {} }) {
  const blank = Object.fromEntries(fields.map((f) => [f.name, initialValues[f.name] ?? '']))
  const [values, setValues] = useState({ ...blank, website: '' }) // "website" is a spam trap
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const reset = () => {
    setValues({ ...blank, website: '' })
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(fields, values)
    setErrors(found)
    if (Object.keys(found).length) return

    if (values.website) { // bots fill hidden fields; pretend success
      setStatus('success')
      return
    }

    const details = fields.map((f) => `${f.label}: ${values[f.name] || '-'}`).join('\n')
    const params = {
      ...values,
      enquiry_type: title,
      details,
      reply_to: values.email || '',
    }

    setStatus('sending')
    try {
      await sendEnquiry(type, params)
      setStatus('success')
    } catch (err) {
      setErrorMessage(
        err.message === 'NOT_CONFIGURED'
          ? 'Online enquiry is not available right now. Please call or message us on WhatsApp.'
          : 'We could not send your enquiry. Please try again or call us.'
      )
      setStatus('error')
    }
  }

  return { values, errors, status, errorMessage, handleChange, handleSubmit, reset }
}
