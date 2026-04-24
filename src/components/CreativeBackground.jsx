import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CreativeBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create particles
        const particleCount = 40; // Increased count
        const particles = [];

        const shapes = ['circle', 'square', 'triangle'];
        const styles = ['filled', 'outline', 'glow'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const style = styles[Math.floor(Math.random() * styles.length)];

            particle.className = `creative-particle ${shape} ${style}`;
            container.appendChild(particle);
            particles.push(particle);

            // Random starting position
            gsap.set(particle, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.3 + 0.1,
                rotation: Math.random() * 360
            });

            // Ambient Float animation
            gsap.to(particle, {
                x: `+=${Math.random() * 200 - 100}`,
                y: `+=${Math.random() * 200 - 100}`,
                rotation: `+=${Math.random() * 360}`,
                duration: Math.random() * 15 + 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        // Interactive Attraction/Repulsion
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            particles.forEach(p => {
                const dx = clientX - gsap.getProperty(p, "x");
                const dy = clientY - gsap.getProperty(p, "y");
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 300) {
                    // Move away from cursor with rotation
                    gsap.to(p, {
                        x: `-=${dx * 0.1}`,
                        y: `-=${dy * 0.1}`,
                        rotation: `+=${Math.random() * 45}`,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="creative-bg-container" />
            <style jsx>{`
            .creative-bg-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0; /* Behind everything */
                pointer-events: none;
                overflow: hidden;
            }
            :global(.creative-particle) {
                position: absolute;
                width: 15px;
                height: 15px;
                filter: blur(1px);
                transition: opacity 0.3s;
            }

            /* Shapes */
            :global(.creative-particle.circle) { border-radius: 50%; }
            :global(.creative-particle.square) { border-radius: 2px; }
            :global(.creative-particle.triangle) { 
                width: 0; height: 0; 
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 14px solid var(--color-gold-500);
                background: transparent !important;
            }

            /* Styles */
            :global(.creative-particle.filled) { background: var(--color-gold-500); }
            :global(.creative-particle.outline) { 
                border: 1px solid var(--color-gold-500); 
                background: transparent;
            }
            :global(.creative-particle.glow) {
                background: white;
                box-shadow: 0 0 10px var(--color-gold-500);
            }
            :global(.creative-particle.triangle.outline) {
                 border-bottom-color: transparent;
                 border: 1px solid var(--color-gold-500); /* Triangles are hard to outline simply, simplifying fallback */
                 width: 10px; height: 10px; border-radius: 0; transform: rotate(45deg);
            }

        `}</style>
        </>
    );
};

export default CreativeBackground;
