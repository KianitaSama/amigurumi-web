import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Button from '../components/common/Button.jsx'; // Tu botón original
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';
import { FaHeart, FaMapMarkerAlt, FaUserPlus, FaEye, FaHashtag } from 'react-icons/fa';

// Animación de corazoncito al hacer hover
const HeartBurst = () => (
    <motion.div
        initial={{ scale: 0, opacity: 0, y: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0], y: -50 }}
        transition={{ duration: 0.8 }}
        className="absolute text-rosado-principal pointer-events-none z-30"
    >
        <FaHeart size={24} />
    </motion.div>
);

const creators = [
    {
        id: 'c1',
        name: 'Luz del Bosque',
        specialty: 'Diseñadora Botánica',
        location: 'Puebla, MX',
        followers: '3.1k',
        image: '/src/assets/images/f1.png',
        tags: ['botánico', 'handmade'],
        color: 'verde-bosque',
        tapeColor: 'bg-emerald-200/60',
        rotation: '-rotate-2'
    },
    {
        id: 'c2',
        name: 'Milu Yarn',
        specialty: 'Minis Kawaii',
        location: 'Madrid, ES',
        followers: '5.6k',
        image: '/src/assets/images/f5.png',
        tags: ['kawaii', 'pastel'],
        color: 'rosado-principal', 
        tapeColor: 'bg-rose-200/60',
        rotation: 'rotate-1'
    },
    {
        id: 'c3',
        name: 'Colectivo Trama',
        specialty: 'Arte Mural',
        location: 'Valparaíso, CL',
        followers: '2.4k',
        image: '/src/assets/images/f3.png',
        tags: ['mural', 'comunidad'],
        color: 'lavanda-profundo',
        tapeColor: 'bg-purple-200/60',
        rotation: '-rotate-1'
    },
    {
        id: 'c4',
        name: 'Doña Beige',
        specialty: 'Slow Fashion',
        location: 'San Juan, AR',
        followers: '4k',
        image: '/src/assets/images/f4.png',
        tags: ['eco', 'vintage'],
        color: 'beige-calido',
        tapeColor: 'bg-orange-200/60',
        rotation: 'rotate-2'
    },
    {
        id: 'c5',
        name: 'Luna Gótica',
        specialty: 'Amigurumi Dark Cute',
        location: 'CDMX, MX',
        followers: '8.2k',
        image: '/src/assets/images/f2.png',
        tags: ['gótico', 'spooky'],
        color: 'lavanda-profundo',
        tapeColor: 'bg-indigo-300/60',
        rotation: 'rotate-3'
    },
    {
        id: 'c6',
        name: 'Pastel Stitch',
        specialty: 'Accesorios Coquette',
        location: 'Lima, PE',
        followers: '1.9k',
        image: '/src/assets/images/f6.png',
        tags: ['coquette', 'bows'],
        color: 'rosado-principal',
        tapeColor: 'bg-pink-100/70',
        rotation: '-rotate-2'
    },
    {
        id: 'c7',
        name: 'Cactus Joy',
        specialty: 'Mini Plantas Crochet',
        location: 'Arizona, US',
        followers: '12k',
        image: '/src/assets/images/f7.png',
        tags: ['cactus', 'decor'],
        color: 'verde-bosque',
        tapeColor: 'bg-lime-200/60',
        rotation: 'rotate-1'
    },
    {
        id: 'c8',
        name: 'Hebra Mágica',
        specialty: 'Muñecas de Trapo',
        location: 'Bogotá, CO',
        followers: '4.5k',
        image: '/src/assets/images/f8.png',
        tags: ['dolls', 'magic'],
        color: 'beige-calido',
        tapeColor: 'bg-yellow-100/60',
        rotation: '-rotate-3'
    },
    {
        id: 'c9',
        name: 'Neon Hook',
        specialty: 'Streetwear Tejido',
        location: 'Berlín, DE',
        followers: '6.7k',
        image: '/src/assets/images/f9.png',
        tags: ['neon', 'streetwear'],
        color: 'lavanda-profundo',
        tapeColor: 'bg-cyan-200/50',
        rotation: 'rotate-2'
    },
    {
        id: 'c10',
        name: 'Oso Meloso',
        specialty: 'Peluches Gigantes',
        location: 'Tokyo, JP',
        followers: '15.3k',
        image: '/src/assets/images/f10.png',
        tags: ['giant', 'fluffy'],
        color: 'rosado-principal',
        tapeColor: 'bg-red-200/50',
        rotation: '-rotate-1'
    },
    {
        id: 'c11',
        name: 'Tierra Lanar',
        specialty: 'Tintes Naturales',
        location: 'Oaxaca, MX',
        followers: '3.8k',
        image: '/src/assets/images/f11.png',
        tags: ['organic', 'natural'],
        color: 'verde-bosque',
        tapeColor: 'bg-stone-300/70',
        rotation: 'rotate-1'
    },
    {
        id: 'c12',
        name: 'Punto y Café',
        specialty: 'Patrones Express',
        location: 'Medellín, CO',
        followers: '2.1k',
        image: '/src/assets/images/f12.png',
        tags: ['fast', 'easy'],
        color: 'beige-calido',
        tapeColor: 'bg-orange-300/40',
        rotation: '-rotate-2'
    }
];

