import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaPlus, FaHome, FaCompass, FaChevronDown, FaSignOutAlt, FaCog, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { logout, user } = useAuth();
    const avatarSrc = user?.role === 'admin' ? '/src/assets/icons/iconoZorro.png' : '/src/assets/icons/iconoOsito.png';
    const avatarAlt = user?.role === 'admin' ? 'Avatar administrador' : 'Avatar artista';
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/login');
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 p-3 md:px-6 flex items-center justify-between border-b border-sakura-oscuro/10 shadow-sm">
            
            {/* --- LOGO --- */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-rosado-principal to-sakura-oscuro rounded-xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
                    <span className="text-white font-pacifico text-xl">✿</span>
                </div>
                <div className="leading-tight">
                    <h1 className="text-xl font-pacifico text-gris-carbon tracking-tight">Amigurumis</h1>
                    <p className="text-[10px] uppercase tracking-widest text-cute-gris font-nunito hidden md:block">Patterns & Love</p>
                </div>
            </Link>

            {/* --- SEARCH BAR (Desktop) --- */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cute-gris" size={14} />
                    <input
                        type="text"
                        placeholder="Buscar patrones mágicos..."
                        className="w-full bg-rose-100/50 border-none rounded-2xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-rosado-principal/20 font-nunito text-sm transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* --- DESKTOP NAV & USER --- */}
            <div className="hidden md:flex items-center gap-4">
                {/* Íconos de Navegación Rápida */}
                <div className="flex items-center gap-1 border-r border-beige-calido pr-4">
                    <Link title="Inicio" to="/" className="p-2 text-gris-carbon hover:text-rosado-principal transition-colors"><FaHome size={20} /></Link>
                    <Link title="Explorar" to="/explore" className="p-2 text-gris-carbon hover:text-rosado-principal transition-colors"><FaCompass size={20} /></Link>
                    <div className="relative p-2 cursor-pointer group">
                        <IoMdNotifications size={22} className="text-lavanda-profundo group-hover:text-rosado-principal transition-colors" />
                        <span className="absolute top-1 right-1 bg-cute-amarillo text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
                    </div>
                </div>

                {/* Perfil del Usuario con Nombre Dinámico */}
                <div className="relative group flex items-center gap-3 pl-2">
                    {/* Texto del Usuario (Tu lógica original) */}
                    <div className="flex flex-col items-end leading-none">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-rosado-principal font-bold mb-0.5">
                            {user ? (user.role === 'admin' ? 'Administrador' : 'Artista') : 'Invitado'}
                        </span>
                        <span className="text-sm font-nunito font-bold text-gris-carbon">
                            {user?.name || 'Lulu'}
                        </span>
                    </div>

                    {/* Avatar y Dropdown */}
                    <button className="flex items-center gap-1 p-0.5 rounded-full hover:bg-beige-calido transition-colors">
                        <img
                            src={avatarSrc}
                            alt={avatarAlt}
                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                    </button>

                    {/* Menú Desplegable */}
                    <div className="absolute right-0 top-full mt-2 w-56 translate-y-2 rounded-2xl border border-beige-calido bg-white shadow-xl opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible z-10 text-sm">
                        <div className="flex items-center gap-3 border-b border-beige-calido px-4 py-3">
                            <img
                                src={avatarSrc}
                                alt={avatarAlt}
                                className="h-10 w-10 rounded-full border-2 border-rosado-claro object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gris-carbon">{user ? user.displayName : 'Invitado'}</p>
                                <p className="text-[11px] uppercase tracking-[0.3em] text-gris-carbon/60">
                                    {user ? (user.role === 'admin' ? 'Administrador' : 'Lulu') : 'Visitante'}
                                </p>
                            </div>
                        </div>
                        <a href="/" className="flex items-center gap-2 px-4 py-3 text-gris-carbon hover:bg-beige-calido font-quicksand rounded-xl">
                            <FaUser className="text-rosado-principal" size={14} />
                            Mi perfil
                        </a>
                        <a href="/" className="flex items-center gap-2 px-4 py-3 text-gris-carbon hover:bg-beige-calido font-quicksand rounded-xl">
                            <FaCog className="text-lavanda-profundo" size={14} />
                            Configuración
                        </a>
                        <button
                            type="button"
                            className="w-full border-t border-beige-calido px-4 py-3 text-left text-cute-rojo hover:bg-beige-calido font-quicksand"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE CONTROLS --- */}
            <div className="flex md:hidden items-center gap-3">
                <div className="relative p-2">
                    <IoMdNotifications size={22} className="text-lavanda-profundo" />
                    <span className="absolute top-1 right-1 bg-cute-amarillo text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
                </div>
                <button onClick={toggleMenu} className="text-gris-carbon p-2 rounded-xl bg-beige-calido/50">
                    {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* --- MOBILE MENU (Mantiene la info del usuario también) --- */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden z-50 border-t border-beige-calido">
                    <div className="p-5 space-y-5">
                        {/* Usuario en móvil */}
                        <div className="flex items-center gap-4 p-3 bg-beige-calido/30 rounded-2xl">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <img src={avatarSrc} alt={avatarAlt} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-rosado-principal font-bold">
                                    {user?.role === 'admin' ? 'Administrador' : 'Artista'}
                                </p>
                                <p className="font-nunito font-bold text-gris-carbon text-lg leading-none">{user?.name || 'Lulu'}</p>
                            </div>
                        </div>

                        {/* Enlaces móviles */}
                        <div className="grid grid-cols-2 gap-3">
                            <Link onClick={toggleMenu} to="/" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-beige-calido font-nunito font-bold text-gris-carbon">
                                <FaHome className="text-rosado-principal" /> Inicio
                            </Link>
                            <Link onClick={toggleMenu} to="/explore" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-beige-calido font-nunito font-bold text-gris-carbon">
                                <FaCompass className="text-lavanda-profundo" /> Explorar
                            </Link>
                        </div>

                        <Link onClick={toggleMenu} to="/create" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-rosado-principal to-sakura-oscuro text-white font-bold font-nunito">
                            <FaPlus size={14} /> Crear Publicación
                        </Link>

                        <button onClick={handleLogout} className="w-full py-3 rounded-xl text-cute-rojo font-bold font-nunito border border-cute-rojo/20">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;