import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Competencies from './sections/Competencies'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ScrollManager from './components/ScrollManager'
import ScrollProgress from './components/ScrollProgress'
import CyberBackground from './components/CyberBackground'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
        <CyberBackground />
        <ScrollManager />
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Competencies />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
