import React from "react";

function Details(props) {
    return (
        <div className="bottom">
            <p className="info">{props.tel}</p>
            <p className="info">{props.website}</p>
        </div>
    );
}

export default Details;
