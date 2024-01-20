import ButtonLogin from '../components/ButtonLogin';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e: any) => setUsername(e.target.value)
    const handlePasswordChange = (e: any) => setPassword(e.target.value)

    return (
        <div className='container'>
            <article className='grid'>
                <div>
                    <hgroup>
                        <h3>Welcome to Dragon Land</h3>
                        <h2>Type your user to access</h2>
                    </hgroup>
                    <label>
                        Username:
                    </label>
                    <input
                        name='name'
                        placeholder='type your username'
                        onChange={handleUsernameChange}
                    />
                    <label>
                        Password:
                    </label>
                    <input
                        name='password'
                        placeholder='type your password'
                        onChange={handlePasswordChange}
                    />
                    <ButtonLogin user={{username, password}} />
                </div>
            </article>
        </div>
    )
}

export default Login
