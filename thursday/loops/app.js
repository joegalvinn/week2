console.log("hello");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let j = 0;
while (keepLooping === true) {
  console.log("iteration", j);
  //set keepLooping to false with 10% chance: math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  j++;
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

const foody = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foody) {
  console.log(food);
}

const foodz = ["pizza", "chocolate", "ice cream", "cheese"];
foodz.forEach(function (food, index) {
  console.log(index, food);
});

const vices = [
  "drugs",
  "alcohol",
  "smoking",
  "food",
  "gardening",
  "falling asleep in the car after saying you'll drive in 10 minutes",
];
for (let vice of vices) {
  console.log(vice);
}

const vicez = [
  "drugs",
  "alcohol",
  "smoking",
  "food",
  "gardening",
  "falling asleep in the car after saying you'll drive in 10 minutes",
];
vicez.forEach(function (vice) {
  console.log(vice);
});
