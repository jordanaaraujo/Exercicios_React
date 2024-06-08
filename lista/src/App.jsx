import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState(['Óculos Escuros', 'Protetor', 'Biquini', 'Toalha', 'Camera']);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>Itens de Viagem</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Digite um item" 
      />
      <button onClick={handleAddItem}>Adicionar Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;