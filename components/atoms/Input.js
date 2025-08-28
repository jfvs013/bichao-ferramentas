// components/atoms/Input.js
'use client';

import React from 'react';

/**
 * Componente de Input reutilizável.
 * * Este componente padroniza a aparência e o comportamento dos campos de
 * entrada e áreas de texto em todo o site.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.className - Classes adicionais do Tailwind CSS para o input.
 * @param {string} props.type - O tipo de input (ex: 'text', 'email', 'password', 'number').
 * @param {boolean} props.isTextArea - Se for true, renderiza um <textarea> em vez de um <input>.
 * @param {string} props.placeholder - O texto de placeholder do campo.
 * @param {*} props.otherProps - Outras propriedades padrão de elementos input.
 */
export default function Input({ className, type = 'text', isTextArea = false, ...otherProps }) {
    // Classes padrão do Tailwind para o input
    const baseClasses = 'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:border-secondary-orange text-gray-800 placeholder-gray-500 transition-colors duration-200';

    const combinedClasses = `${baseClasses} ${className || ''}`;

    if (isTextArea) {
        return (
            <textarea
                className={combinedClasses}
                rows={4}
                {...otherProps}
            />
        );
    }

    return (
        <input
            type={type}
            className={combinedClasses}
            {...otherProps}
        />
    );
}
