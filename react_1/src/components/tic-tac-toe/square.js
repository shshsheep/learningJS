import React from "react";
import './tictactoe.css';

/**
 * `Square` 元件：展示井字棋中的單個方格。
 * @param {Object} props - 元件接收的參數。
 * @param {string|null} props.value - 方格的值（"X", "O", 或 null）。
 * @param {Function} props.onsquareClick - 當方格被點擊時調用的函數。
 */

function Square({value,onsquareClick}){
    return(
        <button className="square" onClick={onsquareClick}>{value}</button>
    );
}

export default Square;