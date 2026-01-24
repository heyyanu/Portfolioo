import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useContent } from '../hooks/useContent';

import fimImage from '../assets/projects/fim-project.jpg';
import idsIpsImage from '../assets/projects/ids-ips-project.jpg';

const fallbackProjects = [
    {
        title: "File Integrity Monitor (FIM)",
        description: "A specialized security tool that monitors critical system files for unauthorized changes. It calculates and compares cryptographic hashes to detect potential tampering or malware injections in real-time.",
        tags: ["PowerShell", "Security Monitoring", "File Integrity"],
        image: fimImage,
        github: "https://github.com/heyyanu/FIM"
    },
    {
        title: "IDS/IPS System with Suricata",
        description: "Implementation of a robust Intrusion Detection and Prevention System using Suricata. Configured to monitor network traffic, detect anomalies, and enforcing security policies to block threats.",
        tags: ["Suricata", "Network Security", "IDS/IPS"],
        image: idsIpsImage,
        // No github link available, referencing the guide or leaving blank. 
        // User said: "i will the photos of thoes add to project ids ips dont have the link"
    },
    {
        title: "Security Automation Tool",
        description: "A Python-based automated vulnerability scanner that integrates with CI/CD pipelines to detect common flaws.",
        tags: ["Python", "Automation", "CI/CD"]
    },
    {
        title: "SOC Dashboard",
        description: "Real-time threat monitoring dashboard built with ELK stack integration for visualizing network traffic and alerts.",
        tags: ["Splunk/ELK", "React", "Data Viz"]
    }
];

export default function Projects() {
    const { data: projects } = useContent('projects', fallbackProjects);

    return (
        <section id="projects" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
