import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [lists, addLists] = useState([]);

    function updateLists(items) {
        addLists(prevItems => {
            return [...prevItems, items]
        });
    }

    function deleteItems(id) {
        addLists(prevItems => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id; 
                }
            );
        });   
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div>
                <InputArea 
                    clickItem= {updateLists}
                />
            </div>
            <div>
                <ul>
                    {lists.map((toDoItem, index) => 
                        <ToDoItem 
                            key= {index}
                            id= {index}
                            text= {toDoItem}
                            onChecked= {deleteItems}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;