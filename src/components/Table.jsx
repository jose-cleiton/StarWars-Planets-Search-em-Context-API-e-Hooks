import React, { useContext } from 'react';
import { StarWearsContexto } from '../contexts/context';

/**
 *
 * @returns setFilters((prevState) => ({
              ...prevState.filterByNumericValues,
              selected,
            }));
 */
const Table = () => {
  const {
    data,
    planetasFiltrados,
  } = useContext(StarWearsContexto);

  return (
    <div>
      {data.length === 0
        ? (
          <div>Carregando...</div>
        )
        : (
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Rotação</th>
                <th>Orbita</th>
                <th>Diâmetro</th>
                <th>Clima</th>
                <th>Gravidade</th>
                <th>Terreno</th>
                <th>Água da superfície</th>
                <th>População</th>
                <th>Filmes</th>
                <th>Data de criação</th>
                <th>Editado</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>

              {planetasFiltrados.map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
};
export default Table;
