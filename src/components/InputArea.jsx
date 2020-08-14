import React, { useState } from "react";

function InputArea(props) {
    const [items, addItems] = useState("");

    function updateItems(event) {
        addItems(event.target.value);
    }

    return(
        <div className="form">
            <input 
                onChange= {updateItems}
                type="text" 
                name= "item" 
                value= {items}
            />
            <button 
                onClick= {() => {
                    props.clickItem(items);
                    addItems("");
                }}
            >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;