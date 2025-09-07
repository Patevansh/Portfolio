import React, { useState, useEffect } from 'react'
import Dock from './components/dock'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Education from './components/education'
import Contact from './components/contact'
import FloatingShapes from './components/FloatingShapes'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      setActivePage(sectionId)
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id')
        
        if (entry.isIntersecting) {
          setActivePage(sectionId)
          entry.target.classList.add('visible')
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))

    const initScrollAnimations = () => {
      const scrollElements = document.querySelectorAll('.scroll-section')
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })

      scrollElements.forEach((element) => {
        scrollObserver.observe(element)
      })
    }

    initScrollAnimations()

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="w-full h-full min-h-screen min-w-screen overflow-x-hidden">
      <nav className="fixed bottom-4 w-full flex justify-center z-50">
        <Dock activePage={activePage} setActivePage={scrollToSection} />
      </nav>

      <div className="relative w-full h-full min-h-screen min-w-screen bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 overflow-x-hidden text-gray-900 no-scrollbar">
        <FloatingShapes />
        <section id="home" className="min-h-screen w-full">
          <Home />
        </section>
        <section id="about" className="min-h-screen w-full">
          <About />
        </section>
        <section id="skills" className="min-h-screen w-full">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen w-full">
          <Projects />
        </section>
        <section id="education" className="min-h-screen w-full">
          <Education />
        </section>
        <section id="contact" className="min-h-screen w-full pb-32">
          <Contact />
        </section>
      </div>
    </div>
  )
}
