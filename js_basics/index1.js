//*****************************Arithmetic Operators************************************
// +, -, *, /,
// % --> Remainder Operator
// ** --> x**y = x^y

//*****************************Inc/Dec Operator*********************************
let a = 6;
console.log(a);

//Pre increment --> First increment the value then use the value
console.log(++a);
//Post increment --> First use the value then increment the value
console.log(a++);
console.log(a);
//Pre decrement --> First decrement the value then use the value
console.log(--a);
//Post deccrement --> First use the value then decrement the value
console.log(a--);
console.log(a);

//*****************************Assignment Operator**********************************
// +=, -=, *=, /=

//*****************************Camparison Operator***************************
// >, <, >=, <=, ===, !==
// Losse equality --> ==
// Strict equality --> ===

//******************************Ternary Operator***************************
let age = 14;
let status = age >= 18 ? "You can vote" : "You can't vote";
console.log(status);

//*****************************Logical Operator*************************
// &&, ||, !

//Non-Booleans Comaprison
//Using Or
console.log(false || 2);
console.log(false || 6 || 1);
//Using And
console.log(true && "salim");
// console.log(false || 6 || 1);
// console.log(false || 6 || 1);

//*********************************Bitwise Operator**************************************
// &, |, ^, ~, <<, >>, >>>
console.log(2 & 3);
console.log(2 | 3);
console.log(2 ^ 3);
console.log(14 >> 2); //Shifted towards right
console.log(14 << 2); //Shifted towards left

//************************************Conditional Statement***************************************
//If-else
let marks = 98;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("E");
}

let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Back to work!!");
    break;
  case "Tuesday":
    console.log("Working!!");
    break;
  case "Wednesday":
    console.log("Working!!");
    break;
  case "Thursday":
    console.log("Working!!");
    break;
  case "Friday":
    console.log("Jummah!!");
    break;
  default:
    console.log("It's Weekend!!");
    break;
}

//**************************************Loop statement*******************************************
//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//while loop
let i = 0;
while (i < 5) {
  console.log("Saalim", i);
  i++;
}
//do while loop
let x = 2;
do {
  console.log(x);
  x += 2;
} while (x <= 10);
