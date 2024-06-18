import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt="avatar_img" />
            <p>{props.tel}</p>
            <p>{props.website}</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>

        <Card
            name="Chris Martin"
            img="../public/images/chris_martin.jpeg"
            tel="+44 1234 567890"
            website="https://www.coldplay.com/"
        />
        <Card
            name="Shahrukh Khan"
            img="../public/images/shahrukh_khan.jpeg"
            tel="+91 12345 67890"
            website="https://www.coldplay.com/"
        />
        <Card
            name="Robert Downey Jr"
            img="../public/images/robert_downey_jr.jpeg"
            tel="+1 (123) 456-7890"
            website="https://www.linkedin.com/in/robert-downey-jr-ab6703215"
        />
    </div>,
    document.querySelector("#root")
);
