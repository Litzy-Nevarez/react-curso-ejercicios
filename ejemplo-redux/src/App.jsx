import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const user = useSelector((state) => state.auth.user);

  return user ? <Dashboard /> : <Login />;
}

export default App;
