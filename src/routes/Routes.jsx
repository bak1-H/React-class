import { Routes, Route } from 'react-router-dom';
import NavBar from '../pages/navbar';
import Personajes from '../components/personajes';
import PokemonSearch from '../pages/pokebuscar';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/poke" element={<Personajes/>} />
            <Route path="/buscar" element={<PokemonSearch/>} />
        </Routes>
    )
}