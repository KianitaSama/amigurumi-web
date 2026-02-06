import React from 'react';
import { GiYarn } from 'react-icons/gi';

const Loading = ({
    title = 'Cargando',
    description = 'Por favor espera mientras procesamos tu solicitud.',
    backgroundColor = 'bg-black/50',
    titleColor = 'text-black',
    textColor = 'text-gray-700',
    iconColor = 'text-rose-800'
}) => {
    return (
        <div 
            className={`fixed inset-0 flex items-center justify-center ${backgroundColor} z-50`}
            /* La clase `fixed inset-0` asegura que el contenedor ocupe toda la pantalla */
            /* Las clases `flex items-center justify-center` centran el contenido tanto vertical como horizontalmente */
        >
            <div 
                className="text-center p-6 rounded-lg bg-white shadow-lg max-w-sm w-full"
                /* La clase `max-w-sm` limita el ancho máximo del contenedor, haciéndolo adaptativo */
                /* La clase `w-full` asegura que el contenedor ocupe el ancho completo disponible dentro de su límite */
            >
                {/* Contenedor del icono de estambre con animación de giro */}
                <div 
                    className="relative mx-auto mb-4 h-16 w-16 flex items-center justify-center"
                    /* La clase `w-16 h-16` define un tamaño fijo para el icono, manteniendo proporciones */
                    /* Las clases `mx-auto` y `flex` centran el icono horizontal y verticalmente */
                >
                    <GiYarn 
                        className={`h-full w-full ${iconColor} animate-spin`} 
                        /* La clase `animate-spin` aplica una animación de giro */
                        /* `animate-spin` es una clase de Tailwind que utiliza la regla CSS `@keyframes spin` */
                        /* Esta animación rota el elemento 360 grados de forma continua */
                        /* Por defecto, Tailwind define la animación como: */
                        /* `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` */
                    />
                </div>
                
                <div className="min-h-[2.5rem]">
                    <h2 
                        className={`text-xl font-bold mb-0 ${titleColor} font-pacifico inline-block`}
                        /* La clase `text-xl` ajusta el tamaño del texto del título */
                        /* La clase `inline-block` asegura que el título y los puntos animados estén alineados */
                    >
                        {title}
                        <span className="ml-1 inline-flex h-6 items-end">
                            <span className="animate-bounce">.</span>
                            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                        </span>
                    </h2>
                </div>
                
                {description && (
                    <p 
                        className={`text-sm ${textColor}/80 font-nunito mt-2`}
                        /* La clase `text-sm` asegura que el texto sea pequeño pero legible */
                        /* La clase `mt-2` añade un margen superior para separar el texto del título */
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Loading;