import { useEffect } from 'react';
import { useUser } from './useUser';
import { UserInterface } from '../interfaces/user.interface';

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            addUser(JSON.parse(user));
        }
    }, []);

    const login = (user: UserInterface) => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    return { user, login, logout };
};
