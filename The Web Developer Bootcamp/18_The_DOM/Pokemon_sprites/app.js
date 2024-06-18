// select the div with class container
const container = document.querySelector("#container");

// 'imgUrl' variable to hold the base URL for the img source
const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// loop 100 times and insert the png's into the container
for (let i = 1; i <= 100; i++) {
    // create 'div' and store it in a variable called 'pokemon'
    const pokemon = document.createElement("div");
    // add class
    pokemon.classList.add("pokemon");

    // create 'span' and store it in a variable called 'pokemonNumber'
    const pokemonNumber = document.createElement("span");
    // set the label text
    pokemonNumber.innerText = `#${i}`;

    // create 'img' element and store it in a variable called 'image'
    const image = document.createElement("img");
    // set the 'src'
    image.src = `${imgUrl}${i}.png`;

    // push the img into the div
    pokemon.appendChild(image);
    // push the label into the div
    pokemon.appendChild(pokemonNumber);
    // push the divs into the container
    container.appendChild(pokemon);
}
