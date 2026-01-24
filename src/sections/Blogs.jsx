import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const blogs = [
    {
        title: "Building an IDS/IPS System with Suricata: A Complete Implementation Guide",
        excerpt: "A comprehensive guide on setting up and configuring Suricata for intrusion detection and prevention, covering installation, rule management, and log analysis.",
        link: "https://medium.com/@heyyanudev/building-an-ids-ips-system-with-suricata-a-complete-implementation-guide-856b0decc426",
        date: "Jan 2025"
    },
    {
        title: "The TLS 1.2 Handshake: A Deep Dive into Secure Communication",
        excerpt: "An in-depth analysis of the TLS 1.2 handshake process, explaining key exchange, authentication, and encryption mechanisms step-by-step.",
        link: "https://medium.com/@heyyanudev/the-tls-1-2-handshake-a-deep-dive-into-secure-communication-4074833d18e7",
        date: "Jan 2025"
    }
];

export default function Blogs() {
    return (
        <section id="blogs" className="py-24 bg-muted/20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Thoughts & Writing</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4">Latest Articles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.a
                            key={index}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
                        >
                            <span className="text-xs text-muted-foreground mb-4 block">{blog.date}</span>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                Read on Medium <ExternalLink size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
