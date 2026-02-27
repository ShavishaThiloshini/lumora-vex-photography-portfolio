import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Featured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "The Midnight Pulse",
            desc: "Exploring the electric energy of Tokyo's neon-lit corners.",
            img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Whispers of Mist",
            desc: "The ethereal dance of fog over the rugged Scottish highlands.",
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Soul of the Street",
            desc: "Raw, unscripted human emotions captured in black and white.",
            img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070",
        },
    ];

    const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-24 bg-brand-bg-card overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
                <div>
                    <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-4 block">Exhibitions</span>
                    <h2 className="text-5xl font-bold font-playfair">Featured <span className="italic font-normal">Narratives</span></h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all duration-300">
                        <HiArrowLeft />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all duration-300">
                        <HiArrowRight />
                    </button>
                </div>
            </div>

            <div className="relative h-[600px] md:h-[800px] w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="absolute inset-0"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                            <div className="lg:col-span-8 relative h-full overflow-hidden">
                                <img
                                    src={slides[currentIndex].img}
                                    alt={slides[currentIndex].title}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="lg:col-span-4 bg-brand-bg flex flex-col justify-center p-12 lg:p-24 border-y border-white/5 lg:border-y-0">
                                <span className="text-brand-accent tracking-[0.4em] text-[10px] uppercase mb-6">Series {currentIndex + 1}</span>
                                <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
                                    {slides[currentIndex].title}
                                </h3>
                                <p className="text-brand-muted text-lg font-light leading-loose mb-12">
                                    {slides[currentIndex].desc}
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="h-[1px] w-12 bg-brand-accent"></div>
                                    <span className="text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent cursor-pointer transition-colors">View Series</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Featured;
