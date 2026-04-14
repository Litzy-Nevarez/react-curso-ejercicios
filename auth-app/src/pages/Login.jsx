import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                id="username" 
                onChange={(e) => setUsername(e.target.value)}/>
            <input 
                type="password" 
                placeholder="Password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Acceder</button>
        </form>
    );
}

export default Login;