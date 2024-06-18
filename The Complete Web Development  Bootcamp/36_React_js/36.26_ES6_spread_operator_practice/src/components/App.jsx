import React, { useState } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    const [items, setItems] = useState([]);
    function addItems() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" value={inputText} onChange={handleChange} />
                <button onClick={addItems}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item) => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
