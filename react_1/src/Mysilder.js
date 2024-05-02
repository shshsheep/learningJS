import { useState } from "react";

function Mysilder(props){
    const[value, setValue] = useState(128);
    const handlechange = (e) => {
        setValue(e.target.value)
    };

    return(
        <div>
            <span>{props.color}</span>
            <input className="myslider"
                type="range"
                width="400"
                min="0" 
                max="255" 
                value={value} 
                onChange={handlechange}
            />
            
        <span>{value}</span>
        </div>
        
    );
}
export default Mysilder;