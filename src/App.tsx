import { useState, useEffect } from 'react'
import { portfolioData } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section')
            let current = 'home'

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 100
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id') || 'home'
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar activeSection={activeSection} />
            <Hero profile={portfolioData.profile} />
            <About bio={portfolioData.profile.bio} />
            <Skills skills={portfolioData.skills} />
            <Projects projects={portfolioData.projects} />
            <Experience experience={portfolioData.experience} />
            <Contact />
            <Footer name={portfolioData.profile.name} />
        </>
    )
}

export default App
