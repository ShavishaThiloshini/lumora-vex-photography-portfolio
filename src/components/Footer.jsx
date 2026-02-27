import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-brand-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-playfair font-bold">
                    Lumora <span className="text-brand-accent">Vex</span>
                </div>

                <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                    <a href="#home" className="hover:text-brand-accent transition-colors">Home</a>
                    <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
                    <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
                    <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                    <FaRegCopyright />
                    <span>{new Date().getFullYear()} Lumora Vex. Captured in silence.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
