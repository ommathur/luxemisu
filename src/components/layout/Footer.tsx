"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold tracking-tight">LuxeMisu</h2>
                        <p className="text-primary-foreground/80 leading-relaxed max-w-xs font-light">
                            Crafted Tiramisu, Done Right. Experience the layers of pure indulgence in every bite.
                        </p>
                        <div className="flex gap-4">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="hover:text-accent transition-colors cursor-pointer">
                                <Link href="https://www.instagram.com/luxemisu/?hl=en"><Instagram size={22} /></Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 font-bold">Explore</h3>
                        <ul className="space-y-4">
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors duration-300 inline-block">Our Story</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link href="/menu" className="text-primary-foreground/80 hover:text-white transition-colors duration-300 inline-block">Menu</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link href="/misu-stories" className="text-primary-foreground/80 hover:text-white transition-colors duration-300 inline-block">Misu Stories</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Link href="/location" className="text-primary-foreground/80 hover:text-white transition-colors duration-300 inline-block">Locations</Link>
                            </motion.li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 font-bold">Contact</h3>
                        <ul className="space-y-4 text-primary-foreground/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 shrink-0 mt-1 text-accent" />
                                <span>Luxemisu, Block 2,<br />PNS Layout, Subbayianiah Palyam,<br />Banaswadi, Bengaluru,<br />Karnataka 560084</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0 text-accent" />
                                <span>+91 76769 03114</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 font-bold">Hours</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li className="flex justify-between border-b border-primary-foreground/10 pb-2"><span>Mon - Thu</span> <span>1pm - 11pm</span></li>
                            <li className="flex justify-between pt-2"><span>Fri - Sun</span> <span>12pm - 12am</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60 text-sm font-light tracking-wider">
                    <p>&copy; {new Date().getFullYear()} LuxeMisu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
