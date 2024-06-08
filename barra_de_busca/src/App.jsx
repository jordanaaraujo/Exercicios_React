import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cars = ['Mentes Extraordinárias', 'O Poder do Hábito', 'É Assim que Acaba', 'Antes que  Café Esfrie', 'O Poder do Silencio', 'Eu e Esse Coração', 'O Menino que Tinha Medo De Errar', 'A Mandibula de Caim',];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars.filter((car) =>
    car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lista de Livros da Jordana</h1>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default App;

