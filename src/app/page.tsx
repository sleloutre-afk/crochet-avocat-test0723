import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import Domaines from '@/components/Domaines'
import Verbatim from '@/components/Verbatim'
import Honoraires from '@/components/Honoraires'
import Ressources from '@/components/Ressources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Domaines />
      <Verbatim />
      <Honoraires />
      <Ressources />
      <Contact />
      <Footer />
    </>
  )
}
