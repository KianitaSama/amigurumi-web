import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';
import { FaBalanceScale, FaPalette, FaHandsHelping, FaShoppingCart, FaSyncAlt } from 'react-icons/fa';

const termsPoints = [
    {
        title: 'Comunidad y Convivencia',
        detail: 'Kiana Crochet es un espacio de paz. Fomentamos el respeto mutuo y la inclusión. No se tolera el discurso de odio, el acoso ni la discriminación. Al participar, te comprometes a mantener un lenguaje amable y constructivo.',
        icon: <FaHandsHelping className="text-cute-verde" />,
        accent: "bg-cute-verde/10"
    },
    {
        title: 'Propiedad Intelectual',
        detail: 'Los patrones y diseños compartidos son propiedad de sus autores. Respetamos los derechos de autor: queda prohibida la distribución no autorizada de contenido protegido. Si te inspiras, ¡da siempre el crédito correspondiente!',
        icon: <FaPalette className="text-sakura-oscuro" />,
        accent: "bg-sakura-claro/20"
    },
    {
        title: 'Seguridad de la Plataforma',
        detail: 'Como red social, conectamos personas, pero la seguridad es compartida. Eres responsable de la veracidad de tu información y de proteger tu cuenta. No permitimos el spam ni el uso de bots que alteren la experiencia de otros.',
        icon: <FaBalanceScale className="text-cute-azul" />,
        accent: "bg-cute-rojoClaro/30"
    },
    {
        title: 'Acuerdos Comerciales',
        detail: 'Kiana Crochet facilita la conexión, pero no somos intermediarios legales en transacciones externas. Cada artista es responsable de sus entregas y calidad. Recomendamos siempre usar canales oficiales para tu protección.',
        icon: <FaShoppingCart className="text-cute-amarillo" />,
        accent: "bg-cute-amarillo/10"
    },
    {
        title: 'Evolución de Términos',
        detail: 'Nuestra comunidad crece como un tejido en expansión. Nos reservamos el derecho de ajustar estas normas para mejorar la seguridad global, notificando siempre cualquier cambio importante a través de nuestros canales oficiales.',
        icon: <FaSyncAlt className="text-lavanda-base" />,
        accent: "bg-lavanda-base/10"
    }
];

const Terminos = () => (
    <div
        className="min-h-screen flex flex-col font-quicksand"
        style={{
            backgroundImage: `linear-gradient(145deg, rgba(255,255,255,0.96), rgba(246,240,232,0.94)), url(${fondoAmigurumi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
    >
        <Navbar />
        
        <main className="flex-1 px-4 py-16 sm:px-8 lg:px-20">
            <section className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-pacifico text-lavanda-profundo leading-tight">
                    Terminos <span className="text-rosado-principal"> Y Condiciones</span>
                </h1>
                <p className="text-gris-carbon/70 text-lg font-medium max-w-2xl mx-auto">
                    Para que nuestra red social siga siendo un lugar de inspiración y alegría, hemos diseñado estas pautas de convivencia profesional.
                </p>
            </section>

            <section className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {termsPoints.map((point, index) => (
                    <article 
                        key={point.title} 
                        className={`relative group bg-white border-2 border-beige-calido rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 ${point.accent} rounded-bl-[4rem] transition-all duration-500 group-hover:w-32 group-hover:h-32`} />
                        
                        <div className="relative z-10 space-y-4">
                            <div className="bg-white w-12 h-12 rounded-2xl shadow-md flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                {point.icon}
                            </div>
                            <h2 className="text-xl font-pacifico text-gris-carbon">{point.title}</h2>
                            <p className="text-sm text-gris-carbon/70 leading-relaxed font-nunito">
                                {point.detail}
                            </p>
                        </div>
                        
                        <div className="absolute bottom-4 left-8 right-8 border-t-2 border-dashed border-beige-calido/50" />
                    </article>
                ))}
            </section>
            <section className="mt-20 max-w-4xl mx-auto">
                <div className="bg-lavanda-profundo text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden text-center md:text-left">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-sakura-medio/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cute-azul/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-2">
                            <h3 className="text-2xl font-pacifico">¿Todo claro, artista?</h3>
                            <p className="text-lavanda-base text-sm font-medium">
                                Al navegar y crear en nuestra red, aceptas tejer junto a nosotros bajo estas normas. Si algo no te convence, estamos abiertos a escucharte en nuestra sección de contacto.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                             <div className="px-6 py-3 bg-white text-lavanda-profundo rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                                Entendido y Aceptado
                            </div>
                            <span className="text-[10px] text-lavanda-base uppercase tracking-widest">Revisión 2.0 - Feb 2026</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <Footer />
    </div>
);

export default Terminos;