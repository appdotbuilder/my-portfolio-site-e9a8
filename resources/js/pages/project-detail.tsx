import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    detailed_description: string;
    image_url: string | null;
    technologies: string[];
    demo_url: string | null;
    github_url: string | null;
}

interface Props {
    project: Project;
    [key: string]: unknown;
}

export default function ProjectDetail({ project }: Props) {
    return (
        <>
            <Head title={`${project.title} - Portfolio`}>
                <meta name="description" content={project.description} />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Navigation */}
                <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center h-16">
                            <Link
                                href={route('home')}
                                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                            >
                                <ArrowLeftIcon className="w-5 h-5" />
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                                    {project.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    {project.demo_url && (
                                        <a
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                        >
                                            <ExternalLinkIcon className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                                        >
                                            <GithubIcon className="w-5 h-5" />
                                            View Code
                                        </a>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Technologies Used:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="order-first lg:order-last">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                    {project.image_url ? (
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 text-6xl">
                                            💻
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {project.detailed_description.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            I'd love to discuss your next project and how we can bring your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('home') + '#contact'}
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                href={route('home') + '#portfolio'}
                                className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                View More Projects
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-400">
                            © 2024 John Developer. Built with ❤️ using Laravel & React.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}