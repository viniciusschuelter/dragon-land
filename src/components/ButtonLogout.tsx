import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ButtonLogout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate('/')
    }

    return (
        <button style={btnLogoutStyles} onClick={handleClick}>
            Logout&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                <title>Logout</title>
                <path d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3z"/>
                <path d="M19 10l-6-5v4H5v2h8v4l6-5z"/>
            </svg>
        </button>
    )
}

export default ButtonLogout


const btnLogoutStyles = {
    margin: 0,
    width: 'auto',
    height: 'fit-content',
    background: 'transparent',
    borderColor: '#ff434c'
}
