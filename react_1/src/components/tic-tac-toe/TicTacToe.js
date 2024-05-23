import React, {useState} from "react";
import Board from "./board";

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill('A')]);
    const [currentMove,setcurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    return(
        <div className="Game">
            <div className="GameBoard">
                <Board squares={currentSquares} />
            </div>

        </div>
    )
}

export default TicTacToe;