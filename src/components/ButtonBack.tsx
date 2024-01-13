import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
    const navigate = useNavigate()
    
    return (
        <h3 style={backButton} onClick={() => navigate('/dragons')}>
            ← Back
        </h3>
    )
}

export default ButtonBack

const backButton = {
    position: 'absolute',
    cursor: 'pointer',
    left: '1rem',
    top: '1rem'
}
