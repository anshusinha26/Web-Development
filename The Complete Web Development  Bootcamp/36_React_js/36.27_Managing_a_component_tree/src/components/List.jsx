import React, { useState } from "react";

// function ListItem(props) {
//     const [isDone, setDone] = useState(false);

//     function handleClick() {
//         setDone((prevValue) => {
//             return !prevValue;
//         });
//     }

//     return (
//         <li
//             onClick={handleClick}
//             style={{ textDecoration: isDone ? "line-through" : "none" }}
//         >
//             {props.item}
//         </li>
//     );
// }

function ListItem(props) {
    return <li>{props.item}</li>;
}

export default ListItem;
