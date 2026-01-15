"use client";

import { motion } from "framer-motion";
import { SiZomato, SiSwiggy } from "react-icons/si";

export default function OrderPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 container mx-auto flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl w-full space-y-12"
            >
                <div>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-primary">Order Now</h1>
                    <p className="text-muted-foreground text-lg">
                        Craving Tiramisu? Get it delivered to your doorstep in minutes.
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
                    {/* Zomato Button */}
                    <a
                        href="https://www.zomato.com/bangalore/luxemisu-kammanahalli-bangalore/order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full bg-[#E23744] hover:bg-[#c92f3b] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <SiZomato className="w-8 h-8" />
                        <span className="font-bold text-xl tracking-wide">Order on Zomato</span>
                    </a>

                    {/* Swiggy Button */}
                    <a
                        href="https://www.swiggy.com/city/bangalore/luxemisu-tiramisu-cafe-kammanahalli-kalyan-nagar-rest1186457"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full bg-[#FC8019] hover:bg-[#e37112] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <SiSwiggy className="w-8 h-8" />
                        <span className="font-bold text-xl tracking-wide">Order on Swiggy</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
