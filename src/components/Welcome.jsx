import { useEffect, useRef, useState } from 'react'
import { IMG } from '../data/images'
import { SITE } from '../data/site'

// Shown right after the hero: logo on the left, welcome text in the middle, large Madam photo on the right.
// Everything fades in when the section scrolls into view.
export default function Welcome() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // "from" is where the item starts before it appears
  const reveal = (from, delay) =>
    `transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 ${delay} ${
      visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${from}`
    }`

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-maroon-dark text-cream py-16 md:py-20 border-b-4 border-gold"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 14% 50%, rgba(227,183,101,0.35) 0%, rgba(197,138,50,0.1) 30%, rgba(74,23,17,0) 55%), radial-gradient(circle at 86% 50%, rgba(227,183,101,0.16) 0%, rgba(74,23,17,0) 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[13rem_1fr_28rem] gap-10 lg:gap-12 items-center justify-items-center text-center">
        {/* Left: logo */}
        <div
          className={`w-44 h-44 lg:w-52 lg:h-52 rounded-full p-1.5 ${reveal('scale-90 translate-y-6 lg:-translate-x-8 lg:translate-y-0', 'delay-0')}`}
          style={{
            background: 'linear-gradient(180deg, #e3b765, #c58a32)',
            boxShadow: '0 0 70px rgba(227,183,101,0.6), 0 0 22px rgba(227,183,101,0.5)',
          }}
        >
          <img src={IMG.logo} alt={`${SITE.name} emblem`} className="w-full h-full rounded-full object-cover" />
        </div>

        {/* Middle: welcome text */}
        <div className={reveal('translate-y-6', 'delay-300')}>
          <h2 className="font-semibold">
            <span className="block font-body text-lg md:text-xl font-medium text-gold-light">Welcome to</span>
            <span className="block mt-1 text-3xl md:text-4xl xl:text-5xl leading-tight">{SITE.name}</span>
          </h2>
          <div className="h-0.5 w-24 bg-gold mx-auto mt-5" />
          <p className="mt-5 text-cream/85">{SITE.tagline}</p>
        </div>

        {/* Right: large Madam photo */}
        <figure className={`w-full max-w-md lg:max-w-none ${reveal('scale-95 translate-y-6 lg:translate-x-8 lg:translate-y-0', 'delay-500')}`}>
          <img
            src={IMG.madamArch}
            alt="Entrance arch of Sri Pavalakundru Madalayam with the shrine and the Arunachala hill behind"
            className="gold-frame rounded-lg w-full shadow-2xl"
          />
        </figure>
      </div>
    </section>
  )
}
