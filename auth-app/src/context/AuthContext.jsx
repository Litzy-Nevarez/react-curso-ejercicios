import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser)
        {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, password) => {
        if (username === 'admin' && password === '1234'){
            const fakeUser = { username };
            setUser(fakeUser);
            localStorage.setItem('user', JSON.stringify(fakeUser));
        } else {
            alert('Invalid credentials');
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}