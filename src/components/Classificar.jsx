import React, { useContext } from 'react';
import { StarWearsContexto } from '../contexts/context';

const Classificar = () => {
  const {

    columns,
  } = useContext(StarWearsContexto);
  return (
    <div
      className="filtros d-flex flex-row justify-content-center align-items-end "
    >
      <div>
        <label htmlFor="column-filter">
          Coluna
          <select
            className="form-select"
          >
            {columns.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>
            ))}

          </select>
        </label>
      </div>
      <div className="form-check ">
        <label
          className="form-check-label ms-1"
          htmlFor="flexRadioDefault1"
        >
          Ascendente
          <input
            className="form-check-input "
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </label>
      </div>
      <div className="form-check">
        <label
          className="form-check-label ms-1"
          htmlFor="flexRadioDefault2"
        >
          Descendente
          <input
            className="form-check-input "
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
        </label>
      </div>
      <button
        className="btn btn-warning ms-2"
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
};

export default Classificar;
