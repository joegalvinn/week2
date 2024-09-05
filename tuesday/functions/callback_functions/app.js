console.log("hello");

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myFunction(notifyUsercallback) {
  console.log("running myFunction doing tasks");
  console.log("complex task complete. I will notify user");
  notifyUsercallback();
}

//run the function and pass the notifyuser function to it
myFunction(notifyUser);

function myFunction(onCompleteCallback) {
  console.log("running myFunction doing tasks");
  console.log("task complete. Notifying user");
  onCompleteCallback();
}

myFunction(function () {
  console.log("NotifyUser function was called!");
});

myFunction(() => {
  console.log("NotifyUser function was called!");
});

function myFunction1(onSuccesCallback, onFailureCallback) {
  console.log("Running myFunction doing tasks");
  console.log("Complex tas complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccesCallback({
      message: "Tis is the message of success baby!",
    });
  } else {
    onFailureCallback({
      message: "This is the message of failure",
    });
  }
}
myFunction1(
  (data) => {
    console.log("It was a successful: ", data.message);
  },
  () => {
    console.log("It failed ):");
  }
);

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);

  return operationCallback(a, b);
}

const result = myCalculatorFunction(385932, 64, divide);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(10, 84, minus);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9
