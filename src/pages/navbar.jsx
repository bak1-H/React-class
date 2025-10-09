import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
    <nav>
      <Link to="/poke">Pokemones</Link> | 
      <Link to="/">Main</Link>
    </nav>
    )
}