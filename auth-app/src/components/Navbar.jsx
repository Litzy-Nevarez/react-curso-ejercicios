import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {

    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">Home</Link>

            {
                user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )
            }
        </nav>
    );
}

export default Navbar;