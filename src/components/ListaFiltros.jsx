import React, { useContext } from 'react';
import { StarWearsContexto } from '../contexts/context';

function ListaFiltros() {
  const {
    filters,
    setFilters,
    columns,
    setColumns,
  } = useContext(StarWearsContexto);

  const deletaFiltro = (index) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByNumericValues: filters
          .filterByNumericValues.filter((filtro, id) => id !== index),
      }),
    );
    const filtroRemovido = filters
      .filterByNumericValues.filter((filtro, id) => id === index);
    setColumns([...columns, filtroRemovido[0].column]);
  };
  return (
    <div>
      {filters.filterByNumericValues.map((filter, index) => (
        <label
          htmlFor="filter"
          key={ index }
          data-testid="filter"
          className="d-flex align-items-center alert  "
        >
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button
            type="submit"
            className="btn btn-outline-danger btn-close"
            onClick={ () => deletaFiltro(index) }
          >
            {' '}
          </button>
        </label>

      ))}

    </div>
  );
}

export default ListaFiltros;
