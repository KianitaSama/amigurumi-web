import React from 'react';

const Card = ({
    header = null, // Contenido opcional del encabezado
    footer = null, // Contenido opcional del pie de página
    image = null, // URL de la imagen opcional
    color = 'pastel-rosa', // Color del borde por defecto
    textColor = 'verde-bosque', // Color del texto por defecto
    borderColor = 'border-gray-300', // Color del borde por defecto
    className = '', // Clases adicionales opcionales
    children // Contenido principal de la tarjeta
}) => {

    // Genera las clases de color dinámicamente
    const getColorClasses = (color, borderColor) => `${borderColor} border-${color}`;

    // Estilos base de la tarjeta
    const baseStyles = 'bg-white font-nunito transition-all duration-300 flex flex-col gap-4 border-2 shadow-md rounded-xl p-4';

    // Estilos del texto
    const textStyles = `text-${textColor}`;

    // Clase final combinada
    const combinedClass = `
    ${baseStyles}
    ${getColorClasses(color, borderColor)}
    ${textStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

    return (
        <div className={combinedClass}>
            {header && (
                <div className="font-bold text-lg border-b pb-2">{header}</div> // Encabezado opcional
            )}
            {image && (
                <img src={image} alt="Card" className="w-full h-auto rounded-lg" /> // Imagen opcional
            )}
            <div className="flex-1">{children}</div> {/* Contenido principal */}
            {footer && (
                <div className="border-t pt-2 text-sm text-gray-600">{footer}</div> // Pie de página opcional
            )}
        </div>
    );
};

export default Card;
