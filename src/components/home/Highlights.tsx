"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Coffee, Star, ChefHat } from "lucide-react";

const highlights = [
    {
        icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-accent/80" />,
        title: "Classic Italian Tiramisu",
        description: "Authentic Savoiardi fingers soaked in premium espresso, layered with silky mascarpone cream."
    },
    {
        icon: <Coffee className="w-8 h-8 md:w-10 md:h-10 text-accent/80" />,
        title: "Authentic Tiramisu Cafe",
        description: "India’s First Exclusive Authentic Italian Tiramisu Cafe with 12+ varieties of handcrafted artisanal Tiramisus."
    },
    {
        icon: <ChefHat className="w-8 h-8 md:w-10 md:h-10 text-accent/80" />,
        title: "Handcrafted Daily",
        description: "No preservatives. No shortcuts. Just fresh, high-quality ingredients made with passion."
    }
];

export function Highlights() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-background p-10 rounded-2xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow group"
                        >
                            <div className="w-20 h-20 mx-auto bg-main/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 bg-secondary/10">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
