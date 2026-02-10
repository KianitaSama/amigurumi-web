import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaPlus, FaHome, FaCompass, FaUser, FaHeart, FaCommentDots, FaChartLine, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const avatarSrc = user?.role === 'admin' ? '/src/assets/icons/iconoZorro.png' : '/src/assets/icons/iconoOsito.png';
    const avatarAlt = user?.role === 'admin' ? 'Avatar administrador' : 'Avatar artista';

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/login');
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 p-3 md:px-6 flex items-center justify-between border-b border-sakura-oscuro/10 shadow-sm">
            
            <Link to="/" className="flex items-center gap-3 group shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-rosado-principal to-sakura-oscuro rounded-xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                    <span className="text-white font-pacifico text-xl">✿</span>
                </div>
                <div className="leading-tight">
                    <h1 className="text-xl font-pacifico text-gris-carbon tracking-tight">Amigurumis</h1>
                    <p className="text-[10px] uppercase tracking-widest text-cute-gris font-nunito hidden md:block">Patterns & Love</p>
                </div>
            </Link>

            <div className="hidden lg:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cute-gris" size={12} />
                    <input
                        type="text"
                        placeholder="Buscar patrones mágicos..."
                        className="w-full bg-beige-calido/30 border-none rounded-2xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-rosado-principal/20 font-nunito text-sm transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 border-r border-beige-calido pr-4">
                    <Link title="Inicio" to="/" className="p-2 text-gris-carbon hover:text-rosado-principal transition-colors"><FaHome size={20} /></Link>
                    <Link title="Explorar" to="/ecplorer" className="p-2 text-gris-carbon hover:text-rosado-principal transition-colors"><FaCompass size={20} /></Link>
                
                    
                    <div className="relative flex items-center justify-center w-10 h-10">
                        <button
                            type="button"
                            onClick={() => setShowNotifications(!showNotifications)}
                            className={`relative p-2 rounded-full transition-all duration-300 ${showNotifications ? 'bg-rosado-principal/10 text-rosado-principal' : 'text-lavanda-profundo hover:bg-beige-calido'}`}
                        >
                            <IoMdNotifications size={24} />
                            <span className="absolute top-1 right-1 bg-cute-amarillo text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold border-2 border-white animate-bounce">
                                3
                            </span>
                        </button>

                        {showNotifications && (
                            <div className="absolute top-full right-0 mt-3 w-80 bg-white rounded-3xl shadow-2xl border border-beige-calido overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2">
                                <div className="p-4 bg-rosado-principal/5 border-b border-rosado-principal/10 flex justify-center items-center">
                                    <h3 className="font-pacifico text-verde-bosque text-lg">Notificaciones</h3>
                                </div>
                                
                                <div className="max-h-[350px] overflow-y-auto p-3 space-y-2">
                                    {/* Notificación 1 */}
                                    <div className="flex gap-3 p-3 rounded-2xl bg-rose-50/50 border border-rosado-principal/10 hover:bg-rose-50 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                                            <FaHeart className="text-rosado-principal" size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gris-carbon leading-tight">
                                                <span className="font-bold text-rosado-principal">Lina</span> comenzó a seguirte y guardó tu patrón de <span className="italic">Zorrito</span>.
                                            </p>
                                            <span className="text-[10px] text-gris-carbon/40 font-bold">Hace 2 min</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 p-3 rounded-2xl bg-lavanda-profundo/5 border border-lavanda-profundo/10 hover:bg-lavanda-profundo/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                                            <FaChartLine className="text-lavanda-profundo" size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gris-carbon leading-tight">
                                                ¡Tu tablero <span className="font-bold">Moodboard Otoñal</span> es tendencia hoy! 🧶
                                            </p>
                                            <span className="text-[10px] text-gris-carbon/40 font-bold">Hace 1 hora</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 p-3 rounded-2xl bg-beige-calido/20 border border-beige-calido/30 hover:bg-beige-calido/30 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                                            <FaCommentDots className="text-verde-bosque" size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gris-carbon leading-tight">
                                                <span className="font-bold">Miku</span> comentó: "¡Qué puntada tan limpia! Me encanta."
                                            </p>
                                            <span className="text-[10px] text-gris-carbon/40 font-bold">Hace 3 horas</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-gradient-to-r from-rosado-principal/10 to-lavanda-profundo/10 text-lavanda-profundo font-bold text-[10px] uppercase tracking-[0.2em] hover:from-rosado-principal/20 hover:to-lavanda-profundo/20 transition-all">
                                    Ver todo el historial
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative group flex items-center gap-3 pl-2 cursor-pointer">
                    <div className="flex flex-col items-end leading-none">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-rosado-principal font-black">
                            {user?.role === 'admin' ? 'Administradora' : 'Artista'}
                        </span>
                        <span className="text-sm font-nunito font-bold text-gris-carbon">{user?.name || 'Lulu'}</span>
                    </div>
                    <img src={avatarSrc} alt={avatarAlt} className="w-10 h-10 rounded-full border-2 border-white shadow-sm ring-2 ring-rosado-principal/10" />
                    
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-beige-calido opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                        <Link to="/profiles" className="flex items-center gap-2 px-4 py-3 text-xs text-gris-carbon hover:bg-rose-50 transition-colors">
                            <FaUser size={12} className="text-rosado-principal" /> Mi Perfil
                        </Link>
                        <Link to="/settings" className="flex items-center gap-2 px-4 py-3 text-xs text-gris-carbon hover:bg-rose-50 transition-colors">
                            <FaCog size={12} className="text-rosado-principal" /> Configuración
                        </Link>
                        <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 px-4 py-3 text-xs text-cute-rojo hover:bg-rose-50 border-t border-beige-calido font-bold transition-colors">
                            <FaSignOutAlt size={12} /> Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex md:hidden items-center gap-2">
                <button className="relative p-2 text-lavanda-profundo">
                    <IoMdNotifications size={24} />
                    <span className="absolute top-1 right-1 bg-cute-amarillo text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gris-carbon bg-beige-calido/30 rounded-xl">
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;