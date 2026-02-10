import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import { useAuth } from '../context/AuthContext';
import fondoAmigurumi from '../assets/images/fondoAmigurumi2.png';
import iconoOsito from '../assets/icons/iconoOsito.png'; 
import iconoZorro from '../assets/icons/iconoZorro.png'; 

import { FaHashtag, FaMapMarkerAlt, FaQuoteLeft, FaCut, FaPalette, FaCertificate } from 'react-icons/fa';

const Profile = () => {
    const { user } = useAuth();
    
    if (!user) return <div className="min-h-screen bg-beige-calido" />;

    const isAdmin = user.role === 'admin';

    const profileData = {
        name: isAdmin ? "Administrador" : (user.displayName || "Lulu Campos"),
        role: isAdmin ? "Lourdes" : "Maria Tejedora",
        avatar: isAdmin ? iconoZorro : iconoOsito,
        bio: isAdmin 
            ? "Vigilando que cada puntada del código sea perfecta y los hilos fluyan sin nudos." 
            : "Mi vida se mide en metros de lana, tazas de café y muchos amigurumis por terminar.",
        tags: isAdmin ? ['Seguridad', 'Magia', 'Orden'] : ['Algodón', 'Kawaii', 'Punto Bajo']
    };

    return (
        <div
            className="min-h-screen flex flex-col bg-azul-cielo"
            style={{
                backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 241, 236, 0.75)), url(${fondoAmigurumi})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar/>
            
            <main className="flex-1 py-12 px-4 relative overflow-hidden">

                <div className="max-w-4xl mx-auto relative z-10">
                    
                    <div className="flex flex-col items-center mb-16">
                        <div className="relative group">
                            <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-beige-calido">
                                <img 
                                    src={profileData.avatar} 
                                    alt="Profile" 
                                    className="w-48 h-48 md:w-56 md:h-56 object-contain bg-beige-calido/30"
                                />
                                <div className="absolute bottom-4 left-0 right-0 text-center font-pacifico text-gris-carbon/40 text-lg">
                                    {isAdmin ? "#El jefe" : "#Hecho a mano"}
                                </div>
                            </div>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-rosado-principal/40 backdrop-blur-sm -rotate-3 border-x border-rosado-principal/20 z-20"></div>
                        </div>

                        <div className="text-center mt-8 space-y-2">
                            <h1 className="text-5xl font-pacifico text-lavanda-profundo drop-shadow-sm">
                                {profileData.name}
                            </h1>
                            <div className="inline-block bg-verde-sage/20 text-verde-bosque px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.3em]">
                                {profileData.role}
                            </div>
                        </div>
                    </div>

                    {/* --- CONTENIDO ESTILO "SCRAPBOOK" --- */}
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        
                        {/* Notas adhesivas (Bio e Info) */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Nota estilo Post-it */}
                            <div className="bg-[#FFF9C4]/50 p-6 shadow-md transform rotate-1 border-l-4 border-yellow-400 relative">
                                <FaQuoteLeft className="text-yellow-400/30 absolute top-2 right-2 text-2xl" />
                                <h3 className="font-nunito font-bold text-gris-carbon mb-2 flex items-center gap-2">
                                    <FaCut className="text-rosado-principal" /> Mi Historia
                                </h3>
                                <p className="font-nunito text-gris-carbon/80 leading-relaxed italic text-sm">
                                    {profileData.bio}
                                </p>
                            </div>

                            {/* Ubicación con borde punteado */}
                            <div className="bg-white/40 border-2 border-dashed border-sakura-oscuro/20 p-6 rounded-2xl shadow-sm">
                                <h3 className="font-nunito font-bold text-gris-carbon mb-4 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-sakura-oscuro" /> Estación
                                </h3>
                                <p className="text-xs text-gris-carbon/60 uppercase tracking-widest font-bold">
                                    {isAdmin ? "Soporte Central" : "Coyoacán, México"}
                                </p>
                            </div>
                        </div>

                        {/* Muestrario de Estilos (Tags) */}
                        <div className="md:col-span-3 bg-white p-8 rounded-[2rem] shadow-sm border border-beige-calido relative">
                            {/* Detalle de costura lateral (puntos decorativos) */}
                            <div className="absolute left-0 top-10 bottom-10 w-1 border-r-2 border-dotted border-sakura-oscuro/30"></div>
                            
                            <h3 className="font-pacifico text-2xl text-gris-carbon mb-6 flex items-center gap-3">
                                <span className="text-rosado-principal text-3xl">✿</span> Muestrario
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {profileData.tags.map((tag, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-beige-calido/20 rounded-xl border-b-2 border-transparent hover:border-rosado-principal transition-all group"
                                    >
                                        <FaHashtag className="text-rosado-principal/30 group-hover:text-rosado-principal transition-colors" />
                                        <span className="font-nunito font-bold text-gris-carbon/70">{tag}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-4 bg-gradient-to-br from-rosado-principal/5 to-transparent rounded-2xl border border-rosado-principal/10 text-center">
                                <p className="text-[10px] font-nunito font-bold text-rosado-principal uppercase tracking-[0.2em]">
                                    Proyectos en curso: 5 ovillos pendientes
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;