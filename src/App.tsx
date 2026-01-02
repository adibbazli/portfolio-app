import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { portfolioData } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectListing from './components/ProjectListing'

function HomePage() {
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

function ProjectsPage() {
    return (
        <>
            <Navbar activeSection="" />
            <ProjectListing projects={portfolioData.projects} />
            <Footer name={portfolioData.profile.name} />
        </>
    )
}

function App() {
    const { pathname, hash } = useLocation()

    // Scroll to top or hash when route changes
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    )
}

export default App

