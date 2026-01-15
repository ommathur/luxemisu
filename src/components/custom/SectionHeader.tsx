"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            {subtitle && (
                <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="block text-accent font-medium tracking-widest text-sm mb-3"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-bold text-primary"
            >
                {title}
            </motion.h2>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className={cn("h-1 w-20 bg-accent mt-6 rounded-full", centered && "mx-auto")}
            />
        </div>
    );
}
