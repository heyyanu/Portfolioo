import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                            Available for Security Consulting
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Anudev VP <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Cybersecurity Professional
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                            Specializing in offensive security, defensive operations, cloud security, and governance. Building robust security solutions for the modern web.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <Link
                                to="/expertise"
                                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                                View Expertise <ArrowRight size={18} />
                            </Link>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full border border-border hover:bg-muted transition-colors font-medium"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 w-full max-w-md md:max-w-none">
                    {/* Placeholder for Hero Image or 3D Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-9xl font-bold select-none">
                            SEC
                        </div>
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
