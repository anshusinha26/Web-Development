import React from "react";
import ReactDOM from "react-dom";

const fName = "Anshu";
const lName = "Sinha";
const luckyNumber = Math.floor(Math.random() * 10 + 1);

ReactDOM.render(
    <div>
        <h1>
            Hello {fName} {lName}!
        </h1>
        <p>Your lucky number is: {luckyNumber}</p>
    </div>,
    document.querySelector("#root")
);
