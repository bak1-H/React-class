
import './App.css'
import Personajes from './components/personajes';
import PokemonSearch from './pages/pokebuscar';

const App = () => {

  return (
      <div classname ="App">
        <PokemonSearch/>
      </div>
  )


const pokemonList = [
  {
    tittle:"Pikachu el mas bacano",
    description: "Rata amarilla pica a xora",
    modelUrl: "https://sketchfab.com/3d-models/pikachu-273766237c614ab1bbaf094c9fc72a3e"
  },
  {
  tittle:"Agumon",
  description:"Este no es un pokemon.",
  modelUrl:"https://sketchfab.com/3d-models/agumon-db4715ff75564a90aa079301392f7da1"
  }
];
return <Personajes pokemon={pokemonList} />;
}


export default App
