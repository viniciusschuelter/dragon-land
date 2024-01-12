import { createContext } from 'react';
import { AuthContextInterface } from '../interfaces/auth.interface';

export const AuthContext = createContext<AuthContextInterface>({
    user: null,
    setUser: () => {},
});
