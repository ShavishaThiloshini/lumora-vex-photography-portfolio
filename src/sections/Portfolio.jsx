import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Portraits", "Street", "Nature", "Editorial"];

    const projects = [
        { title: "Urban Silence", category: "Street", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1000" },
        { title: "Golden Hour", category: "Nature", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000" },
        { title: "Shadow Play", category: "Portraits", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" },
        { title: "Vogue Noir", category: "Editorial", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=1000" },
        { title: "Neon Nights", category: "Street", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000" },
        { title: "Earth's Breath", category: "Nature", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000" },
        { title: "The Gaze", category: "Portraits", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000" },
        { title: "Sartorial", category: "Editorial", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000" },
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="section-padding bg-brand-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-4 block">Captures</span>
                        <h2 className="text-5xl font-bold font-playfair">Curated <span className="italic font-normal">Works</span></h2>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${filter === cat ? "bg-brand-accent border-brand-accent text-brand-bg" : "border-white/10 text-brand-muted hover:border-white/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="relative group overflow-hidden bg-brand-bg-card aspect-[4/5]"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 text-center">
                                    <span className="text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-playfair font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {project.title}
                                    </h3>
                                    <div className="w-12 h-[1px] bg-brand-accent mt-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
