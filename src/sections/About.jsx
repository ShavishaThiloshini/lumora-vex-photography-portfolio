import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="section-padding bg-brand-bg-card">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 border border-brand-accent/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                    <img
                        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=1974"
                        alt="Lumora Vex Portrait"
                        className="w-full grayscale h-[600px] object-cover hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Shadow overlay for text legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-3xl font-playfair font-bold text-white drop-shadow-lg">Lumora Vex</h3>
                        <p className="text-brand-accent tracking-widest uppercase text-sm mt-2 drop-shadow-md font-medium">The Storyteller</p>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-4 block">The Soul Behind the Lens</span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Capturing Emotion Through <span className="italic font-normal">Stillness</span></h2>

                    <div className="space-y-6 text-brand-muted leading-loose text-lg font-light">
                        <p>
                            Lumora Vex is a cinematic photographer known for capturing emotion through light, shadow, and silence.
                            With a deep passion for storytelling, Lumora blends fine-art composition with raw, unscripted moments.
                        </p>
                        <p>
                            Specializing in portraits, street photography, and nature-driven narratives, the work is inspired by late-night city lights,
                            golden-hour landscapes, and human connection.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-8">
                        <div>
                            <p className="text-brand-text font-playfair text-xl italic mb-1">Cinematic</p>
                            <p className="text-brand-accent text-xs tracking-widest uppercase">Style</p>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
                        <div>
                            <p className="text-brand-text font-playfair text-xl italic mb-1">Storytelling</p>
                            <p className="text-brand-accent text-xs tracking-widest uppercase">Vision</p>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
                        <div>
                            <p className="text-brand-text font-playfair text-xl italic mb-1">Fine Art</p>
                            <p className="text-brand-accent text-xs tracking-widest uppercase">Approach</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
