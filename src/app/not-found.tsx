"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-[#fcfaf8] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Pattern - Subtle Text Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] text-[20vw] font-serif font-black flex items-center justify-center select-none text-primary">
                404
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center px-4"
            >
                <div className="mb-6">
                    <span className="block text-accent text-sm tracking-[0.3em] uppercase mb-4 font-bold">Error 404</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-primary font-bold mb-6">
                        The Missing Layer
                    </h1>
                </div>

                <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed font-light">
                    Like a tiramisu without coffee, something imperative is missing here.
                    The page you are looking for has drifted away.
                </p>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
