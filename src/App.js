import React from 'react';
import NameFilterr from './components/NameFilterr';
import Filtros from './components/Filtros';
import Classificar from './components/Classificar';
import ListaFiltros from './components/ListaFiltros';
import Table from './components/Table';
import { StarWearsProvider } from './contexts/context';

const App = () => (
  <StarWearsProvider>
    <NameFilterr />
    <div className="d-flex justify-content-evenly  mb-3">
      <Filtros />
      <Classificar />
    </div>
    <ListaFiltros />
    <Table />
  </StarWearsProvider>
);
export default App;
