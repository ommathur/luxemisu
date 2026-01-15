"use client";

import { SectionHeader } from "@/components/custom/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { MapPin, Clock, Navigation, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
    Map,
    MapMarker,
    MarkerContent,
    MarkerLabel,
    MarkerPopup,
} from "@/components/ui/map";

const places = [
    {
        id: 1,
        name: "LuxeMisu Café",
        label: "LuxeMisu",
        category: "Premium Dessert Café",
        rating: 4.9,
        reviews: 156,
        hours: "1pm - 11pm (Mon-Thu) | 12pm - 12am (Fri-Sun)",
        image: "/images/LayersOfPureIndulgence.jpg",
        lat: 13.01576093843531,
        lng: 77.64033363860428,
        address: "Block 2, PNS Layout, Banaswadi, Bengaluru"
    }
];

export default function LocationPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Visit Us"
                    subtitle="Find your way to indulgence"
                    className="mb-12"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-muted/50">
                    {/* Interactive Map Section */}
                    <div className="relative h-[400px] lg:h-auto min-h-[400px] bg-muted group">
                        <Map
                            center={[77.64033363860428, 13.01576093843531]}
                            zoom={17}
                            className="w-full h-full"
                        >
                            {places.map((place) => (
                                <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                                    <MarkerContent>
                                        <div className="size-5 rounded-full bg-primary border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
                                        <MarkerLabel position="bottom" className="text-primary font-bold bg-white/90 px-2 py-0.5 rounded shadow-sm">
                                            {place.label}
                                        </MarkerLabel>
                                    </MarkerContent>
                                    <MarkerPopup className="p-0 w-64 shadow-xl border-none">
                                        <div className="relative h-32 overflow-hidden rounded-t-lg">
                                            <Image
                                                fill
                                                src={place.image}
                                                alt={place.name}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="space-y-3 p-4 bg-white rounded-b-lg">
                                            <div>
                                                <span className="text-xs font-bold text-accent uppercase tracking-wide">
                                                    {place.category}
                                                </span>
                                                <h3 className="font-serif font-bold text-lg text-primary leading-tight mt-1">
                                                    {place.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                                                    {place.address}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <div className="flex items-center gap-1">
                                                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                                    <span className="font-medium">{place.rating}</span>
                                                    <span className="text-muted-foreground">
                                                        ({place.reviews})
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                <Clock className="size-3.5" />
                                                <span>{place.hours}</span>
                                            </div>
                                            <div className="flex gap-2 pt-2">
                                                <Button size="sm" className="flex-1 h-8 bg-primary hover:bg-primary/90 text-white shadow-md text-xs" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`)}>
                                                    <Navigation className="size-3.5 mr-1.5" />
                                                    Directions
                                                </Button>
                                            </div>
                                        </div>
                                    </MarkerPopup>
                                </MapMarker>
                            ))}
                        </Map>
                    </div>

                    {/* Info Section */}
                    <div className="p-8 lg:p-16 flex flex-col justify-center space-y-10">
                        <motion.div
                            variants={fadeInUp}
                            initial="visible"
                            whileInView="visible"
                        >
                            <h3 className="font-serif text-4xl text-primary mb-2">LuxeMisu Café</h3>
                            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-8">Kalyan Nagar, Bengaluru</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl text-primary mb-2">Address</p>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            Luxemisu, Block 2, PNS Layout<br />
                                            Subbayianiah Palyam, Banaswadi<br />
                                            Bengaluru, Karnataka 560084
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl text-primary mb-2">Opening Hours</p>
                                        <div className="text-muted-foreground text-lg space-y-1">
                                            <p><span className="w-28 inline-block font-medium text-foreground">Mon - Thu:</span> 1:00 PM - 11:00 PM</p>
                                            <p><span className="w-28 inline-block font-medium text-foreground">Fri - Sun:</span> 12:00 PM - 12:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="visible"
                            whileInView="visible"
                            transition={{ delay: 0.2 }}
                            className="pt-4"
                        >
                            <Button
                                size="lg"
                                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg gap-2 shadow-lg"
                                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=13.01576093843531,77.64033363860428`, "_blank")}
                            >
                                <Navigation size={18} />
                                Get Directions
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
