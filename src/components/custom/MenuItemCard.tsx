"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuItemProps {
    title: string;
    description: string;
    price: string;
    image?: string;
    tags?: string[];
    isFeatured?: boolean;
}

export function MenuItemCard({ title, description, price, image, tags, isFeatured }: MenuItemProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Card className="overflow-hidden border-border/50 group h-full flex flex-col hover:shadow-lg transition-shadow duration-500 bg-white">
                <div className="relative h-48 overflow-hidden bg-muted">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground bg-secondary/10">
                            <span className="font-serif italic">LuxeMisu</span>
                        </div>
                    )}
                    {isFeatured && (
                        <Badge className="absolute top-4 right-4 bg-accent text-white hover:bg-accent/90 shadow-md">
                            Bestseller
                        </Badge>
                    )}
                </div>

                <CardContent className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                        <span className="font-bold text-lg text-primary">{price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {description}
                    </p>
                    {tags && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-secondary/20 px-2 py-1 rounded-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
