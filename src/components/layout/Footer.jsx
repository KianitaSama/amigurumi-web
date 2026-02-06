import React from 'react';
import { FaInstagram, FaPinterest, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-sakura-oscuro/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* --- MARCA LIGERA --- */}
                    <div className="flex items-center gap-3">
                        <span className="text-rosado-principal font-pacifico text-xl opacity-80">✿</span>
                        <div className="flex flex-col">
                            <h2 className="text-sm font-nunito font-bold text-gris-carbon tracking-tight">Amigurumi Web</h2>
                            <p className="text-[10px] uppercase tracking-widest text-cute-gris/60">Artesanía Digital</p>
                        </div>
                    </div>

                    {/* --- LINKS MINIMALISTAS --- */}
                    <nav className="flex items-center gap-6">
                        <a href="#" className="text-[11px] uppercase tracking-widest text-cute-gris hover:text-sakura-oscuro transition-colors font-medium">Privacidad</a>
                        <a href="#" className="text-[11px] uppercase tracking-widest text-cute-gris hover:text-sakura-oscuro transition-colors font-medium">Términos</a>
                        <a href="#" className="text-[11px] uppercase tracking-widest text-cute-gris hover:text-sakura-oscuro transition-colors font-medium">Contacto</a>
                    </nav>

                    {/* --- SOCIAL & COPYRIGHT --- */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 border-r border-beige-calido pr-6">
                            <a href="#" className="text-cute-gris hover:text-rosado-principal transition-colors">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="text-cute-gris hover:text-rosado-principal transition-colors">
                                <FaPinterest size={16} />
                            </a>
                        </div>
                        <p className="text-[11px] text-cute-gris/80 font-nunito flex items-center gap-1.5">
                            © 2026 • Hecho con <FaHeart size={10} className="text-rosado-principal/60" />
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;