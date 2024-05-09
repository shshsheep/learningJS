import React from "react";
import { useState } from "react";
import Mysilder from "./Mysilder";


function MyRGBPanel() {
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
    const [r, setRed] = useState(128);
    const [g, setGreen] = useState(128);
    const [b, setBlue] = useState(128);

    const updateRed = (c) => setRed(c);
    const updateGreen = (c) => setGreen(c);
    const updateBlue = (c) => setBlue(c);
    return(
        <div style={panelCSS}>
             <h3>MyRGBPanel元件</h3>
             <div
              style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                width: "200px",
                height: "100px"}}
             />
            <Mysilder label="R" onChange={updateRed} /> 
            <Mysilder label="G" onChange={updateGreen} /> 
            <Mysilder label="B" onChange={updateBlue} /> 
        </div>
    );
}

export default MyRGBPanel;