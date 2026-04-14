import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../features/authSlice';

export default function Dashboard() {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div>
            Dashboard
            <p>Bienvenido, {user}!</p>
            <button onClick={() => dispatch(logout())}>Cerrar sesión</button>
        </div>
    )
}
