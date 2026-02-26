import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';
import Input from '../components/common/Input.jsx';
import Button from '../components/common/Button.jsx';
import { Link } from 'react-router-dom';
import { ROUTES, publicationPath } from '../constants/routes';
import { pins } from '../constants/pins';

const techniqueOptions = [
    { id: 'punto_medio_alto', label: 'Punto Medio Alto' },
    { id: 'anillo_magico', label: 'Anillo Mágico' },
    { id: 'punto_tunecino', label: 'Punto Tunecino' },
    { id: 'jacquard_intarsia', label: 'Jacquard / Intarsia' },
    { id: 'punto_salomon', label: 'Punto Salomón (Espuma de Mar)' },
    { id: 'aumento_disminucion', label: 'Aumentos e Invisibles' },
    { id: 'punto_bobos', label: 'Punto Bobo / Santa Clara' },
    { id: 'bordado_sobre_tejido', label: 'Bordado en Relieve' }
];

const Dashboard = () => {

    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [selectedTechniques, setSelectedTechniques] = useState(['amigurumi']);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageName, setSelectedImageName] = useState('');

    const parsedHashtags = hashtags
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
        .map((tag) => (tag.startsWith('#') ? tag : `#${tag}`));

    const toggleTechnique = (techniqueId) => {
        setSelectedTechniques((prev) =>
            prev.includes(techniqueId)
                ? prev.filter((id) => id !== techniqueId)
                : [...prev, techniqueId]
        );
    };

    const clearForm = () => {
        setDescription('');
        setHashtags('');
        setSelectedTechniques(['amigurumi']);
        setSelectedImageName('');
    };

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        setSelectedImageName(file?.name ?? '');
    };

    const handlePublish = (event) => {
        event.preventDefault();
        console.log('Publicación nueva', {
            description,
            hashtags: parsedHashtags,
            selectedTechniques
        });
        clearForm();
        setIsModalOpen(false);
    };
    
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
            
            <main className="flex-1 px-4 py-12 sm:px-8 space-y-10">
             
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        ></div>
                        <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative z-10 w-full max-w-4xl rounded-3xl border border-rosado-principal/40 bg-[#fff6fb] p-6 shadow-2xl"
    onClick={(event) => event.stopPropagation()}
>
    <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
            <h3 className="text-2xl font-pacifico text-verde-bosque text-center">
                Gestión de Publicación
            </h3>
        </div>
        <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="text-gris-carbon/70 hover:text-gris-carbon text-sm font-medium"
        >
            Cerrar
        </button>
    </div>

    <form onSubmit={handlePublish} className="space-y-5">
        {/* Descripción Técnica */}
        <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-semibold text-gris-carbon">
                Detalles del Proyecto
            </label>
            <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={4}
                placeholder="Describa el proceso técnico, el tipo de fibra utilizado o la estructura del patrón..."
                className="w-full rounded-3xl border-2 border-dashed border-rosado-principal/40 bg-white/90 px-4 py-3 text-gray-700 placeholder-gris-carbon/50 focus:outline-none focus:ring-4 focus:ring-rosado-principal/30 transition"
            />
        </div>

        {/* Etiquetas / Hashtags */}
        <div className="space-y-2">
            <label htmlFor="hashtags" className="text-sm font-semibold text-gris-carbon">
                Etiquetas de Clasificación
            </label>
            <Input
                id="hashtags"
                value={hashtags}
                onChange={(event) => setHashtags(event.target.value)}
                placeholder="#PuntoSalomon, #TecnicaJacquard, #TejidoErgonomico"
                borderColor="border-rosado-principal/30"
                className="bg-white"
            />
            {parsedHashtags.length > 0 && (
                <div className="flex flex-wrap gap-2 text-[11px] text-gris-carbon/70">
                    {parsedHashtags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-rosado-principal/30 px-3 py-1 bg-white/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>

        {/* Carga de Archivos */}
        <div className="space-y-2">
            <p className="text-sm font-semibold text-gris-carbon">
                Imagen Principal
            </p>
            <label
                htmlFor="coverImage"
                className="flex items-center justify-between rounded-2xl border-2 border-dashed border-rosado-principal/50 bg-white/80 px-4 py-3 text-sm text-gris-carbon/70 transition hover:border-rosado-principal cursor-pointer"
            >
                <span>Cargar archivo desde el dispositivo</span>
                <span className="text-[11px] font-bold text-rosado-principal">FORMATO JPG / PNG</span>
            </label>
            <input
                id="coverImage"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleImageChange}
            />
            {selectedImageName && (
                <p className="text-[11px] italic text-rosado-principal/80">
                    Archivo seleccionado: {selectedImageName}
                </p>
            )}
        </div>

        {/* Técnicas de Bordado y Tejido */}
        <div className="space-y-2">
            <p className="text-sm font-semibold text-gris-carbon">
                Especificaciones de Técnica
            </p>
            <div className="flex flex-wrap gap-3">
                {/* Asegúrate de que técnicaOptions use etiquetas como: 
                    "Punto Medio Alto", "Punto Red", "Anillo Mágico", "Punto Deslizado" 
                */}
                {techniqueOptions.map((technique) => {
                    const isActive = selectedTechniques.includes(technique.id);
                    return (
                        <button
                            type="button"
                            key={technique.id}
                            onClick={() => toggleTechnique(technique.id)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition border ${
                                isActive
                                    ? 'border-rosado-principal bg-rosado-principal/20 text-rosado-principal'
                                    : 'border-rosado-principal/30 text-gris-carbon/70'
                            }`}
                        >
                            {technique.label}
                        </button>
                    );
                })}
            </div>
        </div>

        {/* Acciones Finales */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-rosado-principal/40">
            <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-full border border-rosado-principal/30 text-xs font-semibold text-gris-carbon/70 transition hover:bg-rosado-principal/10 hover:text-rosado-principal"
            >
                Descartar Cambios
            </button>
            <Button
                type="submit"
                color="rosado-principal"
                className="bg-rosado-principal text-white border-rosado-principal px-6 py-2 shadow-xl font-bold"
            >
                Confirmar Publicación
            </Button>
        </div>
    </form>
</motion.div>
                    </div>
                )}

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
                                        <div className="mt-4 space-y-3">
                                            <Button
                                                onClick={() => setIsModalOpen(true)}
                                                color="rosado-principal"
                                                variant="ghost"
                                                size="sm"
                                                className="w-full border-rosado-principal/40 text-rosado-principal"
                                            >
                                                Crear publicación
                                            </Button>
                                            <Link
                                                to={ROUTES.PROFILES}
                                                className="block w-full bg-gris-carbon text-white text-xs font-bold py-2 rounded-lg hover:bg-lavanda-profundo transition-colors duration-300 shadow-md text-center"
                                            >
                                                Editar Perfil
                                            </Link>
                                        </div>
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
                                    <Link
                                        to={publicationPath(pin.id)}
                                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-rosado-principal/40 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-rosado-principal transition hover:bg-rosado-principal/10"
                                    >
                                        Ver publicación
                                    </Link>
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