import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you'll use React Router
import Input from '../components/common/Input.jsx'; // Componente Input reutilizable
import Button from '../components/common/Button.jsx'; // Componente Button reutilizable
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showCreds, setShowCreds] = useState(false);
    const [error, setError] = useState('');
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const { success, message } = login(email, password);
        if (success) {
            setError('');
            navigate('/dashboard');
            return;
        }
        setError(message);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-beige-calido p-4 sm:p-6 md:p-8 font-nunito animate-moving-bg border-4 border-verde-sage"
            style={{
                backgroundImage: "url('/src/assets/images/F4.png')",
                backgroundSize: '700px 700px', // Tamaño fijo para repetir la textura
                backgroundRepeat: 'repeat', // Repite la imagen para crear patrón
                backgroundBlendMode: 'overlay', // Mezcla la textura con el color de fondo
                backgroundColor: 'rgba(242, 233, 216, 0.8)', // Beige cálido con ligera transparencia
            }}
        >
            <div className="w-full max-w-[320px] sm:max-w-[360px] p-5 sm:p-7 space-y-5 bg-white rounded-2xl shadow-lg">
                
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-pacifico text-lavanda-profundo mb-2">
                        ¡Bienvenidos!
                    </h1>
                    <p className="text-sm sm:text-base text-gris-carbon/80">
                        Ingresa a tu mundo de amigurumis
                    </p>
                </div>

                {/* Separador horizontal */}
                <hr className="border-t border-gray-300 my-4" />
                {error && (
                    <div className="rounded-2xl border border-rosado-claro/80 bg-rosado-claro/20 px-4 py-3 text-sm text-rosado-principal">
                        {error}
                    </div>
                )}

                {/*
                    Formulario de inicio de sesión

                    - `space-y-4 sm:space-y-6`: controla el espaciado entre campos; aumenta en `sm`.
                    - Los `label` usan `block` para forzar nueva línea, `text-sm font-medium` para accesibilidad y consistencia.
                */}
                <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electrónico
                        </label>
                        {/*
                            Componente Input (reutilizable)
                            - `borderColor="border-lavanda-base"`: prop personalizada usada por el componente Input para aplicar el borde de color.
                            - El input hereda estilos responsivos del contenedor; aquí se maneja `value` y `onChange`.
                        */}
                        <Input
                            id="email"
                            type="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            borderColor="border-lavanda-base"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            borderColor="border-lavanda-base"
                        />
                    </div>

                    {/* Botón principal ocupa todo el ancho: `w-full` */}
                    <Button
                        type="submit"
                        size="lg"
                        color="rosado-principal"
                        className="w-full"
                    >
                        Ingresar
                    </Button>
                </form>

                <div className="flex items-center my-4 gap-3">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">O</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="text-xs font-semibold uppercase tracking-wider text-verde-bosque hover:text-rosado-principal"
                        onClick={() => setShowCreds(true)}
                    >
                        Credenciales Ejemplo
                    </button>
                </div>

                <div className="text-center text-xs sm:text-sm text-gris-carbon">
                    <p>
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register" className="font-bold text-sakura-oscuro hover:underline">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
            {showCreds && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-lavanda-profundo">Credenciales de prueba</h2>
                            <button
                                className="text-sm font-bold text-gris-carbon hover:text-rosado-principal"
                                onClick={() => setShowCreds(false)}
                            >
                                Cerrar
                            </button>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="rounded-xl border border-rosado-claro/60 bg-rosado-claro/10 p-4">
                                <p className="text-xs uppercase tracking-[0.4em] text-rosado-principal">Admin</p>
                                <p className="text-sm text-gris-carbon">Correo: admin@amiguruminumber.com</p>
                                <p className="text-sm text-gris-carbon">Contraseña: Amigurumi123</p>
                            </div>
                            <div className="rounded-xl border border-verde-sage/60 bg-verde-sage/10 p-4">
                                <p className="text-xs uppercase tracking-[0.4em] text-verde-bosque">Usuario</p>
                                <p className="text-sm text-gris-carbon">Correo: user@amiguruminumber.com</p>
                                <p className="text-sm text-gris-carbon">Contraseña: MundoKawaii456</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
