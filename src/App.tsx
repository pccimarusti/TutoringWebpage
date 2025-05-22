import React, { useEffect } from "react"
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Philosophy from "./components/Philosophy"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Subjects from "./components/Subjects"
import SubjectDetail from "./pages/SubjectDetail"

// HomePage component to contain all sections
const HomePage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to contact section if URL has #contact
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    } else {
      // Scroll to top for other pages
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Philosophy />
      </section>
      <section id="subjects">
        <Subjects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App;