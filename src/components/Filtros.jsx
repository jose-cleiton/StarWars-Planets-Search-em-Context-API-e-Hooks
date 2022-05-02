import React, { useContext, useEffect, useState } from 'react';
import { StarWearsContexto } from '../contexts/context';

const Filtros = () => {
  const {
    data, selected,
    filters, setPlanetasFiltrados,
    setSelected, setFilters,
    columns, setColumns,
  } = useContext(StarWearsContexto);

  const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);

  const COMPARISONS = ['maior que', 'menor que', 'igual a'];

  useEffect(() => setPlanetasFiltrados(data
    .filter((planeta) => planeta.name.toUpperCase()
      .includes(filters.filterByName.name.toUpperCase()))),
  [data, filters, setPlanetasFiltrados]);

  const botao = () => {
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByNumericValues: [...prevState.filterByNumericValues, selected],
      }),
    );
    setColumns(columns
      .filter((column) => column !== selected.column));
  };

  const applyFilter = () => {
    let dataFiltrar = data;
    filters.filterByNumericValues.forEach((filtro) => {
      switch (filtro.comparison) {
      case 'maior que':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) > Number(filtro.value)
        ));
        break;
      case 'menor que':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) < Number(filtro.value)
        ));
        break;
      case 'igual a':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) === Number(filtro.value)
        ));
        break;
      default:
        break;
      }
      setPlanetasFiltrados(dataFiltrar);
    });
  };

  useEffect(() => {
    applyFilter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  useEffect(() => {
    const filtrosSelecionadosNovo = filters.filterByNumericValues
      .map((filtro) => filtro.column);

    setSelected({
      column: columns.filter((opcao) => !filtrosSelecionados.includes(opcao))[0],
      comparison: 'maior que',
      value: '0',
    });

    setFiltrosSelecionados(filtrosSelecionadosNovo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);
  return (
    <div
      className="filtros d-flex flex-row justify-content-center align-items-end "
    >

      <label htmlFor="column-filter">
        Coluna
        <select
          className="form-select text-white-50 bg-dark"
          data-testid="column-filter"
          onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
        >
          {columns
            .filter((opcao) => !filtrosSelecionados
              .includes(opcao))
            .map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            ))}

        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operador
        <select
          className="form-select ms-1 text-white-50 bg-dark"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (e) => setSelected({ ...selected, comparison: e.target.value }) }
        >
          {COMPARISONS.map((item, index) => (
            <option key={ index }>{item}</option>
          ))}

        </select>
      </label>

      <label
        htmlFor="value-filter "
        className="ms-1"
      >
        <input
          className="form-control ms-1 text-white-50 bg-dark"
          data-testid="value-filter"
          type="number"
          defaultValue="0"
          onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
        />
      </label>

      <div className="ms-2">
        <button
          className="btn btn-warning"
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            botao();
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: '0',
            });
          } }
        >
          Filtrar
        </button>
        <button
          className="btn btn-danger  ms-2"
          data-testid="button-remove-filters"
          type="submit"
          onClick={ () => {
            setFilters(
              (prevState) => ({
                ...prevState,
                filterByNumericValues: [],
              }),
            );
            setColumns(['population',
              'orbital_period',
              'diameter',
              'rotation_period',
              'surface_water']);
          } }
        >
          REMOVER FILTROS
        </button>

      </div>

    </div>
  );
};

export default Filtros;
