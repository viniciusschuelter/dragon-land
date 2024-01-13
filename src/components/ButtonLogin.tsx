import { UserInterface } from '../interfaces/user.interface';
import { useAuth } from '../hooks/useAuth';

const ButtonLogin = (props: { user : UserInterface}) => {
    const { login } = useAuth();

    const handleClick = () => {
        login(props.user)
    }

    return <button onClick={handleClick}>Login</button>
}

export default ButtonLogin
