"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function HeroSection() {
    return (
        <section className="relative pt-[70px] pb-16 bg-background flex flex-col items-center">
            {/* Image Container - Full Width Natural Aspect Ratio */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full relative mb-12"
            >
                <Image
                    src="/images/LayersOfPureIndulgence.jpg"
                    alt="LuxeMisu - Layers of Pure Indulgence"
                    width={3072}
                    height={2048}
                    sizes="100vw"
                    className="w-full h-auto"
                    priority
                    quality={100}
                />
            </motion.div>

            {/* Content Below Image */}
            <div className="container mx-auto px-6 text-center space-y-8 max-w-5xl relative z-10">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <span className="inline-block py-1 px-4 border border-primary/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-primary/60">
                        Est. 2024 • Bengaluru
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary font-serif font-bold leading-tight tracking-tight">
                        India's first dedicated Tiramisu café. <br className="hidden md:block" />
                        <span className="text-accent">Crafting moments of joy,</span> one jar at a time.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link href="/menu">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="w-48 bg-primary hover:bg-primary/90 text-white rounded-full text-lg h-14 shadow-lg shadow-primary/20 transition-all">
                                    View Menu
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="/location">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" variant="outline" className="w-48 border-primary/20 text-primary hover:bg-primary/5 rounded-full text-lg h-14 transition-all">
                                    Visit Us
                                </Button>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Now part of flow to prevent overlap */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 sm:mt-20 flex flex-col items-center gap-4 pb-8"
            >
                <span className="text-primary/80 font-serif italic text-lg tracking-wider">Discover Our Signature Flavors</span>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
