import React from 'react';
import './App.css';
import Table from './components/Table';
import Filtros from './components/Filtros';
import { StarWearsProvider } from './contexts/context';
import ListaFiltros from './components/ListaFiltros';
import Classificar from './components/Classificar';
import NameFilterr from './components/NameFilterr';

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
