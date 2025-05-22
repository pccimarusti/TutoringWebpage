import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Philosophy from "./components/Philosophy"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
// import Services from "./components/Services"
import Subjects from "./components/Subjects"
// import Testimonials from "./components/Testimonials"
// import Pricing from "./components/Pricing"
// import { scroller } from "react-scroll"
import SubjectDetail from "./pages/SubjectDetail"

// HomePage component to contain all sections
const HomePage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to contact section
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('contact') === 'true' || location.state?.scrollToContact) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          // Scroll to the section with an offset to account for navbar
          window.scrollTo({
            top: contactSection.offsetTop - 120, // Adjust offset as needed
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      // For all other navigation events, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><Philosophy /></section>
      <section id="subjects"><Subjects /></section>
      {/* <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="pricing"><Pricing /></section> */}
      <section id="contact"><Contact /></section>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background */}
        <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
          <div className="absolute inset-0 bg-neutral-950 [background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects/:subject" element={<SubjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;