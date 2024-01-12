import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { UserInterface } from '../interfaces/user.interface';

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);

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
