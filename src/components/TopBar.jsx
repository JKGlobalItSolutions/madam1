import { Sparkles } from 'lucide-react'
import { SITE } from '../data/site'

// Gold strip above the menu on every page. The "200 YEARS" pill blinks to catch the eye.
// (Blinking stops automatically for visitors who turned on "reduce motion" on their device.)
export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-gold via-gold-light to-gold text-maroon-dark border-b border-maroon-dark/30">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-semibold sm:gap-3 sm:text-sm">
        <Sparkles size={16} className="topbar-blink shrink-0" aria-hidden="true" />
        <span className="topbar-blink rounded-full bg-maroon-dark px-3 py-0.5 font-bold tracking-wider text-gold-light">
          {SITE.yearsOfService} YEARS
        </span>
        <span>of Divine Service</span>
        <span className="hidden md:inline" aria-hidden="true">|</span>
        <span className="hidden md:inline">{SITE.name}, Tiruvannamalai</span>
        <Sparkles size={16} className="topbar-blink shrink-0" aria-hidden="true" />
      </p>
    </div>
  )
}
