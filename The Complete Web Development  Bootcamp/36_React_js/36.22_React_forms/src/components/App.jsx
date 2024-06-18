import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        setHeading(name);
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form action="" onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="What's your name?"
                    onChange={handleChange}
                    value={name}
                />
                <button type="submit" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
