import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/AmigurumiFondo3.png';
import { FaHeart, FaLightbulb, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';


const images = {
    mision: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000',
    vision: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=1000'
};

const AboutUs = () => (
    <div
        className="min-h-screen flex flex-col font-quicksand"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${fondoAmigurumi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
    >
        <Navbar />
        <main className="flex-1 w-full">

            <section className="max-w-6xl mx-auto px-4 mt-16 space-y-24 pb-16">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-rosado-principal text-white text-xs font-bold uppercase tracking-widest">
                            Nuestra Misión
                        </div>
                        <p className="text-gris-carbon/80 leading-relaxed bg-white/60 p-6 rounded-[2rem] border-2 border-rosado-claro shadow-sm">
                            Crear un espacio donde amantes del crochet puedan compartir patrones, aprender técnicas nuevas y sentirse abrazados por la comunidad kawaii.
                        </p>
                    </div>
                    <div className="relative">
                        <img src="" alt="Misión" className="rounded-[3rem] shadow-2xl border-8 border-white" />
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative animate-moving-bg">
                        <img src="" alt="Vision" className="rounded-[3rem] shadow-2xl border-8 border-white" />
                    </div>
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-lavanda-base text-white text-xs font-bold uppercase tracking-widest">
                            Nuestra Visión
                        </div>
                        <p className="text-gris-carbon/80 leading-relaxed bg-white/60 p-6 rounded-[2rem] border-2 border-lavanda-base shadow-sm">
                            Ser el hogar digital de comunidades globales que celebran el amigurumi y promueven la colaboración entre tejedoras de todos los rincones.
                        </p>
                    </div>
                </section>

                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-pacifico text-verde-bosque">Nuestros valores</h2>
                        <p className="text-gris-carbon/50 uppercase tracking-[0.3em] text-[10px] font-bold mt-2">Los valores que sostienen</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        <ValorCard
                            icon={<FaLightbulb />}
                            title="Creatividad"
                            desc="Transformamos ideas en diseños únicos con energía positiva."
                            color="bg-cute-amarillo"
                        />
                        <ValorCard
                            icon={<FaHandshake />}
                            title="Colaboración"
                            desc="Compartimos recursos y celebramos cada alianza."
                            color="bg-cute-verde"
                        />
                        <ValorCard
                            icon={<FaHeart />}
                            title="Calidez"
                            desc="El respeto y la ternura guían cada conversación."
                            color="bg-rosado-claro"
                        />
                        <ValorCard
                            icon={<FaUsers />}
                            title="Inclusión"
                            desc="Todos los perfiles, técnicas y culturas son bienvenidos."
                            color="bg-cute-azul"
                        />
                        <ValorCard
                            icon={<FaGlobe />}
                            title="Variedad"
                            desc="Celebramos estilos globales y narrativas diversas."
                            color="bg-lavanda-base"
                        />
                    </div>
                </section>
            </section>
        </main>
        <Footer />
    </div>
);

const ValorCard = ({ icon, title, desc, color }) => (
    <div className="group relative bg-white p-6 rounded-3xl shadow-lg border-b-8 border-transparent hover:border-b-8 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 overflow-hidden">
        <div className={`absolute top-0 right-0 w-12 h-12 ${color} opacity-20 rounded-bl-full`} />
        <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-white text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="font-pacifico text-lg text-gris-carbon">{title}</h3>
        <p className="text-xs text-gris-carbon/70 font-medium leading-relaxed">
            {desc}
        </p>
    </div>
);

export default AboutUs;