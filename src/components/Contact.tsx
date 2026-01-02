import { useState, FormEvent } from 'react'

export default function Contact() {
    const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        console.log('Contact form submission:', {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        })

        setFormMessage({
            type: 'success',
            text: "Thank you for your message! I'll get back to you soon."
        })
        form.reset()

        setTimeout(() => setFormMessage(null), 5000)
    }

    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>

                    {formMessage && (
                        <div className={`mt-6 p-4 rounded-lg text-center font-medium ${formMessage.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                            {formMessage.text}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
