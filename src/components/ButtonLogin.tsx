import { UserInterface } from '../interfaces/user.interface';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { defaultToastConfig } from '../hooks/useDragon';

const ButtonLogin = (props: { user : UserInterface}) => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        try {
            login(props.user)
            navigate('/dragons')
            toast.success('Login successful', defaultToastConfig);
        } catch (e) {
            toast.error(e.message, defaultToastConfig);
        }
    }

    return <button onClick={handleClick}>Login</button>
}

export default ButtonLogin
