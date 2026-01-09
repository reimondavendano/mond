import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "GoCart Plaridel",
            description: "A multi-vendor marketplace for electronics, fashion, beauty, and more. Enjoy exclusive deals, GoCart product insights, and seamless shopping.",
            image: "/assets/go-cart.PNG",
            link: "https://gocart-plaridel.vercel.app/",
            tags: ["Next.js", "Supabase", "Tailwind CSS"]
        },
        {
            title: "J and A Wedding App",
            description: "A beautiful wedding website for James & Apple, featuring RSVP functionality and event details.",
            image: "/assets/james-apple.PNG",
            link: "https://weddingjamesapple.vercel.app/",
            tags: ["React", "Vite", "Tailwind CSS"]
        },
        {
            title: "Animojmoj Anime Site",
            description: "An anime streaming platform interface for study purposes, showcasing modern UI/UX design.",
            image: "/assets/animojmoj.PNG",
            link: "https://animojmoj.vercel.app/",
            tags: ["React", "API Integration", "UI/UX"]
        },
        {
            title: "Neural Conversion",
            description: "A powerful tool for neural network model conversion and optimization.",
            image: "/assets/neural.PNG",
            link: "https://neural-conversion.vercel.app",
            tags: ["Machine Learning", "React", "Python"]
        },
        {
            title: "Tres Marias Salon",
            description: "A comprehensive booking application for Tres Marias Salon.",
            image: "/assets/tres-marias.PNG",
            link: "https://tresmarias-six.vercel.app/",
            tags: ["Booking System", "React", "Node.js"]
        },
        {
            title: "Presko AC Services",
            description: "Service booking and management app for Presko Aircon Services.",
            image: "/assets/presko.PNG",
            link: "https://betapresko.vercel.app/",
            tags: ["Service App", "React", "Firebase"]
        },
        {
            title: "PowerTech Enterprises",
            description: "Official website for PowerTech Enterprises, featuring products and PC builder.",
            image: "/assets/powertech.PNG",
            link: "https://powertech-enterprises.vercel.app/",
            tags: ["Next.js", "React", "Supabase"]
        },
        {
            title: "Deliciosa Frontyard Cafe",
            description: "A delightful website for Deliciosa Frontyard Cafe, featuring menu and location details.",
            image: "/assets/deliciosa.PNG",
            link: "https://deliciosa-frontyard-coffee.vercel.app/",
            tags: ["Cafe", "Landing Page", "React"]
        },
        {
            title: "Kafe Barako",
            description: "A modern coffee shop website featuring menu, packages, testimonials, and booking system for Kafe Barako.",
            image: "/assets/kafe-barako.PNG",
            link: "https://kafe-barako.vercel.app/",
            tags: ["Coffee Shop", "Next.js", "Booking"]
        },
        {
            title: "AllStar Tech",
            description: "Technology solutions and services showcase for AllStar Tech.",
            image: "/assets/allstar.PNG",
            link: "https://all-star-three.vercel.app/",
            tags: ["Tech", "Corporate", "React"]
        }
    ];

    return (
        <section className="py-20 bg-gray-900" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        A showcase of my recent work, featuring web applications, tools, and creative designs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative z-20">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                                    >
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Demo
                                    </a>
                                    {/* Optional: Add GitHub link if available, currently just a placeholder or omitted if not provided */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
