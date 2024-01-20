import { useEffect } from 'react';
import { useUser } from './useUser';
import { UserInterface } from '../interfaces/user.interface';

export const useAuth = () => {
    const { user, setUser, addUser, removeUser } = useUser()

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            addUser(JSON.parse(user))
        }
    }, [])

    const login = (user: UserInterface) => {
        if (user.username !== 'dragon' || user.password !== '123') {
            throw new Error('User not exist');
        }
        addUser(user)
    };

    const logout = () => {
        removeUser()
    };

    return { user, setUser, login, logout };
};
