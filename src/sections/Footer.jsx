import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-muted py-8 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Anudev VP. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://x.com/heyyanudev?t=JXRneQLKqIZ_kKocoHbRMg&s=08" className="text-sm text-foreground hover:text-primary transition-colors">
                        Twitter/X
                    </a>
                    <a href="https://linkedin.com/in/anudev-vp-b44423373" className="text-sm text-foreground hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/heyyanu" className="text-sm text-foreground hover:text-primary transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
