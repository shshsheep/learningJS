import { useState } from 'react';
import './App.css';
import MyRGBPanel from './components/MyRGBPanel';
import MyCalculator from './components/MyCalculator';

function App() {
  const [color, setColor] = useState("rgb(128,128,128)");

  const changeBackgroundColor = (r, g, b) => {
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <header className="App-header">
        <h2>Hello react 2024.05.09</h2>
        <h3>4B0G0029 楊杰樺</h3>
        <h2>react第一個原件</h2>
        <MyRGBPanel updateBackgroundColor={changeBackgroundColor} />
        <h2>MyCalculator</h2>
        <MyCalculator  />
      </header>
    </div>
  );
}

export default App;
