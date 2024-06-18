import React, { useState } from "react";

function App() {
    // handle heading text
    const [headingText, setHeadingText] = useState("Hello");
    function handleClick() {
        setHeadingText("Submitted");
    }

    // handleMouseOver
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver() {
        setMouseOver(true);
    }

    // handleMouseOut
    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                onClick={handleClick}
                style={{ background: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Submit
            </button>
        </div>
    );
}

export default App;
