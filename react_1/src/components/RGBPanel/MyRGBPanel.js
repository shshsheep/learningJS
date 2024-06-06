import React from "react";
import { useState } from "react";
import Mysilder from "./Mysilder";


function MyRGBPanel({ updateBackgroundColor }) {
    const panelCSS = {
        display: "flex",
        flexDirection: "column", // Fixed typo in "flexDirection"
        border: "1px solid black",
        borderRadius: "10px", // camelCase for CSS properties
        width: "300px",
        padding: "30px",
        alignItems: "center",
        margin: "auto",
        justifyContent: "center" // camelCase for CSS properties
    };
    
    const [r, setRed] = useState(100);
    const [g, setGreen] = useState(150);
    const [b, setBlue] = useState(200);

    const updateRed = (c) => {
        const newR = c ;
        setRed(newR);
        updateBackgroundColor(255 - newR,255 - g,255 - b); // 使用最新的 r 值
    };

    const updateGreen = (c) => {
        const newG = c ;
        setGreen(newG);
        updateBackgroundColor(255 - r, 255- newG,255 - b); // 使用最新的 g 值
    };

    const updateBlue = (c) => {
        const newB = c ;
        setBlue(newB);
        updateBackgroundColor(255 - r,255 - g, 255 - newB); // 使用最新的 b 值
    };

    
    return(
        <div style={panelCSS}>
             <h3>MyRGBPanel元件</h3>
             <div
              style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                width: "200px",
                height: "100px"}}
             />
            <Mysilder label="R" value = {r} onChange={updateRed} /> 
            <Mysilder label="G" value = {g} onChange={updateGreen} /> 
            <Mysilder label="B" value = {b} onChange={updateBlue} /> 
        </div>
    );
}

export default MyRGBPanel;