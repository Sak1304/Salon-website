"use client"
import About from './Components/About'
import Booking from './Components/Booking'
import Contact from './Components/Contact'
import Count from './Components/Count'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Ourwork from './Components/Ourwork'
import Pricingplan from './Components/Pricingplan'
import Services from './Components/Services'
import Specialist from './Components/Specialist'
import Testimonial from './Components/Testimonial'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Count />
      <Specialist />
      <Testimonial />
      <Pricingplan />
      <Booking />
      <Ourwork />
      <Footer />
    </div>
  )
}

export default page