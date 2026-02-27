import { motion } from "framer-motion";
import { FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-brand-bg relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-playfair font-black text-white/[0.02] select-none z-0">
                LV
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Info Side */}
                    <div>
                        <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-4 block">Connect</span>
                        <h2 className="text-5xl md:text-7xl font-bold font-playfair mb-12 leading-tight">Let's Frame Your <span className="italic font-normal">Story</span></h2>

                        <p className="text-brand-muted text-xl font-light leading-loose mb-16 max-w-md">
                            Available for bespoke portrait sessions, editorial projects, and cinematic visual narratives worldwide.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mb-2 font-medium">Email</p>
                                <p className="text-2xl font-playfair hover:text-brand-accent cursor-pointer transition-colors">studio@lumoravex.com</p>
                            </div>
                            <div>
                                <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mb-2 font-medium">Social</p>
                                <div className="flex gap-6 mt-4">
                                    {[FaInstagram, FaBehance, FaTwitter].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ y: -5, color: "#D4AF37" }}
                                            className="text-2xl text-brand-text transition-colors"
                                        >
                                            <Icon />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-bg-card p-8 md:p-12 border border-white/5"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors peer"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-500 peer-focus:w-full"></div>
                                </div>
                                <div className="group relative">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors peer"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-500 peer-focus:w-full"></div>
                                </div>
                            </div>
                            <div className="group relative">
                                <textarea
                                    placeholder="Tell your story"
                                    rows="4"
                                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors peer resize-none"
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-500 peer-focus:w-full"></div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 bg-white text-brand-bg text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-colors duration-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
