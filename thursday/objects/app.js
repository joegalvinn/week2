//how have we stored data so far?

let myName = "Joe";

let myArray = [10, "dog", "food"];

function sayHello() {
  console.log("Hello everyone!");
}

sayHello();

//declaring Objects
let staff = ["matt", "mike", "mark", "milo"];
let locations = ["norwich", "liverpool", "hull"];

let matt = {
  key: "value",
  location: "norwich",
};

let memberOfStaff = {
  staffname: "mark",
  staffLocation: "hull",
  staffRole: "TA",
};

console.log(memberOfStaff.staffRole);

console.log(staff[3]);

console.log(matt);

//objects WS

const person = {
  named: "bob",
  age: "10",
  favouriteColour: "red",
  occupaton: "plumber",
};

console.log(person);
console.table(person);

console.log(person.occupaton);
console.log(person.age);

person.income = "£83p/h";
console.log(person.income);

const car = {
  make: "Mitsubishi",
  model: "3000gt",
  colour: "Dark Grey",
  enginesize: "3 litre",
};

console.log(
  "This is a",
  car.make,
  car.model,
  ", coloured",
  car.colour,
  "with a",
  car.enginesize,
  "engine."
);

//complex objects

const blogPost = {
  title: "where for at thou",
  author: {
    named: "stephen",
    age: 51,
    favouriteColour: "yellow",
    favouriteFood: "Ramen",
  },
  tags: ["shakespear", "art", "food Culture"],
  content: "This is my first blog page about myself",
};

console.log(blogPost.tags[2]);
console.log(blogPost.author.age);

//combine with a traditional loop

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}.":`
);

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

//an object

let city = {
  //properties
  cityName: "Norwich",
  cityPopulation: 205097,
  cityColours: ["green", "yellow"],
  cityTechCompany: {
    CompanyName: "Tech Educators",
    staff: ["manny", "joe", "Tim", "frankie"],
    locations: ["norwich", "hull", "leicester", "ipswich"],
  },
  greetVisitor: function () {
    console.log("Hello, child!");
  },
};

//how do i access colour green
console.log(city.cityColours[0]);

//how do i access location leicester
console.log(city.cityTechCompany.locations[2]);

//how do i access the method in the object
console.log(city.greetVisitor());

//object methods workshop
const man = {
  name: "Jacob",
  age: 30,
  favColour: "pineRed",
  getAge: function () {
    return man.age;
  },
  sayHi: function (name) {
    console.log("hello " + name + "!");
  },
};

const age = man.getAge();

console.log(age);

man.sayHi("brad");

const book = {
  name: "big bears bouncing.",
  author: "Francis Janglo",
  numberOfPages: 80,
  advertDetails: function () {
    console.log(
      `The book you are viewing is called ${book.name} by ${book.author}. It is an very easy book with ${book.numberOfPages} pages.`
    );
  },
};

const advert = book.advertDetails();

console.log(advert);
