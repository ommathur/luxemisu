"use client";

import { FadeIn, StaggerItem, ImmediateStaggerContainer } from "@/components/AnimationWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MENU_DATA } from "@/lib/menu-data";

export default function MenuPage() {
    const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);

    const activeCategory = MENU_DATA.find((cat) => cat.id === activeTab);
    const activeSections = activeCategory ? activeCategory.sections : [];

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 mx-auto text-center pt-32 min-h-screen bg-background text-foreground">
            <FadeIn className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-primary">Our Menu</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Curated for Perfection. Experience the layers of pure indulgence.
                </p>
            </FadeIn>

            <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Custom Tab List */}
                <div className="flex justify-center mb-12 w-full overflow-x-auto pb-4 no-scrollbar">
                    <div className="bg-muted/50 p-1 rounded-full inline-flex h-9 flex-nowrap justify-center gap-1 min-w-max">
                        {MENU_DATA.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "relative rounded-full px-4 py-1 text-xs md:text-sm transition-all whitespace-nowrap",
                                    activeTab === tab.id
                                        ? "text-primary-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <span className="relative z-10">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full shadow-sm"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animated Content Area */}
                <div className="w-full min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full space-y-16"
                        >
                            {activeSections.map((section, idx) => (
                                <div key={idx} className="flex flex-col items-center w-full">
                                    <div className="mb-8 border-b border-muted pb-2 w-full max-w-5xl mx-auto text-left">
                                        <h2 className="font-serif text-3xl font-bold text-primary">{section.title}</h2>
                                    </div>

                                    <ImmediateStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full max-w-5xl mx-auto text-left">
                                        {section.items.map((item, itemIdx) => (
                                            <StaggerItem
                                                key={itemIdx}
                                                className="flex justify-between items-start group border-b border-border/40 pb-4 last:border-0 hover:bg-muted/20 p-2 rounded-lg transition-colors"
                                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            >
                                                <div className="pr-4 space-y-1">
                                                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors font-sans">{item.name}</h3>
                                                    {item.description && <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>}
                                                </div>
                                                <span className="font-bold text-lg text-secondary shrink-0 whitespace-nowrap">₹{item.price}</span>
                                            </StaggerItem>
                                        ))}
                                    </ImmediateStaggerContainer>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
