import { useState } from 'react';
import { UserInterface } from '../interfaces/user.interface';

export const useUser = () => {
    const [user, setUser] = useState<UserInterface | null>(null);

    const addUser = (user: UserInterface) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user))
    };

    const removeUser = () => {
        setUser(null);
        localStorage.removeItem('user')
    };

    return { user, setUser, addUser, removeUser };
};
