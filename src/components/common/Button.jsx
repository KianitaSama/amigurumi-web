import React from 'react';

const Button = ({
    color = 'rosado-principal', // Color por defecto del botón
    size = 'md',                // Tamaño por defecto (sm, md, lg)
    onClick,                    // Función que se ejecuta al hacer clic
    children,                   // Contenido del botón (texto o elementos)
    disabled = false,           // Estado deshabilitado
    className = '',             // Clases adicionales personalizadas
    iconLeft = null,            // Ícono opcional a la izquierda
    iconRight = null,           // Ícono opcional a la derecha
    rounded = 'full',           // Bordes redondeados (sm, md, lg, full)
    type = 'button'
}) => {

    // Genera dinámicamente las clases de color usando TailwindCSS
    const getColorClasses = (color) => `border-${color} text-${color} hover:bg-${color}/10`;

    // Estilos base del botón kawaii (fondo blanco, tipografía, transiciones)
    const baseStyles = 'bg-white font-nunito transition-all duration-300 flex items-center justify-center gap-2 font-medium tracking-wide whitespace-nowrap border-2 transform active:scale-95';

    // Definimos tamaños con padding y tipografía proporcional
    const sizeStyles = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-3 py-2 text-lg'
    };

    // Estilos para bordes redondeados
    const roundedStyles = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-xl'
    };

    // Estilos cuando el botón está deshabilitado
    const disabledStyles = disabled
        ? 'opacity-50 cursor-not-allowed pointer-events-none' // Apariencia apagada y sin interacción
        : 'hover:scale-105 hover:shadow-lg active:shadow-md cursor-pointer'; // Animaciones al interactuar

    // Estilos de sombra kawaii
    const shadowStyles = 'shadow-md hover:shadow-xl';

    // Tamaños de íconos según el tamaño del botón
    const iconSize = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    // Componente interno para renderizar íconos con animación
    const IconWrapper = ({ icon, position }) => (
        <span className={`
      ${iconSize[size]}
      flex items-center justify-center
      transition-transform duration-300
      group-hover:scale-110
    `}>
            {icon}
        </span>
    );

    // Combinamos todas las clases en una sola cadena
    const combinedClass = `
    ${baseStyles}
    ${getColorClasses(color)}
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${shadowStyles}
    ${disabledStyles}
    ${className}
    group
  `.replace(/\s+/g, ' ').trim();

    return (
        <button
            type={type}
            onClick={onClick}             // Acción al hacer clic
            disabled={disabled}           // Estado deshabilitado
            className={combinedClass}     // Clases combinadas
            aria-disabled={disabled}      // Accesibilidad
        >
            {/* Ícono a la izquierda si existe */}
            {iconLeft && <IconWrapper icon={iconLeft} position="left" />}
            {/* Contenido principal del botón */}
            {children}
            {/* Ícono a la derecha si existe */}
            {iconRight && <IconWrapper icon={iconRight} position="right" />}
        </button>
    );
};


export default Button;
