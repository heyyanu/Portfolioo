import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const competencies = [
    {
        category: "Information Security",
        skills: ["CIA Triad & Principles", "VPN & Tor Networks", "Virtualization Security", "OSINT & Threat Intel", "Malware Analysis"]
    },
    {
        category: "Network Security",
        skills: ["OSI & TCP/IP Models", "IDS/IPS Configuration", "Traffic & Log Analysis", "Firewall Strategy", "Incident Response"]
    },
    {
        category: "Web & App Security",
        skills: ["OWASP Top 10", "Burp Suite", "Vulnerability Scanning", "XSS/SQLi/Injection", "Secure Coding Practices"]
    },
    {
        category: "Cloud Security",
        skills: ["AWS & Azure Config", "Serverless Security", "Compliance Implementation", "Cloud Vulnerability Assessment"]
    },
    {
        category: "SOC Operations",
        skills: ["SIEM (ELK Stack)", "SOAR Playbooks", "QRadar Investigation", "Ticketing Systems", "IAM/PAM Integration"]
    },
    {
        category: "DevSecOps",
        skills: ["CI/CD Security", "SSDLC Implementation", "Security Automation", "Python & Shell Scripting"]
    },
    {
        category: "Cryptography",
        skills: ["Encryption Implementation", "Digital Signatures", "SSL/TLS Assessment", "PKI Fundamentals"]
    },
    {
        category: "Governance (GRC)",
        skills: ["ISO 27001 & NIST", "Risk Assessment", "Security Policies", "Compliance Auditing"]
    }
];

export default function Competencies() {
    return (
        <section className="py-24 bg-background min-h-screen relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h2 className="text-3xl md:text-5xl font-bold">Technical Expertise</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        Detailed breakdown of my skills and experience across various cybersecurity domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {competencies.map((comp, index) => (
                        <motion.div
                            key={comp.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-4 text-foreground">{comp.category}</h3>
                            <ul className="space-y-2">
                                {comp.skills.map((skill) => (
                                    <li key={skill} className="text-muted-foreground text-sm flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
