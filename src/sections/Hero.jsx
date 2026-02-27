import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070"
                    alt="Cinematic Background"
                    className="w-full h-full object-cover transform scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/70 via-brand-bg/30 to-brand-bg"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-brand-accent tracking-[0.5em] uppercase text-sm mb-4 font-medium">
                        Professional Photographer
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-none">
                        Lumora <span className="italic font-normal">Vex</span>
                    </h1>
                    <p className="max-w-xl text-white/90 text-lg md:text-xl font-light mb-10 leading-relaxed drop-shadow-md">
                        Turning fleeting moments into timeless frames.
                    </p>

                    <motion.a
                        href="#portfolio"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-brand-accent text-brand-bg font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                    >
                        Explore Portfolio
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
