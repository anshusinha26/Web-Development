import React from "react";
import cars from "./practice";

const [honda, tesla] = cars;

const {
    speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
    speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
    colorsByPopularity: [hondaTopColor],
} = honda;
const {
    colorsByPopularity: [teslaTopColor],
} = tesla;

function App() {
    return (
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Color</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColor}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColor}</td>
            </tr>
        </table>
    );
}

export default App;
