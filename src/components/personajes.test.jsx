import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import Personajes from './personajes';

describe('Personajes Componentes', () => {
  it('debe mostrar el mensaje cuando no hay pokemones', () => {
    const html = renderToString(<Personajes pokemon={[]} />);
    expect(html).toContain('No hay pokemones disponibles');
  });

  it('debe mostrar el mensaje cuando el pokemon es undefined', () => {
    const html = renderToString(<Personajes />);
    expect(html).toContain('No hay pokemones disponibles');
  });

  it('debe renderizar los pokemones correctamente', () => {
    const mockPersonajes = [
      {
        tittle: "Pikachu el mas bacano",
        description: "Rata amarilla pica a xora",
        modelUrl: "https://sketchfab.com/3d-models/pikachu-273766237c614ab1bbaf094c9fc72a3e"
      },
      {
        tittle: "Agumon",
        description: "Este no es un pokemon.",
        modelUrl: "https://sketchfab.com/3d-models/agumon-db4715ff75564a90aa079301392f7da1"
      },
      {
        tittle:"Bakimon",
        description:"Es un gato que se cree pokemon",
        modelUrl:"https://sketchfab.com/3d-models/cat-knight-4a1abd78862d472d9328d39688f206cc"
      }
    ];
    
    const html = renderToString(<Personajes pokemon={mockPersonajes} />);
    expect(html).toContain('Pikachu el mas bacano');
    expect(html).toContain('https://sketchfab.com/3d-models/pikachu-273766237c614ab1bbaf094c9fc72a3e');
  });
});