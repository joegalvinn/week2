console.log("hello world!");

const body = document.querySelector("body");
console.log(body);

const h2 = document.querySelector("h2");
console.log(h2);

h2.textContent = "hello world!";

const image = document.querySelector("img");

image.src = "https://wallpaperaccess.com/full/358440.jpg";

const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);

const foods = ["cheese", " pasta", " pancakes"];
document.getElementById("food").innerHTML = foods;

//h2.remove();

let age = 11;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if ((age === 17, age === 16)) {
  console.log(
    "you can watch U, PG, 12 and 15 movies. You can nearly watch 18 movies."
  );
} else if ((age === 15, age === 14, age === 13, age === 12)) {
  console.log("you can watch U, PG and 12 movies.");
} else if (age < 12) {
  console.log("you can only watch U, and PG movies.");
}
