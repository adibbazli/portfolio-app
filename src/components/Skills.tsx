import { useEffect, useRef } from 'react'
import { Skill } from '../data'

interface SkillsProps {
    skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
    const skillsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('[data-level]')
                        progressBars.forEach((bar) => {
                            const level = (bar as HTMLElement).dataset.level
                                ; (bar as HTMLElement).style.width = `${level}%`
                        })
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (skillsRef.current) observer.observe(skillsRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Skills</h2>
                <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex justify-between mb-3 font-semibold text-slate-700">
                                <span>{skill.name}</span>
                                <span className="text-blue-600">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    data-level={skill.level}
                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
