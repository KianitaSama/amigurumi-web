import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi.png';

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) return null;

    return (
        <div
            className="min-h-screen flex flex-col bg-beige-calido relative"
            style={{
                backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 241, 236, 0.75)), url(${fondoAmigurumi})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-4xl rounded-[2.5rem] border border-white/50 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-md">
                    <p className="text-sm uppercase tracking-[0.4em] text-rosado-principal font-semibold mb-3">Bienvenida</p>
                    <h1 className="font-pacifico text-5xl md:text-6xl text-lavanda-profundo">Bienvenido a tu espacio</h1>
                    <p className="mt-4 text-lg text-gris-carbon/80 leading-relaxed">
                        El rincón donde tus patrones y sueños se reúnen. Tómate un respiro, explora y deja que la lana te guíe.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;