"use client";

declare global {
    interface Window {
        instgrm: any;
    }
}

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { animate, scroll, cubicBezier } from "motion";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import "./stories.css";
import Link from "next/link";
import HorizontalScroll from "@/components/custom/HorizontalScroll";
import { INSTAGRAM_POSTS } from "@/lib/gram-posts";

export default function MisuStories() {
    // Refs to target elements effectively in React
    const scalerRef = useRef<HTMLDivElement>(null);
    const firstSectionRef = useRef<HTMLElement>(null);
    const mainRef = useRef<HTMLElement>(null);

    // Scroll animation for indicator
    const { scrollY } = useScroll();
    const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);
    const indicatorBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
    const indicatorY = useTransform(scrollY, [0, 100], [0, 20]);

    // State for Instagram Posts (Caching & Parallel Fetch)
    const [posts, setPosts] = useState<typeof INSTAGRAM_POSTS>([]);
    const [isMobile, setIsMobile] = useState(false);

    // Handle Resize & Mobile Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle "Fetch" and Caching of Posts
    useEffect(() => {
        const loadPosts = async () => {
            const cached = sessionStorage.getItem('instagram_posts');
            if (cached) {
                setPosts(JSON.parse(cached));
            } else {
                // Simulate parallel fetch delay if needed, or just load immediately
                const activePosts = INSTAGRAM_POSTS;
                sessionStorage.setItem('instagram_posts', JSON.stringify(activePosts));
                setPosts(activePosts);
            }
        };
        loadPosts();
    }, []);

    // Dynamic Mask for Tiramisu Image
    const maskStopColor = useTransform(scrollY, [0, 300], ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]);
    const maskImageValue = useMotionTemplate`linear-gradient(to bottom, ${maskStopColor} 0%, black 5%, black 95%, ${maskStopColor} 100%)`;

    useEffect(() => {
        // Force scroll to top immediately
        window.scrollTo(0, 0);

        if (!scalerRef.current || !firstSectionRef.current) return;

        // ... (existing animation setup code) ...
        const image = scalerRef.current.querySelector('img') as HTMLElement;
        const firstSection = firstSectionRef.current;
        const layers = document.querySelectorAll('.stories-grid > .layer');

        if (!image) return;

        // Cleanup function array
        const cleanups: (() => void)[] = [];
        let rafId: number;

        // Use requestAnimationFrame to ensure we are in a valid render frame
        // and avoid race conditions with layout
        rafId = requestAnimationFrame(() => {
            if (!image.isConnected || !firstSection.isConnected) return;

            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) return;

            const isMobile = window.matchMedia('(max-width: 600px)').matches;

            // --- MEASURE (Before modifying styles) ---
            const gridWidth = image.offsetWidth;
            const gridHeight = image.offsetHeight;

            // Intrinsic Ratio
            const intrinsicRatio = (image as HTMLImageElement).naturalWidth
                ? (image as HTMLImageElement).naturalWidth / (image as HTMLImageElement).naturalHeight
                : 16 / 9;

            const viewportWidth = window.innerWidth;
            const initialHeight = viewportWidth / intrinsicRatio;

            // --- APPLY INITIAL "HERO" STATE ---
            image.style.width = `${viewportWidth}px`;
            image.style.height = `${initialHeight}px`;
            image.style.maxWidth = 'none';
            image.style.maxHeight = 'none';
            image.style.transform = 'none';

            // Reveal the scaler (which should have opacity-0 in JSX)
            if (scalerRef.current) {
                scalerRef.current.style.opacity = '1';
                scalerRef.current.style.transition = 'opacity 0.8s ease-out';
            }

            // --- BIND SCROLL ANIMATION ---
            // Use 'scroll' from motion to link animation to scroll progress
            const stopMain = scroll(
                animate(image, {
                    width: [viewportWidth, gridWidth],
                    height: [initialHeight, gridHeight],
                    borderRadius: ["0px", "12px"]
                } as any, {
                    width: { easing: cubicBezier(0.65, 0, 0.35, 1) },
                    height: { easing: cubicBezier(0.42, 0, 0.58, 1) },
                    borderRadius: { easing: cubicBezier(0.65, 0, 0.35, 1) }
                } as any),
                {
                    target: firstSection,
                    offset: ['start start', 'end end']
                }
            );
            cleanups.push(stopMain);

            const scaleEasings = [
                cubicBezier(0.42, 0, 0.58, 1),
                cubicBezier(0.76, 0, 0.24, 1),
                cubicBezier(0.87, 0, 0.13, 1)
            ];

            layers.forEach((layer, index) => {
                const stopFade = scroll(
                    animate(layer as Element, {
                        opacity: [0, 0, 1]
                    } as any, {
                        offset: [0, 0.55, 1],
                        easing: cubicBezier(0.61, 1, 0.88, 1)
                    } as any),
                    {
                        target: firstSection,
                        offset: ['start start', 'end end']
                    }
                );
                cleanups.push(stopFade);

                const stopScale = scroll(
                    animate(layer as Element, {
                        scale: [0, 0, 1]
                    } as any, {
                        offset: [0, 0.3, 1],
                        easing: scaleEasings[index]
                    } as any),
                    {
                        target: firstSection,
                        offset: ['start start', 'end end']
                    }
                );
                cleanups.push(stopScale);
            });
        });

        return () => {
            cancelAnimationFrame(rafId);
            cleanups.forEach(stop => stop());
        };

    }, []);

    // Initialize Instagram Embeds
    useEffect(() => {
        // Only process if posts are loaded
        if (posts.length === 0) return;

        const processEmbeds = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        // Attempt immediately
        processEmbeds();

        // Also attempt after a delay in case global script is still initializing
        const timeoutId = setTimeout(processEmbeds, 500);

        return () => clearTimeout(timeoutId);
    }, [posts]); // Re-run when posts change

    return (
        <div className="stories-wrapper min-h-screen">
            <Header />

            <div className="content-wrap stories-content-wrap">
                <main className="stories-main" ref={mainRef}>
                    {/* Mobile Title */}
                    {/* Mobile Title */}
                    {/* Mobile Title */}
                    <motion.div
                        className="md:hidden fixed top-32 left-0 right-0 z-40 text-center pointer-events-none px-4"
                        style={{
                            opacity: indicatorOpacity,
                            filter: indicatorBlur
                        }}
                    >
                        <h2 className="font-serif text-[6vw] text-primary font-bold tracking-wide leading-tight shadow-black/10 drop-shadow-sm whitespace-nowrap">
                            Our Tiramisu, Your Moments
                        </h2>
                    </motion.div>

                    {/* Mobile Scroll Indicator */}
                    <motion.div
                        className="md:hidden fixed bottom-8 left-0 right-0 z-40 flex flex-col items-center gap-4 pointer-events-none"
                        style={{
                            opacity: indicatorOpacity,
                            filter: indicatorBlur
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-medium">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
                        />
                    </motion.div>

                    <section ref={firstSectionRef} className="relative h-[300vh]">
                        <div className="content stories-content-sticky sticky top-0 h-screen overflow-hidden">
                            <div className="grid stories-grid h-full w-full">
                                {/* Layer 1: Outer edges */}
                                <div className="layer opacity-0">
                                    <div><img src="/images/ScrollMisuStories/1.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/2.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/3.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/4.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/5.jpg" alt="" style={{ objectPosition: 'bottom' }} /></div>
                                    <div><img src="/images/ScrollMisuStories/6.jpg" alt="" style={{ objectPosition: 'bottom' }} /></div>
                                </div>
                                {/* Layer 2: Inner columns */}
                                <div className="layer opacity-0">
                                    <div><img src="/images/ScrollMisuStories/7.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/8.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/9.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/10.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/11.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/12.jpg" alt="" style={{ objectPosition: 'bottom' }} /></div>
                                </div>
                                {/* Layer 3: Center column */}
                                <div className="layer">
                                    <div><img src="/images/ScrollMisuStories/13.jpg" alt="" /></div>
                                    <div><img src="/images/ScrollMisuStories/14.jpg" alt="" style={{ objectPosition: 'bottom' }} /></div>
                                </div>
                                {/* Center scaler image */}
                                <div className="scaler opacity-0" ref={scalerRef}>
                                    <motion.img
                                        src="/images/Tiramisu.jpg"
                                        alt="LuxeMisu Signature Tiramisu"
                                        className="md:!mask-none md:!-webkit-mask-none"
                                        style={{
                                            maskImage: isMobile ? maskImageValue : 'none',
                                            WebkitMaskImage: isMobile ? maskImageValue : 'none'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mobile Content */}
                    <div className="md:hidden flex flex-col justify-center items-center bg-transparent relative z-10 pb-20 mt-10">
                        <h2 className="font-serif text-4xl text-primary font-bold tracking-wide px-4 leading-tight mb-10 text-center">
                            Soaked in love.
                        </h2>

                        <div className="w-full">
                            <HorizontalScroll className="w-full" stickyTop={30}>
                                <div className="flex gap-6 px-6 items-start pt-4">
                                    {posts.map((post) => (
                                        <div key={post.id} className="w-[300px] shrink-0 bg-white rounded-xl shadow-xl overflow-hidden p-2">
                                            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                                        </div>
                                    ))}
                                </div>
                            </HorizontalScroll>
                        </div>
                    </div>

                    {/* Desktop Title */}
                    <div className="hidden md:flex flex-col min-h-screen w-full justify-center items-center bg-transparent relative z-10 pb-20 mt-32">
                        <h2 className="font-serif text-7xl md:text-8xl text-primary font-bold mb-20">
                            Our Tiramisu, Your Moments.
                        </h2>

                        <div className="w-full">
                            <HorizontalScroll className="w-full" stickyTop={70}>
                                <div className="flex gap-12 px-12 md:px-20 items-start pt-10">
                                    {posts.map((post) => (
                                        <div key={post.id} className="w-[350px] shrink-0 bg-white rounded-xl shadow-xl overflow-hidden p-2">
                                            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                                        </div>
                                    ))}
                                </div>
                            </HorizontalScroll>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
