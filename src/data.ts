export interface Profile {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
    bio: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
}

export interface PortfolioData {
    profile: Profile;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
}

export const portfolioData: PortfolioData = {
    profile: {
        name: "John Doe",
        title: "Full Stack Developer",
        email: "john@example.com",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        bio: "Passionate full stack developer specializing in Python and modern web technologies. I love building clean, efficient applications that solve real problems."
    },
    skills: [
        { name: "Python", level: 90 },
        { name: "Flask", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "Docker", level: 70 }
    ],
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration",
            tech: ["Flask", "PostgreSQL", "Stripe API"],
            github: "https://github.com/johndoe/ecommerce",
            demo: "https://demo.example.com"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task manager with real-time updates",
            tech: ["Flask", "WebSockets", "Vue.js"],
            github: "https://github.com/johndoe/taskmanager",
            demo: "https://tasks.example.com"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather forecast application",
            tech: ["Python", "OpenWeather API", "Chart.js"],
            github: "https://github.com/johndoe/weather",
            demo: "https://weather.example.com"
        }
    ],
    experience: [
        {
            company: "Tech Corp",
            position: "Senior Developer",
            period: "2021 - Present",
            description: "Lead development of microservices architecture"
        },
        {
            company: "StartUp Inc",
            position: "Full Stack Developer",
            period: "2019 - 2021",
            description: "Built and maintained multiple client applications"
        }
    ]
};
