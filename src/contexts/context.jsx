import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

export const StarWearsContexto = createContext(null);

export const StarWearsProvider = ({ children }) => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
  const [data, setData] = useState([]);
  const [planetasFiltrados, setPlanetasFiltrados] = useState([]);
  const [condicoes, setCondicoes] = useState([]);
  const [selected, setSelected] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'population',
      sort: 'ASC',
    },

  });
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const fetchPlanetas = async () => {
    const response = await fetch(URL);
    const { results } = await response.json();
    const planetas = results.filter((planet) => delete planet.residents);
    setPlanetasFiltrados(planetas);
    setData(planetas);
  };

  useEffect(() => {
    fetchPlanetas();
  }, []);
  const store = {
    data,
    planetasFiltrados,
    condicoes,
    selected,
    filters,
    columns,
    setColumns,
    setPlanetasFiltrados,
    setCondicoes,
    setSelected,
    setFilters,
  };
  return (
    <StarWearsContexto.Provider value={ store }>
      {children}
    </StarWearsContexto.Provider>
  );
};
StarWearsProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.shape({})),
}.isRequired;
