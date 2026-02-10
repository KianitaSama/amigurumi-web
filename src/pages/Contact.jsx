import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Button from '../components/common/Button.jsx';
import fondoAmigurumi from '../assets/images/AmigurumiFondo3.png';
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';

const contactChannels = [
    {
        id: 'instagram',
        label: 'Instagram',
        detail: '@KianaCrochet',
        icon: <FaInstagram size={20} className="text-sakura-oscuro" />,
        bgColor: 'bg-sakura-claro/30'
    },
    {
        id: 'email',
        label: 'Correo',
        detail: 'hola@kianacrochet.com',
        icon: <FaEnvelope size={18} className="text-cute-azul" />,
        bgColor: 'bg-cute-rojoClaro/40'
    },
    {
        id: 'phone',
        label: 'WhatsApp',
        detail: '+52 1 55 6789 3421',
        icon: <FaPhone size={18} className="text-cute-verde" />,
        bgColor: 'bg-verde-sage/30'
    },
    {
        id: 'studio',
        label: 'Estudio',
        detail: 'San Ángel, CDMX',
        icon: <FaMapMarkerAlt size={18} className="text-lavanda-profundo" />,
        bgColor: 'bg-lavanda-base/30'
    }
];

const Contact = () => (
    <div
        className="min-h-screen flex flex-col font-quicksand overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${fondoAmigurumi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
    >
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-4 py-12">
            <section className="max-w-4xl w-full flex flex-col items-center space-y-10">
                <div className="text-center space-y-4 animate-fade-in">
                    
                    <h1 className="text-5xl md:text-6xl font-pacifico text-lavanda-profundo drop-shadow-sm">
                        Contactanos <span className="text-rosado-principal">y Hablemos de Amigurumis</span>
                    </h1>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8  bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-lg border-4 border-principal-oscuro/20">

                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-pacifico text-sakura-oscuro flex items-center text-center gap-2">
                            Medios de Contacto
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {contactChannels.map((channel) => (
                                <div
                                    key={channel.id}
                                    className={`${channel.bgColor} flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed border-white transition-transform hover:scale-105`}
                                >
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        {channel.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-tighter font-bold text-gris-carbon/50">{channel.label}</p>
                                        <p className="text-sm font-bold text-gris-carbon">{channel.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-3 bg-beige-calido/50 rounded-[2rem] p-8 border-2 border-beige-calido shadow-inner relative overflow-hidden">

                        <form className="space-y-4">
                            <div className="group">
                                <label className="block text-xs font-bold text-verde-bosque mb-1 ml-2 uppercase">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="¿Cómo te llamas?"
                                    className="w-full px-5 py-3 rounded-2xl bg-white/80 border-2 border-transparent focus:border-sakura-medio focus:outline-none transition-all placeholder:text-gris-carbon/30"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold text-verde-bosque mb-1 ml-2 uppercase">Email</label>
                                <input
                                    type="email"
                                    placeholder="tu-correo@ejemplo.com"
                                    className="w-full px-5 py-3 rounded-2xl bg-white/80 border-2 border-transparent focus:border-cute-azul focus:outline-none transition-all"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold text-verde-bosque mb-1 ml-2 uppercase">Tu Mensaje</label>
                                <textarea
                                    rows="3"
                                    placeholder="Dime qué amigurumi sueñas..."
                                    className="w-full px-5 py-3 rounded-2xl bg-white/80 border-2 border-transparent focus:border-lavanda-base focus:outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <Button
                                color="sakura-oscuro"
                                className="w-full py-4 rounded-2xl text-lg font-pacifico shadow-lg hover:rotate-1 transition-transform"
                            >
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
);

export default Contact;