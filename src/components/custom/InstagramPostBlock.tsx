"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface StoryBlockProps {
    image: string;
    caption: string;
    likes?: string;
    layout: "image-left" | "image-right";
    index: number;
}

export function InstagramPostBlock({ image, caption, likes, layout, index }: StoryBlockProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className={cn(
                    "flex flex-col gap-12 items-center",
                    layout === "image-left" ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                    {/* Image Side */}
                    <motion.div
                        style={{ opacity }}
                        className={cn("w-full md:w-1/2 relative group")}
                    >
                        <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-2xl bg-muted">
                            <Image
                                src={image}
                                alt="Instagram Post"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Instagram Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8 text-white">
                                <div className="flex items-center gap-2 font-bold"><Heart className="fill-white" /> <span>{likes?.split(' ')[0] || '245'}</span></div>
                                <div className="flex items-center gap-2 font-bold"><MessageCircle className="fill-white" /> <span>12</span></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 md:px-12 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 shadow-sm border border-border/40 relative"
                        >
                            {/* Decorative Quote */}
                            <span className="absolute -top-6 left-8 text-6xl text-accent/20 font-serif">“</span>

                            <div className="flex items-center justify-between mb-6 border-b border-border/30 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 relative overflow-hidden">
                                        <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
                                    </div>
                                    <span className="font-bold text-sm">luxemisu</span>
                                </div>
                                <span className="text-secondary-foreground/40 text-xs">2h ago</span>
                            </div>

                            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                                {caption}
                            </p>

                            <div className="flex gap-4 text-primary opacity-60">
                                <Heart className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                                <MessageCircle className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                                <Share2 className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                            </div>

                            {likes && (
                                <p className="mt-4 text-xs font-bold text-primary/80">{likes}</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
