//****************************Arrays*****************************

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//length
console.log(arr.length);

//Access
console.log(arr[0]);

//Search
console.log(arr.indexOf(3));

//***********************************Insertion****************************************
//Insert at the end
arr.push(10);
console.log(arr);
//Insert at the begin
arr.unshift(22);
console.log(arr);
//Insert in the middle
arr.splice(2, 0, "a", "b", "c");
console.log(arr);

//************************************Deletion******************************************
//Delete at the end
arr.pop(10);
console.log(arr);
//Delete at the begin
arr.shift(22);
console.log(arr);
//Delete in the middle
arr.splice(1, 3);
console.log(arr);

//********************************Empty Array**********************************************
let number = [100,80,70,60];
let number2 = number;

//First way
number.length = 0;
//Second way
number.splice(0, number.length);


console.log(number2);


// *************************Array Object**************************
let arrObject = [
  {
    name: "Saalim",
    course: "B.tech",
  },
  {
    name: "Arman",
    course: "B.tech",
  },
];
console.log(arrObject);

//**************************Searching****************************
// Primitives: indexof and includes
let arr1 = [10, 12, 14, 16];
console.log(arr1.indexOf(16));

if (arr1.includes(18)) console.log("present!!");
else console.log("not present!!");

// Objects: Callback function
// A JavaScript callback is a function which is to be executed after another function
// has finished execution. A more formal definition would be - Any function that is
// passed as an argument to another function so that it can be executed in that other
// function is called as a callback function.

let arrObject1 = [
  {
    name: "Saalim",
    course: "B.tech",
  },
  {
    name: "Arman",
    course: "B.tech",
  },
];
//                   predicate function or callback function
let course = arrObject1.find(function (course) {
  return course.name === "Saalim";
});
console.log(course);

//**************************Arrow function*************************************
let course1 = arrObject1.find((course) => course.name === "Arman");

console.log(course1);
