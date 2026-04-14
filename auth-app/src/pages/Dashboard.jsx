import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Bienvenido, {user.username}!</p>
        </div>
    );
}

export default Dashboard;