import { useState } from 'react';
import { UserInterface } from '../interfaces/user.interface';

export const useUser = () => {
    const [user, setUser] = useState<UserInterface>(null);

    const addUser = (user: UserInterface) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user))
    };

    const removeUser = () => {
        setUser(null);
        localStorage.setItem('user', JSON.stringify(user))
    };

    return { user, addUser, removeUser };
};
