import React from 'react';

const Input = ({
    type = 'text',           // Tipo de input (text, email, password, etc.). Por defecto 'text'
    placeholder = '',        // Texto guía que se muestra cuando el campo está vacío
    value,                   // Valor controlado del input (estado externo)
    onChange,                // Manejador de cambio para actualizar el estado externo
    className = '',          // Clases adicionales para personalizar estilos desde fuera
    inputStyle = {},         // Estilos en línea opcionales para ajustes puntuales
    borderColor = 'border-gray-300', // Clase de Tailwind para color de borde (por defecto gris)
}) => {
    return (
        // Elemento input nativo con configuración y estilos
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-4 
                focus:ring-sakura-claro bg-white text-gray-700 placeholder-gray-400
                ${borderColor} ${className}`}
            // Estilos en línea opcionales, útiles para casos específicos
            style={inputStyle}
        />
    );
};

// Exportamos el componente para usarlo en otros módulos
export default Input;
