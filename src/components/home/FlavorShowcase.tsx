"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlavorSectionProps {
    image: string;
    tagline: string;
    description: string;
    alignment: "left" | "right";
    index: number;
}

const flavors: Omit<FlavorSectionProps, "index">[] = [
    {
        image: "/images/Rasmalai.jpg",
        tagline: "Royal. Saffron. Soft.",
        description: "A fusion of Italian mastery and Indian royalty. Saffron-infused mascarpone meets soft rasmalai clouds, creating a melody of flavors that sings of heritage and luxury.",
        alignment: "right",
    },
    {
        image: "/images/Hazelnut.jpg",
        tagline: "Nutty. Creamy. Crunch.",
        description: "The perfect harmony of roasted hazelnuts and velvety smooth cream. A textural masterpiece that delivers a satisfying crunch followed by a melt-in-your-mouth finish.",
        alignment: "left",
    },
    {
        image: "/images/PassionFruit.jpg",
        tagline: "Zesty. Exotic. Fresh.",
        description: "Escape to the tropics with every bite. Tangy passion fruit curd cuts through the richness of mascarpone, offering a vibrant, zesty explosion that awakens the senses.",
        alignment: "right",
    },
    {
        image: "/images/Ferrero.jpg",
        tagline: "Golden. Crispy. Rich.",
        description: "An ode to the world's most beloved chocolate. Layers of crispy wafer, rich hazelnut cream, and whole roasted nuts, crafted into a jar of pure, unadulterated opulence.",
        alignment: "left",
    },
    {
        image: "/images/Marshmallow.jpg",
        tagline: "Fluffy. Sweet. Dreamy.",
        description: "Nostalgia in a jar. Toasted marshmallows meet creamy indulgence, creating a campfire-inspired treat that is soft, sweet, and utterly dreamy.",
        alignment: "right",
    },
    {
        image: "/images/BlackForest.jpg",
        tagline: "Dark. Deep. Divine.",
        description: "Experience the forbidden dance of dark chocolate and cherries. A classic reimagined for the modern palate, where every spoonful is a journey into the heart of the forest.",
        alignment: "left",
    },
];

function WordReveal({ text, progress, range, alignment }: { text: string; progress: MotionValue<number>; range: [number, number]; alignment: "left" | "right" }) {
    const words = text.split(" ");
    const step = (range[1] - range[0]) / words.length;

    return (
        <p className={cn(
            "flex flex-wrap gap-x-2 gap-y-1 text-lg md:text-2xl leading-relaxed font-medium max-w-xl drop-shadow-xl",
            alignment === "left" ? "justify-start text-secondary" : "justify-end text-primary text-right"
        )}>
            {words.map((word, i) => {
                const start = range[0] + i * step;
                const end = start + step;
                const opacity = useTransform(progress, [start, end], [0, 1]);

                return (
                    <motion.span key={i} style={{ opacity }} className="relative">
                        {word}
                    </motion.span>
                );
            })}
        </p>
    );
}

function FlavorSection({ image, tagline, description, alignment, index }: FlavorSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    // Delayed reveal: Start later (0.3)
    const taglineOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
    const taglineY = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);

    const isAlternate = index % 2 === 0; // Even index = First, Third... -> Beige

    return (
        <div ref={containerRef} className="w-full relative flex flex-col md:block md:h-[200vh]">
            {/* Desktop Image Background (Sticky + Zoom) */}
            <div className="hidden md:block relative md:sticky md:top-0 md:h-screen w-full overflow-hidden">
                <motion.div style={{ scale }} className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={tagline}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Content Overlay - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 z-20 items-center w-full px-12">
                    <div className={cn(
                        "w-full flex",
                        alignment === "left" ? "justify-start" : "justify-end"
                    )}>
                        <div className={cn("space-y-6 max-w-2xl", alignment === "right" && "items-end flex flex-col")}>
                            <motion.h2
                                style={{ opacity: taglineOpacity, y: taglineY }}
                                className={cn(
                                    "font-serif text-5xl md:text-7xl font-bold drop-shadow-2xl",
                                    alignment === "left" ? "text-left text-secondary" : "text-right text-primary"
                                )}
                            >
                                {tagline}
                            </motion.h2>

                            <WordReveal
                                text={description}
                                progress={scrollYProgress}
                                range={[0.35, 0.7]}
                                alignment={alignment}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Image (Static, No Zoom, Full Height/Natural Ratio) */}
            <div className="block md:hidden w-full h-auto relative order-1">
                <img
                    src={image}
                    alt={tagline}
                    className="w-full h-auto block"
                />
            </div>

            {/* Content Overlay - Mobile Only */}
            <div className={cn(
                "block md:hidden order-2 px-6 py-12",
                isAlternate ? "bg-background" : "bg-black"
            )}>
                <div className="space-y-6">
                    <h2 className={cn(
                        "font-serif text-4xl font-bold drop-shadow-2xl",
                        isAlternate ? "text-primary" : (alignment === "left" ? "text-secondary" : "text-primary")
                    )}>
                        {tagline}
                    </h2>
                    <p className={cn(
                        "text-lg leading-relaxed font-medium",
                        isAlternate ? "text-foreground" : "text-white/90"
                    )}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function FlavorShowcase() {
    return (
        <section className="relative bg-black">
            {flavors.map((flavor, index) => (
                <FlavorSection key={index} index={index} {...flavor} />
            ))}
        </section>
    );
}
