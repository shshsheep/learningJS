import React, { useState } from "react";

function Mysilder({label, onChange}){
    const[value, setValue] = useState(128);
    const handleSliderchange = (e) => {
        const newValue = e.target.value;

        setValue(newValue);
        if (onChange){
            onChange(newValue);
        }
    };

    return(
        <div>
            <span>{label}</span>
            <input 
                className="myslider"
                type="range"
                width="400"
                min="0" 
                max="255" 
                value={value} 
                onChange={handleSliderchange}
            />
            
            <span>{value}</span>
        </div>
        
    );
}
export default Mysilder;