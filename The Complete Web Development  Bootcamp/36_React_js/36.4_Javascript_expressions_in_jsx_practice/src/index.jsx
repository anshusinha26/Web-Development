import React from "react";
import ReactDOM from "react-dom";

const username = "Anshu Sinha";
const currentYear = new Date().getFullYear();

ReactDOM.render(
    <div>
        <p>Created by {username}</p>
        <p>&copy; {currentYear}</p>
    </div>,
    document.querySelector("#root")
);
