import React from "react";
import App from "../../App";

function Square({value,onsquareClick}){
    return(
        <button className="square" onClick={onsquareClick}>{value}</button>
    );
}

export default Square;