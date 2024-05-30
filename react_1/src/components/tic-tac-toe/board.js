import React from "react";
import Square from "./square";
import './tictactoe.css';

function Board({xIsNext,squares, onplay}){
    const handleClick = (i) =>{
        if (calculateWinner (squares || squares[i])){
            return;
        };
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O" ;
        onplay(nextSquares);
    };
    
    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
              squares[a] &&
              squares[a] === squares[b] &&
              squares[a] === squares[c]
            ) {
              return squares[a];
            }
          }

          return null;
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "贏家: " + winner;
    } else {
      status = "下一個玩家： " + (xIsNext ? "X" : "O");
    }
    
    return(
    <>
        <div className="status">{status}</div>
        <div className="Board-row">
            <Square value={squares[0]} onsquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onsquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onsquareClick={()=>handleClick(2)}/>        
        </div>
        <div className="Board-row">
            <Square value={squares[3]} onsquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onsquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onsquareClick={()=>handleClick(5)}/>        
        </div>
        <div className="Board-row">
            <Square value={squares[6]} onsquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onsquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onsquareClick={()=>handleClick(8)}/>        
        </div>
    </>
    );
}

export default Board;