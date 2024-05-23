import { useState } from 'react';
import './App.css';
import MyRGBPanel from './components/RGBPanel/MyRGBPanel';
import MyCalculator from './components/calculator/MyCalculator';
import Board from './components/tic-tac-toe/board';
import TicTacToe from './components/tic-tac-toe/TicTacToe'

function App() {
  const [color, setColor] = useState("rgb(128,128,128)");
  const [textcolor, setTextColor] = useState("rgb(128,128,128)");

  const changeBackgroundColor = (r, g, b) => {
    setColor(`rgb(${r}, ${g}, ${b})`);
    setTextColor(`rgb(${255 - r}, ${255 - g}, ${255 - b})`);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <header className="App-header" style={{color: textcolor}}>
        <h2>Hello react 2024.05.17</h2>
        <h3>4B0G0029 楊杰樺</h3>
        <h2>react第一個原件</h2>
        <MyRGBPanel updateBackgroundColor={changeBackgroundColor} />
        <h2>MyCalculator</h2>
        <MyCalculator  />
        <h2>tic-tac-toe Game</h2>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
