"use client";

import { SectionHeader } from "@/components/custom/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Send, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionHeader
                    title="Get in Touch"
                    subtitle="We'd love to hear from you"
                    className="mb-12"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="font-serif text-3xl text-primary mb-6">Reach Us</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Have a question about our menu, bulk orders, or just want to say hello?
                                Drop us a message or visit us at our café.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 text-foreground/80 group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <span className="font-bold text-lg">+91 76769 03114</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="https://wa.me/917676903114" target="_blank">
                                <Button size="lg" className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                                    <Phone className="w-5 h-5" />
                                    <span className="font-bold">Chat on WhatsApp</span>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        initial="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-muted/30 p-8 md:p-10 rounded-2xl shadow-xl border border-border/50"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-primary tracking-wide">Name</label>
                                <Input id="name" placeholder="Your name" className="bg-background border-input/60 focus:border-accent h-12" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-primary tracking-wide">Phone</label>
                                <Input id="phone" placeholder="Your phone number" type="tel" className="bg-background border-input/60 focus:border-accent h-12" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-primary tracking-wide">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="bg-background border-input/60 focus:border-accent min-h-[150px] resize-none" />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white gap-2 rounded-lg text-lg py-6 mt-4 font-bold">
                                <Send size={18} />
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
