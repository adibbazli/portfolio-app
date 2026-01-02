interface FooterProps {
    name: string
}

export default function Footer({ name }: FooterProps) {
    return (
        <footer className="bg-slate-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p>&copy; 2024 {name}. Built with React + Tailwind &amp; ❤️</p>
            </div>
        </footer>
    )
}