const Explore = () => {
    const { user } = useAuth();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div
            className="min-h-screen flex flex-col font-nunito"
            style={{
                backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(246, 240, 232, 0.88)), url(${fondoAmigurumi})`,
                backgroundSize: '450px',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar />

            <main className="flex-1 px-4 py-16 sm:px-8 max-w-7xl mx-auto w-full">
                
                <header className="text-center space-y-4 mb-20 relative">
                    <h1 className="text-5xl md:text-6xl font-pacifico text-gris-carbon leading-tight">
                        Explorar <span className="text-verde-bosque">Nuevos Perfiles</span>
                    </h1>
                    <div className="w-24 h-1 bg-rosado-principal/20 mx-auto rounded-full"></div>
                </header>

                <div className="columns-1 gap-12 sm:columns-2 lg:columns-3 xl:columns-4 space-y-16">
                    {creators.map((creator) => (
                        <motion.article
                            key={creator.id}
                            onMouseEnter={() => setHoveredId(creator.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`relative break-inside-avoid bg-white p-3 shadow-2xl border border-beige-calido/30 ${creator.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-500`}
                        >
                            {/* --- TAPE DE COLOR VARIABLE --- */}
                            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 ${creator.tapeColor} backdrop-blur-md border-x-2 border-white/40 shadow-sm z-30`}></div>

                            {/* Foto Polaroid con Botones Icono */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gris-carbon/5 flex items-center justify-center group">
                                <img
                                    src={creator.image}
                                    alt={creator.name}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:blur-[2px]"
                                />
                                
                                <AnimatePresence>
                                    {hoveredId === creator.id && (
                                        <>
                                            <HeartBurst />
                                            {/* --- OVERLAY DE BOTONES ICONO --- */}
                                            <motion.div 
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-white/20 backdrop-blur-[1px] flex items-center justify-center gap-4 z-20"
                                            >
                                                {/* Botón Ver Perfil (Icono) */}
                                                <Button color="white" rounded="full" className="!p-3 shadow-xl border-none">
                                                    <FaEye className="text-gris-carbon text-lg" />
                                                </Button>

                                                {/* Botón Seguir (Icono con tu componente original) */}
                                                <Button color={creator.color} rounded="full" className="!p-3 shadow-xl border-none">
                                                    <FaUserPlus className="text-lg" />
                                                </Button>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Info de la Tarjeta */}
                            <div className="mt-5 space-y-3 px-2 text-center">
                                <div>
                                    <h3 className="text-xl font-pacifico text-gris-carbon leading-none">{creator.name}</h3>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-rosado-principal font-black mt-1">{creator.specialty}</p>
                                </div>

                                {/* Hashtags como pequeñas nubes */}
                                <div className="flex flex-wrap justify-center gap-1">
                                    {creator.tags.map(tag => (
                                        <span key={tag} className="text-[8px] bg-gris-carbon/5 text-gris-carbon/40 px-2 py-0.5 rounded-full font-bold">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-2 flex flex-col items-center gap-1">
                                    <span className="text-[10px] uppercase tracking-[0.5em] text-black font-semibold">Ubicación</span>
                                    <div className="flex items-center gap-1 text-black text-[12px] font-bold">
                                        <FaMapMarkerAlt size={10} /> {creator.location}
                                    </div>
                                </div>
                                <div className="text-[12px] font-semibold text-gris-carbon/90">
                                    {creator.followers} seguidores
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Explore;