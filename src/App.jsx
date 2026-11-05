import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import GuruParampara from './pages/GuruParampara'
import Annadhanam from './pages/Annadhanam'
import DivineStay from './pages/DivineStay'
import RoomBooking from './pages/RoomBooking'
import HallBooking from './pages/HallBooking'
import SpiritualActivities from './pages/SpiritualActivities'
import ProgrammeBooking from './pages/ProgrammeBooking'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import GalleryDetail from './pages/GalleryDetail'
import Contact from './pages/Contact'
import GoSeva from './pages/GoSeva'
import Biography from './pages/Biography'
import JeevaSamadhi from './pages/JeevaSamadhi'
import PlaceholderPage from './pages/PlaceholderPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guru-parampara" element={<GuruParampara />} />
          <Route path="/biography/:slug" element={<Biography />} />
          <Route path="/annadhanam" element={<Annadhanam />} />
          <Route path="/divine-stay" element={<DivineStay />} />
          <Route path="/room-booking" element={<RoomBooking />} />
          <Route path="/hall-booking" element={<HallBooking />} />
          <Route path="/spiritual-activities" element={<SpiritualActivities />} />
          <Route path="/yoga-training" element={<ProgrammeBooking slug="yoga-training" />} />
          <Route path="/thiruvasagam-mutrothal" element={<ProgrammeBooking slug="thiruvasagam-mutrothal" />} />
          <Route path="/special-poojas" element={<ProgrammeBooking slug="special-poojas" />} />
          <Route path="/spiritual-gatherings" element={<ProgrammeBooking slug="spiritual-gatherings" />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<GalleryDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/go-mata-seva-nilayam" element={<GoSeva />} />
          <Route path="/jeeva-samadhi" element={<JeevaSamadhi />} />
          <Route path="*" element={<PlaceholderPage title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
