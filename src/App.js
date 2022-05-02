import React from 'react';
import NameFilterr from './components/NameFilterr';
import Filtros from './components/Filtros';
import Classificar from './components/Classificar';
import ListaFiltros from './components/ListaFiltros';
import Table from './components/Table';
import { StarWearsProvider } from './contexts/context';

const App = () => (
  <StarWearsProvider>
    <div className="p-3 mb-2 bg-dark text-white ">

      <NameFilterr />

      <div className="d-flex justify-content-evenly  mb-3">
        <Filtros />
        <Classificar />
      </div>
      <ListaFiltros />
      <Table />
    </div>

  </StarWearsProvider>
);
export default App;
