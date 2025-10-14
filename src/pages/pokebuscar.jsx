// src/components/PokemonSearch.jsx
import React, { useState } from 'react';
import axios from 'axios';
import "../temp/pokebuscar.css";

const PokemonSearch = () => {
  // Definir estados para almacenar el nombre del Pokémon, la imagen y el error
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [error, setError] = useState('');

  // Función para obtener la imagen de un Pokémon desde la API
  const fetchPokemonImage = async () => {
    // Limpiar el error anterior
    setError('');
    setPokemonImage('');

    try {
      // Hacer la solicitud GET para obtener los datos del Pokémon
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      // Obtener la URL de la imagen desde la respuesta de la API
      const imageUrl = response.data.sprites.front_default;
      
      // Actualizar el estado con la imagen
      setPokemonImage(imageUrl);
    } catch (err) {
      // Si no se encuentra el Pokémon o hay un error, mostrar un mensaje de error
      setError('Pokémon no encontrado. Intenta con otro nombre.');
    }
  };

  return (
    <div classname ="pokebuscar " >
      <h1>Buscar Pokémon</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Escribe el nombre del Pokémon"
      />
      <button onClick={fetchPokemonImage}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemonImage && (
        <div>
          <h2>Imagen de {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
          <img src={pokemonImage} alt={pokemonName} />
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
