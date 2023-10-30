// Line below is used to print on the console window
console.log("Assalamu aliakum!!");

//****************************Variables & DataTypes*******************************
let a = 5;
var b = 10;
const c = 100;


// let can't be used outside the scope whereas var is globle variable
if (true) {
  var hello = "hello";
  let world = "world"; // can't access outside the scope
  const newWorld = "new World";

}
console.log(hello);
// console.log(world);
// console.log(newWorld); 


// Re-delacration is not possible in let keyword
// let a = 6;
// const c = 10;
var b = 20;

// Both can be updated
a = 10;
b = 18;
// c = 5; can't updated
console.log(c);

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.



//*********************************Primitive Types**********************************
// String --> "Hello"
// Number --> 1,2 or 1.5 etc
// Boolean --> true or false
// Undefined --> let a;
// Null --> let a = null;

//******************************Dynamic Typing**************************************
let num = 54;
console.log(num);

num = "Babbar";
console.log(num);

//*******************************Reference Type************************************
// Object
// Arrays
// Functions


//*****************************Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);
//Access the element
console.log(person.firstName);
console.log(person['lastName']);
//Add
person.height = 6.75;
console.log(person);


//*****************************Array
let arr = [1,2,3,4,5,6];
console.log(arr);
//Access the element
console.log(arr[2]);
//Update
arr[0] = 'Saalim';
console.log(arr);
//Add
arr.push(100);
console.log(arr);
//Delete
arr.pop();
console.log(arr);

const name = "saalim";
console.log(name);

