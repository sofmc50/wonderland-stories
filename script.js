// Store the image paths in variables, like the lecture's fileSrc example.
let rabbit = "images/rabbit.png";
let queen = "images/queen.jpg";

// Find the HTML elements that the functions will change.
let firstImage = document.getElementById("first-image");
let lastImage = document.getElementById("last-image");
let firstCaption = document.getElementById("first-caption");
let lastCaption = document.getElementById("last-caption");
let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");
let intoButton = document.getElementById("into-button");
let outButton = document.getElementById("out-button");

// Rabbit -> tea party -> queen: curiosity leads to danger.
function showIntoWonderland() {
    firstImage.src = rabbit;
    firstImage.alt = "John Tenniel illustration of the White Rabbit checking his pocket watch.";
    lastImage.src = queen;
    lastImage.alt = "John Tenniel illustration of the King and Queen of Hearts at court.";
    firstCaption.innerHTML = "The White Rabbit";
    lastCaption.innerHTML = "The Queen of Hearts";
    storyTitle.innerHTML = "Into Wonderland";
    storyDescription.innerHTML = "Alice follows the White Rabbit, gets caught up in a strange tea party, and finally faces the Queen. Curiosity leads her into danger.";
    intoButton.disabled = true;
    outButton.disabled = false;
}

// Queen -> tea party -> rabbit: an imagined escape from danger.
// The middle image stays the same in both sequences.
function showWayOut() {
    firstImage.src = queen;
    firstImage.alt = "John Tenniel illustration of the King and Queen of Hearts at court.";
    lastImage.src = rabbit;
    lastImage.alt = "John Tenniel illustration of the White Rabbit checking his pocket watch.";
    firstCaption.innerHTML = "The Queen of Hearts";
    lastCaption.innerHTML = "The White Rabbit";
    storyTitle.innerHTML = "A way out";
    storyDescription.innerHTML = "Imagine Alice escaping the Queen, pausing for tea, and finding the White Rabbit as her guide away. The same images now suggest relief and a way out.";
    intoButton.disabled = false;
    outButton.disabled = true;
}

// Clicking a button calls its named function.
intoButton.addEventListener("click", showIntoWonderland);
outButton.addEventListener("click", showWayOut);

// Start with the first sequence selected.
showIntoWonderland();
