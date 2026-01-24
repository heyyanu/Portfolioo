/*
 * CyberBackground.jsx
 * A matrix-style digital rain animation that serves as a dynamic background.
 * Adapts to current theme colors.
 */
import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Characters to use (mix of binary and matrix-like chars)
        const chars = "10"; // Simple binary for a "cyber" look, or could use Japanese Katakana
        // const chars = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ10XYZ"; // Alternative complex set 

        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);

        // Array to track the y position of each column
        // Initialize with random start positions for better initial distribute
        const drops = Array(columns).fill(1).map(() => Math.random() * -100);

        // Get theme colors from CSS variables
        const getThemeColor = (variable) => {
            return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
        };

        const draw = () => {
            // Semi-transparent fade to create trail effect
            // We use the background color but with very low opacity
            ctx.fillStyle = `rgba(var(--background-rgb, 2, 6, 23), 0.1)`;
            // Note: If --background is strictly hex, we might need a fixed dark overlay or hex conversion.
            // For safety/simplicity in this iteration, let's use a hardcoded dark fade that works on dark backgrounds.
            ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            // Set text color (Primary color)
            // We'll re-fetch this occasionally or just trust the CSS var usage if possible, 
            // but Canvas needs explicit color. 
            // Let's grab the primary color from the DOM once or hardcode a 'matrix' green/blue look 
            // that matches the current theme via a helper or direct CSS var reading if performant.
            // For now, let's try to read the calculated style or default to a cool cyber blue.
            const primaryColor = getThemeColor('--primary') || '#3B82F6';

            ctx.fillStyle = primaryColor;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // Draw the character
                ctx.fillStyle = primaryColor;
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it has crossed screen
                // Adding randomness to the reset to avoid patterns
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment y coordinate
                drops[i]++;
            }
        };

        let animationFrameId;
        const render = () => {
            draw();
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Handle resize
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
            style={{ pointerEvents: 'none' }} // Ensure clicks simulate through
        />
    );
};

export default CyberBackground;
