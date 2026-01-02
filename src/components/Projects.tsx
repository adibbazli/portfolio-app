import { Link } from 'react-router-dom'
import { Project } from '../data'

interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-100">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                                <p className="text-slate-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="text-blue-600 font-medium hover:underline">
                                        GitHub →
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                        className="text-blue-600 font-medium hover:underline">
                                        Live Demo →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-1 transition-all shadow-lg group"
                    >
                        See More Projects
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
