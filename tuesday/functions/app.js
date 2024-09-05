console.log("I am here, are you?");

// declaring functions
// function functionName(parameter - optional){
//action to performance
//};

//a function to write hello in the console

function sayHello() {
  console.log("hello there!");
}

//we need to call or invoke our function
sayHello();

//i want to sey hello to a user
function sayHelloToUser(username) {
  console.log(`hello ${username}.`);
}

//we are going to call the function and give an argument ) a value) to the parameter (variable)
sayHelloToUser("Joe");

//i want to have a function to say a greatting to different users

function greetUser(greeting, user) {
  console.log(`${greeting}, ${user}!`);
}

//arguments must be in same order of parameters
greetUser("Good morning", "francis");

//i want to hae a function that adds numbers
//the code we write inside the function is only availabe for that particular funtction
//if we want an element in the function to be availavle outside the function we 'return' it

function addNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addNumbers(4, 6));
