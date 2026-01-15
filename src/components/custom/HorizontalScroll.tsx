"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
    stickyTop?: number;
}

export default function HorizontalScroll({ children, className = "", stickyTop = 0 }: HorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);

    useLayoutEffect(() => {
        // Calculate the total width of the scrollable content
        if (scrollRef.current && containerRef.current) {
            setScrollRange(scrollRef.current.scrollWidth);
        }
    }, [children]);

    useEffect(() => {
        const onResize = () => {
            if (containerRef.current) {
                setViewportW(window.innerWidth);
                if (scrollRef.current) {
                    setScrollRange(scrollRef.current.scrollWidth);
                }
            }
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map vertical scroll distance to horizontal scroll distance
    // We scroll from 0 to -(totalContentWidth - viewportWidth)
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW]);

    // Add smooth spring physics
    const springX = useSpring(x, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // The height of the container needs to be enough to accommodate the full horizontal scroll duration
    // A mapping of 1px vertical = 1px horizontal feels natural
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        setContainerHeight(scrollRange - viewportW + window.innerHeight);
    }, [scrollRange, viewportW]);

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ height: containerHeight > 0 ? containerHeight : "auto" }}
        >
            <div
                className="sticky overflow-hidden"
                style={{ top: stickyTop, height: "100vh" }}
            >
                <div className="flex h-full items-center">
                    <motion.div
                        ref={scrollRef}
                        style={{ x: springX }}
                        className="flex items-center gap-0 w-max"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
