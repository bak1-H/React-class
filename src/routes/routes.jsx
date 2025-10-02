import { Routes, Route } from 'react-router-dom';
import NavBar from '../pages/navbar';
import LoginPage from '../pages/login';
export default function AppRoutes(){
    return 
    <Router>
        <NavBar/>
    <Routes>
        <Route path="/" element={<h1>Bienvenido a la página principal</h1>} />
        <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </Router>
}