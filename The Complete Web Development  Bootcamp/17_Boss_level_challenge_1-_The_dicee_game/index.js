let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomDiceImg1 = `${randomNumber1}.png`;
let randomImgSrc1 = `images/${randomDiceImg1}`;
let p1 = document.querySelector(".img1").setAttribute("src", randomImgSrc1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImg2 = `${randomNumber2}.png`;
let randomImgSrc2 = `images/${randomDiceImg2}`;
let p2 = document.querySelector(".img2").setAttribute("src", randomImgSrc2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🏳️ Draw 🏳️";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
