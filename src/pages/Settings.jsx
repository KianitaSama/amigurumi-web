import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Button from '../components/common/Button.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi2.png';
import iconoOsito from '../assets/icons/iconoOsito.png';
import iconoZorro from '../assets/icons/iconoZorro.png';
import { useAuth } from '../context/AuthContext.jsx';
import {
    FaUser, FaLock, FaShieldAlt,
    FaPalette, FaMapMarkerAlt, FaHeart, FaGlobeAmericas, FaIdCard, FaUsers, FaChartLine
} from 'react-icons/fa';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('perfil');
    const { user } = useAuth();

    const persona = user?.role === 'admin'
        ? { name: 'Administradora', label: 'Coordinadora', src: iconoZorro }
        : { name: 'Lulu', label: 'Creadora', src: iconoOsito };

    const tabs = [
        { id: 'perfil', label: 'Mi Perfil', icon: <FaUser /> },
        { id: 'cuenta', label: 'Ubicación', icon: <FaMapMarkerAlt /> },
        { id: 'privacidad', label: 'Seguridad', icon: <FaShieldAlt /> },
        { id: 'preferencias', label: 'Mi Mood', icon: <FaPalette /> },
    ];

    const adminStats = [
        {
            label: 'Nuevas creaciones',
            value: '18',
            detail: 'En revisión para la vitrina',
            icon: <FaChartLine className="text-rosado-principal text-2xl" />
        },
        {
            label: 'Soporte respondido',
            value: '98%',
            detail: 'Resuelto en la última semana',
            icon: <FaUsers className="text-rosado-principal text-2xl" />
        }
    ];

    const inputClass = "w-full px-5 py-3 rounded-2xl border-2 border-beige-calido bg-white outline-none transition-all duration-300 text-sm font-medium focus:border-rosado-principal focus:ring-4 focus:ring-rosado-principal/10 placeholder:text-gris-carbon/30 shadow-sm";

    const backgroundStyle = {
        backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 241, 236, 0.75)), url(${fondoAmigurumi})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };

    return (
        <div className="min-h-screen w-full flex flex-col font-quicksand" style={backgroundStyle}>
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    <aside className="lg:w-1/4">
                        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-xl shadow-beige-calido/40 border border-beige-calido/50 sticky top-20 z-10">
                            <h2 className="hidden md:block font-pacifico text-lavanda-profundo text-xl mb-6 px-4">Configuración</h2>

                            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-3 md:gap-4 px-5 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                                ? 'bg-rosado-principal text-white shadow-lg shadow-rosado-principal/30 scale-105'
                                                : 'text-gris-carbon/50 hover:bg-beige-calido/30 hover:text-rosado-principal'
                                            }`}
                                    >
                                        <span className={`text-lg ${activeTab === tab.id ? 'animate-bounce' : ''}`}>{tab.icon}</span>
                                        <span className="text-xs md:text-sm tracking-wide">{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <section className="lg:w-3/4 transition-all duration-500">
                        <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border-4 border-white min-h-[500px]">

                            {activeTab === 'perfil' && (
                                <div className="space-y-8 animate-in fade-in duration-500">
                                    <div className="flex items-center gap-4">
                                        <FaIdCard className="text-rosado-principal text-2xl" />
                                        <header>
                                            <h3 className="text-2xl md:text-3xl font-pacifico text-gris-carbon">Tu Identidad</h3>
                                            <p className="text-gris-carbon/50 text-xs md:text-sm">Personaliza cómo te presentas al mundo creativo.</p>
                                        </header>
                                    </div>

                                    <div className="flex flex-col gap-3 border-b border-beige-calido pb-8">
                                        <p className="text-[11px] uppercase tracking-[0.5em] text-gris-carbon/50">Cuenta activa</p>
                                        <div className="flex items-center gap-4 px-6 py-5 rounded-[2.5rem] bg-white/90 border border-beige-calido shadow-lg shadow-beige-calido/20">
                                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-inner bg-beige-calido/40">
                                                <img src={persona.src} alt={`${persona.name} avatar`} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gris-carbon text-sm">{persona.name}</p>
                                                <p className="text-[10px] text-gris-carbon/60 uppercase tracking-[0.2em]">{persona.label}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {user?.role === 'admin' && (
                                        <div className="space-y-6">
                                            <p className="text-[11px] uppercase tracking-[0.5em] text-gris-carbon/60">Estadísticas del taller</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {adminStats.map((stat) => (
                                                    <div key={stat.label} className="p-5 rounded-[2rem] bg-white/80 border border-beige-calido shadow-inner flex gap-4 items-center">
                                                        <div className="p-3 bg-rosado-principal/10 rounded-2xl">
                                                            {stat.icon}
                                                        </div>
                                                        <div>
                                                            <p className="text-2xl font-pacifico text-gris-carbon">{stat.value}</p>
                                                            <p className="text-[11px] uppercase tracking-[0.3em] text-gris-carbon/60">{stat.label}</p>
                                                            <p className="text-[10px] text-gris-carbon/50">{stat.detail}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex flex-col md:flex-row gap-8 items-center border-b border-beige-calido pb-8">
                                        <div className="flex-1 space-y-4 w-full">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[10px] font-bold uppercase text-verde-bosque ml-2 tracking-widest">Nombre Completo</label>
                                                    <input type="text" placeholder="Kiana Chavez" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[10px] font-bold uppercase text-verde-bosque ml-2 tracking-widest">Nombre de Usuario</label>
                                                    <input type="text" placeholder="@kiana_crochet" className={inputClass} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-[10px] font-bold uppercase text-verde-bosque ml-2 tracking-widest">Bio de Artesana</label>
                                                <textarea rows="3" placeholder="Tejedora de sueños y amigurumis..." className={`${inputClass} resize-none`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button color="rosado-principal">Guardar Cambios</Button>
                                    </div>
                                </div>
                            )}

                            {/* Pestaña: CUENTA Y UBICACIÓN */}
                            {activeTab === 'cuenta' && (
                                <div className="space-y-8 animate-in fade-in duration-500">
                                    <div className="flex items-center gap-4">
                                        <FaGlobeAmericas className="text-cute-azul text-2xl" />
                                        <header>
                                            <h3 className="text-2xl md:text-3xl font-pacifico text-gris-carbon">Ubicación y Contacto</h3>
                                            <p className="text-gris-carbon/50 text-xs md:text-sm">Esto nos ayuda a conectarte con creadores cercanos.</p>
                                        </header>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[10px] font-bold uppercase text-lavanda-profundo ml-2 tracking-widest">País / Región</label>
                                            <div className="relative">
                                                <select className={`${inputClass} appearance-none cursor-pointer pr-10`}>
                                                    <option>México</option>
                                                    <option>España</option>
                                                    <option>Argentina</option>
                                                    <option>Chile</option>
                                                    <option>Perú</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-lavanda-profundo">
                                                    <FaGlobeAmericas size={14} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[10px] font-bold uppercase text-lavanda-profundo ml-2 tracking-widest">Ciudad / Estado</label>
                                            <input type="text" placeholder="Ciudad de México" className={inputClass} />
                                        </div>
                                        <div className="flex flex-col gap-1.5 md:col-span-2">
                                            <label className="text-[10px] font-bold uppercase text-lavanda-profundo ml-2 tracking-widest">Dirección de Taller / Hogar</label>
                                            <input type="text" placeholder="Calle, número, colonia y código postal" className={inputClass} />
                                        </div>
                                        <div className="md:col-span-2 bg-beige-calido/20 p-5 rounded-2xl border border-dashed border-beige-calido text-center">
                                            <p className="text-[11px] text-gris-carbon/60 font-medium italic">
                                                Tu dirección exacta nunca será pública, solo se usa para calcular envíos si decides vender tus diseños.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <Button color="lavanda-profundo">Actualizar Ubicación</Button>
                                    </div>
                                </div>
                            )}

                            {/* Pestaña: SEGURIDAD */}
                            {activeTab === 'privacidad' && (
                                <div className="space-y-8 animate-in fade-in duration-500">
                                    <header>
                                        <h3 className="text-2xl md:text-3xl font-pacifico text-gris-carbon">Seguridad</h3>
                                        <p className="text-gris-carbon/50 text-xs md:text-sm">Protege tu cuenta y tus datos personales.</p>
                                    </header>

                                    <div className="space-y-4">
                                        <ToggleRow title="Cuenta Privada" desc="Solo personas que apruebes podrán ver tus colecciones." active />
                                        <ToggleRow title="Filtro de Amabilidad" desc="Bloquear automáticamente comentarios con palabras hirientes." active />
                                        <ToggleRow title="Estado de Actividad" desc="Permitir que otros vean cuando estás tejiendo (en línea)." />
                                    </div>

                                    <div className="pt-8 border-t border-beige-calido">
                                        <button className="text-cute-rojo text-sm font-bold hover:underline flex items-center gap-2 transition-all">
                                            <FaLock size={12} /> Cambiar contraseña de acceso
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Pestaña: MOOD */}
                            {activeTab === 'preferencias' && (
                                <div className="space-y-10 animate-in fade-in duration-500 text-center">
                                    <header>
                                        <FaHeart className="text-rosado-principal text-4xl mx-auto animate-pulse mb-3" />
                                        <h3 className="text-2xl md:text-3xl font-pacifico text-gris-carbon">Tu Estética</h3>
                                        <p className="text-gris-carbon/50 text-sm">Cambia los colores de tu interfaz según tu humor.</p>
                                    </header>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {['Kawaii', 'Vintage', 'Minimal', 'Nature', 'Sky', 'Dark'].map((theme) => (
                                            <button
                                                key={theme}
                                                className="group p-5 md:p-8 rounded-[2rem] border-2 border-beige-calido hover:border-rosado-principal hover:bg-white transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-xl active:scale-95"
                                            >
                                                <div className="absolute top-0 left-0 w-1 h-full bg-rosado-principal opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <span className="font-bold text-gris-carbon/50 group-hover:text-rosado-principal transition-colors tracking-wide">{theme}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

const ToggleRow = ({ title, desc, active = false }) => (
    <div className="bg-white/40 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-beige-calido flex justify-between items-center hover:bg-white transition-all group">
        <div className="flex items-center gap-4">
            <div className={`p-2.5 rounded-xl transition-colors ${active ? 'bg-verde-sage/20 text-verde-bosque' : 'bg-beige-calido/40 text-gris-carbon/40'}`}>
                <FaShieldAlt size={18} />
            </div>
            <div>
                <p className="text-sm font-bold text-gris-carbon">{title}</p>
                <p className="text-[10px] md:text-xs text-gris-carbon/50 leading-tight">{desc}</p>
            </div>
        </div>
        <div className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 shrink-0 ${active ? 'bg-rosado-principal' : 'bg-beige-calido'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ${active ? 'right-1' : 'left-1'}`}></div>
        </div>
    </div>
);

export default Settings;