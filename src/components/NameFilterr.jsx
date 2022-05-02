import React, { useContext } from 'react';
import { StarWearsContexto } from '../contexts/context';

const NameFilterr = () => {
  const {
    setFilters,
  } = useContext(StarWearsContexto);
  return (
    <div className="d-flex justify-content-center ">
      <section>
        <div>
          <h3>Projeto Star Wars - Trybe</h3>
        </div>
        <div>
          <input
            className="form-control"
            type="text"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilters(
              (prevState) => ({
                ...prevState,
                filterByName: { name: value },
              }),
            ) }
          />
        </div>
      </section>
    </div>

  );
};

export default NameFilterr;
