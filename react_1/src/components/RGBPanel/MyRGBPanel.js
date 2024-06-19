import React from "react";
import { useState } from "react";
import Mysilder from "./Mysilder";

/**
 * `MyRGBPanel` 元件：用於顯示和調整 RGB 顏色的面板，並調用 `updateBackgroundColor` 函數來更新背景顏色。
 * @param {Object} props - 元件接收的參數。
 * @param {Function} props.updateBackgroundColor - 更新背景顏色的回調函數。
 */

function MyRGBPanel({ updateBackgroundColor }) {
    // 定義面板的 CSS 樣式
    const panelCSS = {
        display: "flex",
        flexDirection: "column", // 設置為垂直排列
        border: "1px solid black",
        borderRadius: "10px", // 設置邊框圓角
        width: "300px",
        padding: "30px",
        alignItems: "center",
        margin: "auto",
        justifyContent: "center" // 設置為居中對齊
    };

    // 使用 useState 來管理 RGB 的狀態
    const [r, setRed] = useState(100);
    const [g, setGreen] = useState(150);
    const [b, setBlue] = useState(200);

    // 更新紅色值
    const updateRed = (c) => {
        const newR = c ;
        setRed(newR);
        // 更新背景顏色，使用最新的 r 值
        updateBackgroundColor(255 - newR,255 - g,255 - b); 
    };

    // 更新綠色值
    const updateGreen = (c) => {
        const newG = c ;
        setGreen(newG);
        // 更新背景顏色，使用最新的 g 值
        updateBackgroundColor(255 - r, 255- newG,255 - b); 
    };

    // 更新藍色值
    const updateBlue = (c) => {
        const newB = c ;
        setBlue(newB);
        // 更新背景顏色，使用最新的 b 值
        updateBackgroundColor(255 - r,255 - g, 255 - newB); 
    };

    
    return(
        <div style={panelCSS}>
             <h3>MyRGBPanel元件</h3>
             <div
              style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`, // 設置背景顏色
                width: "200px",
                height: "100px"}}
             />
             
             {/* 使⽤ Mysilder 元件來調整 RGB 顏色 */}
            <Mysilder label="R" value = {r} onChange={updateRed} /> 
            <Mysilder label="G" value = {g} onChange={updateGreen} /> 
            <Mysilder label="B" value = {b} onChange={updateBlue} /> 
        </div>
    );
}

export default MyRGBPanel;