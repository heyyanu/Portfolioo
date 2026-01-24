import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cloud, Terminal } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-medium tracking-wider uppercase text-sm"
                    >
                        Professional Summary
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        Securing digital infrastructures.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-3xl leading-relaxed space-y-6"
                    >
                        <p>
                            I am a Cybersecurity professional with comprehensive training across offensive security, defensive operations, cloud security, and governance frameworks. Skilled in penetration testing, security automation, SOC operations, and secure software development practices.
                        </p>
                        <p>
                            My approach is committed to continuous learning and staying current with emerging threats. I focus on building comprehensive security solutions that balance usability with robust protection, experienced in translating technical security concepts for diverse audiences.
                        </p>
                    </motion.div>
                </div>

                {/* High level highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <HighlightCard icon={Shield} title="Offensive Security" desc="Penetration testing & Vulnerability Assessment" delay={0} />
                    <HighlightCard icon={Lock} title="Defensive Ops" desc="SOC Architecture & Incident Response" delay={0.1} />
                    <HighlightCard icon={Cloud} title="Cloud Security" desc="AWS/Azure Configuration & Compliance" delay={0.2} />
                    <HighlightCard icon={Terminal} title="Security Automation" desc="Python, Shell Scripting & Tool Dev" delay={0.3} />
                </div>
            </div>
        </section>
    );
}

function HighlightCard({ icon: Icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="p-6 rounded-2xl bg-muted/50 border border-white/5 hover:border-primary/50 transition-colors group"
        >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
        </motion.div>
    )
}
