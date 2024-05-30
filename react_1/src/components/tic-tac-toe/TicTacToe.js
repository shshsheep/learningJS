import React, {useState} from "react";
import Board from "./board";

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setcurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handleplay = (nextSquares) =>{
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
        setHistory(nextHistory);
        setcurrentMove(nextHistory.length - 1);
    }

    return( 
        <div className="Game">
            <div className="GameBoard">
                <Board xIsNext={xIsNext} squares={currentSquares} onplay={handleplay}/>
            </div>
            <div className='game-info'>
                <h6>遊戲歷程</h6>
            </div>
        </div>
    )
}

export default TicTacToe;