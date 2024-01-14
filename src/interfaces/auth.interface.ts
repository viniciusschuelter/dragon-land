import { UserInterface } from './user.interface';

export interface AuthContextInterface {
    user: UserInterface | null
    setUser: (user: UserInterface | null) => void
}
