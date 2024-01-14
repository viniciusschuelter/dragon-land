import { UserInterface } from '../interfaces/user.interface';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ButtonLogin = (props: { user : UserInterface}) => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        login(props.user)
        navigate('/dragons')
    }

    return <button onClick={handleClick}>Login</button>
}

export default ButtonLogin
