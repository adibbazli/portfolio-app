import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavbarProps {
    activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        setIsMenuOpen(false)

        // If not on home page, navigate to home with hash
        if (location.pathname !== '/') {
            navigate(`/${targetId}`)
            return
        }

        // If on home page, scroll to section
        const target = document.querySelector(targetId)
        if (target) {
            const offsetTop = (target as HTMLElement).offsetTop - 70
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
    }

    const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

    return (
        <nav className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Portfolio
                </a>

                <ul className={`md:flex gap-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-lg p-6 gap-4' : 'hidden'}`}>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`/#${link}`}
                                onClick={(e) => handleNavClick(e, `#${link}`)}
                                className={`font-medium transition-colors hover:text-blue-600 ${activeSection === link ? 'text-blue-600' : 'text-slate-700'
                                    }`}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="w-6 h-0.5 bg-slate-800"></span>
                    <span className="w-6 h-0.5 bg-slate-800"></span>
                    <span className="w-6 h-0.5 bg-slate-800"></span>
                </div>
            </div>
        </nav>
    )
}

