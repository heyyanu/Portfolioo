import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-muted/30 border border-white/5 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                {project.image ? (
                    <>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 ml-0 transition-opacity group-hover:opacity-40" />
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-bold">
                            Project {index + 1}
                        </div>
                    </>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
