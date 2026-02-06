import React from 'react';
import { IoMdClose, IoMdHeart } from 'react-icons/io';
import { GiFlowerEmblem } from 'react-icons/gi';

const Modal = ({
    isOpen, // Propiedad que determina si el modal está abierto o cerrado.
    onClose, // Función que se ejecuta al cerrar el modal.
    title, // Título del modal.
    header, // Contenido personalizado para el encabezado del modal.
    footer, // Contenido personalizado para el pie del modal.
    children, // Contenido principal del modal.
    showCloseButton = true, // Propiedad para mostrar u ocultar el botón de cierre.
    modalClassName = 'w-11/12 md:w-1/2 lg:w-1/3', // Clases de Tailwind para el ancho del modal, adaptables a diferentes tamaños de pantalla.
    modalStyle = {}, // Estilos en línea para el modal.
    contentClassName = '', // Clases adicionales para el contenido del modal.
    contentStyle = {}, // Estilos en línea para el contenido del modal.
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div 
            // Contenedor principal del modal, ocupa toda la pantalla y tiene un fondo semitransparente.
            className="fixed inset-0 bg-sakura-claro/10 backdrop-blur-sm z-50 flex justify-center items-center p-4"
            onClick={onClose} // Cierra el modal al hacer clic fuera del contenido principal.
        >
            <div 
                // Contenedor del contenido del modal con diseño responsivo y estilos personalizados.
                className={`bg-white rounded-2xl shadow-lg relative flex flex-col border border-rose-100 ${modalClassName}`}
                style={modalStyle} // Aplica estilos en línea al modal.
                onClick={(e) => e.stopPropagation()} // Evita que el evento de clic cierre el modal al interactuar con su contenido.
            >
                {/* Encabezado del modal */}
                <div className="pt-6 px-6 pb-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       
                        {header ? (
                            // Si se proporciona un encabezado personalizado, se renderiza aquí.
                            header
                        ) : (
                            // Si no hay encabezado personalizado, se muestra el título centrado.
                            <div className="flex justify-center w-full">
                                <h3 className="text-2xl font-medium text-sakura-oscuro text-center">
                                    {title}
                                </h3>
                            </div>
                        )}
                      
                    </div>
                    {showCloseButton && (
                        // Botón de cierre del modal, visible si `showCloseButton` es verdadero.
                        <button 
                            onClick={onClose} 
                            className="text-pink-300 hover:text-pink-400 transition-all duration-200 p-1 hover:scale-110"
                            aria-label="Cerrar modal" // Etiqueta accesible para lectores de pantalla.
                        >
                            <IoMdClose size={24} />
                        </button>
                    )}
                </div>

                {/* Cuerpo del modal */}
                <div 
                    className={`px-6 py-4 text-center ${contentClassName}`} // Clases para espaciado y alineación del contenido.
                    style={contentStyle} // Estilos en línea para el contenido.
                >
                    <div className="text-gray-600 leading-relaxed">
                        {children} {/* Contenido principal proporcionado como hijos del componente. */}
                    </div>
                </div>

                {/* Pie del modal */}
                {footer && (
                    // Si se proporciona un pie personalizado, se renderiza aquí.
                    <div className="px-4 py-3 mt-2 border-t border-pink-50">
                        <div className="flex justify-end text-pink-300 text-sm">
                            {footer}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;