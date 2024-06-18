import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map((contact) => (
                <Card
                    name={contact.name}
                    img={contact.img}
                    tel={contact.tel}
                    website={contact.website}
                />
            ))}
        </div>
    );
}

export default App;
