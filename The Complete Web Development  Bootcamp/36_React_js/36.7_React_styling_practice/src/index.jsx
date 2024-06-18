import React from "react";
import ReactDOM from "react-dom";

const time = new Date();
const hours = time.getHours();
const seconds = time.getSeconds();

let message = "";
let color = "black";

if (hours >= 0 && seconds > 0 && hours < 12) {
    message = "Good morning";
    color = {
        color: "#219ebc",
    };
} else if (hours >= 12 && seconds > 0 && hours < 18) {
    message = "Good afternoon";
    color = {
        color: "#ffb703",
    };
} else if (hours >= 18 && seconds > 0 && hours <= 23 && seconds <= 59) {
    message = "Good evening";
    color = {
        color: "#023047",
    };
} else {
    message = "!";
}

// console.log(message);

ReactDOM.render(
    <div>
        <h1 className="heading" style={color}>
            {message}
        </h1>
    </div>,
    document.querySelector("#root")
);
