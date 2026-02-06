import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const demoAccounts = [
    {
        email: 'admin@amiguruminumber.com',
        password: 'Amigurumi123',
        displayName: 'Admin',
        role: 'admin',
        notes: 'Supervisa las colecciones y actualiza patrones.'
    },
    {
        email: 'user@amiguruminumber.com',
        password: 'MundoKawaii456',
        displayName: 'Lulu',
        role: 'lulu',
        notes: 'Explora patrones, guarda favoritos y comparte tus creaciones.'
    }
];

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        if (typeof window === 'undefined') return null;
        try {
            const storedUser = window.localStorage.getItem('amigurumi-user');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error('No se pudo leer el usuario del storage', error);
            return null;
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (user) {
            window.localStorage.setItem('amigurumi-user', JSON.stringify(user));
        } else {
            window.localStorage.removeItem('amigurumi-user');
        }
    }, [user]);

    const login = (email, password) => {
        const normalizedEmail = email?.trim().toLowerCase();
        const account = demoAccounts.find(
            (record) =>
                record.email.toLowerCase() === normalizedEmail && record.password === password
        );

        if (!account) {
            return { success: false, message: 'Correo o contraseña incorrectos.' };
        }

        const sanitizedUser = {
            email: account.email,
            displayName: account.displayName,
            role: account.role,
            notes: account.notes
        };

        setUser(sanitizedUser);
        return { success: true, user: sanitizedUser };
    };

    const logout = () => setUser(null);

    const value = useMemo(() => ({ user, login, logout }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};
