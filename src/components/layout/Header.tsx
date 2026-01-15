"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Misu Stories', href: '/misu-stories' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    // Header is always visible/solid now as per request
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50 py-4"
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Section - Left */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="relative z-50 group flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/images/logo.jpg"
                                alt="LuxeMisu Logo"
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        </div>
                        <span className="font-serif text-3xl font-bold tracking-tighter text-primary group-hover:text-accent transition-colors duration-300">
                            LuxeMisu
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav - Centered */}
                <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative group py-2 whitespace-nowrap"
                        >
                            <span className="text-sm font-bold text-primary/80 group-hover:text-primary transition-colors tracking-wide">
                                {item.name}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Action Section - Right */}
                <div className="hidden lg:flex flex-1 justify-end">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/order">
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all font-bold">
                                Order Now
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex items-center h-full">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5 h-10 w-10" suppressHydrationWarning>
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l-border bg-background/98 backdrop-blur-xl p-0">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <div className="flex flex-col h-full px-8 py-12">
                                <div className="text-center mb-10">
                                    <span className="font-serif text-3xl font-bold text-primary">LuxeMisu</span>
                                </div>

                                <nav className="flex flex-col gap-6 items-center">
                                    {navItems.map((item) => (
                                        <SheetClose asChild key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="font-serif text-2xl text-primary/80 hover:text-accent transition-colors relative group"
                                            >
                                                {item.name}
                                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-1/2" />
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <div className="mt-auto">
                                    <Link href="/order" className="w-full">
                                        <Button className="w-full bg-primary text-white rounded-full py-6 text-lg shadow-lg font-bold">
                                            Order Online
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
