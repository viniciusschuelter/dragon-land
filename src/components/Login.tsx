import ButtonLogin from './ButtonLogin';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    return (
        <>
            <div>
                <label>
                    Username:
                    <input value={username} onChange={handleUsernameChange} placeholder='Type any username'/>
                </label>
                <label>
                    Login:
                    <input value={password} onChange={handlePasswordChange} placeholder='Type any password'/>
                </label>
                <ButtonLogin user={{username, password}}></ButtonLogin>
            </div>
        </>
    )
}

export default Login
