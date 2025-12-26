import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('clickable')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, {
                scale: 0.5,
                backgroundColor: "var(--color-gold-500)",
                duration: 0.2
            });
            gsap.to(follower, {
                scale: 1.5,
                borderColor: "var(--color-gold-500)",
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                duration: 0.2
            });
        } else {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "white",
                duration: 0.2
            });
            gsap.to(follower, {
                scale: 1,
                borderColor: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "transparent",
                duration: 0.2
            });
        }
    }, [isHovering]);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={followerRef} className="cursor-follower"></div>
            <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }
        .cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: border-color 0.2s;
        }
        @media (hover: none) {
          .custom-cursor, .cursor-follower {
            display: none;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
