import Button from '../components/Button'

export default function PlaceholderPage({ title }) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-28 text-center">
      <h1 className="text-4xl font-semibold text-maroon">{title}</h1>
      <div className="h-0.5 w-20 bg-gold mx-auto mt-4" />
      <p className="mt-6 text-stone-700">This page is being prepared and will be available soon.</p>
      <Button to="/" variant="maroon" className="mt-8">Back to Home</Button>
    </section>
  )
}
