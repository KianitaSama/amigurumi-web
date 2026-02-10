import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterest, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Esta es la única línea para XTwitter
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-sakura-oscuro/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-3">
                        <span className="text-rosado-principal font-pacifico text-xl opacity-80">✿</span>
                        <div className="flex flex-col">
                            <h2 className="text-sm font-nunito font-bold text-gris-carbon tracking-tight">Amigurumi Web</h2>
                            <p className="text-[10px] uppercase tracking-widest text-cute-gris/60">Artesanía Digital</p>
                        </div>
                    </div>

                    <nav className="flex items-center gap-6">
                        <Link to={ROUTES.ABOUT} className="text-[11px] uppercase tracking-widest text-cute-gris hover:text-sakura-oscuro transition-colors font-bold border-b-2 border-transparent hover:border-sakura-claro">
                            Nosotros
                        </Link>
                        <Link to={ROUTES.CONTACT} className="text-[11px] uppercase tracking-widest text-cute-gris hover:text-sakura-oscuro transition-colors font-bold border-b-2 border-transparent hover:border-sakura-claro">
                            Contacto
                        </Link>
                        <span className="text-beige-calido">|</span>
                        <Link to={ROUTES.PRIVACY} className="text-[10px] uppercase tracking-widest text-cute-gris/60 hover:text-sakura-oscuro transition-colors font-medium">
                            Privacidad
                        </Link>
                        <Link to={ROUTES.TERMS} className="text-[10px] uppercase tracking-widest text-cute-gris/60 hover:text-sakura-oscuro transition-colors font-medium">
                            Términos y Condiciones
                        </Link>
                    </nav>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 border-r border-beige-calido pr-6">
                            <a href="#" className="text-cute-gris hover:text-rosado-principal transition-all duration-300 hover:scale-110">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="text-cute-gris hover:text-cute-azul transition-all duration-300 hover:scale-110">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="#" className="text-cute-gris hover:text-gris-carbon transition-all duration-300 hover:scale-110">
                                <FaXTwitter size={16} /> 
                            </a>
                            <a href="#" className="text-cute-gris hover:text-cute-rojo transition-all duration-300 hover:scale-110">
                                <FaPinterest size={18} />
                            </a>
                        </div>
                        <p className="text-[11px] text-cute-gris/80 font-nunito flex items-center gap-1.5">
                            © 2026 • Hecho a Mano<FaHeart size={10} className="text-rosado-principal/60" />
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;