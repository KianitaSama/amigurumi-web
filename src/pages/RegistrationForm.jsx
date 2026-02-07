import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/common/Input.jsx';
import Button from '../components/common/Button.jsx';
import Modal from '../components/common/Modal.jsx';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaLock, FaCamera } from 'react-icons/fa'; 
import { IoMdHeart } from 'react-icons/io';

const Register = () => {
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('Preparando tu bienvenida...');
    const [modalStage, setModalStage] = useState('loading');
    const { register } = useAuth(); 
    const navigate = useNavigate();
    const loaderRef = useRef();
    const successRef = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        // Limpiamos el error cuando el usuario empieza a escribir de nuevo
        if (error) setError('');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        clearTimeout(loaderRef.current);
        clearTimeout(successRef.current);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!formData.displayName.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
            return setError('Debes llenar todos los campos para continuar.');
        }
        if (formData.password !== formData.confirmPassword) {
            return setError('Las contraseñas no coinciden');
        }
        if (formData.password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }

        setError('');
        setModalMessage('Cargando tu nuevo kit ');
        setModalStage('loading');
        setIsModalOpen(true);

        loaderRef.current = setTimeout(() => {
            setModalStage('success');
            setModalMessage('¡Registro exitoso! Ya casi estás dentro.');
        }, 5000);

        successRef.current = setTimeout(() => {
            setIsModalOpen(false);
            navigate('/login');
        }, 7000);
    };

    useEffect(() => {
        return () => {
            clearTimeout(loaderRef.current);
            clearTimeout(successRef.current);
        };
    }, []);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-beige-calido p-4 sm:p-8 font-nunito relative overflow-hidden"
            style={{
                backgroundImage: "url('/src/assets/images/F4.png')",
                backgroundSize: '600px 600px',
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(242, 233, 216, 0.9)',
            }}
        >
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-10,100 Q150,50 300,150 T600,100 T900,200 T1300,150"
                    fill="none"
                    stroke="#D4A5A5"
                    strokeWidth="4"
                    strokeDasharray="10,10"
                    className="animate-[dash_20s_linear_infinite]"
                />
            </svg>

            <div className="w-full max-w-md relative">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-rosado-principal rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-2xl rotate-12 z-10">
                    ✿
                </div>

                <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/50 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl font-pacifico text-lavanda-profundo">Únete al Club</h1>
                        <p className="text-gris-carbon/60 text-sm">Crea tu perfil y empieza a compartir tus puntos</p>
                    </div>

                    {error && (
                        <div className="bg-rosado-claro/20 border border-rosado-principal/30 text-rosado-principal text-xs p-3 rounded-xl text-center animate-bounce">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="flex justify-center mb-4">
                            <div className="relative group cursor-pointer">
                                <div className="w-20 h-20 rounded-2xl bg-beige-calido flex items-center justify-center border-2 border-dashed border-rosado-principal/40 group-hover:bg-rosado-claro/20 transition-colors">
                                    <FaCamera className="text-rosado-principal/50 text-2xl" />
                                </div>
                                <span className="absolute -bottom-2 -right-2 bg-white shadow-sm rounded-full p-1 text-[10px] text-gris-carbon font-bold border border-beige-calido">Subir</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-sakura-oscuro/50 z-10" />
                                <Input
                                    id="displayName"
                                    type="text"
                                    placeholder="¿Cómo te llamas?"
                                    value={formData.displayName}
                                    onChange={handleChange}
                                    className="pl-10"
                                    borderColor="border-lavanda-base"
                                />
                            </div>

                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-sakura-oscuro/50 z-10" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-10"
                                    borderColor="border-lavanda-base"
                                />
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-sakura-oscuro/50 z-10" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Crea una contraseña"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="pl-10"
                                    borderColor="border-lavanda-base"
                                />
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-sakura-oscuro/50 z-10" />
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="pl-10"
                                    borderColor="border-lavanda-base"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            color="rosado-principal"
                            className="w-full rounded-2xl shadow-rosado-principal/20 hover:scale-[1.02] transition-transform"
                        >
                            Comenzar
                        </Button>
                    </form>

                    <div className="text-center">
                        <p className="text-xs text-gris-carbon/60">
                            ¿Ya eres parte del club?{' '}
                            <Link to="/login" className="font-bold text-lavanda-profundo hover:text-rosado-principal">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dash {
                    to { stroke-dashoffset: -1000; }
                }
            `}} />

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalStage === 'loading' ? 'Cargando' : '¡Listo!'}
                header={
                    <div className="flex items-center justify-center gap-3">
                        <IoMdHeart className="text-rosado-principal text-2xl" />
                        <span className="text-lg font-bold text-gris-carbon">
                            {modalStage === 'loading' ? 'Un momento...' : '¡Todo listo!'}
                        </span>
                    </div>
                }
                footer={modalStage === 'success' ? (
                    <Button onClick={closeModal} color="lavanda-profundo" size="sm">
                        Cerrar
                    </Button>
                ) : null}
                showCloseButton={modalStage === 'success'}
                contentClassName="pt-4"
            >
                <p className="text-sm text-gris-carbon/80">{modalMessage}</p>
            </Modal>
        </div>
    );
};

export default Register;