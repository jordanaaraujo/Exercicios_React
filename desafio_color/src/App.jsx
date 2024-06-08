import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const colors = ['#DEB887', '#FFDAB9', ' 	#BC8F8F', '#8B4513'];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  return (
    <div className="App">
      <h1>Cor de Fundo: {currentColor}</h1>
      <button onClick={changeColor}>Alterar Cor</button>
    </div>
  );
};

export default App;
