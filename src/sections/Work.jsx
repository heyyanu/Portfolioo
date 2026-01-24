import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for online retailers with real-time analytics and inventory management.",
        tags: ["React", "Tailwind", "Recharts"]
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and drag-and-drop interface.",
        tags: ["Next.js", "Supabase", "Drag & Drop"]
    },
    {
        title: "AI Image Generator",
        description: "Web application that uses stable diffusion to generate images from text prompts.",
        tags: ["React", "Python", "API"]
    }
];

export default function Work() {
    return (
        <section id="work" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Selected Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
