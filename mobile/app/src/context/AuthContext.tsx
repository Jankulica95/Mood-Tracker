import { createContext, ReactNode, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definisemo oblik naseg konteksta
interface AuthContextType {
    isLoading: boolean;
    userToken: string | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

// Kreiramo kontekst sa pocetnim vrednostima
export const AuthContext =  createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userToken, setUserToken] = useState<string | null>(null);

    const login = (email: string, password: string) => {
        setIsLoading(true);
        // Implementirati logiku sa .NET ovde
        setTimeout(() => {
            const token = 'neki_token_123';
            setUserToken(token);
            AsyncStorage.setItem('userToken', token);
            setIsLoading(false);
        }, 1000)
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
            setIsLoading(false);
        } catch {
            console.log('Greska pri ucitavanju tokena');
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );

}
