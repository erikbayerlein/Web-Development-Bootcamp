// Create a random number beetwen 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 += 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 += 1;
randomNumber2 = Math.floor(randomNumber2);

// Consts that contains the images and the texts
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const result = document.querySelector("h1");

// Changing the image of the dice
if (randomNumber1 == 1) {
    //image1.src = "images/dice1.png";
    image1.setAttribute('src', 'images/dice1.png');
} else if (randomNumber1 == 2) {
    //image1.src = "images/dice2.png";
    image1.setAttribute('src', 'images/dice2.png');
} else if (randomNumber1 == 3) {
    //image1.src = "images/dice3.png";
    image1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
    //image1.src = "images/dice4.png";
    image1.setAttribute('src', 'images/dice4.png');
} else if (randomNumber1 == 5) {
    //image1.src = "images/dice5.png";
    image1.setAttribute('src', 'images/dice5.png');
}

if (randomNumber2 == 1) {
    //image2.src = "images/dice1.png";
    image2.setAttribute('src', 'images/dice1.png');
} else if (randomNumber2 == 2) {
    //image2.src = "images/dice2.png";
    image2.setAttribute('src', 'images/dice2.png');
} else if (randomNumber2 == 3) {
    //image2.src = "images/dice3.png";
    image2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
    //image2.src = "images/dice4.png";
    image2.setAttribute('src', 'images/dice4.png');
} else if (randomNumber2 == 5) {
    //image2.src = "images/dice5.png";
    image2.setAttribute('src', 'images/dice5.png');
}

if (randomNumber1 > randomNumber2) {
    result.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    result.innerHTML = "Player 2 wins!";
} else {
    result.innerHTML = "Draw";
}