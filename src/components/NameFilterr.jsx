import React, { useContext } from 'react';
import { StarWearsContexto } from '../contexts/context';

const NameFilterr = () => {
  const {
    setFilters,
  } = useContext(StarWearsContexto);
  return (
    <div className="d-flex justify-content-start align-self-center ">
      <section className="col-md-6 col-md-offset-3">
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
