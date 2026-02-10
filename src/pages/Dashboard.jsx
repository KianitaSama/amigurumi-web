import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';

const pins = [
    {
        id: 'p1',
        type: 'profile', // Identificador para la card de perfil
    },
    {
        id: '1',
        title: 'Jardín de amigurumis',
        description: 'Texturas y granulados suaves para tus patrones más dulces.',
        image: '/src/assets/images/f1.png',
        accent: 'from-rosado-principal/20',
        tags: ['#amigurumi', '#soft']
    },
    {
        id: '2',
        title: 'Texturas guardadas',
        description: 'Los favoritos de la comunidad, con hilos naturales y dorados.',
        image: '/src/assets/images/f2.png',
        accent: 'from-verde-sage/20',
        tags: ['#natural', '#crochet']
    },
    {
        id: '3',
        title: 'Calendario 2024',
        description: 'Planifica tus próximas publicaciones y colabora.',
        image: '/src/assets/images/f3.png',
        accent: 'from-lavanda-profundo/20',
        tags: ['#planner', '#hechoamano']
    },
    {
        id: '4',
        title: 'Moodboard Otoñal',
        description: 'Paleta de colores tierra para la nueva colección.',
        image: '/src/assets/images/f4.png',
        accent: 'from-verde-bosque/20',
        tags: ['#autumn', '#yarn']
    },
    {
        id: '5',
        title: 'Miniaturas Kawaii',
        description: 'Patrones gratuitos para crear mini animalitos.',
        image: '/src/assets/images/f5.png',
        accent: 'from-rosado-oscuro/20',
        tags: ['#kawaii', '#diy']
    },
    {
        id: '6',
        title: 'Workshop Presencial',
        description: '¡Nos vemos este sábado para tejer juntas!',
        image: '/src/assets/images/f1.png',
        accent: 'from-beige-calido/30',
        tags: ['#comunidad', '#tejer']
    }
];

const Dashboard = () => {
    const { user } = useAuth();
    console.log('user.role', user?.role);
    if (!user) return null;

    return (
        <div
            className="min-h-screen flex flex-col font-sans"
            style={{
                backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 241, 236, 0.8)), url(${fondoAmigurumi})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar />
            
            <main className="flex-1 px-4 py-12 sm:px-8">
                <div className="mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
                    
                    {pins.map((pin, index) => {
                        // CASO 1: LA CARTA DE PERFIL
                        if (pin.type === 'profile') {
                            return (
                                <motion.article
                                    key="profile-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ rotate: -1 }}
                                    className="relative break-inside-avoid bg-[#FFF9F5] rounded-xl p-6 shadow-xl border-2 border-dashed border-rosado-principal/30"
                                >
                                    {/* Chincheta decorativa */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-rosado-principal rounded-full shadow-inner z-20 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                    </div>

                                    <div className="flex flex-col items-center text-center space-y-4 pt-4">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-rosado-principal rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <img
                                                src={user.role === 'admin' ? '/src/assets/icons/iconoZorro.png' : '/src/assets/icons/iconoOsito.png'}
                                                alt="Avatar"
                                                className="relative w-32 h-32 rounded-full border-4 border-white shadow-md object-contain bg-white"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <h2 className="text-3xl font-pacifico text-lavanda-profundo leading-tight">
                                                {user.displayName}
                                            </h2>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-verde-bosque bg-verde-sage/10 py-1 px-3 rounded-full inline-block">
                                                {user.role === 'admin' ? 'El arte es hermoso' : 'Tejedora de Sueños'}
                                            </p>
                                        </div>

                                        <div className="w-full pt-4 border-t border-rosado-principal/10">
                                            <p className="text-xs text-gris-carbon/60 italic leading-relaxed">
                                                "Creando mundos de algodón y magia desde el corazón."
                                            </p>
                                        </div>

                                        <div className="flex gap-4 pt-2">
                                            <div className="text-center">
                                                <span className="block font-bold text-gris-carbon">24</span>
                                                <span className="text-[10px] text-gris-carbon/40 uppercase tracking-tighter">Patrones</span>
                                            </div>
                                            <div className="text-center border-x border-beige-calido px-4">
                                                <span className="block font-bold text-gris-carbon">1.2k</span>
                                                <span className="text-[10px] text-gris-carbon/40 uppercase tracking-tighter">Seguidores</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="block font-bold text-gris-carbon">85</span>
                                                <span className="text-[10px] text-gris-carbon/40 uppercase tracking-tighter">Siguiendo</span>
                                            </div>
                                        </div>
                                        
                                        <button className="w-full bg-gris-carbon text-white text-xs font-bold py-2 rounded-lg hover:bg-lavanda-profundo transition-colors duration-300 shadow-md">
                                            Editar Perfil
                                        </button>
                                    </div>
                                </motion.article>
                            );
                        }

                        // CASO 2: LOS PINES NORMALES
                        return (
                            <motion.article
                                key={pin.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                transition={{ delay: index * 0.05 }}
                                className="relative group break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/50 mb-6"
                            >
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-rosado-principal text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg transform active:scale-95 transition-all">
                                        Guardar
                                    </button>
                                </div>

                                <div className="relative overflow-hidden">
                                    <img 
                                        src={pin.image} 
                                        alt={pin.title} 
                                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${pin.accent} to-transparent opacity-40`}></div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-pacifico text-gris-carbon mb-1">{pin.title}</h3>
                                    <p className="text-xs text-gris-carbon/70 leading-relaxed mb-3 line-clamp-2">
                                        {pin.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {pin.tags?.map(tag => (
                                            <span key={tag} className="text-[10px] font-semibold text-lavanda-profundo/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-beige-calido/20">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-rosado-principal/10 border border-rosado-principal/20 flex items-center justify-center">
                                                <span className="text-[8px] text-rosado-principal font-bold">♥</span>
                                            </div>
                                            <span className="text-[10px] text-gris-carbon/40 font-medium">124</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="text-gris-carbon/30 hover:text-rosado-principal transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;