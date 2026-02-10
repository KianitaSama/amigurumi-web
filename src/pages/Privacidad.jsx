import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';
import { FaShieldAlt, FaUserLock, FaCookieBite, FaUserEdit, FaFingerprint } from 'react-icons/fa';

const privacyHighlights = [
    {
        title: 'Respeto por tus datos',
        content: 'Solo almacenamos la información estrictamente necesaria para darte acceso a Kiana Crochet. Tus datos son como tus patrones favoritos: privados y valiosos.',
        icon: <FaFingerprint className="text-rosado-principal" />,
        borderColor: 'border-rosado-claro'
    },
    {
        title: 'Protección constante',
        content: 'Usamos blindaje digital (HTTPS) para que tus datos viajen seguros. Es como envolver tus amigurumis en papel burbuja antes de enviarlos.',
        icon: <FaShieldAlt className="text-cute-azul" />,
        borderColor: 'border-cute-rojoClaro'
    },
    {
        title: 'Tus elecciones cuentan',
        content: 'Eres el artista de tu perfil. Puedes editar, descargar o borrar tu información con un solo clic. Nosotros solo somos el telar donde creas.',
        icon: <FaUserEdit className="text-cute-verde" />,
        borderColor: 'border-verde-sage'
    },
    {
        title: 'Cookies y dulzura',
        content: 'Usamos cookies ligeras para recordar tu sesión y colores favoritos. Nada de rastreos invasivos, solo lo justo para que tu visita sea mágica.',
        icon: <FaCookieBite className="text-cute-amarillo" />,
        borderColor: 'border-beige-calido'
    }
];

const Privacidad = () => (
    <div
        className="min-h-screen flex flex-col font-quicksand overflow-hidden"
        style={{
            backgroundImage: `radial-gradient(circle at top, rgba(255,255,255,0.92), rgba(242,233,216,0.85)), url(${fondoAmigurumi})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}
    >
        <Navbar />
        
        <main className="flex-1 px-4 py-16 sm:px-8 lg:px-16 relative">
            {/* Decoración flotante */}
            <div className="absolute top-20 left-10 animate-bounce opacity-20">
                <FaUserLock size={80} className="text-lavanda-base" />
            </div>

            <section className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                <div className="inline-block px-6 py-2 rounded-full bg-lavanda-base/20 border-2 border-lavanda-base text-lavanda-profundo text-xs font-bold tracking-[0.4em] uppercase">
                    Seguridad con Amor
                </div>
                <h1 className="text-5xl md:text-6xl font-pacifico text-gris-carbon drop-shadow-sm">
                    Tu privacidad es <span className="text-rosado-principal">sagrada</span>
                </h1>
                <p className="text-lg text-gris-carbon/70 max-w-2xl mx-auto font-medium leading-relaxed">
                    Cuidamos tus datos como si fueran las hebras de seda más finas. Aquí te contamos cómo mantenemos tu espacio seguro y lleno de confianza.
                </p>
            </section>

            {/* Grid de Tarjetas de Privacidad */}
            <section className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {privacyHighlights.map((item, index) => (
                    <article
                        key={item.title}
                        className={`group bg-white/70 backdrop-blur-md border-t-8 ${item.borderColor} rounded-[2.5rem] shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center`}
                    >
                        <div className="mb-4 p-4 bg-white rounded-full shadow-inner group-hover:scale-110 transition-transform duration-500">
                            {React.cloneElement(item.icon, { size: 30 })}
                        </div>
                        <h2 className="text-2xl font-pacifico text-lavanda-profundo mb-3">{item.title}</h2>
                        <p className="text-sm text-gris-carbon/80 leading-relaxed font-medium">
                            {item.content}
                        </p>
                    </article>
                ))}
            </section>

            {/* Sección de Derechos - Estilo "Etiqueta de Marca" */}
            <section className="mt-20 max-w-3xl mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sakura-claro via-lavanda-base to-cute-azul rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white border-4 border-dashed border-beige-calido rounded-[3rem] p-10 text-center space-y-6">
                    <div className="flex justify-center gap-2 mb-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-sakura-medio animate-pulse" />)}
                    </div>
                    <h3 className="text-3xl font-pacifico text-rosado-principal">Tus derechos de Autor y Usuario</h3>
                    <p className="text-base text-gris-carbon/80 font-medium">
                        ¿Quieres una copia de tus hilos (datos)? ¿Deseas deshacer un punto y borrar algo? 
                        Solo tienes que enviarnos un mensaje. Estamos aquí para servirte con transparencia y una sonrisa.
                    </p>
                    <div className="pt-4 flex flex-col items-center">
                        <span className="px-4 py-1 bg-gris-carbon/5 rounded-full text-[10px] uppercase tracking-widest text-gris-carbon/60 font-bold">
                            Última revisión: 10 Febrero 2026
                        </span>
                    </div>
                </div>
            </section>
        </main>
        
        <Footer />
    </div>
);

export default Privacidad;