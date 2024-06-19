import React, {useState} from "react";
import Board from "./board";

 /**
 * `TicTacToe` 元件：管理井字棋遊戲的狀態和歷史，控制遊戲的進行。
 */

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]); // 保存每一步的棋盤狀態
    const [currentMove,setcurrentMove] = useState(0); // 當前步數
    const xIsNext = currentMove % 2 === 0; // 判斷下一個是否是 "X"
    const currentSquares = history[currentMove]; // 當前的棋盤狀態

     /**
     * 處理玩家做出新一步的函數。
     * @param {Array} nextSquares - 新的棋盤狀態。
     */

    const handleplay = (nextSquares) =>{
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares]; // 更新歷史
        setHistory(nextHistory); // 保存新的歷史
        setcurrentMove(nextHistory.length - 1); // 設置當前步數
    };

     /**
     * 渲染每一步的歷史記錄。
     */

    const moves = history.map((squares, move) => {
        const jumpTo = (nextMove) => setcurrentMove(nextMove); // 跳轉到指定的步數
        let description = move > 0 ? `回到第 ${move} 步` : "遊戲開始"; // 歷史步數的描述
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