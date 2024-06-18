import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map((emoji) => (
                    <Card
                        emoji={emoji.emoji}
                        name={emoji.name}
                        meaning={emoji.meaning}
                    />
                ))}
            </dl>
        </div>
    );
}

export default App;
