import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Coffee from './components/Coffee.jsx';
import theme from './assets/theme.js';
import { ThemeProvider } from '@mui/material';

import "@fontsource/roboto";
import './App.css';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Hero />
                <Coffee />
            </ThemeProvider>
        </>
    );
}

export default App;
