// ----- Basic events

// variable 'btn' to store the button with id 'v1'
const btn = document.querySelector("#v1");

// btn.onclick = function () {
//     alert("You clicked me!");
// };

function scream() {
    alert("The mouse pointer is above me!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onmouseenter = () => {
    alert("You hovered over me!");
};

document.querySelector("#v2").addEventListener("click", () => {
    alert("Button 2 was clicked!");
});

// ----- Random color exercise

// function to make new random colors out of rgb values
function makeRandomColor() {
    // variable for storing the rgb values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b };
}

// select the button, div and h2
const colorBtn = document.querySelector("#color-change-btn");
const colorH2 = document.querySelector(".new-color-heading");
const colorDiv = document.querySelector("#color-change-div");

// select the button, and change the color of the background when clicked
colorBtn.addEventListener("click", () => {
    // create 'newColor' with rgb values
    const { r, g, b } = makeRandomColor();
    const newColor = `rgb(${r}, ${g}, ${b})`;
    colorDiv.style.backgroundColor = newColor;
    colorH2.textContent = newColor;

    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Change text color based on brightness
    if (brightness > 200) {
        colorH2.style.color = "black";
    } else {
        colorH2.style.color = "white";
    }
});

// ----- Events and 'this'

// create 'container' to store the div
const container = document.querySelector("#buttons-div");

// function to make new random colors out of rgb values
function makeRandomColor() {
    // variable for storing the rgb values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b };
}

// add 50 buttons
for (let i = 1; i <= 50; i++) {
    // create button and assign classes to them
    const containerBtn = document.createElement("button");
    containerBtn.classList.add("cont-btn");
    containerBtn.innerText = `Button ${i}`;

    // assign random background color to the button, when clicked
    containerBtn.addEventListener("click", () => {
        // create 'newColor' with rgb values
        const { r, g, b } = makeRandomColor();
        const newColor = `rgb(${r}, ${g}, ${b})`;
        containerBtn.style.backgroundColor = newColor;

        // Calculate brightness
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Change text color based on brightness
        if (brightness > 200) {
            containerBtn.style.color = "black";
        } else {
            containerBtn.style.color = "white";
        }
    });

    // append the button to the container
    container.appendChild(containerBtn);
}

// ----- Keyboard events and event objects
const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    // alert("Keydown was pressed!");
    alert(e.key, e.code);
});

window.addEventListener("keydown", (e) => {
    // alert("Keydown was pressed!");
    console.log(e.code);
});

// ----- Form events and preventDefault

const form = document.querySelector("#shelter-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Submitted!");
    const inputVal = document.querySelector("#input-text");
    const liItem = document.createElement("li");
    liItem.innerText = inputVal.value;
    inputVal.value = "";

    dogs.appendChild(liItem);
});
