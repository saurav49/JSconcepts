// guess the output
// Q1 (Hoisting)
console.log("age", age1);

let age1 = 20;

console.log("age", age1);

// Q2 (Temporal dead zone)
age2 = 100;

console.log("age", age2); // 100

let age2 = 30;

// Q3
myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("Second");
}

myFun();
