import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { login } from '../features/authSlice';

export default function Login() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username));
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Usuario' onChange={(e) => setUsername(e.target.value)} />
                <button>Ingresar</button>
            </form>
        </div>
    )
}
