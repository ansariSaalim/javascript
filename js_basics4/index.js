//*********************************Function********************************
//Hoisting is a JavaScript mechanism where variables and function declarations are moved 
//to the top of their scope before code execution
run();

//function declaration
function run(){
    console.log("running");
}
//Calling
run();


//hoisting not work for function assignment
// stand();

//function assignment 
// two types 
//1. named function assignment
let stand = function walk(){
    console.log("walking");
}
//Calling 
stand();
// walk();
//2. Anonymous function assignment
let stand2 = function(){
    console.log("walking");
}
//Calling
stand2();

//Rest Operator
function sum(...args){
    let total = 0;
    for(let i of arguments){
        total += i;
    }
    console.log(total);
}
sum(1,2,3,4,5,6,7,8);

//Default parameters
function interest(p,r=4,n=6){
    return p*r*n/100;
}
console.log(interest(1000));
console.log(interest(1000,5,10));
console.log(interest(1000,undefined,10)); //bad practice

//Getters & Setters
let person = {
    fName:'Saalim',
    lName: 'Ansari',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
//Get
console.log(person.fullName);
//Set
person.fullName = 'Rohit Sharma';
console.log(person.fullName);
