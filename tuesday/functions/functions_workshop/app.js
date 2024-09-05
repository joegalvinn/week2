console.log("hello");

function sayHello() {
  console.log("Hello world!");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("you");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Ahoy", "sailor");

//add
function add(a, b) {
  return a + b;
}

const aresult = add(1, 5);
console.log("The result is", aresult);

//multiply
function multiply(a, b) {
  return a * b;
}

const mresult = multiply(4, 5);
console.log("the result is", mresult);

//subtract
function subtract(a, b) {
  return a - b;
}

const sresult = subtract(4, 5);
console.log("the result is", sresult);

//divide
function divide(a, b) {
  return a / b;
}

const dresult = divide(7, 12);
console.log("the result is", dresult);

let result;
let a = 15;
let b = 72;
let operator = "+";

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    console.log("wrong operator.");
  }
}

const equals = calculate(15, 72, "*");
console.log("the result is", equals);
//or
console.log(calculate(32, 87, "-"));
