import React, {useState} from "react";
import Board from "./board";

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setcurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handleplay = (nextSquares) =>{
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
        setHistory(nextHistory);
        setcurrentMove(nextHistory.length - 1);
    };

    const moves = history.map((squares, move) => {
        const jumpTo = (nextMove) => setcurrentMove(nextMove);
        let description = move > 0 ? `回到第 ${move} 步` : "遊戲開始";
        // if (move > 0) {
        //   description = "回到第 " + move + " 步";
        // } else {
        //   description = "遊戲開始";
        // }
        return <>
          <li key = {move}>
            <button onClick={()=> jumpTo(move)}>{description}</button>
          </li>
        </>;
      });

    return( 
        <div className="Game">
            <div className="GameBoard">
                <Board xIsNext={xIsNext} squares={currentSquares} onplay={handleplay}/>
            </div>
            <div className='game-info'>
                <h7>遊戲歷程</h7>
                <ul>{moves}</ul>
            </div>
        </div>
    );
}

export default TicTacToe;