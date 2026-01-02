import { Experience as ExperienceType } from '../data'

interface ExperienceProps {
    experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <section id="experience" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Experience</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {experience.map((exp, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                            <div className="text-blue-600 font-medium">{exp.company}</div>
                            <div className="text-slate-500 text-sm mb-3">{exp.period}</div>
                            <p className="text-slate-600">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
