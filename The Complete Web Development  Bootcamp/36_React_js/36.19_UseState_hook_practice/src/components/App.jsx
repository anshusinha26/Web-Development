import React, { useState } from "react";

function App() {
    let currentTime = new Date().toLocaleTimeString();
    let [time, setTime] = useState(currentTime);
    // console.log(time);

    setInterval(getTime, 1000);

    function getTime() {
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            {/* <div>
                <button onClick={getTime}>Get Time</button>
            </div> */}
        </div>
    );
}

export default App;
