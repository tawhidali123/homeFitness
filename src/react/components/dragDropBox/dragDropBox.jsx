import React, { useReducer, useEffect, createElement} from "react";
import { useState } from "react";


function DragDropBox(props){
    const [dragablesVal, setDragables] = useState([]);
    
    const enableDrop = event => event.preventDefault();

    const handleDrop = event => {
        event.preventDefault();
        const exercise = JSON.parse(event.dataTransfer.getData("exercise"));
        const ele = document.getElementById(exercise.id)        
        setDragables([...dragablesVal, exercise]);
        event.target.appendChild(ele)
    }

    return (
        <div 
            onDrop={handleDrop}
            onDragOver={enableDrop}
            style={{
                height: 200,
                width: 200,
                background: "lightblue",
                margin: "10px 0"
            }}
        >
            { props.children }
        </div>
    )
}

export default DragDropBox;