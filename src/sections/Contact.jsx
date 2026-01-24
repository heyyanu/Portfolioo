import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = React.useRef();
    const [status, setStatus] = React.useState('idle'); // idle, loading, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Replace these with your actual EmailJS credentials
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_uo4qvq7';
        const TEMPLATE_ID = 'template_p377sgd';
        const PUBLIC_KEY = '10bR1w5krVCzYZL7T';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in touch</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Let's connect.</h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Available for Security Consulting, Penetration Testing Engagements, Security Engineering Roles, and SOC Operations. Let's discuss how I can contribute to your organization's security posture.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:heyyanudev@email.com" className="text-lg font-medium hover:text-primary transition-colors">heyyanudev@email.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <SocialLink href="https://linkedin.com/in/anudev-vp-b44423373" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="https://github.com/heyyanu" icon={Github} label="GitHub" />
                            <SocialLink href="https://x.com/heyyanudev?t=JXRneQLKqIZ_kKocoHbRMg&s=08" icon={Twitter} label="Twitter/X" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-muted/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
                    >
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="user_name" className="text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="user_email" className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Security Consultation"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="bg-background border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`bg-primary text-primary-foreground font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                            >
                                {status === 'loading' ? 'Sending...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon: Icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted border border-border hover:border-primary hover:text-primary transition-all"
            aria-label={label}
        >
            <Icon size={20} />
        </a>
    )
}
