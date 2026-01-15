"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: "Origins of Indulgence",
        content: "LuxeMisu began with a question: Why is Tiramisu always just a dessert option, never the main event? We set out to change that. In a small kitchen in Kalyan Nagar, we started deconstructing the classic—perfecting the soak, the whip, and the dust. We wanted to create a sanctuary where silence meets sweetness, and every layer tells a story of patience.",
        image: "/images/About1.jpg",
        align: "left",
    },
    {
        title: "The Art of Layers",
        content: "We believe in the sanctity of the process. Our Savoiardi are crisp yet porous enough to hold the soul of the espresso. Our Mascarpone is whipped to an ethereal lightness that defies gravity. We don't just stack ingredients; we build experiences. It’s not fast food; it’s slow art, crafted for those who pause to taste.",
        image: "/images/About2.jpg",
        align: "right",
        imagePosition: "object-[center_70%]",
    },
    {
        title: "Savoury Traditions",
        content: (
            <>
                <p>Our pizzas are built on thin, crisp bases, layered with rich tomato sauces, creamy mozzarella, and carefully chosen toppings—from classic Margherita to bold, flavor-forward creations. Every pizza is balanced, indulgent, and made to be enjoyed slowly.</p>
                <p>Our pastas celebrate comfort and character. Whether it’s a creamy Alfredo, a fiery Arrabbiata, or a fusion-inspired Chettinad sauce, each plate brings together quality ingredients, generous textures, and depth of flavor—cooked al dente and finished with finesse.</p>
                <p>Together, our pizzas and pastas offer a savory counterpoint to LuxeMisu’s signature tiramisu—simple, satisfying, and crafted for those who appreciate food made with intention.</p>
            </>
        ),
        image: "/images/About3.jpg",
        align: "left",
    },
    {
        title: "Liquid Artistry",
        content: "At Luxemisu, every drink is crafted as an experience. From vibrant, refreshing coolers to rich, indulgent tiramisu-inspired blends, our beverages are made using thoughtfully selected ingredients and carefully balanced flavors. Each creation reflects our passion for quality, creativity, and indulgence — designed to refresh, delight, and leave a lasting impression with every sip.",
        image: "/images/About4.jpg",
        align: "right",
    }
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Our Story"
                    subtitle="Passion in Every Layer"
                    className="mb-20"
                />

                <div className="space-y-24 md:space-y-32">
                    {sections.map((section, index) => (
                        <div key={index} className={cn(
                            "flex flex-col gap-12 items-center",
                            section.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                        )}>
                            {/* Image Side */}
                            <motion.div
                                variants={section.align === "left" ? slideInLeft : slideInRight}
                                initial="visible"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl"
                            >
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className={cn(
                                        "object-cover hover:scale-105 transition-transform duration-700",
                                        // @ts-ignore
                                        section.imagePosition
                                    )}
                                />
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                variants={fadeInUp}
                                initial="visible"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full md:w-1/2 md:px-12 text-center md:text-left space-y-6"
                            >
                                <h3 className="font-serif text-3xl md:text-4xl text-primary">{section.title}</h3>
                                <div className="text-muted-foreground text-lg leading-relaxed font-light space-y-4">
                                    {section.content}
                                </div>
                                <div className="h-1 w-12 bg-accent mt-6 mx-auto md:mx-0 rounded-full" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
