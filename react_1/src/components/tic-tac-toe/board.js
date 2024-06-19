import React from "react";
import Square from "./square";
import './tictactoe.css';

/**
 * `Board` 元件：展示井字棋遊戲的棋盤，處理玩家點擊和勝利判斷。
 * @param {Object} props - 元件接收的參數。
 * @param {boolean} props.xIsNext - 指示下一步是否是 "X" 玩家。
 * @param {Array} props.squares - 當前棋盤的狀態，每個格子的值（"X", "O", 或 null）。
 * @param {Function} props.onplay - 當玩家做出新一步時調用的函數。
 */

function Board({xIsNext,squares, onplay}){

    /**
     * 處理方格點擊的函數。
     * @param {number} i - 被點擊的方格的索引。
     */

    const handleClick = (i) =>{
      // 如果已有勝利者或方格已被佔用，則返回。
        if (calculateWinner (squares) || squares[i]){
            return;
        };
        const nextSquares = squares.slice(); // 創建棋盤狀態的副本
        nextSquares[i] = xIsNext ? "X" : "O" ; // 設置方格為 "X" 或 "O"
        onplay(nextSquares); // 調用 onplay 函數更新棋盤狀態
    };

     /**
     * 計算是否有勝利者。
     * @param {Array} squares - 當前棋盤的狀態。
     * @returns {string|null} 返回勝利者（"X" 或 "O"），如果沒有勝利者則返回 null。
     */
    
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
              return squares[a]; // 返回勝利者
            }
          }

          return null; // 沒有勝利者
    };

    const winner = calculateWinner(squares); // 判斷是否有勝利者
    let status;
    if (winner) {
      status = "贏家: " + winner; // 顯示勝利者
    } else {
      status = "下一個玩家： " + (xIsNext ? "X" : "O"); // 顯示下一個玩家
    }
    
    return(
    <>
        <div className="status">{status}</div> {/* 顯示遊戲狀態 */}
        <div className="board-row">
            <Square value={squares[0]} onsquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onsquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onsquareClick={()=>handleClick(2)}/>        
        </div>
        <div className="board-row">
            <Square value={squares[3]} onsquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onsquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onsquareClick={()=>handleClick(5)}/>        
        </div>
        <div className="board-row">
            <Square value={squares[6]} onsquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onsquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onsquareClick={()=>handleClick(8)}/>        
        </div>
    </>
    );
}

export default Board;