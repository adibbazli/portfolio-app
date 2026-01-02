interface AboutProps {
    bio: string
}

export default function About({ bio }: AboutProps) {
    return (
        <section id="about" className="py-24 relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/90 to-blue-800/90"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
                        <p className="text-xl leading-relaxed text-center text-white/95">
                            {bio}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
