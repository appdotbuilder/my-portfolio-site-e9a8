import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronDownIcon, ExternalLinkIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, PhoneIcon, DownloadIcon } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string | null;
    technologies: string[];
    demo_url: string | null;
    github_url: string | null;
}

interface Experience {
    id: number;
    title: string;
    company: string;
    description: string;
    start_date: string;
    end_date: string | null;
    type: 'work' | 'education';
}

interface Props {
    projects: Project[];
    workExperiences: Experience[];
    educationExperiences: Experience[];
    [key: string]: unknown;
}

export default function Welcome({ projects, workExperiences, educationExperiences }: Props) {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short' 
        });
    };

    return (
        <div className={isDark ? 'dark' : ''}>
            <Head title="Portfolio - Full Stack Developer">
                <meta name="description" content="Full Stack Developer specializing in modern web applications with React, Laravel, and cloud technologies." />
                <meta property="og:title" content="Portfolio - Full Stack Developer" />
                <meta property="og:description" content="Full Stack Developer specializing in modern web applications with React, Laravel, and cloud technologies." />
                <meta property="og:type" content="website" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
                                Portfolio
                            </div>
                            <div className="hidden md:flex space-x-8">
                                {['home', 'about', 'portfolio', 'experience', 'contact'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`capitalize transition-colors ${
                                            activeSection === section
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                        }`}
                                    >
                                        {section === 'portfolio' ? 'Projects' : section}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {isDark ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                JD
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                                John Developer
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                                Full Stack Developer & UI/UX Enthusiast
                            </p>
                            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                                I create modern, scalable web applications with a focus on user experience and clean code. 
                                Passionate about turning ideas into digital reality.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                                <DownloadIcon className="w-5 h-5" />
                                Download CV
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                            >
                                <MailIcon className="w-5 h-5" />
                                Contact Me
                            </button>
                        </div>
                        <div className="mt-16">
                            <button onClick={() => scrollToSection('about')} className="animate-bounce">
                                <ChevronDownIcon className="w-8 h-8 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">About Me</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                I'm a passionate full stack developer with 5+ years of experience building 
                                scalable web applications. I love creating solutions that make a difference.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">💻</div>
                                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Expert in modern frameworks like React, Vue.js, and Laravel. 
                                    Building responsive, performant applications.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🗄️</div>
                                <h3 className="text-xl font-semibold mb-2">Database Management</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Proficient in MySQL, PostgreSQL, and MongoDB. 
                                    Designing efficient database schemas and optimizing queries.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold mb-2">Frontend Styling</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Creating beautiful, accessible user interfaces with 
                                    Tailwind CSS, Sass, and modern CSS techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                A showcase of my recent work and personal projects
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 relative">
                                        {project.image_url ? (
                                            <img 
                                                src={project.image_url} 
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-4xl">
                                                💻
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <Link
                                            href={route('project.show', project.id)}
                                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                                        >
                                            View Details
                                            <ExternalLinkIcon className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                My professional journey and educational background
                            </p>
                        </div>

                        <div className="space-y-16">
                            {/* Work Experience */}
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-center">💼 Work Experience</h3>
                                <div className="space-y-6">
                                    {workExperiences.map((exp, index) => (
                                        <div key={exp.id} className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                                {index < workExperiences.length - 1 && (
                                                    <div className="w-0.5 h-24 bg-blue-200 dark:bg-blue-800 mt-4"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                                        {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                                                <p className="text-gray-500 dark:text-gray-400">{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-center">🎓 Education</h3>
                                <div className="space-y-6">
                                    {educationExperiences.map((exp, index) => (
                                        <div key={exp.id} className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className="w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full"></div>
                                                {index < educationExperiences.length - 1 && (
                                                    <div className="w-0.5 h-24 bg-green-200 dark:bg-green-800 mt-4"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                                                    <span className="text-green-600 dark:text-green-400 font-medium">
                                                        {formatDate(exp.start_date)} - {formatDate(exp.end_date!)}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                                                <p className="text-gray-500 dark:text-gray-400">{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Have a project in mind? I'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 resize-none"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                        <MailIcon className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-col justify-center">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Follow me on social media for updates and insights
                                    </p>
                                </div>
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <GithubIcon className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <LinkedinIcon className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
                                    >
                                        <InstagramIcon className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4">John Developer</h3>
                            <p className="text-gray-400 mb-6">
                                Full Stack Developer passionate about creating amazing web experiences
                            </p>
                            <div className="flex justify-center space-x-6 text-gray-400">
                                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                                    <MailIcon className="w-5 h-5" />
                                </a>
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                                    <PhoneIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 pt-8">
                            <p className="text-gray-400">
                                © 2024 John Developer. Built with ❤️ using Laravel & React.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}