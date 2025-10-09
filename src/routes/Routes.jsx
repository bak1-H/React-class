import { Routes, Route } from 'react-router-dom';
import NavBar from '../pages/navbar';
import Personajes from '../components/personajes';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/poke" element={<Personajes/>} />
        </Routes>
    )
}